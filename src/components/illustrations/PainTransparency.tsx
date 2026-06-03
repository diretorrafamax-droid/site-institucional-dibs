export function PainTransparency({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" width="100" height="70" rx="4" className="stroke-accent/40" strokeWidth="2" />
      <line x1="65" y1="35" x2="135" y2="35" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="50" x2="120" y2="50" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="65" y1="62" x2="110" y2="62" className="stroke-accent/20" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="65" y1="74" x2="125" y2="74" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="185" cy="45" r="22" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="185" cy="45" r="18" className="stroke-accent/20" strokeWidth="1.5" />
      <line x1="185" y1="45" x2="200" y2="30" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="185" cy="45" r="3" className="fill-accent" />
      <text x="140" y="118" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">REGISTROS OPOSTOS E CENTRALIZADOS</text>
    </svg>
  )
}
