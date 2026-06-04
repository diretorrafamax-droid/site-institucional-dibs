'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { Avatar } from '@/components/Avatar'
import { PhotoLightbox } from '@/components/PhotoLightbox'
import { ProfileModal } from '@/components/ProfileModal'
import { ceoProfile, leaderProfiles, departmentProfiles, TeamProfile } from '@/data/team-profiles'
import { FlagIcon } from '@/components/FlagIcon'

const leaderKeys = ['einstein', 'daniel', 'andre', 'heitor', 'thor', 'ives', 'jhon', 'samuel', 'lucas', 'amanda']
const deptKeys = ['desenvolvimento', 'design', 'conteudo', 'orquestracao', 'seguranca', 'blockchain', 'consultoriaMemoria', 'quantTrading', 'comercial', 'marketing']
const memberKeys: string[][] = [
  ['sofia', 'carlos', 'alan', 'arthur', 'igor', 'felipe', 'miguel'],
  ['cesarJunior', 'marioReis'],
  ['davi', 'noah', 'benjamim', 'celia', 'tarsila', 'lis', 'leila', 'valerio'],
  ['atlas', 'jesus', 'shakespeare', 'henry', 'luciano'],
  ['helena', 'bruno', 'julio', 'helenaMendes', 'jamesCarter', 'sophieMueller', 'carlosMendoza', 'emilyChen', 'robertBlack', 'mariaSantos', 'alexanderRisk'],
  ['gavin', 'vitalik', 'hayden', 'andrew', 'cronje', 'willy', 'illia', 'brendan', 'ameen', 'delton'],
  ['paulo'],
  ['duff', 'otto'],
]

const badgeClasses = 'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold'

export default function Equipe() {
  const t = useTranslations("equipe")
  const tc = useTranslations("common")
  const [lightbox, setLightbox] = useState<{ src: string; name: string } | null>(null)
  const [modalProfile, setModalProfile] = useState<TeamProfile | null>(null)

  const badgeReal = tc("badgeReal")
  const badgeIA = tc("badgeIA")

  function Badge({ type }: { type: 'ia' | 'real' }) {
    if (type === 'real') {
      return (
        <span className={`${badgeClasses} bg-green-500/15 text-green-400`}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          {badgeReal}
        </span>
      )
    }
    return (
      <span className={`${badgeClasses} bg-accent/15 text-accent`}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z" /><path d="M18 12a6 6 0 0 1-12 0" /><path d="M12 18v4" />
        </svg>
        {badgeIA}
      </span>
    )
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />

        <div className="mb-16 mx-auto max-w-2xl">
          <div
            onClick={() => setModalProfile(ceoProfile)}
            className="group flex cursor-pointer flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md md:p-8"
          >
            <div className="flex flex-1 items-center gap-6">
              <div className="relative shrink-0" onClick={e => { e.stopPropagation(); if (ceoProfile.photo) setLightbox({ src: ceoProfile.photo, name: ceoProfile.name }) }}>
                <Avatar initials={ceoProfile.initials} color={ceoProfile.color} photo={ceoProfile.photo} size={120} />
                <div className="absolute -bottom-1 -right-1"><Badge type={ceoProfile.type} /></div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{ceoProfile.name}</h3>
                  <FlagIcon code={ceoProfile.countryCode} />
                </div>
                <p className="text-sm text-accent">{ceoProfile.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t("profiles.ceo.bio")}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  {ceoProfile.social?.instagram && (
                    <a href={`https://instagram.com/${ceoProfile.social.instagram}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 text-muted transition-colors hover:bg-accent hover:text-white" title="Instagram">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                  )}
                  {ceoProfile.social?.facebook && (
                    <a href={`https://facebook.com/${ceoProfile.social.facebook}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 text-muted transition-colors hover:bg-accent hover:text-white" title="Facebook">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                  )}
                  {ceoProfile.social?.twitter && (
                    <a href={`https://x.com/${ceoProfile.social.twitter}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 text-muted transition-colors hover:bg-accent hover:text-white" title="X (Twitter)">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M17.232 6.232L20 4" /></svg>
                    </a>
                  )}
                  {ceoProfile.social?.linkedin && (
                    <a href={`https://linkedin.com/in/${ceoProfile.social.linkedin}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 text-muted transition-colors hover:bg-accent hover:text-white" title="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
              <span className="ml-2 align-middle">{tc("clickToKnow")}</span>
            </p>
          </div>
        </div>

        <h3 className="mb-8 text-center text-lg font-bold">{t("leadersTitle")}</h3>
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {leaderProfiles.map((p, i) => (
            <div key={p.name}>
              <div
                onClick={() => setModalProfile(p)}
                className="group flex cursor-pointer flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <div className="flex flex-1 items-center gap-5">
                  <div className="relative shrink-0" onClick={e => { e.stopPropagation(); if (p.photo) setLightbox({ src: p.photo, name: p.name }) }}>
                    <Avatar initials={p.initials} color={p.color} photo={p.photo} size={80} />
                    <div className="absolute -bottom-1 -right-1"><Badge type={p.type} /></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold">{p.name}</h4>
                      <FlagIcon code={p.countryCode} />
                    </div>
                    <p className="text-xs text-accent">{p.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t(`profiles.leaders.${leaderKeys[i]}.bio`)}</p>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                  <span className="ml-2 align-middle">{tc("clickToKnow")}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {lightbox && <PhotoLightbox src={lightbox.src} alt={lightbox.name} onClose={() => setLightbox(null)} />}
        {modalProfile && <ProfileModal profile={modalProfile} onClose={() => setModalProfile(null)} />}

        <h3 className="mb-8 text-center text-lg font-bold">{t("departmentsTitle")}</h3>
        <div className="space-y-10">
          {departmentProfiles.map((d, di) => (
            <div key={d.name}>
              <div className="mb-4 flex items-center gap-3">
                <h4 className="text-lg font-bold">{d.name}</h4>
                <span className="text-xs text-muted">— {t(`profiles.departments.${deptKeys[di]}.description`)}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {d.members.map((m, mi) => (
                  <div key={m.name}>
                    <div
                      onClick={() => setModalProfile(m)}
                      className="group flex cursor-pointer flex-col rounded-xl border border-border bg-surface p-3 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
                    >
                      <div className="flex flex-1 items-center gap-3">
                        <div className="relative shrink-0" onClick={e => { e.stopPropagation(); if (m.photo) setLightbox({ src: m.photo, name: m.name }) }}>
                          <Avatar initials={m.initials} color={m.color} photo={m.photo} size={56} />
                          <div className="absolute -bottom-1 -right-1"><Badge type={m.type} /></div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-semibold">{m.name}</p>
                            <FlagIcon code={m.countryCode} />
                          </div>
                          <p className="text-xs text-accent">{m.role}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-center text-[11px] font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                        <span className="ml-2 align-middle">{tc("clickToKnow")}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
