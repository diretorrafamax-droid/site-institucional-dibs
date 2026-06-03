export function SvcContent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 L38 10 L38 38 L10 38 Z" className="stroke-accent" strokeWidth="2" strokeLinejoin="round" />
      <line x1="16" y1="18" x2="32" y2="18" className="stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="28" y2="24" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="30" y2="30" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 14 L40 10 L44 14 L40 18 Z" className="stroke-accent/60" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="40" y1="10" x2="40" y2="18" className="stroke-accent/60" strokeWidth="1.5" />
    </svg>
  )
}
