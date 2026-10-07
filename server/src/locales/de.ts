// German (Deutsch). Keys are the server's English text (i18n.ts tr()); one file per area under de/.
// Text without an entry here goes out in English. Informal "du", short and warm, „…“ quotes.
import errors from './de/errors.ts';
import notifications from './de/notifications.ts';
import insights from './de/insights.ts';
import nudges from './de/nudges.ts';

const de: Record<string, string> = { ...errors, ...notifications, ...insights, ...nudges };
export default de;
/** Only the error messages: what app.ts matches an { error } against (i18n.ts trMessage). */
export const messages: Record<string, string> = errors;
