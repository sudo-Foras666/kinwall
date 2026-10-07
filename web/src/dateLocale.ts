// date-fns month and weekday names follow the app's language (i18n.ts). Imported once by main.tsx.
import { setDefaultOptions } from 'date-fns'
import { de } from 'date-fns/locale/de'
import { enUS } from 'date-fns/locale/en-US'
import { onLang } from './i18n.ts'

const LOCALES = { en: enUS, de }
onLang(l => setDefaultOptions({ locale: LOCALES[l] }))
