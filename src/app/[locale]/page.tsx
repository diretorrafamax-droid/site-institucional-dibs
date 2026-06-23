import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCarousel } from '@/components/ServiceCarousel'
import { CaseCard } from '@/components/CaseCard'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { HeroRotator } from '@/components/HeroRotator'
import { HeroBackground } from '@/components/HeroBackground'
import { AiLogos } from '@/components/AiLogos'
import { TechStack } from '@/components/TechStack'

const caseMeta = [
  { image: '/assets/cases/ebook-experiencia-do-lar.svg', metric: '15 dias', techs: ['Pesquisa', 'Copywriting', 'Design Editorial', 'KDP'] },
  { image: '/assets/cases/landing-page-deborabelha.svg', metric: 'Design System', techs: ['Figma', 'Next.js', 'Tailwind', 'UX Writing'] },
  { image: '/assets/cases/game-snake-bonus.svg', metric: '5 fases', techs: ['Canvas API', 'Mobile-first', 'Ranking'] },
  { image: '/assets/cases/timetracker-pro.svg', metric: 'Gestão de Tempo', techs: ['Next.js', 'Dashboard', 'Simulação'] },
]

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <>
      <HeroBackground />
      <HeroRotator />

      <ServiceCarousel />

      {/* Cases — Portfólio */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            label={t('cases.sectionTitle.label')}
            title={t('cases.sectionTitle.title')}
            subtitle={t('cases.sectionTitle.subtitle')}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {caseMeta.map((c, i) => (
              <CaseCard
                key={i}
                category={t(`cases.${i}.category`)}
                title={t(`cases.${i}.title`)}
                description={t(`cases.${i}.description`)}
                image={c.image}
                metric={c.metric}
                techs={c.techs}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <AiLogos />

      <TechStack />

      {/* CTA */}
      <section className="border-t border-border bg-surface py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">{t('cta.title')}</h2>
          <p className="mt-4 text-muted">{t('cta.description')}</p>
          <Link href="/contato" className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 font-bold text-foreground transition-colors hover:bg-accent-hover">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  )
}
