export function SvcFinance({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="32" height="24" rx="4" className="stroke-accent" strokeWidth="2" />
      <line x1="14" y1="30" x2="22" y2="24" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="24" x2="26" y2="32" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="32" x2="34" y2="22" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15" cy="32" r="2" className="fill-accent/30" strokeWidth="0" />
      <circle cx="34" cy="22" r="2" className="fill-accent/50" strokeWidth="0" />
      <line x1="8" y1="16" x2="16" y2="8" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="8" x2="40" y2="8" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="8" x2="40" y2="16" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
