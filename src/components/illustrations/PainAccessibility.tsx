export function PainAccessibility({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="30" r="10" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="140" cy="30" r="4" className="fill-accent/20" strokeWidth="0" />
      <path d="M125 55 L140 50 L155 55 L155 78 L170 100 L155 100 L145 80 L135 80 L125 100 L110 100 L125 78 Z" className="stroke-accent/40" strokeWidth="2" strokeLinejoin="round" />
      <path d="M125 55 L140 50 L155 55" className="fill-accent/10" strokeWidth="0" />
      <rect x="115" y="48" width="50" height="3" rx="1.5" className="fill-accent/30" />
      <path d="M190 40 Q210 40 220 55 L225 70" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M90 40 Q70 40 60 55 L55 70" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" fill="none" />
      <text x="140" y="120" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">ACESSIBILIDADE IGNORADA</text>
    </svg>
  )
}
