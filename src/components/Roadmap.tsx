interface RoadmapItem {
  icon?: string
  Illustration?: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight?: boolean
}

interface RoadmapProps {
  title?: string
  subtitle?: string
  items: RoadmapItem[]
}

export function Roadmap({ title = 'O que entregamos', subtitle, items }: RoadmapProps) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      {subtitle && <p className="mb-10 max-w-lg text-sm text-muted">{subtitle}</p>}
      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-accent/20 md:left-1/2 md:-translate-x-px" />
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={item.title} className={`relative flex flex-col gap-4 md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className={`rounded-xl border ${item.highlight ? 'border-accent bg-accent/5' : 'border-border bg-surface'} p-6 transition-all hover:-translate-y-0.5 hover:shadow-md`}>
                  <div className="mb-3">{item.Illustration ? <item.Illustration className="h-10 w-10" /> : <span className="text-2xl">{item.icon}</span>}</div>
                  <h4 className="mb-1 font-bold">{item.title}</h4>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </div>
              {/* Connector dot */}
              <div className="absolute left-6 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2" />
              {/* Spacer for mobile */}
              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
