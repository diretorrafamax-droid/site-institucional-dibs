export function PainCosts({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="60" r="25" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="140" cy="60" r="15" className="fill-accent/10" strokeWidth="0" />
      <text x="140" y="65" textAnchor="middle" className="fill-accent/60" fontSize="16" fontFamily="sans-serif" fontWeight="bold">R$</text>
      <path d="M100 100 L115 85 L125 95 L140 75 L155 92 L165 80 L180 100" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="115" cy="85" r="3" className="fill-accent/40" />
      <circle cx="140" cy="75" r="3" className="fill-accent/60" />
      <circle cx="165" cy="80" r="3" className="fill-accent/40" />
      <path d="M130 30 Q140 15 150 30" className="stroke-accent/40" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M160 35 Q170 20 180 35" className="stroke-accent/30" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 35 Q110 20 120 35" className="stroke-accent/30" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="140" y="118" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">CUSTOS CRESCENTES</text>
    </svg>
  )
}
