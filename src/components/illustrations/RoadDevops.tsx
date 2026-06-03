export function RoadDevops({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 18 L38 14 L38 24 Z" className="stroke-accent" strokeWidth="2" strokeLinejoin="round" />
      <line x1="34" y1="24" x2="34" y2="30" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="30" x2="38" y2="30" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="24" r="4" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="14" cy="24" r="1.5" className="stroke-accent/60" strokeWidth="1.5" />
      <line x1="18" y1="24" x2="26" y2="24" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="24" x2="14" y2="20" className="stroke-accent/20" strokeWidth="1" strokeLinecap="round" />
      <line x1="14" y1="20" x2="14" y2="28" className="stroke-accent/20" strokeWidth="1" />
      <rect x="30" y="32" width="8" height="6" rx="1" className="stroke-accent/30" strokeWidth="1.5" />
    </svg>
  )
}
