import { getTranslations } from 'next-intl/server'
import { SectionTitle } from '@/components/SectionTitle'

export default async function Privacidade() {
  const t = await getTranslations("privacidade")

  const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />
        <div className="prose prose-sm max-w-none text-muted">
          {sections.map(i => (
            <div key={i}>
              <h3 className="text-foreground">{t(`sections.${i}.title`)}</h3>
              {[1, 2, 3].map(p => {
                const key = `sections.${i}.p${p}`
                const val = t.has(key) ? t(key) : null
                return val ? <p key={p}>{val}</p> : null
              })}
              {t.has(`sections.${i}.items`) && (
                <ul>
                  {((t.raw(`sections.${i}.items`) as string[]) || []).map((item: string, j: number) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {i === 10 && (
                <p>
                  <strong>{t("sections.10.name")}</strong><br />
                  {t("sections.10.email")}<br />
                  {t("sections.10.location")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
