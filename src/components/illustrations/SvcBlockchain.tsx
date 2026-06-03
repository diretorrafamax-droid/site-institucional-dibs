export function SvcBlockchain({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="16" r="7" className="stroke-accent" strokeWidth="2" />
      <circle cx="24" cy="16" r="3" className="fill-accent/20" strokeWidth="0" />
      <rect x="14" y="28" width="8" height="14" rx="2" className="stroke-accent/40" strokeWidth="1.5" />
      <rect x="26" y="28" width="8" height="14" rx="2" className="stroke-accent/40" strokeWidth="1.5" />
      <line x1="18" y1="28" x2="22" y2="23" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="28" x2="26" y2="23" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="35" x2="36" y2="35" className="stroke-accent/20" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  )
}
