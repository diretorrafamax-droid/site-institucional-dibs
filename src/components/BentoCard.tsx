interface BentoCardProps {
  icon: string
  title: string
  description: string
  highlight?: boolean
}

export function BentoCard({ icon, title, description, highlight }: BentoCardProps) {
  return (
    <div className={`rounded-xl border ${highlight ? 'border-accent bg-accent/5 md:col-span-2' : 'border-border bg-surface'} p-6 transition-all hover:-translate-y-0.5 hover:shadow-md`}>
      <div className="mb-3 text-2xl">{icon}</div>
      <h4 className="mb-1 font-bold text-sm">{title}</h4>
      <p className="text-sm text-muted">{description}</p>
    </div>
  )
}
