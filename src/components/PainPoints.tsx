interface PainPoint {
  icon: string
  problem: string
  solution: string
}

interface PainPointsProps {
  title?: string
  points: PainPoint[]
}

export function PainPoints({ title = 'Pain points we solve', points }: PainPointsProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-8">
      <h3 className="mb-6 text-xl font-bold">{title}</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {points.map(p => (
          <div key={p.problem} className="space-y-2">
            <div className="text-2xl">{p.icon}</div>
            <p className="font-bold">{p.problem}</p>
            <p className="text-sm text-muted">{p.solution}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
