export function RoadMobile({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="4" width="20" height="40" rx="4" className="stroke-accent" strokeWidth="2" />
      <line x1="20" y1="10" x2="28" y2="10" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="18" y="14" width="12" height="16" rx="2" className="stroke-accent/60" strokeWidth="1.5" />
      <line x1="22" y1="17" x2="26" y2="17" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="21" x2="26" y2="21" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="25" x2="24" y2="25" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="36" r="2" className="stroke-accent/50" strokeWidth="1.5" />
    </svg>
  )
}
