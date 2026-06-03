export function PainStrategy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="25" width="120" height="60" rx="4" className="stroke-accent/40" strokeWidth="2" />
      <rect x="50" y="25" width="120" height="18" rx="4" className="fill-accent/10" />
      <line x1="65" y1="33" x2="95" y2="33" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="33" x2="155" y2="33" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <rect x="65" y="52" width="35" height="22" rx="2" className="stroke-accent/30" strokeWidth="1.5" />
      <rect x="115" y="52" width="40" height="22" rx="2" className="stroke-accent/20" strokeWidth="1.5" />
      <line x1="185" y1="30" x2="210" y2="30" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="190" y1="25" x2="185" y2="30" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="185" y1="30" x2="190" y2="35" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="200" y1="40" x2="215" y2="40" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="48" x2="210" y2="48" className="stroke-accent/20" strokeWidth="1.5" strokeLinecap="round" />
      <text x="140" y="118" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">SEM ESTRATÉGIA EDITORIAL</text>
    </svg>
  )
}
