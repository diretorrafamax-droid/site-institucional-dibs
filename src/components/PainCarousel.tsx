'use client'

import { useTranslations } from 'next-intl'

interface PainItem {
  Illustration?: React.ComponentType<{ className?: string }>
  icon?: string
  problem: string
  solution: string
}

interface PainCarouselProps {
  title?: string
  pains: PainItem[]
}

export function PainCarousel({ title: _title, pains }: PainCarouselProps) {
  const t = useTranslations("painCarousel")
  const title = _title ?? t("defaultTitle")

  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface to-transparent" />

      <div className="mx-auto mb-10 max-w-6xl px-6">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          {t("badge")}
        </div>
        <h2 className="text-3xl font-extrabold md:text-4xl">
          {title}
        </h2>
      </div>

      <div className="flex animate-carousel gap-6" style={{ width: 'max-content' }}>
        {[...pains, ...pains, ...pains].map((p, i) => (
          <PainCard key={`${p.problem}-${i}`} pain={p} />
        ))}
      </div>
    </section>
  )
}

function PainCard({ pain: p }: { pain: PainItem }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-border bg-background p-0 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg overflow-hidden sm:w-[320px]">
      <div className="flex h-[130px] items-center justify-center bg-accent/5 px-6 pt-4">
        {p.Illustration ? <p.Illustration className="w-full h-full" /> : <span className="text-5xl">{p.icon}</span>}
      </div>
      <div className="flex flex-1 flex-col p-6 pt-4">
        <h3 className="mb-2 text-base font-bold text-accent">{p.problem}</h3>
        <p className="flex-1 text-sm text-muted">{p.solution}</p>
      </div>
    </div>
  )
}
