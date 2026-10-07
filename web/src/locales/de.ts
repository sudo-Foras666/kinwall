// German (Deutsch). Keys are the app's English text (i18n.ts t()); one file per area under de/.
// Text without an entry here shows in English.
import core from './de/core.ts'
import settings from './de/settings.ts'
import lists from './de/lists.ts'
import calendar from './de/calendar.ts'
import setup from './de/setup.ts'
import chores from './de/chores.ts'
import meals from './de/meals.ts'
import health from './de/health.ts'
import board from './de/board.ts'
import activities from './de/activities.ts'

const de: Record<string, string> = { ...settings, ...lists, ...calendar, ...setup, ...chores, ...meals, ...health, ...board, ...activities, ...core }
export default de
