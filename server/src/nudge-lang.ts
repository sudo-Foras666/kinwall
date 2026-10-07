// Nudges (nudges.ts) in a person's language. nudges.ts stays word for word the web app's copy
// (a test checks), so the choosing happens there, in English: the same seed and history pick the same
// opener, core, hint and emoji in every language. This writes that pick in `lang` from its parts
// (the English parts are the keys in locales/<lang>/nudges.ts), and shortens it the same way when
// it's too long for a lock screen. English comes back exactly as nudges.ts made it.
import { CORES, GENERAL_HINTS, HINT_SETS, MED_FOLLOWUPS, OPENERS, medFollowup, pickNudge, type Nudge, type NudgeKind, type NudgeSeen, type NudgeStage } from './nudges.ts';
import { owner, tr, type Lang } from './i18n.ts';

const MAX = 60; // nudges.ts MAX

function hintText(key: string, step: string | null | undefined): string {
  if (key === '-') return '';
  if (key === 'step') return step ?? ''; // the recipe's own words
  const [set, i] = key.split('.');
  const hints = (GENERAL_HINTS as Record<string, string[]>)[set] ?? HINT_SETS.find((s) => s.key === set)?.hints;
  return hints?.[Number(i)] ?? '';
}

function calm(lang: Lang, n: Nudge): string {
  const v = { t: n.title, at: n.at, m: tr(lang, '{n} min', { n: n.minutes }) };
  const when = n.minutes <= 0 ? 'now' : n.live ? 'at' : 'in';
  const key = {
    leave: { now: 'Leave for {t} now', at: 'Leave for {t} at {at}', in: 'Leave for {t} in {m}' },
    prep: { now: 'Start prep for {t} now', at: 'Start prep for {t} at {at}', in: 'Start prep for {t} in {m}' },
    start: { now: '{t} starts now', at: '{t} at {at}', in: '{t} in {m}' },
  }[n.kind][when];
  return tr(lang, key, v);
}

/** pickNudge, its line in `lang`. */
export function pickNudgeIn(lang: Lang, n: Nudge, seen: NudgeSeen[] = []): ReturnType<typeof pickNudge> {
  const picked = pickNudge(n, seen);
  if (lang === 'en') return picked;
  if (!picked.seen) return { ...picked, line: calm(lang, n) };
  const [kind, stage, core, ...hint] = picked.seen.combo.split('.') as [NudgeKind, NudgeStage, string, ...string[]];
  const emoji = picked.line.slice(picked.line.lastIndexOf(' ') + 1);
  const v: Record<string, string> = { t: n.title, m: tr(lang, '{n} min', { n: n.minutes }), at: n.at, n: n.name ?? '' };
  const coreText = tr(lang, CORES[kind][stage][Number(core)], v);
  const opener = picked.seen.opener ? tr(lang, OPENERS[picked.seen.opener].text, v) : '';
  const render = (o: string, h: string) => `${o ? `${o} ${coreText}` : coreText}${h ? `${/[!?.]$/.test(coreText) ? ' ' : '. '}${h}` : ''} ${emoji}`;
  let h = hint.length ? tr(lang, hintText(hint.join('.'), n.step)) : '', o = opener;
  if ([...render(o, h)].length > MAX) h = '';
  if ([...render(o, h)].length > MAX) o = '';
  return { ...picked, line: render(o, h) };
}

export const nudgeIn = (lang: Lang, n: Nudge, seen: NudgeSeen[] = []) => pickNudgeIn(lang, n, seen).line;

/** medFollowup in `lang`: the same one of MED_FOLLOWUPS, for the same dose. */
export function medFollowupIn(lang: Lang, name: string, at: string, seed: string): string {
  const english = medFollowup(name, at, seed);
  if (lang === 'en') return english;
  const text = MED_FOLLOWUPS.find((t) => t.replace('{n}', name).replace('{at}', at) === english) ?? MED_FOLLOWUPS[0];
  return tr(lang, text, { n: owner(lang, name), at });
}
