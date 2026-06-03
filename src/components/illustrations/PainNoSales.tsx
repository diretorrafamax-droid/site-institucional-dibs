export function PainNoSales({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="30" width="160" height="55" rx="4" className="fill-muted/10 stroke-muted/30" strokeWidth="1.5" />
      <rect x="120" y="40" width="14" height="40" rx="2" className="fill-accent/50" />
      <rect x="95" y="50" width="14" height="30" rx="2" className="fill-accent/30" />
      <rect x="145" y="35" width="14" height="45" rx="2" className="fill-accent/60" />
      <rect x="170" y="60" width="14" height="20" rx="2" className="fill-accent/20" />
      <rect x="75" y="60" width="14" height="20" rx="2" className="fill-muted/30" />
      <line x1="220" y1="40" x2="240" y2="30" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="220" y1="40" x2="230" y2="45" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="220" y1="60" x2="235" y2="70" className="stroke-muted/40" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
      <circle cx="235" cy="68" r="6" className="stroke-muted/40" strokeWidth="1.5" />
      <text x="140" y="120" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">CONTEÚDO QUE NÃO CONVERTE</text>
    </svg>
  )
}
