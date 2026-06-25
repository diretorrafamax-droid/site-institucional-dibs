'use client'

import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { Avatar } from '@/components/Avatar'
import { PhotoLightbox } from '@/components/PhotoLightbox'
import { ProfileModal } from '@/components/ProfileModal'
import { ceoProfile, leaderProfiles, departmentProfiles, TeamProfile } from '@/data/team-profiles'
import { FlagIcon } from '@/components/FlagIcon'

const leaderKeys = ['einstein', 'daniel', 'andre', 'heitor', 'thor', 'ives', 'jhon', 'samuel', 'lucas', 'amanda']
const deptKeys = ['desenvolvimento', 'design', 'conteudo', 'orquestracao', 'seguranca', 'governanca', 'blockchain', 'consultoriaMemoria', 'comercial', 'marketing', 'quantTrading']

const memberKeys: string[][] = [
  ['sofia','carlos','alan','arthur','igor','felipe','miguel'],
  ['cesarJunior','marioReis'],
  ['davi','noah','benjamim','celia','tarsila','lis','leila','valerio'],
  ['atlas','jesus','shakespeare','henry','luciano'],
  ['helena','bruno','julio','helenaMendes','jamesCarter','sophieMueller','carlosMendoza','emilyChen','robertBlack','mariaSantos','alexanderRisk'],
  ['gavin','vitalik','hayden','andrew','cronje','willy','illia','brendan','ameen','delton'],
  ['paulo'],
  ['duff','otto'],
]

const deptId = (name: string) => 'dept-' + name.replace(/[^a-z0-9]/gi, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '')

function matchesQuery(p: TeamProfile, q: string) {
  if (!q) return true
  const lq = q.toLowerCase()
  return p.name.toLowerCase().includes(lq) || p.role.toLowerCase().includes(lq)
}

const badgeClasses = 'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold'

export default function Equipe() {
  const t = useTranslations("equipe")
  const tc = useTranslations("common")
  const [lightbox, setLightbox] = useState<{ src: string; name: string } | null>(null)
  const [modalProfile, setModalProfile] = useState<TeamProfile | null>(null)
  const [modalTKey, setModalTKey] = useState('')
  const [search, setSearch] = useState('')

  const memberTKeyMap = useMemo(() => {
    const map = new Map<string, string>()
    departmentProfiles.forEach((d, di) => {
      const keys = memberKeys[di] || []
      d.members.forEach((m, mi) => {
        const mk = keys[mi] || ''
        if (mk) map.set(m.name, 'profiles.departments.' + deptKeys[di] + '.members.' + mk)
      })
    })
    return map
  }, [])

  const badgeReal = tc("badgeReal")
  const badgeIA = tc("badgeIA")

  function translateProfile(p: TeamProfile, prefix: string): TeamProfile {
    const fields: (keyof TeamProfile)[] = ['bio','lifestyle','hobbies','education','experience','country']
    const out = { ...p }
    for (const f of fields) {
      try {
        const val = t(prefix + '.' + f)
        if (val && val !== prefix + '.' + f) (out as any)[f] = val
      } catch {}
    }
    return out
  }

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

  const showCeo = matchesQuery(ceoProfile, search)
  const filteredLeaders = useMemo(() => leaderProfiles.filter(p => matchesQuery(p, search)), [search])
  const filteredDepartments = useMemo(() => {
    if (!search) return departmentProfiles.map((d, di) => ({ ...d, deptKey: deptKeys[di] }))
    const lq = search.toLowerCase()
    return departmentProfiles.map((d, di) => {
      const deptNameMatch = d.name.toLowerCase().includes(lq) || t(`profiles.departments.${deptKeys[di]}.description`).toLowerCase().includes(lq)
      const filteredMembers = d.members.filter(m => matchesQuery(m, search))
      if (deptNameMatch) return { ...d, members: d.members, deptKey: deptKeys[di] }
      if (filteredMembers.length > 0) return { ...d, members: filteredMembers, deptKey: deptKeys[di] }
      return null
    }).filter(Boolean) as (typeof departmentProfiles[number] & { deptKey: string })[]
  }, [search])

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle label={t("pageTitle.label")} title={t("pageTitle.title")} subtitle={t("pageTitle.subtitle")} />

        <div className="relative mx-auto mb-8 max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground" title={t("clearSearch")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          )}
        </div>

        {!showCeo && filteredLeaders.length === 0 && filteredDepartments.every(d => d.members.length === 0) ? (
          <p className="py-20 text-center text-sm text-muted">{t("noResults")}</p>
        ) : (
          <>
            {showCeo && (
              <div className="mb-16 mx-auto max-w-2xl">
                <div
                  onClick={() => { setModalProfile(ceoProfile); setModalTKey('profiles.ceo') }}
                  className="group flex cursor-pointer flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md md:p-8"
                >
                  <div className="flex flex-1 items-center gap-6">
                    <div className="relative shrink-0" onClick={e => { e.stopPropagation(); if (ceoProfile.photo) setLightbox({ src: ceoProfile.photo, name: ceoProfile.name }) }}>
                      <Avatar initials={ceoProfile.initials} color={ceoProfile.color} photo={ceoProfile.photo} size={80} />
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
            )}

            {filteredLeaders.length > 0 && (
              <>
                <h3 className="mb-8 text-center text-lg font-bold">{t("leadersTitle")}</h3>
                <div className="mb-16 grid gap-6 md:grid-cols-2">
                  {filteredLeaders.map((p, i) => (
                    <div key={p.name}>
                      <div
                        onClick={() => { const idx = leaderProfiles.indexOf(p); setModalProfile(p); setModalTKey('profiles.leaders.' + leaderKeys[idx]) }}
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
              </>
            )}

            {lightbox && <PhotoLightbox src={lightbox.src} alt={lightbox.name} onClose={() => setLightbox(null)} />}
            {modalProfile && <ProfileModal profile={modalProfile} onClose={() => { setModalProfile(null); setModalTKey('') }} tEquipe={t} tPrefix={modalTKey} />}

            <h3 className="mb-6 text-center text-lg font-bold">{t("departmentsTitle")}</h3>

            <nav className="mb-10 flex flex-wrap justify-center gap-2">
              {filteredDepartments.map(d => (
                <a key={d.deptKey} href={`#${deptId(d.name)}`} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent">
                  {d.name}
                </a>
              ))}
            </nav>

            <div className="space-y-10">
              {filteredDepartments.map((d) => (
                <div key={d.name} id={deptId(d.name)}>
                  <div className="mb-4 flex items-center gap-3">
                    <h4 className="text-lg font-bold">{d.name}</h4>
                    <span className="text-xs text-muted">— {t(`profiles.departments.${d.deptKey}.description`)}</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {d.members.map(m => (
                      <div key={m.name}>
                        <div
                          onClick={() => { setModalProfile(m); setModalTKey(memberTKeyMap.get(m.name) || '') }}
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
                          {m.curriculum && m.curriculum.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {m.curriculum.slice(0, 2).map((skill, si) => (
                                <span key={si} className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] text-accent">
                                  {skill.length > 24 ? skill.slice(0, 22) + '…' : skill}
                                </span>
                              ))}
                            </div>
                          )}
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

            <div className="mt-20 rounded-xl border border-border bg-surface p-8 text-center">
              <h3 className="text-xl font-bold">{t("cta.title")}</h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">{t("cta.description")}</p>
              <a
                href="/orcamento"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:-translate-y-0.5"
              >
                {t("cta.button")}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
