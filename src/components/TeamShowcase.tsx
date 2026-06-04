'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'
import { FlagIcon } from './FlagIcon'
import { ProfileModal } from './ProfileModal'
import { leaderProfiles, departmentProfiles } from '@/data/team-profiles'
import type { TeamProfile } from '@/data/team-profiles'

const profileMap = new Map<string, TeamProfile>()

for (const lp of leaderProfiles) {
  profileMap.set(lp.name, lp)
}
for (const dp of departmentProfiles) {
  for (const m of dp.members) {
    profileMap.set(m.name, m)
  }
}

interface TeamMember {
  name: string
  role: string
  initials: string
  color: string
  photo?: string
  countryCode: string
  type?: 'ia' | 'real'
  competencias: string[]
}

interface TeamShowcaseProps {
  title?: string
  members: TeamMember[]
}

export function TeamShowcase({ title = 'Equipe', members }: TeamShowcaseProps) {
  const [modalProfile, setModalProfile] = useState<TeamProfile | null>(null)

  const openModal = (m: TeamMember) => {
    const full = profileMap.get(m.name)
    if (full) {
      setModalProfile(full)
    } else {
      setModalProfile({
        name: m.name,
        role: m.role,
        initials: m.initials,
        color: m.color,
        photo: m.photo,
        bio: '',
        type: m.type ?? 'ia',
        country: '',
        countryCode: m.countryCode,
        age: 0,
        lifestyle: '',
        hobbies: '',
        education: '',
        experience: '',
        curriculum: [],
      })
    }
  }

  return (
    <>
      <div>
        <h3 className="mb-6 text-xl font-bold">{title}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(m => (
            <button
              key={m.name}
              onClick={() => openModal(m)}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <Avatar initials={m.initials} color={m.color} photo={m.photo} size={56} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold">{m.name}</p>
                  <FlagIcon code={m.countryCode} />
                </div>
                <p className="text-xs text-accent">{m.role}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {m.competencias.map(c => (
                    <span key={c} className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">{c}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {modalProfile && <ProfileModal profile={modalProfile} onClose={() => setModalProfile(null)} />}
    </>
  )
}