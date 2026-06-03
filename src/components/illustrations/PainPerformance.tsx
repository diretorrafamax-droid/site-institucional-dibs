export function PainPerformance({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="70" width="220" height="35" rx="4" className="fill-muted/10 stroke-muted/30" strokeWidth="1.5" />
      <rect x="45" y="80" width="14" height="25" rx="2" className="fill-accent/30" />
      <rect x="72" y="60" width="14" height="45" rx="2" className="fill-accent/50" />
      <rect x="99" y="40" width="14" height="65" rx="2" className="fill-accent" />
      <rect x="126" y="55" width="14" height="50" rx="2" className="fill-accent/60" />
      <rect x="153" y="68" width="14" height="37" rx="2" className="fill-accent/30" />
      <rect x="180" y="78" width="14" height="27" rx="2" className="fill-muted/30" />
      <rect x="207" y="82" width="14" height="23" rx="2" className="fill-muted/20" />
      <line x1="230" y1="40" x2="250" y2="40" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="240" y1="30" x2="240" y2="50" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <text x="140" y="120" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">PERFORMANCE ESTAGNADA</text>
    </svg>
  )
}
