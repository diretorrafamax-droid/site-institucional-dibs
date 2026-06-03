'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { CaseCard } from '@/components/CaseCard'

export default function Cases() {
  const t = useTranslations("cases")

  const allCases = [
    { category: t("items.0.category"), title: t("items.0.title"), description: t("items.0.description"), image: '/assets/cases/ebook-experiencia-do-lar.webp' },
    { category: t("items.1.category"), title: t("items.1.title"), description: t("items.1.description"), image: '/assets/cases/landing-page-deborabelha.webp' },
    { category: t("items.2.category"), title: t("items.2.title"), description: t("items.2.description"), image: '/assets/cases/game-snake-bonus.webp' },
    { category: t("items.3.category"), title: t("items.3.title"), description: t("items.3.description"), image: '/assets/cases/timetracker-pro.webp' },
    { category: t("items.4.category"), title: t("items.4.title"), description: t("items.4.description"), image: '/assets/cases/gestcash.webp' },
  ]

  const filterAll = t("filterAll")
  const categories = [filterAll, ...new Set(allCases.map(c => c.category))]

  const [filter, setFilter] = useState(filterAll)
  const filtered = filter === filterAll ? allCases : allCases.filter(c => c.category === filter)

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
          {filtered.map(c => <CaseCard key={c.title} category={c.category} title={c.title} description={c.description} image={c.image} />)}
        </div>
      </div>
    </section>
  )
}
