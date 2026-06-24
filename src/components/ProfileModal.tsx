'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { TeamProfile } from '@/data/team-profiles'
import { FlagIcon } from '@/components/FlagIcon'

function Badge({ type, t }: { type: 'ia' | 'real'; t: (key: string) => string }) {
  if (type === 'real') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-green-400">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
        {t("badgeReal")}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z" /><path d="M18 12a6 6 0 0 1-12 0" /><path d="M12 18v4" />
      </svg>
      {t("badgeIA")}
    </span>
  )
}

function SocialIcon({ platform, url }: { platform: string; url: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    twitter: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M17.232 6.232L20 4" />
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 text-muted transition-colors hover:bg-accent hover:text-white"
      title={platform}
    >
      {icons[platform] || null}
    </a>
  )
}

function Divider() {
  return <div className="my-4 h-px bg-border" />
}

interface ProfileModalProps {
  profile: TeamProfile
  onClose: () => void
}

export function ProfileModal({ profile, onClose }: ProfileModalProps) {
  const tc = useTranslations("common")
  const tl = useTranslations("profileModal")

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-muted transition-colors hover:bg-accent hover:text-white"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Photo column */}
          <div className="flex shrink-0 items-start justify-center p-6 pb-0 md:p-8 md:pb-8">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                {profile.photo ? (
                  <picture>
                    <source srcSet={profile.photo.replace(/\.\w+$/, '.webp')} type="image/webp" />
                    <img src={profile.photo} alt={profile.name} width={200} height={200} className="h-[180px] w-[180px] object-cover md:h-[220px] md:w-[220px]" />
                  </picture>
                ) : (
                  <div className="flex h-[180px] w-[180px] items-center justify-center bg-surface md:h-[220px] md:w-[220px]">
                    <svg width="120" height="120" viewBox="0 0 400 400">
                      <defs>
                        <linearGradient id={`g-${profile.initials}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={profile.color} />
                          <stop offset="100%" stopColor="#000" />
                        </linearGradient>
                      </defs>
                      <rect width="400" height="400" rx="200" fill={`url(#g-${profile.initials})`} />
                      <text x="200" y="220" fontFamily="Inter, sans-serif" fontSize="120" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle">
                        {profile.initials}
                      </text>
                    </svg>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2">
                <Badge type={profile.type} t={tc} />
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="min-w-0 flex-1 overflow-y-auto p-6 pt-4 md:p-8" style={{ maxHeight: '70vh' }}>
            {/* Name header */}
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-foreground">{profile.name}</h3>
              <FlagIcon code={profile.countryCode} />
            </div>
            <p className="mt-0.5 text-sm text-accent">{profile.role}</p>
            <div className="mt-1 flex items-center gap-3 text-xs text-muted">
              <span>{tc("age", { age: profile.age })}</span>
              <span className="text-border">•</span>
              <span>{profile.country}</span>
            </div>
            {profile.social && (
              <div className="mt-2 flex items-center gap-1.5">
                {profile.social.instagram && <SocialIcon platform="instagram" url={`https://instagram.com/${profile.social.instagram}`} />}
                {profile.social.facebook && <SocialIcon platform="facebook" url={`https://facebook.com/${profile.social.facebook}`} />}
                {profile.social.twitter && <SocialIcon platform="twitter" url={`https://x.com/${profile.social.twitter}`} />}
                {profile.social.linkedin && <SocialIcon platform="linkedin" url={`https://linkedin.com/in/${profile.social.linkedin}`} />}
              </div>
            )}

            {/* Bio */}
            <div className="mt-4">
              <p className="text-sm leading-relaxed text-foreground/80">{profile.bio}</p>
            </div>

            <Divider />

            {/* Lifestyle & Hobbies */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{tl("labels.lifestyle")}</h4>
                <p className="text-sm leading-relaxed text-foreground/70">{profile.lifestyle}</p>
              </div>
              <div>
                <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{tl("labels.hobbies")}</h4>
                <p className="text-sm leading-relaxed text-foreground/70">{profile.hobbies}</p>
              </div>
            </div>

            <Divider />

            {/* Education & Experience */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{tl("labels.education")}</h4>
                <p className="text-sm leading-relaxed text-foreground/70">{profile.education}</p>
              </div>
              <div>
                <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{tl("labels.experience")}</h4>
                <p className="text-sm leading-relaxed text-foreground/70">{profile.experience}</p>
              </div>
            </div>

            <Divider />

            {/* Curriculum list */}
            <div>
              <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">{tl("labels.curriculum")}</h4>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {profile.curriculum.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
