export function SvcSoftware({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="4" className="stroke-accent" strokeWidth="2" />
      <line x1="14" y1="16" x2="34" y2="16" className="stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="22" x2="30" y2="22" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="28" x2="26" y2="28" className="stroke-accent/40" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 34 L22 38 L28 34" className="stroke-accent/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
