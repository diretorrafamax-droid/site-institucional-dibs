import { Avatar } from './Avatar'

interface TeamMember {
  name: string
  role: string
  initials: string
  color: string
  photo?: string
  competencias: string[]
}

interface TeamShowcaseProps {
  title?: string
  members: TeamMember[]
}

export function TeamShowcase({ title = 'Equipe', members }: TeamShowcaseProps) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold">{title}</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map(m => (
          <div key={m.name} className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4">
            <Avatar initials={m.initials} color={m.color} photo={m.photo} size={56} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">{m.name}</p>
              <p className="text-xs text-accent">{m.role}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {m.competencias.map(c => (
                  <span key={c} className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
