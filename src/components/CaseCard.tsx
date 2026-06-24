'use client'

interface CaseCardProps {
  category: string
  title: string
  description: string
  image?: string
  metric?: string
  techs?: string[]
}

export function CaseCard({ category, title, description, image, metric, techs }: CaseCardProps) {
  const isWebp = image?.endsWith('.webp')
  return (
    <div className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-muted/20">
        {image ? (
          <>
            {isWebp ? (
              <picture>
                <source srcSet={image} type="image/webp" />
                <source srcSet={image.replace(/\.\w+$/, '.png')} type="image/png" />
                <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </picture>
            ) : (
              <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-accent/5">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted/40">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
        {metric && (
          <span className="absolute right-3 top-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-sm">
            {metric}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-[1px] text-accent">{category}</p>
        <h3 className="mb-1.5 text-base font-bold">{title}</h3>
        <p className="mb-3 text-sm leading-relaxed text-muted line-clamp-2">{description}</p>
        {techs && techs.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {techs.map(t => (
              <span key={t} className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
            Ver detalhes <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </div>
  )
}
