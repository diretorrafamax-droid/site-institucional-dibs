export function RoadSmartContract({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="32" height="36" rx="4" className="stroke-accent" strokeWidth="2" />
      <line x1="14" y1="14" x2="34" y2="14" className="stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="30" y2="20" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="26" x2="26" y2="26" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <text x="24" y="36" textAnchor="middle" className="fill-accent/70" fontSize="8" fontFamily="monospace" fontWeight="bold">{'{}'}</text>
    </svg>
  )
}
