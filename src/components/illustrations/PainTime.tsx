export function PainTime({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="60" r="30" className="stroke-accent/40" strokeWidth="2.5" />
      <circle cx="140" cy="60" r="28" className="fill-accent/5" strokeWidth="0" />
      <line x1="140" y1="60" x2="140" y2="42" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="140" y1="60" x2="160" y2="65" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="140" cy="60" r="4" className="fill-accent" />
      <path d="M190 30 L210 30 L210 15" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M190 30 C195 20 205 18 210 15" className="stroke-accent/20" strokeWidth="1.5" fill="none" />
      <path d="M70 95 L90 95 L90 80" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 95 C75 105 85 107 90 108" className="stroke-accent/20" strokeWidth="1.5" fill="none" />
      <text x="140" y="118" textAnchor="middle" className="fill-muted/60" fontSize="8" fontFamily="sans-serif">TIME-TO-MARKET LENTO</text>
    </svg>
  )
}
