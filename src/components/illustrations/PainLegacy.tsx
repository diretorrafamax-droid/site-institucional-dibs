export function PainLegacy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" width="180" height="90" rx="6" className="stroke-muted/30" strokeWidth="2" />
      <rect x="60" y="30" width="160" height="70" rx="4" className="fill-muted/5" strokeWidth="0" />
      <path d="M70 45 L210 45" className="stroke-muted/20" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M70 55 L210 55" className="stroke-muted/20" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M70 65 L210 65" className="stroke-muted/20" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M70 75 L210 75" className="stroke-muted/20" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M70 85 L210 85" className="stroke-muted/20" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M90 30 C120 20 150 50 170 45" className="stroke-accent/40" strokeWidth="2" fill="none" />
      <path d="M130 55 C110 65 160 80 140 85" className="stroke-accent/30" strokeWidth="2" fill="none" />
      <path d="M100 75 C130 90 120 60 160 70" className="stroke-accent/20" strokeWidth="2" fill="none" />
      <text x="140" y="118" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">CÓDIGO LEGADO</text>
    </svg>
  )
}
