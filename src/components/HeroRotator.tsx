'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { AnimatedCounter } from './AnimatedCounter'

const sceneKeys = [0, 1, 2, 3]

export function HeroRotator() {
  const [active, setActive] = useState(0)
  const t = useTranslations('hero')

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % sceneKeys.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center md:pt-28">
      <div className="relative" style={{ minHeight: 310 }}>
        {sceneKeys.map((i) => (
          <div
            key={i}
            className={`transition-all duration-700 ease-in-out ${
              i === active
                ? 'visible opacity-100 translate-y-0 relative'
                : 'invisible opacity-0 translate-y-4 absolute inset-0'
            }`}
          >
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              {t(`scenes.${i}.headline`)}<br />
              <span className="text-accent">
                {t(`scenes.${i}.highlight`).split('\n').map((line, j) => (
                  <span key={j}>{j > 0 && <br />}{line}</span>
                ))}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted">
              {t(`scenes.${i}.description`)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/contato" className="rounded-lg bg-accent px-8 py-4 font-bold text-foreground transition-colors hover:bg-accent-hover">
          {t('cta.validate')}
        </Link>
        <Link href="/servicos" className="rounded-lg border border-border px-8 py-4 font-semibold transition-colors hover:border-accent">
          {t('cta.seeServices')}
        </Link>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {sceneKeys.map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active ? 'w-8 bg-accent' : 'w-2 bg-muted/30 hover:bg-muted/50'
            }`}
            aria-label={t('aria.goToScene', { number: i + 1 })}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-12">
        <div><AnimatedCounter end={60} suffix="+" /><p className="text-sm text-muted">{t('stats.agents')}</p></div>
        <div><AnimatedCounter end={12} /><p className="text-sm text-muted">{t('stats.departments')}</p></div>
        <div><AnimatedCounter end={100} suffix="%" /><p className="text-sm text-muted">{t('stats.delivery')}</p></div>
        <div><AnimatedCounter end={4.9} decimals={1} /><p className="text-sm text-muted">{t('stats.rating')}</p></div>
      </div>
    </section>
  )
}
