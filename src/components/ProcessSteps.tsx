interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  title?: string
  steps: Step[]
}

export function ProcessSteps({ title = 'Nosso Processo', steps }: ProcessStepsProps) {
  return (
    <div>
      <h3 className="mb-8 text-xl font-bold">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.number} className="relative rounded-xl border border-border bg-surface p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-foreground">{s.number}</div>
            <h4 className="mb-1 font-bold">{s.title}</h4>
            <p className="text-sm text-muted">{s.description}</p>
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-muted/30 md:block">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
