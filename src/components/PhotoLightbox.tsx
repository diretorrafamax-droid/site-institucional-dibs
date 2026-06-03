'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface PhotoLightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export function PhotoLightbox({ src, alt, onClose }: PhotoLightboxProps) {
  const t = useTranslations("photoLightbox")

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-xl transition-colors hover:bg-white/20"
        aria-label={t("aria.close")}
      >
        ✕
      </button>
      <div className="relative max-h-[85vh] max-w-[85vw] overflow-hidden rounded-2xl shadow-2xl" onClick={e => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-auto w-auto object-contain"
          style={{ maxHeight: '85vh', maxWidth: '85vw' }}
        />
      </div>
    </div>
  )
}
