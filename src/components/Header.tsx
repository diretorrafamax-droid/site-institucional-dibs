'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { useTheme } from './ThemeProvider'
import { FlagIcon } from './FlagIcon'

const locales = [
  { code: 'pt', label: 'Português', flag: 'br' },
  { code: 'en', label: 'English', flag: 'us' },
  { code: 'es', label: 'Español', flag: 'es' },
  { code: 'fr', label: 'Français', flag: 'fr' },
  { code: 'de', label: 'Deutsch', flag: 'de' },
]

const navHrefs = ['/', '/servicos', '/cases', '/sobre', '/equipe', '/contato']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [localeOpen, setLocaleOpen] = useState(false)
  const localeRef = useRef<HTMLDivElement>(null)
  const { theme, toggle } = useTheme()
  const t = useTranslations('header')
  const pathname = usePathname()
  const locale = useLocale()

  const navLabels = [t('nav.home'), t('nav.servicos'), t('nav.cases'), t('nav.sobre'), t('nav.equipe'), t('nav.contato')]
  const currentLocale = locales.find(loc => loc.code === locale) || locales[0]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (localeRef.current && !localeRef.current.contains(e.target as Node)) {
        setLocaleOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src="/assets/vectors/logo-dark.svg" alt={t('alt.logo')} className="hidden h-7 w-auto dark:block" />
          <img src="/assets/vectors/logo-light.svg" alt={t('alt.logo')} className="block h-7 w-auto dark:hidden" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navHrefs.map((href, i) => (
            <Link key={href} href={href} className="text-sm text-muted transition-colors hover:text-accent">
              {navLabels[i]}
            </Link>
          ))}
          {/* Locale dropdown */}
          <div className="relative border-l border-border pl-4" ref={localeRef}>
            <button
              onClick={() => setLocaleOpen(!localeOpen)}
              className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-muted transition-colors hover:text-accent"
              aria-label={currentLocale.label}
            >
              <FlagIcon code={currentLocale.flag} className="h-3 w-auto" />
              <svg className={`h-3 w-3 transition-transform ${localeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {localeOpen && (
              <div className="absolute right-0 top-full mt-1 w-40 rounded-lg border border-border bg-background py-1 shadow-lg">
                {locales.map(loc => (
                  <Link
                    key={loc.code}
                    href={pathname}
                    locale={loc.code}
                    onClick={() => setLocaleOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-surface ${
                      loc.code === currentLocale.code ? 'font-bold text-accent' : 'text-muted hover:text-accent'
                    }`}
                  >
                    <FlagIcon code={loc.flag} className="h-3.5 w-auto" />
                    {loc.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contato"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-accent-hover"
          >
            {t('cta')}
          </Link>
          <button onClick={toggle} className="text-lg" aria-label={t('aria.toggleTheme')}>
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggle} className="text-lg" aria-label={t('aria.toggleTheme')}>
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1" aria-label={t('aria.openMenu')}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6 pt-2">
            {navHrefs.map((href, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-accent"
              >
                {navLabels[i]}
              </Link>
            ))}
            {/* Mobile locale switcher */}
            <div className="mt-2 border-t border-border pt-2">
              <p className="px-4 pb-1 text-xs text-muted">{t('language')}</p>
              <div className="flex flex-wrap gap-1 px-4">
                {locales.map(loc => (
                  <Link
                    key={loc.code}
                    href={pathname}
                    locale={loc.code}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-1.5 rounded px-2 py-1.5 text-xs text-muted transition-colors hover:bg-surface hover:text-accent"
                    aria-label={loc.label}
                  >
                    <FlagIcon code={loc.flag} className="h-3 w-auto" />
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-bold text-foreground transition-colors hover:bg-accent-hover"
            >
              {t('cta')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
