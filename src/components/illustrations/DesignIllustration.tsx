export function DesignIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="50" r="28" className="stroke-accent" strokeWidth="2" />
      <circle cx="140" cy="50" r="14" className="fill-accent/20" strokeWidth="0" />
      <circle cx="140" cy="50" r="4" className="fill-accent" />
      <rect x="90" y="85" width="100" height="25" rx="6" className="stroke-muted/40" strokeWidth="2" />
      <rect x="90" y="85" width="60" height="25" rx="6" className="fill-accent/20" strokeWidth="0" />
      <path d="M245 30 L265 50 L245 70" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="220" y1="50" x2="260" y2="50" className="stroke-accent" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 70 L15 50 L35 30" className="stroke-muted/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
