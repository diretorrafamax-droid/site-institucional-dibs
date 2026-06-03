export function RoadFrontend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="26" rx="4" className="stroke-accent" strokeWidth="2" />
      <line x1="10" y1="18" x2="38" y2="18" className="stroke-accent/40" strokeWidth="1.5" />
      <line x1="10" y1="24" x2="30" y2="24" className="stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="30" x2="26" y2="30" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="40" x2="32" y2="40" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="36" x2="24" y2="40" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
