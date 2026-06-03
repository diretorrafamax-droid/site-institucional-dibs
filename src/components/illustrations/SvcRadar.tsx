export function SvcRadar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" className="stroke-accent/20" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="11" className="stroke-accent/40" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="6" className="stroke-accent/60" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" className="fill-accent" strokeWidth="0" />
      <line x1="24" y1="8" x2="24" y2="18" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="24" y2="40" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="24" x2="18" y2="24" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="24" x2="40" y2="24" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
