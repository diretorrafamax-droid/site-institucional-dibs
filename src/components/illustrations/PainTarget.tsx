export function PainTarget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="50" r="30" className="stroke-accent/20" strokeWidth="1.5" />
      <circle cx="140" cy="50" r="20" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="140" cy="50" r="10" className="stroke-accent/60" strokeWidth="2" />
      <circle cx="140" cy="50" r="5" className="fill-accent" />
      <line x1="180" y1="30" x2="175" y2="40" className="stroke-accent/50" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="180" y1="30" x2="170" y2="30" className="stroke-accent/50" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="100" y1="75" x2="105" y2="68" className="stroke-accent/50" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="100" y1="75" x2="110" y2="78" className="stroke-accent/50" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="140" y1="95" x2="140" y2="90" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <text x="140" y="122" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">SEM MÉTRICAS OBJETIVAS</text>
    </svg>
  )
}
