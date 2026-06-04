import { Link } from '@/i18n/navigation'

interface CaseCardProps {
  category: string
  title: string
  description: string
  image?: string
  metric?: string
  techs?: string[]
  href?: string
}

export function CaseCard({ category, title, description, image, metric, techs, href }: CaseCardProps) {
  const Wrapper = href ? Link : 'div'

  return (
    <Wrapper
      href={href ?? '#'}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden bg-muted/20">
        {image ? (
          <>
            <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-5xl">📸</span>
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
        <p className="mb-3 text-sm leading-relaxed text-muted">{description}</p>
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
          <span className="text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Ver detalhes <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Wrapper>
  )
}
