'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { CaseCard } from '@/components/CaseCard'
import { CaseModal } from '@/components/CaseModal'

const caseMeta = [
  { image: '/assets/cases/ebook-experiencia-do-lar.webp', metric: '15 dias', techs: ['Pesquisa', 'Copywriting', 'Design Editorial', 'KDP'] },
  { image: '/assets/cases/landing-page-experiencia-do-lar.webp', metric: '12 telas', techs: ['Figma', 'Next.js', 'Tailwind', 'UX Writing'] },
  { image: '/assets/cases/game-snake-bonus.webp', metric: '+500 jogadores', techs: ['Canvas API', 'Mobile-first', 'Ranking'] },
  { image: '/assets/cases/timetracker-pro.webp', metric: '30% economia', techs: ['Next.js', 'Dashboard', 'Simulação'] },
  { image: '/assets/cases/gestcash.webp', metric: 'Smart Contract', techs: ['Smart Contract', 'Tokenização', 'Finanças'] },
  { image: '/assets/cases/top5traders.webp', metric: '73% acerto', techs: ['Laravel', 'React', 'MQL5', 'Telegram Bot'] },
]

const caseKeys = [0, 1, 2, 3, 4, 5]

export function CaseCarousel() {
  const t = useTranslations('cases')
  const [selected, setSelected] = useState<number | null>(null)

  const handleKeyDown = useCallback((k: number) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(k)
    }
  }, [])

  return (
    <>
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
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
