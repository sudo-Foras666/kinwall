// Words and labels for a member's profile (Profile.tsx). Pure, so web/test/profile.test.ts covers them.
import type { MemberStats, StatsPeriod } from './types.ts'
import { intlLocale, t, tn } from './i18n.ts'

/** A date key's month (and more) in the current language: `parts` as for Intl.DateTimeFormat. */
const fmt = (key: string, parts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat(intlLocale(), { ...parts, timeZone: 'UTC' }).format(new Date(`${key.slice(0, 7)}-${key.length >= 10 ? key.slice(8, 10) : '15'}T12:00:00Z`))
/** "March 2025" for a date key like 2025-03-08. */
export const monthYear = (key: string) => fmt(key, { month: 'long', year: 'numeric' })
const EARLIER: Record<Exclude<StatsPeriod, 'all'>, string> = { today: 'yesterday', week: 'last week', month: 'this time last month', year: 'this time last year' }

/** Chores done against their own earlier stretch: up is cheered, down is just a number. */
export function compareText(now: number, previous: Pick<NonNullable<MemberStats['previous']>, 'choresDone'> | null, period: StatsPeriod, joined: string): string {
  if (!previous || period === 'all') return t('Since {date}', { date: monthYear(joined) })
  const earlier = t(EARLIER[period])
  if (now > previous.choresDone) return t('▲ {n} more than {earlier}', { n: now - previous.choresDone, earlier })
  if (now === previous.choresDone) return t('Same as {earlier}', { earlier })
  return t('{n} {earlier}', { n: previous.choresDone, earlier })
}

export function periodWord(period: StatsPeriod, today: string): string {
  return period === 'today' ? t('today') : period === 'week' ? t('this week') : period === 'month' ? t('in {month}', { month: fmt(today, { month: 'long' }) }) : period === 'year' ? t('in {year}', { year: today.slice(0, 4) }) : t('since joining')
}

export function duration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  return m >= 60 ? t('{h}h {m}m', { h: Math.floor(m / 60), m: m % 60 }) : t('{m}m', { m })
}

/** Near a birthday, the countdown (60 days out) or "Turned 10 on Sep 13" (two weeks after); otherwise
 * just their age, or nothing without a birth year. */
export function birthdayText(b: { date: string; daysUntil: number; turning: number | null }): string | null {
  if (b.daysUntil === 0) return t('Birthday today! 🎂')
  const age = b.turning === null ? null : b.turning - 1
  const since = 365 - b.daysUntil // ponytail: a day off across Feb 29, fine for "two weeks ago"
  if (since >= 1 && since <= 14) {
    const day = fmt(`2000${b.date.slice(-6)}`, { month: 'short', day: 'numeric' })
    return age === null ? t('Birthday was {day} 🎂', { day }) : t('Turned {age} on {day} 🎂', { age, day })
  }
  if (b.daysUntil <= 60) {
    const vars = { age: b.turning ?? '', days: b.daysUntil }
    if (b.daysUntil === 1) return b.turning === null ? t('Birthday tomorrow 🎂') : t('Turns {age} tomorrow 🎂', vars)
    return b.turning === null ? t('Birthday in {days} days', vars) : t('Turns {age} in {days} days', vars)
  }
  return age === null ? null : age < 1 ? t('Under 1 year old') : tn(age, '{n} year old', '{n} years old')
}

/** Axis labels for the chores chart: weekday initials, a few days of the month, month initials,
 * or (all time) the first month, Januaries and Julys. */
export function chartLabels(keys: string[], period: StatsPeriod): string[] {
  return keys.map((k, i) => {
    if (period === 'week') return new Intl.DateTimeFormat(intlLocale(), { weekday: 'narrow', timeZone: 'UTC' }).format(new Date(`${k}T12:00:00Z`))
    const day = Number(k.slice(8, 10))
    if (period === 'month') return [1, 8, 15, 22, 29].includes(day) ? String(day) : ''
    const month = Number(k.slice(5, 7))
    if (period === 'year') return fmt(k, { month: 'narrow' })
    return i === 0 || month === 1 || month === 7 ? `${fmt(k, { month: 'short' })} ’${k.slice(2, 4)}` : ''
  })
}

/** A weekday's name, 0 = Sunday. */
export const weekdayName = (day: number) => new Intl.DateTimeFormat(intlLocale(), { weekday: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2023, 0, 1 + day)))
