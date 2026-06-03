interface TechTagsProps {
  title?: string
  categories: { name: string; items: string[] }[]
}

export function TechTags({ title = 'Tecnologias', categories }: TechTagsProps) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map(cat => (
          <div key={cat.name} className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 text-sm font-bold">{cat.name}</p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <span key={item} className="inline-block rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
