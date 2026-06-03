interface CaseCardProps {
  category: string
  title: string
  description: string
  image?: string
}

export function CaseCard({ category, title, description, image }: CaseCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-muted/20 p-8">
        {image ? (
          <img src={image} alt={title} className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <span className="text-5xl">📸</span>
        )}
      </div>
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[1px] text-accent">{category}</p>
        <h3 className="mb-1 text-base font-bold">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  )
}
