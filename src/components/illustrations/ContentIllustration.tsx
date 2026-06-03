export function ContentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="65" y="20" width="100" height="90" rx="4" className="stroke-accent" strokeWidth="2" />
      <line x1="85" y1="35" x2="145" y2="35" className="stroke-accent/50" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="85" y1="45" x2="130" y2="45" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="85" y1="55" x2="145" y2="55" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="85" y1="65" x2="120" y2="65" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="85" y1="75" x2="140" y2="75" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="85" y1="85" x2="125" y2="85" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
      <path d="M200 100 L210 80 L220 100" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M190 110 L210 60 L230 110" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 100 L60 85 L70 100" className="stroke-muted/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
