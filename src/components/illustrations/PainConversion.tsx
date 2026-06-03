export function PainConversion({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M60 95 L140 25 L220 95 Z" className="stroke-accent/20" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M60 95 L140 25 L220 95" className="fill-accent/5" strokeWidth="0" />
      <line x1="140" y1="25" x2="140" y2="75" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
      <line x1="100" y1="95" x2="100" y2="80" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="95" x2="120" y2="65" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="95" x2="140" y2="75" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <line x1="160" y1="95" x2="160" y2="85" className="stroke-accent/20" strokeWidth="2" strokeLinecap="round" />
      <line x1="180" y1="95" x2="180" y2="88" className="stroke-accent/15" strokeWidth="2" strokeLinecap="round" />
      <line x1="90" y1="102" x2="190" y2="102" className="stroke-accent/20" strokeWidth="1.5" strokeLinecap="round" />
      <text x="140" y="122" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">BAIXA TAXA DE CONVERSÃO</text>
    </svg>
  )
}
