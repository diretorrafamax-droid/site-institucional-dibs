export function SectionTitle({ label, title, titleAccent, subtitle }: { label: string; title: string; titleAccent?: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-accent">{label}</p>
      <h2 className="text-3xl font-extrabold md:text-4xl">
        {title} {titleAccent && <span className="text-accent">{titleAccent}</span>}
      </h2>
      {subtitle && <p className="mx-auto mt-3 max-w-xs text-sm text-muted md:max-w-md md:text-base">{subtitle}</p>}
    </div>
  )
}
