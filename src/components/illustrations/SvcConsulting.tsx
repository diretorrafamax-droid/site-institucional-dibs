export function SvcConsulting({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" className="stroke-accent" strokeWidth="2" />
      <circle cx="24" cy="24" r="10" className="stroke-accent/30" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="4" className="fill-accent/20" strokeWidth="0" />
      <line x1="24" y1="8" x2="24" y2="14" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="34" x2="24" y2="40" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="24" x2="14" y2="24" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="24" x2="40" y2="24" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 18 L22 22" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 30 L26 26" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
