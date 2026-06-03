export function SoftwareIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="25" width="160" height="95" rx="8" className="stroke-accent" strokeWidth="2" fill="none" />
      <circle cx="80" cy="35" r="3" className="fill-muted/40" />
      <circle cx="90" cy="35" r="3" className="fill-muted/40" />
      <circle cx="100" cy="35" r="3" className="fill-muted/40" />
      <text x="140" y="65" textAnchor="middle" className="fill-accent" fontSize="28" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
      <line x1="80" y1="85" x2="200" y2="85" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="95" x2="170" y2="95" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="105" x2="150" y2="105" className="stroke-muted/30" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
