export function PainHiring({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="95" cy="40" r="16" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="95" cy="40" r="7" className="fill-accent/10" strokeWidth="0" />
      <path d="M75 60 Q95 55 115 60" className="stroke-accent/30" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="185" cy="40" r="16" className="stroke-muted/30" strokeWidth="2" />
      <circle cx="185" cy="40" r="7" className="fill-muted/10" strokeWidth="0" />
      <path d="M165 60 Q185 55 205 60" className="stroke-muted/20" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M120 40 L160 40" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" />
      <path d="M155 35 L165 40 L155 45" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="140" y="90" textAnchor="middle" className="fill-accent/40" fontSize="12" fontFamily="sans-serif" fontWeight="bold">?</text>
      <text x="140" y="118" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">DIFICULDADE DE CONTRATAR</text>
    </svg>
  )
}
