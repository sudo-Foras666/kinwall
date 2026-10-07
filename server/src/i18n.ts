// The text the server writes for people, in their language: the same model as the web app
// (web/src/i18n.ts). English text is the key: `tr(lang, 'Not enough points')` gives that language's
// entry from its dictionary (src/locales/<lang>.ts), and the English when there's none, so nothing
// ever shows a blank or a key. Placeholders are {name}: tr(lang, 'Hi {name}', { name }).
//
// Who decides:
// - A request (API answers: error messages, badges, insights, the battery): its Accept-Language
//   header (requestLang). The web app sends the language it shows; anything else gets English.
// - Text sent without a request (push notifications, the in-app feed, Live Activities): the
//   language of the person it's for (members.language). A push goes to a device: its owner's
//   language, else the family's (loadLangs). A feed row about members: theirs when they agree,
//   else the family's. The family's is the one every member who picked a language picked, else English.
//
// Never translated: what the family typed, MCP tool descriptions, OpenAPI docs, logs, webhook
// payloads and the export file.
import type { KinwallDb } from './db.ts';
import de, { messages as deMessages } from './locales/de.ts';

export type Lang = 'en' | 'de';
export const LANGS: readonly Lang[] = ['en', 'de'];
const DICTIONARIES: Record<Lang, Record<string, string> | null> = { en: null, de };
/** The error messages alone (locales/<lang>/errors.ts), for trMessage. */
const MESSAGES: Record<Lang, Record<string, string> | null> = { en: null, de: deMessages };
/** For Intl formatters (weekday and month names). */
const INTL: Record<Lang, string> = { en: 'en-US', de: 'de-DE' };

export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);
/** A stored language, or null for anything this build doesn't know. */
export const langOf = (v: unknown): Lang | null => (isLang(v) ? v : null);

/** The language a request asks for in its Accept-Language header: the first one (by q) that Kinwall
 * comes in, else English. */
export function requestLang(c: { req: { header(name: string): string | undefined } }): Lang {
  const header = c.req.header('Accept-Language');
  if (!header) return 'en';
  const ranked = header.split(',').map((part, i) => {
    const [tag, ...params] = part.trim().split(';');
    const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    return { base: tag.trim().toLowerCase().split('-')[0], q: q ? Number(q.slice(2)) || 0 : 1, i };
  }).filter((l) => l.q > 0).sort((a, b) => b.q - a.q || a.i - b.i);
  return ranked.map((l) => l.base).find(isLang) ?? 'en';
}

const fill = (text: string, vars?: Record<string, string | number>) =>
  vars ? text.replace(/\{(\w+)\}/g, (all, k: string) => (k in vars ? String(vars[k]) : all)) : text;

/** `text` (English) in `lang`, with its {placeholders} filled in. */
export function tr(lang: Lang, text: string, vars?: Record<string, string | number>): string {
  const dict = DICTIONARIES[lang];
  return fill(dict && Object.hasOwn(dict, text) ? dict[text] : text, vars);
}

/** One or many: `one` for 1, else `other`, with {n} (and any other vars) filled in. */
export function trn(lang: Lang, n: number, one: string, other: string, vars?: Record<string, string | number>): string {
  return tr(lang, n === 1 ? one : other, { n, ...vars });
}

/** A list the way the language says it: "a, b and c" / "a, b und c". */
export function joinAnd(lang: Lang, parts: string[]): string {
  return parts.length > 1 ? `${parts.slice(0, -1).join(', ')} ${tr(lang, 'and')} ${parts.at(-1)}` : parts[0] ?? '';
}

/** A person's name for "{name}'s …": English adds 's in the text itself; German writes "Leos", "Max’". */
export const owner = (lang: Lang, name: string) => (lang === 'de' ? (/[sßxz]$/i.test(name) ? `${name}’` : `${name}s`) : name);

/** A day's weekday name ("Tuesday" / "Dienstag"), for a YYYY-MM-DD. */
export function weekdayName(lang: Lang, date: string): string {
  return new Intl.DateTimeFormat(INTL[lang], { weekday: 'long', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}

// Messages with values in them ("Only {name} can change this…") are matched against the English
// templates, so a route can keep writing c.json({ error: `Only ${name} can …` }) and still be
// answered in German (app.ts translates every { error } on the way out).
type Template = { re: RegExp; names: string[]; text: string };
const templates = new Map<Lang, Template[]>();
function templatesFor(lang: Lang): Template[] {
  let list = templates.get(lang);
  if (list) return list;
  list = Object.entries(MESSAGES[lang] ?? {}).filter(([k]) => /\{\w+\}/.test(k)).map(([k, text]) => {
    const names: string[] = [];
    const source = k.split(/(\{\w+\})/).map((part) => {
      const name = /^\{(\w+)\}$/.exec(part)?.[1];
      if (!name) return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      names.push(name);
      return '(.+?)';
    }).join('');
    return { re: new RegExp(`^${source}$`, 's'), names, text };
  });
  templates.set(lang, list);
  return list;
}

/** An error message (English, as a route wrote it) in `lang`: its own entry, else the first template
 * it fits, else as it is. */
export function trMessage(lang: Lang, message: string): string {
  const dict = MESSAGES[lang];
  if (!dict) return message;
  if (Object.hasOwn(dict, message)) return dict[message];
  for (const t of templatesFor(lang)) {
    const m = t.re.exec(message);
    if (m) return fill(t.text, Object.fromEntries(t.names.map((n, i) => [n, m[i + 1]])));
  }
  return message;
}

/** Who reads what, for text sent without a request (notify.ts): each member's language, each device
 * key's (its owner's), and the family's. */
export type Langs = {
  family: Lang;
  member: (id: string | null | undefined) => Lang;
  /** Everyone in `ids` when they agree, else the family's; none: the family's. */
  members: (ids: (string | null | undefined)[] | null | undefined) => Lang;
  /** A device (push subscription or token) by its key: its owner's, else the family's. */
  device: (apiKeyId: string | null | undefined) => Lang;
};

export function langsFrom(rows: { id: string; language: string | null }[], keys: { id: string; owner: string | null }[]): Langs {
  const picked = new Map(rows.flatMap((m) => (isLang(m.language) ? [[m.id, m.language] as const] : [])));
  const chosen = new Set(picked.values());
  const family: Lang = chosen.size === 1 ? [...chosen][0] : 'en';
  const member = (id: string | null | undefined) => (id && picked.get(id)) || family;
  const members = (ids: (string | null | undefined)[] | null | undefined) => {
    const all = new Set((ids ?? []).filter(Boolean).map((id) => member(id)));
    return all.size === 1 ? [...all][0] : family;
  };
  const ownerOf = new Map(keys.map((k) => [k.id, k.owner]));
  const device = (apiKeyId: string | null | undefined) => {
    const o = apiKeyId ? ownerOf.get(apiKeyId) : null;
    return o && o !== 'shared' ? member(o) : family;
  };
  return { family, member, members, device };
}

export async function loadLangs(db: KinwallDb): Promise<Langs> {
  const [membersRes, keysRes] = await db.batch<unknown>([
    db.prepare('SELECT id, language FROM members'),
    db.prepare('SELECT id, owner FROM api_keys WHERE owner IS NOT NULL'),
  ]);
  return langsFrom(membersRes.results as { id: string; language: string | null }[], keysRes.results as { id: string; owner: string | null }[]);
}

/** Builds text once per language: `memo((lang) => ({ title, body }))(lang)`. */
export function perLang<T>(build: (lang: Lang) => T): (lang: Lang) => T {
  const made = new Map<Lang, T>();
  return (lang) => {
    if (!made.has(lang)) made.set(lang, build(lang));
    return made.get(lang)!;
  };
}
