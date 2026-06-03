export function PainPrioritization({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M140 20 L200 50 L200 90 L140 110 L80 90 L80 50 Z" className="stroke-accent/30" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M140 20 L200 50 L140 70 L80 50 Z" className="fill-accent/10 stroke-accent/40" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M140 70 L200 50 L200 90 L140 110 Z" className="fill-accent/5 stroke-accent/20" strokeWidth="1" strokeLinejoin="round" />
      <path d="M140 70 L80 50 L80 90 L140 110 Z" className="fill-accent/5 stroke-accent/20" strokeWidth="1" strokeLinejoin="round" />
      <line x1="130" y1="75" x2="130" y2="90" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="150" y1="75" x2="150" y2="90" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <path d="M125 85 L140 92 L155 85" className="stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="140" y="122" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">DIFICULDADE DE PRIORIZAR</text>
    </svg>
  )
}
