'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import {
  SoftwareIllustration,
  DesignIllustration,
  ContentIllustration,
  BlockchainIllustration,
  FinanceIllustration,
  RadarIllustration,
  SecurityIllustration,
  ConsultingIllustration,
} from './illustrations'

const illustrations = [
  SoftwareIllustration,
  DesignIllustration,
  ContentIllustration,
  BlockchainIllustration,
  FinanceIllustration,
  RadarIllustration,
  SecurityIllustration,
  ConsultingIllustration,
]

const serviceKeys = [0, 1, 2, 3, 4, 5, 6, 7]

export function ServiceCarousel() {
  const t = useTranslations('servicesCarousel')

  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-16">
      {/* Gradients edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface to-transparent" />

      <div className="mx-auto mb-10 max-w-6xl px-6">
        <p className="mb-2 text-sm text-muted">{t('label')}</p>
        <h2 className="text-3xl font-extrabold md:text-4xl">
          {t('title')} <span className="text-accent">{t('titleHighlight')}</span>
        </h2>
      </div>

      <div className="flex animate-carousel gap-6" style={{ width: 'max-content' }}>
        {[...serviceKeys, ...serviceKeys, ...serviceKeys].map((k, i) => (
          <CarouselCard key={`${k}-${i}`} index={k} />
        ))}
      </div>
    </section>
  )
}

function CarouselCard({ index }: { index: number }) {
  const t = useTranslations('servicesCarousel')
  const href = t(`items.${index}.href`)
  const Wrapper = href ? Link : 'div'
  const Illustration = illustrations[index]
  return (
    <Wrapper
      href={href ?? '#'}
      className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-border bg-background p-0 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg overflow-hidden sm:w-[340px]"
    >
      <div className="flex h-[130px] items-center justify-center bg-accent/5 px-6 pt-4">
        <Illustration className="w-full h-full" />
      </div>
      <div className="flex flex-1 flex-col p-6 pt-4">
        <h3 className="mb-2 text-lg font-bold">{t(`items.${index}.title`)}</h3>
        <p className="flex-1 text-sm text-muted">{t(`items.${index}.description`)}</p>
        <p className="mt-4 text-sm font-semibold text-accent whitespace-nowrap overflow-hidden text-ellipsis">{t(`items.${index}.cta`)}<br /><span className="text-accent">→</span></p>
      </div>
    </Wrapper>
  )
}
