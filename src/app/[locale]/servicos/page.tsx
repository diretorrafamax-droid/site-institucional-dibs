import { getTranslations } from 'next-intl/server'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCard } from '@/components/ServiceCard'
import { SvcSoftware, SvcDesign, SvcContent, SvcBlockchain, SvcFinance, SvcRadar, SvcSecurity, SvcConsulting } from '@/components/illustrations'

const illustrations = [SvcSoftware, SvcDesign, SvcContent, SvcBlockchain, SvcFinance, SvcRadar, SvcSecurity, SvcConsulting]
const hrefs = ['/servicos/software-development', '/servicos/design-ui-ux', '/servicos/conteudo-publicacao', '/servicos/blockchain', '/servicos/automacoes-financeiras', '/servicos/radar-dibs', '/servicos/auditoria-seguranca', '/servicos/consultoria']

export default async function ServicosPage() {
  const t = await getTranslations('servicos')
  const services = Array.from({ length: 8 }, (_, i) => ({
    Illustration: illustrations[i],
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    leader: t(`items.${i}.leader`),
    href: hrefs[i],
  }))

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle label={t('pageTitle.label')} title={t('pageTitle.title')} subtitle={t('pageTitle.subtitle')} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(s => <ServiceCard key={s.title} Illustration={s.Illustration} title={s.title} description={s.description} leader={s.leader} href={s.href} />)}
        </div>
      </div>
    </section>
  )
}
