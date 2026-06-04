'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { CaseCard } from '@/components/CaseCard'

const caseMeta = [
  { image: '/assets/cases/ebook-experiencia-do-lar.webp', metric: '15 dias', techs: ['Pesquisa', 'Copywriting', 'Design Editorial', 'KDP'] },
  { image: '/assets/cases/landing-page-deborabelha.webp', metric: 'Design System', techs: ['Figma', 'Next.js', 'Tailwind', 'UX Writing'] },
  { image: '/assets/cases/game-snake-bonus.webp', metric: '5 fases', techs: ['Canvas API', 'Mobile-first', 'Ranking'] },
  { image: '/assets/cases/timetracker-pro.webp', metric: 'Gestão de Tempo', techs: ['Next.js', 'Dashboard', 'Simulação'] },
  { image: '/assets/cases/gestcash.webp', metric: 'Blockchain', techs: ['Smart Contract', 'Tokenização', 'Finanças'] },
]

export default function Cases() {
  const t = useTranslations("cases")
  const [filter, setFilter] = useState(t("filterAll"))

  const allCases = [0, 1, 2, 3, 4].map(i => ({
    category: t(`items.${i}.category`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    ...caseMeta[i],
  }))

  const categories = [t("filterAll"), ...new Set(allCases.map(c => c.category))]
  const filtered = filter === t("filterAll") ? allCases : allCases.filter(c => c.category === filter)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => <CaseCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  )
}
