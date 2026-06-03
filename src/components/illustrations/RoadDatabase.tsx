export function RoadDatabase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="14" rx="14" ry="6" className="stroke-accent" strokeWidth="2" />
      <path d="M10 14 L10 34" className="stroke-accent" strokeWidth="2" />
      <path d="M38 14 L38 34" className="stroke-accent" strokeWidth="2" />
      <ellipse cx="24" cy="34" rx="14" ry="6" className="stroke-accent" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="14" ry="6" className="stroke-accent/30" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="18" y1="14" x2="18" y2="34" className="stroke-accent/20" strokeWidth="1" />
      <line x1="30" y1="14" x2="30" y2="34" className="stroke-accent/20" strokeWidth="1" />
    </svg>
  )
}
