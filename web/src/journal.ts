// Goal follow-up and the journal (GoalFollowUp.tsx, Journal.tsx, Settings → Family). Pure, so
// web/test/journal.test.ts covers it.
import { t } from './i18n.ts'
import type { FollowupOutcome, JournalDay, JournalPrivacy, Member } from './types.ts'

/** The evening check's times, "HH:MM": noon to 11:30 PM in half hours (midnight ends the day).
 * Labeled with formatTime where they're shown, so they follow the time format. */
export const EVENING_TIMES = Array.from({ length: 24 }, (_, i) => `${String(12 + Math.floor(i / 2)).padStart(2, '0')}:${i % 2 ? '30' : '00'}`)

export const OUTCOMES: { key: FollowupOutcome; emoji: string; label: string }[] = [
  { key: 'yes', emoji: '🎉', label: 'Yes' },
  { key: 'partly', emoji: '🌗', label: 'Partly' },
  { key: 'no', emoji: '🌱', label: 'Not today' },
]
export const outcomeOf = (k: FollowupOutcome) => OUTCOMES.find(o => o.key === k)!

export const MOODS = ['😄', '🙂', '😐', '😕', '😢', '😡', '😴', '🤩', '🥰', '🌈']
export const JOURNAL_TEXT_MAX = 2000

export function followupThanks(outcome: FollowupOutcome, name: string): string {
  if (outcome === 'yes') return t('Nice work, {name} ✓', { name })
  if (outcome === 'partly') return t('Good going, {name}: a bit counts ✓', { name })
  return t("That's OK, {name}. Tomorrow's a new day ✓", { name })
}

/** Goals met (yes) out of goals set (not skipped) in the 7 days ending `today`. */
export function goalsThisWeek(days: JournalDay[], today: string): { met: number; of: number } {
  const start = new Date(Date.parse(`${today}T00:00:00Z`) - 6 * 86_400_000).toISOString().slice(0, 10)
  const week = days.filter(d => d.date >= start && d.date <= today && d.tempCheck?.goal)
  return { met: week.filter(d => d.tempCheck!.followup?.outcome === 'yes').length, of: week.length }
}

/** The line under their name: who reads this journal, from this device's point of view. */
export function privacyLine(member: Member, p: JournalPrivacy | undefined): string {
  if (!p) return '🔒'
  // Other parent devices still see each private entry's mood (docs/using/journal.md#private-journals).
  if (p.on && p.mine) return t(member.grownUp ? '🔒 Private: only you can read these. Other parent devices see your mood, not what you write.' : '🔒 Private: only you can read these. Parents see your mood, not what you write.')
  if (p.on) return t("🔒 Private: only {name} can read these. You see {name}'s mood, not what they write.", { name: member.name })
  if (p.mine) return t(member.grownUp ? 'Shared: parent devices can read your journal.' : 'Just for you, and parents can see it too.')
  return t(member.grownUp ? "{name}'s own devices and parent devices can read this." : 'Just for {name}, and parents can see it too.', { name: member.name })
}
