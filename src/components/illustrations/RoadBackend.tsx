export function RoadBackend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="6" width="20" height="14" rx="3" className="stroke-accent" strokeWidth="2" />
      <rect x="14" y="28" width="20" height="14" rx="3" className="stroke-accent" strokeWidth="2" />
      <line x1="24" y1="20" x2="24" y2="28" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="12" x2="30" y2="12" className="stroke-accent/50" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="34" x2="30" y2="34" className="stroke-accent/50" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="36" x2="14" y2="36" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="36" x2="42" y2="36" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
