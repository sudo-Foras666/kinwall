// The chore library's logic (Chores → Library): which saved chores are "due-ish" by their soft
// "about every" interval, the status line under each, and the quick When picks.
import { addDays, differenceInCalendarDays, format } from 'date-fns'
import { dateKey } from './date.ts'
import { t } from './i18n.ts'
import type { LibraryChore, LibraryUnit } from './types.ts'

const UNIT_DAYS: Record<LibraryUnit, number> = { day: 1, week: 7, month: 30 }
/** Close enough to count: 90% of the interval (a 2-month job 57 days on). */
const DUE_ISH = 0.9

const parse = (key: string) => { const [y, m, d] = key.split('-').map(Number); return new Date(y, m - 1, d) }
const daysBetween = (from: string, to: string) => differenceInCalendarDays(parse(to), parse(from))

// Whole phrases per unit, so each language can say "every week" its own way.
const EVERY_ONE: Record<string, string> = { day: 'every day', week: 'every week', month: 'every month', year: 'every year' }
const EVERY_MANY: Record<string, string> = { day: 'every {n} days', week: 'every {n} weeks', month: 'every {n} months', year: 'every {n} years' }
const everyText = (n: number, unit: string) => n === 1 ? t(EVERY_ONE[unit]) : t(EVERY_MANY[unit], { n })

export function intervalText(n: number | null, unit: LibraryUnit | null): string | null {
  if (!n || !unit) return null
  return everyText(n, unit)
}

/** The repeat rule "Make it repeat" starts from: the item's interval, else weekly. */
export function intervalRrule(n: number | null, unit: LibraryUnit | null): string {
  const freq = unit === 'day' ? 'DAILY' : unit === 'month' ? 'MONTHLY' : 'WEEKLY'
  return `FREQ=${freq}${n && n > 1 ? `;INTERVAL=${n}` : ''}`
}

/** A repeat rule the chore editor can't show as daily/weekly, in words where it can ("every 4 weeks"). */
export function repeatText(rrule: string | null): string {
  if (!rrule) return ''
  const parts = Object.fromEntries(rrule.replace(/^RRULE:/i, '').split(';').map(p => p.split('=').map(x => x.trim().toUpperCase())))
  const unit = ({ DAILY: 'day', WEEKLY: 'week', MONTHLY: 'month', YEARLY: 'year' } as Record<string, string>)[parts.FREQ]
  const n = Number(parts.INTERVAL ?? 1)
  if (!unit || !(n >= 1) || Object.keys(parts).some(k => k !== 'FREQ' && k !== 'INTERVAL')) return rrule
  return everyText(n, unit)
}

export function agoText(date: string, today: string): string {
  const d = daysBetween(date, today)
  if (d <= 0) return t('today')
  if (d === 1) return t('yesterday')
  if (d < 14) return t('{n} days ago', { n: d })
  if (d < 60) return t('{n} weeks ago', { n: Math.floor(d / 7) })
  if (d < 365) { const m = Math.floor(d / 30.4); return m === 1 ? t('a month ago') : t('{n} months ago', { n: m }) }
  return t('over a year ago')
}

function dayText(date: string, today: string): string {
  const d = daysBetween(today, date)
  if (d === 0) return t('today')
  if (d === 1) return t('tomorrow')
  if (d > 1 && d < 7) return format(parse(date), 'EEE')
  return format(parse(date), t('MMM d'))
}

/** The line under a library chore: what's still to do, else when it was last done and how often it usually is. */
export function libraryStatus(item: LibraryChore, today: string, nameOf: (memberId: string | null) => string): string {
  if (item.open) {
    const name = nameOf(item.open.memberId)
    if (item.open.repeats) return t('Repeats for {name}', { name })
    return item.open.dueDate ? t('To do: {name}, {day}', { name, day: dayText(item.open.dueDate, today) }) : t('To do: {name}', { name })
  }
  const every = intervalText(item.everyN, item.everyUnit)
  const last = item.lastDone ? t('Last done {ago}', { ago: agoText(item.lastDone.date, today) }) : t('Not done yet')
  return every ? t('{last} · usually {every}', { last, every }) : last
}

/** How far into its interval a chore is (1 = right on time), or null when it doesn't nudge: no
 * interval, never done (nothing to measure from), or already handed out. */
function dueRatio(item: LibraryChore, today: string): number | null {
  if (!item.everyN || !item.everyUnit || !item.lastDone || item.open) return null
  return daysBetween(item.lastDone.date, today) / (item.everyN * UNIT_DAYS[item.everyUnit])
}

/** Due-ish chores first, most overdue on top; then everything else A-Z. */
export function sortLibrary(items: LibraryChore[], today: string): { item: LibraryChore; dueIsh: boolean }[] {
  const rows = items.map(item => { const r = dueRatio(item, today); return { item, ratio: r ?? 0, dueIsh: r !== null && r >= DUE_ISH } })
  return rows
    .sort((a, b) => Number(b.dueIsh) - Number(a.dueIsh) || (a.dueIsh ? b.ratio - a.ratio : 0) || a.item.title.localeCompare(b.item.title, undefined, { sensitivity: 'base' }))
    .map(({ item, dueIsh }) => ({ item, dueIsh }))
}

export type WhenPick = 'today' | 'tomorrow' | 'weekend'
/** This weekend is Saturday, or today when it already is the weekend. */
export function whenDate(pick: WhenPick, now = new Date()): string {
  if (pick === 'today') return dateKey(now)
  if (pick === 'tomorrow') return dateKey(addDays(now, 1))
  const dow = now.getDay()
  return dateKey(dow === 0 || dow === 6 ? now : addDays(now, 6 - dow))
}
