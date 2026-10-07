// The server's text in the reader's language (i18n.ts): requests by Accept-Language, notifications by
// the member's language. English stays exactly as before (the rest of the suite checks it word for word).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from '../src/app.ts';
import { openDb, applyMigrations } from '../src/d1-sqlite.ts';
import type { Env } from '../src/env.ts';
import { joinAnd, langsFrom, owner, requestLang, tr, trMessage, trn } from '../src/i18n.ts';
import de, { messages } from '../src/locales/de.ts';
import { analyze, type InsightDay } from '../src/insights.ts';
import { battery } from '../src/battery.ts';
import { pickNudgeIn, medFollowupIn } from '../src/nudge-lang.ts';
import { pickNudge, medFollowup, type Nudge } from '../src/nudges.ts';
import { runNotifications } from '../src/notify.ts';

const MIGRATIONS_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'migrations');
const ADMIN_KEY = 'fc_test_admin_key';

function setup() {
  const db = openDb(':memory:');
  applyMigrations(db, MIGRATIONS_DIR);
  const env: Env = { DB: db as unknown as D1Database, ADMIN_API_KEY: ADMIN_KEY, PUBLIC_URL: 'http://localhost:8080', ENCRYPTION_KEY: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=' };
  const app = createApp();
  const request = async (p: string, init: RequestInit & { lang?: string } = {}) => {
    const headers = new Headers(init.headers);
    headers.set('Authorization', `Bearer ${ADMIN_KEY}`);
    if (init.lang) headers.set('Accept-Language', init.lang);
    if (init.body) headers.set('Content-Type', 'application/json');
    const res = await app.request(p, { ...init, headers }, env);
    return { status: res.status, json: (await res.json()) as any };
  };
  return { env, request };
}

const req = (accept?: string) => ({ req: { header: (n: string) => (n === 'Accept-Language' ? accept : undefined) } });

test('requestLang: only de or en, by q, English when nothing fits', () => {
  assert.equal(requestLang(req(undefined)), 'en');
  assert.equal(requestLang(req('de')), 'de');
  assert.equal(requestLang(req('de-AT,de;q=0.9,en;q=0.8')), 'de');
  assert.equal(requestLang(req('fr-FR,fr;q=0.9')), 'en');
  assert.equal(requestLang(req('fr,de;q=0.5')), 'de');
  assert.equal(requestLang(req('en;q=0.4,de;q=0.8')), 'de');
  assert.equal(requestLang(req('de;q=0,en')), 'en');
});

test('tr: German when there is an entry, the English otherwise, placeholders filled', () => {
  assert.equal(tr('de', 'Not enough points'), 'Nicht genug Punkte');
  assert.equal(tr('en', 'Not enough points'), 'Not enough points');
  assert.equal(tr('de', 'No such text anywhere {x}', { x: 1 }), 'No such text anywhere 1');
  assert.equal(tr('de', 'toString'), 'toString', 'never a prototype property');
  assert.equal(trn('de', 1, '{n} chore', '{n} chores'), '1 Aufgabe');
  assert.equal(trn('de', 3, '{n} chore', '{n} chores'), '3 Aufgaben');
  assert.equal(joinAnd('en', ['a', 'b', 'c']), 'a, b and c');
  assert.equal(joinAnd('de', ['a', 'b']), 'a und b');
  assert.equal(owner('de', 'Leo'), 'Leos');
  assert.equal(owner('de', 'Max'), 'Max’');
});

test('trMessage: exact, then a template, else as it was', () => {
  assert.equal(trMessage('de', 'Only Maya can change this, from their own device.'), 'Nur Maya kann das ändern, auf dem eigenen Gerät.');
  assert.equal(trMessage('de', 'This device can only do that for its owner.'), 'Dieses Gerät kann das nur für die Person tun, der es gehört.');
  assert.equal(trMessage('de', 'not found'), 'not found');
  assert.equal(trMessage('en', 'Not enough points'), 'Not enough points');
  // Only error messages are templates: a nudge's "{t} at {at}" must never rewrite one.
  assert.equal(trMessage('de', 'Something odd at noon'), 'Something odd at noon');
});

test('every German entry has the same placeholders as its English key', () => {
  const names = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().filter((n, i, a) => a.indexOf(n) === i);
  for (const [en, text] of Object.entries(de)) {
    assert.deepEqual(names(text), names(en), `placeholders of "${en}"`);
    assert.ok(text.trim(), `"${en}" has German`);
  }
  for (const key of Object.keys(messages)) assert.ok(key in de);
});

test('an API error comes back in German with Accept-Language: de, unchanged in English', async () => {
  const { request } = setup();
  const leo = (await request('/api/members', { method: 'POST', body: JSON.stringify({ name: 'Leo', color: '#e57' }) })).json;
  const future = '2999-01-01';
  const body = JSON.stringify({ memberId: leo.id, points: 5, date: future });
  const en = await request('/api/points/awards', { method: 'POST', body });
  assert.equal(en.status, 400);
  assert.equal(en.json.error, 'Pick today or an earlier day');
  const deRes = await request('/api/points/awards', { method: 'POST', body, lang: 'de-DE,de;q=0.9' });
  assert.equal(deRes.status, 400);
  assert.equal(deRes.json.error, 'Wähle heute oder einen früheren Tag');
});

test('badges come back in German; insights and the battery speak German', async () => {
  const { request } = setup();
  const leo = (await request('/api/members', { method: 'POST', body: JSON.stringify({ name: 'Leo', color: '#e57' }) })).json;
  const en = await request(`/api/members/${leo.id}/stats`);
  const deStats = await request(`/api/members/${leo.id}/stats`, { lang: 'de' });
  assert.equal(en.json.badges.find((b: any) => b.id === 'first-chore').title, 'First chore');
  assert.equal(deStats.json.badges.find((b: any) => b.id === 'first-chore').title, 'Erste Aufgabe');

  const days: InsightDay[] = Array.from({ length: 10 }, (_, i) => ({
    date: `2030-03-${String(i + 1).padStart(2, '0')}`, checkedIn: i < 7, sleep: i % 2 ? 'great' : 'poorly', feelings: [], goalSet: false, goalOutcome: null,
    journalEntries: 1, journalMoods: [], chores: 1, points: 2, activityMinutes: 65, booksFinished: 0, events: 0, lastEventEnd: null,
  }));
  const summary = (lang: 'en' | 'de') => Object.fromEntries(analyze(days, false, lang).summary.map((s) => [s.id, s.text]));
  assert.equal(summary('en').checkins, 'Checked in on 7 of 10 days');
  assert.equal(summary('de').checkins, 'An 7 von 10 Tagen eingecheckt');
  assert.equal(summary('en').activity, 'Spent 10 h 50 min on activities');
  assert.equal(summary('de').activity, '10 Std. 50 Min. mit Aktivitäten verbracht');

  const heavy = { date: '2030-03-05', sleep: 'terrible' as const, feelings: ['tired'], goalSet: false, chores: 0, choreDone: 0, choreDue: 0, events: [{ title: 'Soccer', start: '09:00', end: '12:00' }, { title: 'Piano', start: '12:05', end: '15:00' }, { title: 'Party', start: '18:00', end: '21:30' }] };
  const w = battery([{ ...heavy, date: '2030-03-04' }, heavy, { ...heavy, date: '2030-03-06' }], '2030-03-04', undefined, 'de');
  assert.ok(w.days[0].reasons.some((r) => r.text === 'Schlaf: sehr schlecht'));
  assert.ok(w.warnings.some((x) => x.text.startsWith('Heute sieht voll aus: 3 Termine und ein später Abend.')));
  assert.ok(w.warnings.some((x) => x.text.startsWith('Mittwoch sieht voll aus')), 'weekday names in German');
});

test('nudges: the same pick, written in German; English untouched', () => {
  const n: Nudge = { kind: 'leave', title: 'Fußball', minutes: 10, at: '17:15', seed: 'm1:e1:2030-03-04', name: 'Maya' };
  assert.equal(pickNudgeIn('en', n).line, pickNudge(n).line);
  const line = pickNudgeIn('de', n).line;
  assert.match(line, /Fußball/);
  assert.match(line, /10 Min\.|17:15/);
  assert.doesNotMatch(line, /\bLeave\b|\bfor\b/);
  assert.equal(pickNudgeIn('de', n).seen?.combo, pickNudge(n).seen?.combo, 'same history as English');
  assert.equal(pickNudgeIn('de', { ...n, calm: true, minutes: 0 }).line, 'Jetzt losgehen für Fußball');
  assert.equal(medFollowupIn('en', 'Leo', '20:00', 's'), medFollowup('Leo', '20:00', 's'));
  assert.match(medFollowupIn('de', 'Leo', '20:00', 's'), /Leos Medikamente.*20:00/);
});

test('langsFrom: a device speaks its owner\'s language, else the family\'s', () => {
  const langs = langsFrom([{ id: 'maya', language: 'de' }, { id: 'leo', language: null }], [{ id: 'k1', owner: 'maya' }, { id: 'k2', owner: 'shared' }]);
  assert.equal(langs.family, 'de'); // everyone who picked one picked German
  assert.equal(langs.device('k1'), 'de');
  assert.equal(langs.device('k2'), 'de');
  assert.equal(langs.member('leo'), 'de');
  const mixed = langsFrom([{ id: 'maya', language: 'de' }, { id: 'sam', language: 'en' }], [{ id: 'k1', owner: 'maya' }]);
  assert.equal(mixed.family, 'en');
  assert.equal(mixed.device('k1'), 'de');
  assert.equal(mixed.device(null), 'en');
  assert.equal(mixed.members(['maya']), 'de');
  assert.equal(mixed.members(['maya', 'sam']), 'en');
  assert.equal(langsFrom([], []).family, 'en');
});

test('a reminder for a member whose language is German is written in German', async () => {
  const { env, request } = setup();
  const maya = (await request('/api/members', { method: 'POST', body: JSON.stringify({ name: 'Maya', color: '#57e', language: 'de' }) })).json;
  const sam = (await request('/api/members', { method: 'POST', body: JSON.stringify({ name: 'Sam', color: '#5e7', language: 'en' }) })).json;
  await request('/api/settings', { method: 'PATCH', body: JSON.stringify({ timezone: 'UTC' }) });
  const cal = (await request('/api/calendars', { method: 'POST', body: JSON.stringify({ kind: 'local', name: 'Home' }) })).json;
  const now = new Date();
  const start = new Date(now.getTime() + 30 * 60 * 1000);
  const event = (title: string, memberIds: string[]) => request('/api/events', { method: 'POST', body: JSON.stringify({ calendarId: cal.id, title, start: start.toISOString(), end: new Date(start.getTime() + 1800e3).toISOString(), allDay: false, memberIds, reminders: [30] }) });
  await event('Zahnarzt', [maya.id]);
  await event('Dentist', [sam.id]);
  await runNotifications(env, now);
  const rows = (await request('/api/notifications')).json.filter((n: any) => n.kind === 'reminder');
  const body = (title: string) => rows.find((n: any) => n.title === title).body.split('\n')[0];
  assert.match(body('Zahnarzt'), /^In 30 Minuten · /);
  assert.match(body('Dentist'), /^In 30 minutes · /);
});
