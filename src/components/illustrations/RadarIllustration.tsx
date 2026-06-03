export function RadarIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="70" r="45" className="stroke-accent/20" strokeWidth="1.5" />
      <circle cx="140" cy="70" r="30" className="stroke-accent/30" strokeWidth="1.5" />
      <circle cx="140" cy="70" r="15" className="stroke-accent/40" strokeWidth="1.5" />
      <circle cx="140" cy="70" r="5" className="fill-accent" />
      <line x1="140" y1="70" x2="140" y2="25" className="stroke-accent" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="70" x2="95" y2="70" className="stroke-accent/50" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="70" x2="180" y2="95" className="stroke-accent/30" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 25 L145 20 L135 20 Z" className="fill-accent" />
      <circle cx="100" cy="50" r="4" className="fill-accent/60" />
      <circle cx="170" cy="55" r="3" className="fill-accent/40" />
      <circle cx="120" cy="40" r="2" className="fill-accent/30" />
      <circle cx="160" cy="95" r="3" className="fill-accent/50" />
    </svg>
  )
}
