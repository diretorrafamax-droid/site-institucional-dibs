export function ConsultingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="95" cy="40" r="18" className="stroke-muted/40" strokeWidth="2" />
      <circle cx="185" cy="40" r="18" className="stroke-muted/40" strokeWidth="2" />
      <circle cx="95" cy="40" r="8" className="fill-accent/20" strokeWidth="0" />
      <circle cx="185" cy="40" r="8" className="fill-accent/20" strokeWidth="0" />
      <path d="M95 58 L95 80" className="stroke-muted/40" strokeWidth="2" strokeLinecap="round" />
      <path d="M185 58 L185 80" className="stroke-muted/40" strokeWidth="2" strokeLinecap="round" />
      <path d="M75 80 L80 98 L200 98 L205 80" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="98" width="120" height="12" rx="4" className="fill-accent/20" strokeWidth="0" />
      <line x1="140" y1="104" x2="140" y2="118" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <line x1="135" y1="118" x2="145" y2="118" className="stroke-accent/40" strokeWidth="2" strokeLinecap="round" />
      <path d="M125 45 L155 45 C160 45 160 55 155 55 L125 55 C120 55 120 45 125 45 Z" className="fill-accent" />
      <path d="M130 50 L150 50" className="stroke-background" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
