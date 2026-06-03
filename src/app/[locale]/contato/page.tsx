'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'

export default function Contato() {
  const t = useTranslations("contato")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const services = [
    t("services.placeholder"),
    t("services.0"),
    t("services.1"),
    t("services.2"),
    t("services.3"),
    t("services.4"),
    t("services.5"),
    t("services.6"),
    t("services.7"),
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget as HTMLFormElement
    const data = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      empresa: (form.elements.namedItem('empresa') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefone: (form.elements.namedItem('telefone') as HTMLInputElement).value,
      servico_interesse: (form.elements.namedItem('servico') as HTMLSelectElement).value,
      mensagem: (form.elements.namedItem('mensagem') as HTMLTextAreaElement).value,
      origem: 'formulario',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || t("form.errorGeneric"))
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : t("form.error"))
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mb-6 text-6xl">{t("success.icon")}</div>
          <h1 className="text-3xl font-extrabold">{t("success.title")}</h1>
          <p className="mt-4 text-muted">{t("success.description")}</p>
          <a href="/servicos" className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 font-bold text-foreground transition-colors hover:bg-accent-hover">{t("success.cta")}</a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />
        <div className="flex flex-wrap gap-12">
          <form onSubmit={handleSubmit} className="min-w-[300px] flex-1">
            <div className="mb-4 flex flex-wrap gap-4">
              <div className="min-w-[200px] flex-1">
                <label className="mb-1 block text-xs font-semibold text-muted">{t("form.nome")}</label>
                <input name="nome" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder={t("form.nomePlaceholder")} />
              </div>
              <div className="min-w-[200px] flex-1">
                <label className="mb-1 block text-xs font-semibold text-muted">{t("form.empresa")}</label>
                <input name="empresa" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder={t("form.empresaPlaceholder")} />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap gap-4">
              <div className="min-w-[200px] flex-1">
                <label className="mb-1 block text-xs font-semibold text-muted">{t("form.email")}</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder={t("form.emailPlaceholder")} />
              </div>
              <div className="min-w-[200px] flex-1">
                <label className="mb-1 block text-xs font-semibold text-muted">{t("form.telefone")}</label>
                <input name="telefone" type="tel" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder={t("form.telefonePlaceholder")} />
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-xs font-semibold text-muted">{t("form.servico")}</label>
              <select name="servico" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none">
                {services.map((s, i) => <option key={s} disabled={i === 0} value={i === 0 ? '' : s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-xs font-semibold text-muted">{t("form.mensagem")}</label>
              <textarea name="mensagem" required rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none" placeholder={t("form.mensagemPlaceholder")} />
            </div>
            <div className="mb-4 flex items-start gap-2">
              <input type="checkbox" id="consent" required className="mt-1 shrink-0 rounded border-border accent-accent" />
              <label htmlFor="consent" className="text-xs text-muted">
                {t.rich("form.consent", {
                  link: (chunks) => <a href="/privacidade" className="text-accent underline">{chunks}</a>
                })}
              </label>
            </div>
            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-accent py-3.5 font-bold text-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50">{loading ? t("form.submitting") : t("form.submit")}</button>
          </form>
          <div className="flex w-80 flex-col gap-6">
            <a href="https://wa.me/5584999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90">
              <span className="text-2xl">💬</span> {t("sidebar.whatsapp")}
            </a>
            <div className="rounded-xl bg-surface p-6">
              <h4 className="mb-2 text-sm font-bold">{t("sidebar.reuniao.title")}</h4>
              <p className="text-sm text-muted">{t("sidebar.reuniao.description")}</p>
            </div>
            <div className="rounded-xl bg-surface p-6">
              <h4 className="mb-2 text-sm font-bold">{t("sidebar.local.title")}</h4>
              <p className="text-sm text-muted">{t("sidebar.local.description")}</p>
            </div>
            <div className="rounded-xl bg-surface p-6">
              <h4 className="mb-2 text-sm font-bold">{t("sidebar.email.title")}</h4>
              <p className="text-sm text-muted">{t("sidebar.email.value")}</p>
            </div>
            <div className="rounded-xl bg-surface p-6">
              <h4 className="mb-2 text-sm font-bold">{t("sidebar.horario.title")}</h4>
              <p className="text-sm text-muted">{t("sidebar.horario.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
