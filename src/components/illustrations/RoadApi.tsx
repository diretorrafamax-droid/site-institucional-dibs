export function RoadApi({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="14" r="5" className="stroke-accent" strokeWidth="2" />
      <circle cx="36" cy="14" r="5" className="stroke-accent" strokeWidth="2" />
      <circle cx="24" cy="34" r="5" className="stroke-accent" strokeWidth="2" />
      <line x1="17" y1="14" x2="31" y2="14" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="19" x2="22" y2="29" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="19" x2="26" y2="29" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="7" y2="14" className="stroke-accent/30" strokeWidth="1.5" />
      <line x1="41" y1="14" x2="42" y2="14" className="stroke-accent/30" strokeWidth="1.5" />
    </svg>
  )
}
