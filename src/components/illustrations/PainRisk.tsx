export function PainRisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M140 20 L220 100 L60 100 Z" className="stroke-accent/40" strokeWidth="2" strokeLinejoin="round" />
      <path d="M140 20 L220 100 L60 100 Z" className="fill-accent/5" strokeWidth="0" />
      <line x1="140" y1="50" x2="140" y2="80" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="140" cy="92" r="3" className="fill-accent/60" />
      <circle cx="140" cy="42" r="4" className="fill-accent/30" strokeWidth="0" />
      <text x="140" y="122" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">RISCOS OPERACIONAIS E COMPLIANCE</text>
    </svg>
  )
}
