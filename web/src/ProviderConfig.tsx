// Shared Google/Microsoft OAuth provider config form — used by Settings' "Calendar providers"
// section and reused as-is inside the setup wizard's calendars step (same component, just a
// different `useAdmin` key while the wizard's own key is still display-scoped).
import { Fragment, useState, type ReactNode } from 'react'
import { api, ApiError } from './api.ts'
import type { Providers } from './types.ts'
import { useDialog } from './dialog.tsx'
import { appProviderReturn, inNativeApp } from './native.ts'
import { t } from './i18n.ts'

const LABEL = { google: 'Google', microsoft: 'Microsoft' } as const

/** A translated sentence with React nodes (code) for its {placeholders}. */
const rich = (text: string, nodes: Record<string, ReactNode>) =>
  text.split(/\{(\w+)\}/).map((part, i) => i % 2 ? <Fragment key={i}>{nodes[part]}</Fragment> : part)

/** Connect Google or Outlook: the server answers this browser with the consent URL and a cookie
 * the callback needs (server/src/routes/oauth.ts), so the sign-in has to happen here. An older
 * Kinwall app can't bring the sign-in back from its in-app browser, so it says so instead. */
export async function connectCalendar(kind: 'google' | 'microsoft', say: (m: string) => void) {
  if (inNativeApp() && !appProviderReturn()) {
    say(t('Update the Kinwall app to connect {name}, or connect from a web browser.', { name: LABEL[kind] }))
    return
  }
  try {
    location.href = (await api.oauthStart(kind)).url
  } catch (e) {
    say(e instanceof Error ? e.message : t("Couldn't start the {name} sign-in", { name: LABEL[kind] }))
  }
}

// Always saves/deletes with the admin key (getAdminKey() ?? the stored key — see api.ts) since
// these routes are admin-only regardless of caller: the setup wizard's temporary session admin
// key covers a display-role device mid-setup, and the stored key already is admin otherwise.
export function ProviderForm({ kind, providers, toast, onChanged }: {
  kind: 'google' | 'microsoft'
  providers: Providers
  toast: (m: string, persist?: boolean) => void
  onChanged: () => void
}) {
  const dialog = useDialog()
  const status = providers[kind]
  const redirect = providers.redirectUris[kind]
  const locked = status.source === 'env'
  const [clientId, setClientId] = useState(status.clientId ?? '')
  const [clientSecret, setClientSecret] = useState('')
  const [tenant, setTenant] = useState(status.tenant ?? 'common')
  const [showGuide, setShowGuide] = useState(false)
  const [copied, setCopied] = useState(false)
  const label = LABEL[kind]

  const save = async () => {
    if (!clientId.trim()) return
    try {
      await api.saveProvider(kind, { clientId: clientId.trim(), clientSecret: clientSecret.trim() || undefined, tenant: kind === 'microsoft' ? tenant.trim() || 'common' : undefined })
      setClientSecret('')
      toast(t('{name} saved', { name: label }))
      onChanged()
    } catch (e) { toast(e instanceof ApiError ? e.message : t('Could not save {name}', { name: label }), true) }
  }
  const remove = async () => {
    if (!await dialog.confirm({ title: t('Remove the {name} sign-in settings?', { name: kind === 'google' ? 'Google' : 'Microsoft' }), body: t('Connected calendars stop syncing until they are set up again.'), confirmLabel: t('Remove'), danger: true })) return
    try { await api.deleteProvider(kind); setClientId(''); setClientSecret(''); onChanged() }
    catch (e) { toast(e instanceof ApiError ? e.message : t('Could not remove {name}', { name: label }), true) }
  }
  const copy = () => {
    navigator.clipboard?.writeText(redirect).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) }).catch(() => {})
  }

  return (
    <div className="provider-card">
      <div className="provider-card-head">
        <div className="settings-row-label">{label}</div>
        <div className={`provider-chip ${status.source ?? 'none'}`}>
          {status.source === 'env' ? t('Provided by your host') : status.source === 'ui' ? t('Configured') : t('Not set up')}
        </div>
      </div>

      {locked ? (
        <p className="settings-row-sub">{t('{name} sign-in is provided by your host — nothing to set up here.', { name: label })}</p>
      ) : (
        <>
          <div className="field"><label>{t('Client ID')}</label><input type="text" value={clientId} onChange={e => setClientId(e.target.value)} /></div>
          <div className="field">
            <label>{t('Client secret')}</label>
            <input type="password" value={clientSecret} onChange={e => setClientSecret(e.target.value)} placeholder={status.secretSet ? t('••••• set — leave blank to keep') : ''} />
          </div>
          {kind === 'microsoft' && <div className="field"><label>{t('Tenant')}</label><input type="text" value={tenant} onChange={e => setTenant(e.target.value)} placeholder="common" /></div>}
          <div className="form-actions">
            <button className="btn btn-primary" onClick={save} disabled={!clientId.trim()}>{t('Save')}</button>
            {status.configured && <button className="link-btn" style={{ color: 'var(--danger)' }} onClick={remove}>{t('Remove')}</button>}
          </div>
        </>
      )}

      {!locked && <>
      <div className="field">
        <label>{t('Redirect URI')}</label>
        <div className="provider-redirect">
          <code>{redirect}</code>
          <button className="link-btn" onClick={copy}>{copied ? t('Copied') : t('Copy')}</button>
        </div>
        {redirect.startsWith('/') && <p className="settings-row-sub">{t('Set the Public URL above first — {name} needs a full https:// redirect URI.', { name: label })}</p>}
      </div>

      <button className="link-btn" onClick={() => setShowGuide(s => !s)}>{showGuide ? t('Hide setup guide') : t('Show setup guide')}</button>
      {showGuide && (
        <ol className="provider-guide">
          {kind === 'google' ? (
            <>
              <li>{t('In Google Cloud Console, create an OAuth client of type "Web application".')}</li>
              <li>{t('Add the redirect URI above to its Authorized redirect URIs.')}</li>
              <li>{t('Enable the Google Calendar API for the project.')}</li>
              <li>{rich(t('Under Data access, add the scopes {events} and {list} (and openid, email).'), { events: <code>calendar.events</code>, list: <code>calendar.calendarlist.readonly</code> })}</li>
              <li>{t('If the consent screen is in Testing, add yourself as a test user.')}</li>
            </>
          ) : (
            <>
              <li>{t('In Microsoft Entra, go to App registrations → New registration.')}</li>
              <li>{t('Add the redirect URI above under a Web platform.')}</li>
              <li>{t('Add delegated permissions: Calendars.ReadWrite, User.Read, offline_access.')}</li>
              <li>{t('Create a client secret and paste it above.')}</li>
            </>
          )}
        </ol>
      )}
      </>}

      {status.configured && <button className="btn btn-block" onClick={() => connectCalendar(kind, m => toast(m, true))}>{t('Test sign-in')}</button>}
    </div>
  )
}

export function PublicUrlRow({ providers, toast, onChanged }: { providers: Providers; toast: (m: string, persist?: boolean) => void; onChanged: () => void }) {
  const locked = providers.publicUrl.source === 'env'
  const [value, setValue] = useState(providers.publicUrl.value ?? (typeof location !== 'undefined' ? location.origin : ''))
  const [warning, setWarning] = useState<string | undefined>()

  const save = async () => {
    if (!value.trim()) return
    try {
      const res = await api.savePublicUrl(value.trim())
      setValue(res.value)
      setWarning(res.warning)
      toast(t('Public URL saved'))
      onChanged()
    } catch (e) { toast(e instanceof ApiError ? e.message : t('Could not save public URL'), true) }
  }

  return (
    <div className="field">
      <label>{t('Public URL')}</label>
      {locked ? (
        <p className="settings-row-sub">{t('Set via PUBLIC_URL — {url}', { url: providers.publicUrl.value ?? '' })}</p>
      ) : (
        <>
          <div className="provider-redirect">
            <input type="url" value={value} onChange={e => setValue(e.target.value)} placeholder="https://cal.home.example" />
            <button className="btn btn-primary" onClick={save} disabled={!value.trim()}>{t('Save')}</button>
          </div>
          {warning && <p className="settings-row-sub" style={{ color: 'var(--danger)' }}>{warning}</p>}
        </>
      )}
    </div>
  )
}
