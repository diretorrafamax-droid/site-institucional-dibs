'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

interface CaseDetail {
  category: string
  title: string
  description: string
  image?: string
  metric?: string
  techs?: string[]
}

interface CaseModalProps {
  detail: CaseDetail
  onClose: () => void
}

export function CaseModal({ detail, onClose }: CaseModalProps) {
  const t = useTranslations('cases')
  const tc = useTranslations('common')
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={detail.title}
    >
        <div
          ref={modalRef}
          className="relative mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl max-h-[90vh] md:max-h-[85vh]"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition-colors hover:bg-accent md:h-8 md:w-8"
          >
            ✕
          </button>

          <div className="relative h-32 shrink-0 overflow-hidden md:h-72">
          {detail.image && (
            <img src={detail.image} alt={detail.title} className="h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {detail.metric && (
            <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-foreground">
              {detail.metric}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto p-6 md:p-8">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[1px] text-accent">{detail.category}</p>
            <h3 className="text-xl font-bold">{detail.title}</h3>
          </div>

          <p className="text-sm leading-relaxed text-muted">{detail.description}</p>

          {detail.techs && detail.techs.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[1px] text-muted">{t('technologies')}</p>
              <div className="flex flex-wrap gap-1.5">
                {detail.techs.map(t => (
                  <span key={t} className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-accent">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
            <span className="text-sm text-muted">{t('customPrice')}</span>
          </div>

          <Link
            href="/contato"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            {tc('requestQuote')}
          </Link>
        </div>
      </div>
    </div>
  )
}
