import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img src="/assets/vectors/logo-dark.svg" alt={t('alt.logo')} className="mb-3 hidden h-8 w-auto dark:block" />
            <img src="/assets/vectors/logo-light.svg" alt={t('alt.logo')} className="mb-3 block h-8 w-auto dark:hidden" />
            <p className="text-sm text-muted">{t('company.description')}<br/>{t('company.location')}</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold">{t('sectionTitle.servicos')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/servicos" className="hover:text-accent">{t('links.servicos.software')}</Link>
              <Link href="/servicos" className="hover:text-accent">{t('links.servicos.designUI')}</Link>
              <Link href="/servicos" className="hover:text-accent">{t('links.servicos.conteudo')}</Link>
              <Link href="/servicos" className="hover:text-accent">{t('links.servicos.blockchain')}</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold">{t('sectionTitle.empresa')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/sobre" className="hover:text-accent">{t('links.empresa.sobre')}</Link>
              <Link href="/cases" className="hover:text-accent">{t('links.empresa.cases')}</Link>
              <Link href="/contato" className="hover:text-accent">{t('links.empresa.contato')}</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold">{t('sectionTitle.legal')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/privacidade" className="hover:text-accent">{t('links.legal.privacidade')}</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          {t('copyright', { year })}
        </div>
      </div>
    </footer>
  )
}
