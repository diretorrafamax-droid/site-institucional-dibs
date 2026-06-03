'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export function CookieConsent() {
  const [show, setShow] = useState(false)
  const t = useTranslations('cookieConsent')

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) setShow(true)
  }, [])

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setShow(false) }
  const refuse = () => { localStorage.setItem('cookie-consent', 'refused'); setShow(false) }

  if (!show) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">
          {t('text')}{' '}
          <a href="/privacidade" className="text-accent underline">{t('learnMore')}</a>.
        </p>
        <div className="flex gap-2">
          <button onClick={refuse} className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent">
            {t('refuse')}
          </button>
          <button onClick={accept} className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-foreground transition-colors hover:bg-accent-hover">
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
