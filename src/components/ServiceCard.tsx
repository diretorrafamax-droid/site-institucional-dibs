import Link from 'next/link'
import type { ComponentType, SVGProps } from 'react'

interface ServiceCardProps {
  icon?: string
  Illustration?: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  hoverText?: string
  href?: string
}

export function ServiceCard({ icon, Illustration, title, description, hoverText, href }: ServiceCardProps) {
  const Wrapper = href ? Link : 'div'
  return (
    <Wrapper href={href ?? '#'} className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg md:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
        {Illustration ? <Illustration className="h-7 w-7" /> : <span className="text-2xl">{icon}</span>}
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="flex-1 text-sm text-muted">{description}</p>
      {hoverText && (
        <p className="mt-4 text-center text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
          <span className="ml-2 align-middle">{hoverText}</span>
        </p>
      )}
    </Wrapper>
  )
}
