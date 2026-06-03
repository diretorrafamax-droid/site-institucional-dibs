export function BlockchainIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="140,25 175,45 175,85 140,105 105,85 105,45" className="stroke-accent" strokeWidth="2" />
      <polygon points="140,35 163,48 163,78 140,91 117,78 117,48" className="fill-accent/15" strokeWidth="0" />
      <line x1="140" y1="105" x2="140" y2="118" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="175" y1="85" x2="210" y2="72" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="105" y1="85" x2="70" y2="72" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="210" y1="72" x2="210" y2="58" className="stroke-accent/20" strokeWidth="2" strokeLinecap="round" />
      <line x1="70" y1="72" x2="70" y2="58" className="stroke-accent/20" strokeWidth="2" strokeLinecap="round" />
      <circle cx="210" cy="52" r="4" className="fill-accent" />
      <circle cx="70" cy="52" r="4" className="fill-accent" />
      <circle cx="245" cy="42" r="3" className="fill-accent/40" />
      <circle cx="35" cy="42" r="3" className="fill-accent/40" />
      <line x1="210" y1="52" x2="245" y2="42" className="stroke-accent/20" strokeWidth="1.5" />
      <line x1="70" y1="52" x2="35" y2="42" className="stroke-accent/20" strokeWidth="1.5" />
    </svg>
  )
}
