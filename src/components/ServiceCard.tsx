import Link from 'next/link'
import type { ComponentType, SVGProps } from 'react'

interface ServiceCardProps {
  icon?: string
  Illustration?: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  leader?: string
  href?: string
}

export function ServiceCard({ icon, Illustration, title, description, leader, href }: ServiceCardProps) {
  const Wrapper = href ? Link : 'div'
  return (
    <Wrapper href={href ?? '#'} className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg md:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
        {Illustration ? <Illustration className="h-7 w-7" /> : <span className="text-2xl">{icon}</span>}
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
      {leader && <p className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{leader}</p>}
    </Wrapper>
  )
}
