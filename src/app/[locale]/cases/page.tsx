'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { CaseCard } from '@/components/CaseCard'
import { CaseModal } from '@/components/CaseModal'

const caseMeta = [
  { image: '/assets/cases/ebook-experiencia-do-lar.png', metric: 'Em 5 dias', techs: ['Pesquisa', 'Copywriting', 'Design Editorial', 'KDP'] },
  { image: '/assets/cases/landing-page-experiencia-do-lar.png', metric: 'Integração', techs: ['Figma', 'Next.js', 'Tailwind', 'UX Writing'] },
  { image: '/assets/cases/game-snake-bonus.png', metric: '+500 jogadores', techs: ['Canvas API', 'Mobile-first', 'Ranking'] },
  { image: '/assets/cases/timetracker-pro.png', metric: '30% economia', techs: ['Next.js', 'Dashboard', 'Simulação'] },
  { image: '/assets/cases/gestcash.png', metric: 'Smart Contract', techs: ['Smart Contract', 'Tokenização', 'Finanças'] },
  { image: '/assets/cases/top5traders.png', metric: '73% acerto', techs: ['Laravel', 'React', 'MQL5', 'Telegram Bot'] },
]

export default function Cases() {
  const t = useTranslations("cases")
  const [filter, setFilter] = useState(t("filter.all"))
  const [selected, setSelected] = useState<number | null>(null)

  const allCases = [0, 1, 2, 3, 4, 5].map(i => ({
    category: t(`items.${i}.category`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    ...caseMeta[i],
  }))

  const categories = [t("filter.all"), ...new Set(allCases.map(c => c.category))]
  const filtered = filter === t("filter.all") ? allCases : allCases.filter(c => c.category === filter)

  const handleKeyDown = (k: number) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(k)
    }
  }

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />

          {/* Credibility Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="flex flex-col items-center rounded-xl border border-border bg-surface p-4 md:p-6">
                <span className="text-2xl font-extrabold text-accent md:text-3xl">{t(`stats.items.${i}.value`)}</span>
                <span className="mt-1 text-center text-xs text-muted md:text-sm">{t(`stats.items.${i}.label`)}</span>
              </div>
            ))}
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  filter === cat ? 'border-accent bg-accent text-foreground' : 'border-border text-muted hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => {
              const originalIndex = allCases.indexOf(c)
              return (
                <div
                  key={c.title}
                  onClick={() => setSelected(originalIndex)}
                  onKeyDown={handleKeyDown(originalIndex)}
                  role="button"
                  tabIndex={0}
                  aria-label={c.title}
                >
                  <CaseCard {...c} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Seals */}
      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-xs text-muted md:text-sm">
            <span className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              LGPD Compliance
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Dados Seguros
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 10 10h-10V2z"/><path d="M12 2v10h10"/></svg>
              99.5% Uptime
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"><circle cx="12" cy="8" r="6"/><path d="M3 21v-2a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v2"/></svg>
              Equipe Dedicada
            </span>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-4 text-accent/30"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <blockquote className="text-lg italic leading-relaxed text-muted md:text-xl">
            "{t('testimonial.text')}"
          </blockquote>
          <div className="mt-6">
            <p className="font-bold">{t('testimonial.author')}</p>
            <p className="text-sm text-muted">{t('testimonial.role')}</p>
          </div>
        </div>
      </section>

      {selected !== null && (
        <CaseModal
          detail={{
            category: t(`items.${selected}.category`),
            title: t(`items.${selected}.title`),
            description: t(`items.${selected}.description`),
            image: caseMeta[selected].image,
            metric: caseMeta[selected].metric,
            techs: caseMeta[selected].techs,
          }}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
