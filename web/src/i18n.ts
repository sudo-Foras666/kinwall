// The app's display language. English text is the key: `t('Settings')` shows the current
// language's entry from its dictionary (src/locales/<lang>.ts), and English when there's none yet,
// so a screen never shows a blank or a key. Placeholders are {name}: t('Hi {name}', { name }).
//
// Who decides: the person whose device this is (their profile's language, saved on the server, so
// it follows them to every device of theirs), else this device's own pick (Settings → Only on this
// device, for wall screens and shared devices), else the browser's language, else English.
//
// No packages here: the server's tests import web helpers that use t(), and the server doesn't
// install the web's dependencies. date-fns follows the language through onLang (dateLocale.ts).
import de from './locales/de.ts'

export type Lang = 'en' | 'de'
/** The choices, each in its own language (what someone looks for when they can't read the rest). */
export const LANGUAGES: { key: Lang; label: string }[] = [
  { key: 'en', label: 'English' },
  { key: 'de', label: 'Deutsch' },
]
const DICTIONARIES: Record<Lang, Record<string, string> | null> = { en: null, de }

const isLang = (v: unknown): v is Lang => LANGUAGES.some(l => l.key === v)

let current: Lang = 'en'

/** The first language in the browser's list that the app comes in, or null. */
export function browserLang(languages: readonly string[] = typeof navigator === 'undefined' ? [] : navigator.languages ?? [navigator.language]): Lang | null {
  for (const l of languages) {
    const base = l.toLowerCase().split('-')[0]
    if (isLang(base)) return base
  }
  return null
}

/** The language to show: the member's, this device's, the browser's, English. */
export function pickLang(member: string | null | undefined, device: string | null | undefined, languages?: readonly string[]): Lang {
  if (isLang(member)) return member
  if (isLang(device)) return device
  return browserLang(languages) ?? 'en'
}

export const lang = (): Lang => current

/** Switches the language for everything rendered from now on: text, onLang listeners and the page's lang. */
export function setLang(next: Lang) {
  current = next
  for (const fn of listeners) fn(next)
  if (typeof document !== 'undefined') document.documentElement.lang = next
}

const listeners = new Set<(l: Lang) => void>()
/** Runs `fn` now and on every setLang (dateLocale.ts keeps date-fns in step). */
export function onLang(fn: (l: Lang) => void) {
  listeners.add(fn)
  fn(current)
}

// The last language shown, for the first paint before the family's members load (main.tsx).
const LAST_LANG_KEY = 'kinwall.lastLang'
export function rememberLang(l: Lang) {
  try { if (localStorage.getItem(LAST_LANG_KEY) !== l) localStorage.setItem(LAST_LANG_KEY, l) } catch { /* storage blocked */ }
}
/** Before anything has loaded: the last language shown here, else this device's pick, else the browser's. */
export function startLang(): Lang {
  try {
    const last = localStorage.getItem(LAST_LANG_KEY)
    if (isLang(last)) return last
    return pickLang(null, JSON.parse(localStorage.getItem('kinwall.deviceAppearance') || '{}')?.language) // useTheme.ts DEVICE_KEY
  } catch { return pickLang(null, null) }
}

/** For Intl formatters: the browser's own locale when it's in this language (so en-GB and de-AT
 * keep their regional formats), else the language itself. */
export function intlLocale(): string {
  const own = typeof navigator === 'undefined' ? undefined : navigator.language
  return own && own.toLowerCase().split('-')[0] === current ? own : current
}

const fill = (text: string, vars?: Record<string, string | number>) =>
  vars ? text.replace(/\{(\w+)\}/g, (all, k: string) => (k in vars ? String(vars[k]) : all)) : text

/** `text` (English) in the current language, with its {placeholders} filled in. */
export function t(text: string, vars?: Record<string, string | number>): string {
  return fill(DICTIONARIES[current]?.[text] ?? text, vars)
}

/** Like t(), for a word that reads differently in another place: the dictionary key is
 * "context|text" (e.g. tc('now-next', 'Next') → 'now-next|Next': 'Danach', where a button's
 * 'Next' is 'Weiter'). English shows `text`. */
export function tc(context: string, text: string, vars?: Record<string, string | number>): string {
  return fill(DICTIONARIES[current]?.[`${context}|${text}`] ?? DICTIONARIES[current]?.[text] ?? text, vars)
}

/** One or many: `one` for 1, else `other`, with {n} (and any other vars) filled in. */
export function tn(n: number, one: string, other: string, vars?: Record<string, string | number>): string {
  return t(n === 1 ? one : other, { n: n.toLocaleString(intlLocale()), ...vars })
}
