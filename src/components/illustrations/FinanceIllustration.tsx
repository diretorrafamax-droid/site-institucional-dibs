export function FinanceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 130" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="20" x2="250" y2="20" className="stroke-muted/10" strokeWidth="1" />
      <line x1="30" y1="45" x2="250" y2="45" className="stroke-muted/10" strokeWidth="1" />
      <line x1="30" y1="70" x2="250" y2="70" className="stroke-muted/10" strokeWidth="1" />
      <line x1="30" y1="95" x2="250" y2="95" className="stroke-muted/10" strokeWidth="1" />
      {/* Candle 1 - bearish (dark green) */}
      <line x1="55" y1="35" x2="55" y2="85" className="stroke-accent/70" strokeWidth="2" />
      <rect x="45" y="55" width="20" height="20" rx="2" className="fill-accent/40" strokeWidth="0" />
      {/* Candle 2 - bullish */}
      <line x1="95" y1="25" x2="95" y2="70" className="stroke-accent" strokeWidth="2" />
      <rect x="85" y="40" width="20" height="20" rx="2" className="fill-accent" strokeWidth="0" />
      {/* Candle 3 - bearish (dark green) */}
      <line x1="135" y1="30" x2="135" y2="80" className="stroke-accent/70" strokeWidth="2" />
      <rect x="125" y="50" width="20" height="20" rx="2" className="fill-accent/40" strokeWidth="0" />
      {/* Candle 4 - bullish */}
      <line x1="175" y1="20" x2="175" y2="55" className="stroke-accent" strokeWidth="2" />
      <rect x="165" y="30" width="20" height="18" rx="2" className="fill-accent" strokeWidth="0" />
      {/* Candle 5 - bearish (dark green) */}
      <line x1="215" y1="40" x2="215" y2="90" className="stroke-accent/70" strokeWidth="2" />
      <rect x="205" y="60" width="20" height="20" rx="2" className="fill-accent/40" strokeWidth="0" />
      {/* Trend line */}
      <path d="M55 60 L95 40 L135 50 L175 30 L215 65" className="stroke-accent/30" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
    </svg>
  )
}
