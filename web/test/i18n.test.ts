// node --test test/ (npm test). The display language: who decides it, and how text is looked up.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { format } from 'date-fns'
import { browserLang, intlLocale, lang, pickLang, setLang, t, tc, tn } from '../src/i18n.ts'
import de from '../src/locales/de.ts'

test('pickLang: the member first, then this device, then the browser, then English', () => {
  assert.equal(pickLang('de', 'en', ['en-US']), 'de')
  assert.equal(pickLang(null, 'de', ['en-US']), 'de')
  assert.equal(pickLang(undefined, undefined, ['de-AT', 'en']), 'de')
  assert.equal(pickLang(null, undefined, ['fr-FR', 'en-GB']), 'en')
  assert.equal(pickLang(null, undefined, ['fr-FR']), 'en')
  assert.equal(pickLang('xx', 'yy', []), 'en', 'unknown codes are ignored')
})

test('browserLang: the first supported language in the list', () => {
  assert.equal(browserLang(['fr', 'de-CH', 'en']), 'de')
  assert.equal(browserLang([]), null)
})

test('t: English is the key; German comes from the dictionary; missing falls back', () => {
  setLang('en')
  assert.equal(t('Settings'), 'Settings')
  assert.equal(t('Hello {name}', { name: 'Maya' }), 'Hello Maya')
  setLang('de')
  assert.equal(lang(), 'de')
  assert.equal(t('Settings'), 'Einstellungen')
  assert.equal(t('Not translated yet {n}', { n: 3 }), 'Not translated yet 3', 'falls back to English')
  setLang('en')
})

test('tn: one or many, with {n}', () => {
  setLang('en')
  assert.equal(tn(1, '{n} day', '{n} days'), '1 day')
  assert.equal(tn(4, '{n} day', '{n} days'), '4 days')
  setLang('de')
  assert.equal(tn(1, '{n} day', '{n} days'), '1 Tag')
  assert.equal(tn(4, '{n} day', '{n} days'), '4 Tage')
  setLang('en')
})

test('setLang: date-fns and Intl follow the language', () => {
  setLang('de')
  assert.equal(format(new Date(2026, 9, 7), 'EEEE, d. MMMM'), 'Mittwoch, 7. Oktober')
  assert.equal(intlLocale(), 'de')
  setLang('en')
  assert.equal(format(new Date(2026, 9, 7), 'EEEE, MMMM d'), 'Wednesday, October 7')
})

test('de: every placeholder in a translation is in its English key, and no entry is empty', () => {
  const vars = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort()
  for (const [en, text] of Object.entries(de)) {
    assert.ok(text.trim(), `empty translation for "${en}"`)
    assert.deepEqual(vars(text), vars(en), `placeholders differ for "${en}"`)
  }
})

test("de: every literal t('…') and tn() text in the app has a German entry", async () => {
  const fs = await import('node:fs')
  const path = await import('node:path')
  const dir = path.join(import.meta.dirname, '..', 'src')
  const missing = new Set<string>()
  const unquote = (s: string) => s.replace(/\\(['"])/g, '$1')
  for (const f of fs.readdirSync(dir)) {
    if (!/\.tsx?$/.test(f) || f === 'i18n.ts') continue
    const s = fs.readFileSync(path.join(dir, f), 'utf8')
    for (const m of s.matchAll(/\bt\(\s*(['"])((?:\\.|(?!\1).)*)\1/g)) if (!(unquote(m[2]) in de)) missing.add(unquote(m[2]))
    for (const m of s.matchAll(/\btn\([^,]+,\s*(['"])((?:\\.|(?!\1).)*)\1,\s*(['"])((?:\\.|(?!\3).)*)\3/g)) for (const x of [m[2], m[4]]) if (!(unquote(x) in de)) missing.add(unquote(x))
  }
  assert.deepEqual([...missing], [], 'add these to src/locales/de/')
})

test('tc: a word with its own meaning in one place, English unchanged', () => {
  setLang('en')
  assert.equal(tc('now-next', 'Next'), 'Next')
  setLang('de')
  assert.equal(tc('now-next', 'Next'), 'Danach')
  assert.equal(tc('nowhere', 'Settings'), 'Einstellungen', 'falls back to the plain entry')
  setLang('en')
})

test('de: the area files never give the same English text two different translations', async () => {
  const fs = await import('node:fs')
  const path = await import('node:path')
  const dir = path.join(import.meta.dirname, '..', 'src', 'locales', 'de')
  const seen = new Map<string, [string, string]>()
  const clashes: string[] = []
  for (const f of fs.readdirSync(dir)) {
    const dict = (await import(path.join(dir, f))).default as Record<string, string>
    for (const [en, de] of Object.entries(dict)) {
      const before = seen.get(en)
      if (before && before[1] !== de) clashes.push(`"${en}": ${before[0]} „${before[1]}“ vs ${f} „${de}“ (use tc() for a different meaning)`)
      else seen.set(en, [f, de])
    }
  }
  assert.deepEqual(clashes, [])
})
