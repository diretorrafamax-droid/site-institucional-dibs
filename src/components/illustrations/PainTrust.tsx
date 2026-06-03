export function PainTrust({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20 L140 10 L180 20 L180 55 Q180 80 140 100 Q100 80 100 55 Z" className="stroke-accent/40" strokeWidth="2" strokeLinejoin="round" />
      <path d="M120 55 L135 70 L160 45" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="200" y1="30" x2="220" y2="30" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
      <line x1="200" y1="40" x2="215" y2="40" className="stroke-accent/20" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" />
      <text x="140" y="120" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">FALTA DE CONFIANÇA DIGITAL</text>
    </svg>
  )
}
