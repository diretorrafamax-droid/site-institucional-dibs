export function PainManual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="50" r="28" className="stroke-accent/40" strokeWidth="2" />
      <circle cx="140" cy="50" r="24" className="stroke-accent/20" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="50" x2="140" y2="32" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="140" y1="50" x2="158" y2="55" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" />
      <rect x="80" y="80" width="25" height="18" rx="3" className="stroke-accent/30" strokeWidth="1.5" />
      <rect x="175" y="80" width="25" height="18" rx="3" className="stroke-accent/30" strokeWidth="1.5" />
      <path d="M105 89 L175 89" className="stroke-accent/20" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="140" cy="89" r="4" className="fill-accent/40" />
      <path d="M130 85 L140 93 L150 85" className="stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="140" y="122" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">PROCESSOS MANUAIS E LENTOS</text>
    </svg>
  )
}
