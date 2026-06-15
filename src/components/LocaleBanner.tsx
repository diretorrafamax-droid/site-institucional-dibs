'use client'

import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

interface BannerText {
  greeting: string
  message: string
  yes: string
  no: string
}

const LOCALE_MAP: Record<string, string> = {
  pt: 'pt', 'pt-BR': 'pt', 'pt-PT': 'pt',
  es: 'es', 'es-ES': 'es', 'es-MX': 'es', 'es-AR': 'es',
  fr: 'fr', 'fr-FR': 'fr', 'fr-CA': 'fr',
  de: 'de', 'de-DE': 'de', 'de-AT': 'de', 'de-CH': 'de',
}

const BANNER_TEXTS: Record<string, BannerText> = {
  pt: {
    greeting: 'Bem-vindo! 🇧🇷',
    message: 'Percebemos que está acessando de uma região que fala português. Deseja mudar o idioma do site?',
    yes: 'Sim, mudar para Português!',
    no: 'Continuar em Inglês',
  },
  es: {
    greeting: '¡Bienvenido!',
    message: 'Notamos que está accediendo desde una región de habla hispana. ¿Desea cambiar el idioma?',
    yes: 'Sí, cambiar a Español',
    no: 'Mantenerse en Inglés',
  },
  fr: {
    greeting: 'Bienvenue !',
    message: 'Nous avons remarqué que vous accédez depuis une région francophone. Souhaitez-vous changer de langue ?',
    yes: 'Oui, passer au Français',
    no: 'Rester en Anglais',
  },
  de: {
    greeting: 'Willkommen!',
    message: 'Wir haben bemerkt, dass Sie aus einem deutschsprachigen Bereich zugreifen. Möchten Sie die Sprache wechseln?',
    yes: 'Ja, auf Deutsch wechseln',
    no: 'Auf Englisch bleiben',
  },
  en: {
    greeting: 'Welcome! 🌎',
    message: "We noticed you're accessing from an English-speaking region. Would you like to switch to English?",
    yes: 'Yes, switch to English!',
    no: 'Stay in English',
  },
}

export function LocaleBanner() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [detectedLocale, setDetectedLocale] = useState<string | null>(null)
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('locale-banner-dismissed')
    if (stored === 'true') {
      setDismissed(true)
      return
    }

    const browserLang = navigator.language || ''
    const detected = LOCALE_MAP[browserLang] || 'en'
    setDetectedLocale(detected)

    if (detected !== locale) {
      setDismissed(false)
    }
  }, [locale])

  if (dismissed || !detectedLocale) return null

  const text = BANNER_TEXTS[detectedLocale] || BANNER_TEXTS.en

  const handleSwitch = () => {
    setDismissed(true)
    localStorage.setItem('locale-banner-dismissed', 'true')
    router.replace(pathname, { locale: detectedLocale })
  }

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem('locale-banner-dismissed', 'true')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-accent text-white p-4 shadow-lg border-t border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0 flex-1">
          <p className="font-bold text-lg">{text.greeting}</p>
          <p className="text-sm opacity-90">{text.message}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleSwitch}
            className="px-5 py-2.5 bg-white text-accent rounded-lg font-semibold hover:bg-gray-100 transition text-sm"
          >
            {text.yes}
          </button>
          <button
            onClick={handleDismiss}
            className="px-5 py-2.5 border border-white/40 text-white rounded-lg hover:bg-white/10 transition text-sm"
          >
            {text.no}
          </button>
        </div>
      </div>
    </div>
  )
}