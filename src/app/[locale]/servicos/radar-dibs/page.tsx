'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { RadarIllustration, PainTime, PainCosts, PainPerformance, PainTarget, PainPrioritization } from '@/components/illustrations'
import { PainCarousel } from '@/components/PainCarousel'
import { Roadmap } from '@/components/Roadmap'
import { ProcessSteps } from '@/components/ProcessSteps'
import { TeamShowcase } from '@/components/TeamShowcase'

const painIllustrations = [PainCosts, PainPerformance, PainTime, PainTarget, PainPrioritization]
const teamMeta = [
  { initials: 'SF', color: '#95A5A6', photo: '/assets/team/samuel-farias.png', countryCode: 'br', type: 'ia' as const },
  { initials: 'DM', color: '#3498DB', photo: '/assets/team/daniel-monteiro.png', countryCode: 'pt', type: 'ia' as const },
  { initials: 'ET', color: '#2C3E50', photo: '/assets/team/einstein-tavares.png', countryCode: 'br', type: 'ia' as const },
]

export default function RadarDibsPage() {
  const t = useTranslations('radarDibs')

  const pains = Array.from({ length: 5 }, (_, i) => ({
    Illustration: painIllustrations[i],
    problem: t(`pains.items.${i}.problem`),
    solution: t(`pains.items.${i}.solution`),
  }))

  const deliverables = Array.from({ length: 5 }, (_, i) => ({
    icon: t.raw(`roadmap.items.${i}.icon`) as string,
    title: t(`roadmap.items.${i}.title`),
    description: t(`roadmap.items.${i}.description`),
    highlight: i === 0,
  }))

  const steps = Array.from({ length: 4 }, (_, i) => ({
    number: t(`process.steps.${i}.number`),
    title: t(`process.steps.${i}.title`),
    description: t(`process.steps.${i}.description`),
  }))

  const team = Array.from({ length: 3 }, (_, i) => ({
    name: t(`team.members.${i}.name`),
    role: t(`team.members.${i}.role`),
    initials: teamMeta[i].initials,
    color: teamMeta[i].color,
    photo: teamMeta[i].photo,
    countryCode: teamMeta[i].countryCode,
    type: teamMeta[i].type,
    competencias: t.raw(`team.members.${i}.competencias`) as string[],
  }))

  return (
    <>
      <section className="border-b border-border bg-surface/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{t('hero.title')} <span className="text-accent">{t('hero.titleHighlight')}</span></h1>
            <p className="mt-4 max-w-lg text-muted">{t('hero.description')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contato" className="rounded-lg bg-accent px-6 py-3 font-bold text-foreground transition-colors hover:bg-accent-hover">{t('hero.cta')}</Link>
              <Link href="#entregamos" className="rounded-lg border border-border px-6 py-3 font-semibold text-muted transition-colors hover:border-accent">{t('hero.ctaSecondary')}</Link>
            </div>
          </div>
          <div className="w-72 shrink-0 md:w-96">
            <RadarIllustration className="w-full" />
          </div>
        </div>
      </section>

      <PainCarousel pains={pains} />

      <section id="entregamos" className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Roadmap title={t('roadmap.title')} subtitle={t('roadmap.subtitle')} items={deliverables} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <TeamShowcase title={t('team.title')} members={team} />
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-8 text-center text-xl font-bold">{t('numeros.title')}</h3>
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div><div className="text-3xl font-extrabold text-accent">{t('numeros.items.0.value')}</div><div className="text-sm text-muted">{t('numeros.items.0.label')}</div></div>
            <div><div className="text-3xl font-extrabold text-accent">{t('numeros.items.1.value')}</div><div className="text-sm text-muted">{t('numeros.items.1.label')}</div></div>
            <div><div className="text-3xl font-extrabold text-accent">{t('numeros.items.2.value')}</div><div className="text-sm text-muted">{t('numeros.items.2.label')}</div></div>
            <div><div className="text-3xl font-extrabold text-accent">{t('numeros.items.3.value')}</div><div className="text-sm text-muted">{t('numeros.items.3.label')}</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">{t('cta.title')}</h2>
          <p className="mt-4 text-muted">{t('cta.description')}</p>
          <Link href="/contato" className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 font-bold text-foreground transition-colors hover:bg-accent-hover">{t('cta.button')}</Link>
        </div>
      </section>
    </>
  )
}
