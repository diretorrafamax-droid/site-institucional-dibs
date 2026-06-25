'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { CaseCard } from '@/components/CaseCard'
import { CaseModal } from '@/components/CaseModal'

const caseMeta = [
  { image: '/assets/cases/ebook-experiencia-do-lar.png', metric: '15 dias', techs: ['Pesquisa', 'Copywriting', 'Design Editorial', 'KDP'] },
  { image: '/assets/cases/landing-page-experiencia-do-lar.png', metric: '12 telas', techs: ['Figma', 'Next.js', 'Tailwind', 'UX Writing'] },
  { image: '/assets/cases/game-snake-bonus.png', metric: '+500 jogadores', techs: ['Canvas API', 'Mobile-first', 'Ranking'] },
  { image: '/assets/cases/timetracker-pro.png', metric: '30% economia', techs: ['Next.js', 'Dashboard', 'Simulação'] },
  { image: '/assets/cases/gestcash.png', metric: 'Smart Contract', techs: ['Smart Contract', 'Tokenização', 'Finanças'] },
  { image: '/assets/cases/top5traders.png', metric: '73% acerto', techs: ['Laravel', 'React', 'MQL5', 'Telegram Bot'] },
]

const caseKeys = [0, 1, 2, 3, 4, 5]

export function CaseCarousel() {
  const t = useTranslations('cases')
  const th = useTranslations('home')
  const [selected, setSelected] = useState<number | null>(null)

  const handleKeyDown = useCallback((k: number) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(k)
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-surface/60" />
        <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionTitle label={th('cases.sectionTitle.label')} title={th('cases.sectionTitle.title')} subtitle={th('cases.sectionTitle.subtitle')} />
          <div className="grid gap-6 md:grid-cols-3">
            {caseKeys.map(k => (
              <div
                key={k}
                onClick={() => setSelected(k)}
                onKeyDown={handleKeyDown(k)}
                role="button"
                tabIndex={0}
                aria-label={t(`items.${k}.title`)}
              >
                <CaseCard
                  category={t(`items.${k}.category`)}
                  title={t(`items.${k}.title`)}
                  description={t(`items.${k}.description`)}
                  image={caseMeta[k].image}
                  metric={caseMeta[k].metric}
                  techs={caseMeta[k].techs}
                />
              </div>
            ))}
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
