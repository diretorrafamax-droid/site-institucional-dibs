export function SvcSecurity({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6 L40 14 L40 26 Q40 36 24 42 Q8 36 8 26 L8 14 Z" className="stroke-accent" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 6 L40 14 L40 26 Q40 36 24 42 Q8 36 8 26 L8 14 Z" className="fill-accent/[0.04]" strokeWidth="0" />
      <path d="M20 24 L24 28 L30 20" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="14" x2="24" y2="14" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="19" x2="20" y2="19" className="stroke-accent/20" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
