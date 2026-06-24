import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCarousel } from '@/components/ServiceCarousel'
import { CaseCarousel } from '@/components/CaseCarousel'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { HeroRotator } from '@/components/HeroRotator'
import { HeroBackground } from '@/components/HeroBackground'
import { AiLogos } from '@/components/AiLogos'
import { TechStack } from '@/components/TechStack'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <>
      <HeroBackground />
      <HeroRotator />

      <ServiceCarousel />

      <CaseCarousel />

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
