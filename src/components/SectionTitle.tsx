export function SectionTitle({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-accent">{label}</p>
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-md text-muted">{subtitle}</p>}
    </div>
  )
}
