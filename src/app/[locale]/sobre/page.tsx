import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { SectionTitle } from '@/components/SectionTitle'
import { ConsultingIllustration } from '@/components/illustrations'

export default async function Sobre() {
  const t = await getTranslations("sobre")

  const storyItems = [0, 1, 2, 3] as const
  const valueItems = [0, 1, 2, 3] as const
  const numberItems = [0, 1, 2, 3] as const

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex justify-center">
          <ConsultingIllustration className="h-48 w-48 md:h-64 md:w-64" />
        </div>
        <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />

        <div className="mb-20 rounded-xl border border-border bg-surface p-8 md:p-12">
          <h3 className="mb-4 text-xl font-bold">{t("modelo.title")}</h3>
          <p className="mb-4 text-muted" dangerouslySetInnerHTML={{ __html: t.raw("modelo.p1") }} />
          <p className="text-muted" dangerouslySetInnerHTML={{ __html: t.raw("modelo.p2") }} />
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-xl font-bold">{t("historia.title")}</h3>
          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />
            <div className="space-y-10">
              {storyItems.map((_, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden flex-1 text-right md:block ${i % 2 === 0 ? '' : 'text-left'}`}>
                    <h4 className="text-lg font-bold text-accent">{t(`historia.items.${i}.year`)}</h4>
                    <p className="font-semibold">{t(`historia.items.${i}.title`)}</p>
                    <p className="mt-1 text-sm text-muted">{t(`historia.items.${i}.text`)}</p>
                  </div>
                  <div className="z-10 hidden h-4 w-4 shrink-0 rounded-full border-2 border-accent bg-background md:block" />
                  <div className="md:hidden">
                    <h4 className="text-lg font-bold text-accent">{t(`historia.items.${i}.year`)}</h4>
                    <p className="font-semibold">{t(`historia.items.${i}.title`)}</p>
                    <p className="mt-1 text-sm text-muted">{t(`historia.items.${i}.text`)}</p>
                  </div>
                  <div className={`flex-1 md:block ${i % 2 === 0 ? 'md:hidden' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 text-center text-xl font-bold">{t("valores.title")}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {valueItems.map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 text-3xl">{t(`valores.items.${i}.icon`)}</div>
                <h4 className="mb-1 font-bold">{t(`valores.items.${i}.title`)}</h4>
                <p className="text-sm text-muted">{t(`valores.items.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 rounded-xl border border-border bg-surface p-8 md:p-12">
          <h3 className="mb-6 text-center text-xl font-bold">{t("numeros.title")}</h3>
          <div className="grid gap-8 text-center md:grid-cols-4">
            {numberItems.map((_, i) => (
              <div key={i}>
                <div className="text-3xl font-extrabold text-accent">{t(`numeros.items.${i}.value`)}</div>
                <div className="text-sm text-muted">{t(`numeros.items.${i}.label`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="mb-4 text-muted">{t("cta.text")}</p>
          <Link
            href="/equipe"
            className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent-hover"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  )
}
