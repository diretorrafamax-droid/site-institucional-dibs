export function SecurityIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M140 20 L200 40 L200 70 C200 95 175 115 140 125 C105 115 80 95 80 70 L80 40 Z" className="stroke-accent" strokeWidth="2.5" />
      <path d="M140 30 L185 46 L185 70 C185 90 165 106 140 114 C115 106 95 90 95 70 L95 46 Z" className="fill-accent/10" strokeWidth="0" />
      <path d="M120 70 L135 85 L160 55" className="stroke-accent" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
