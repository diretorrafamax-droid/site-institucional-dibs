export function SvcDesign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="24" height="30" rx="4" className="stroke-accent" strokeWidth="2" />
      <rect x="34" y="14" width="10" height="10" rx="2" className="stroke-accent/40" strokeWidth="1.5" />
      <circle cx="18" cy="32" r="3" className="fill-accent/30" strokeWidth="0" />
      <circle cx="18" cy="20" r="3" className="fill-accent/50" strokeWidth="0" />
      <rect x="12" y="26" width="12" height="2" rx="1" className="fill-accent/20" strokeWidth="0" />
      <line x1="36" y1="30" x2="42" y2="36" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <circle cx="37" cy="29" r="1.5" className="fill-accent" strokeWidth="0" />
    </svg>
  )
}
