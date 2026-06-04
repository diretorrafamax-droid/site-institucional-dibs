interface FlagIconProps {
  code: string
  className?: string
}

export function FlagIcon({ code, className = '' }: FlagIconProps) {
  switch (code) {
    case 'br':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#009739" />
          <polygon points="10,1.5 18,7 10,12.5 2,7" fill="#FEDD00" />
          <circle cx="10" cy="7" r="3.5" fill="#002776" />
        </svg>
      )
    case 'ca':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#FF0000" />
          <rect x="4" width="12" height="14" fill="#FFFFFF" />
          <rect x="4" width="12" height="14" fill="#FF0000" />
          <rect x="5" width="10" height="14" fill="#FFFFFF" />
          <path d="M10 3l-1 2 1 1-1 1 1 3h-2l1 2h2l1-2h-2l1-3-1-1 1-1-1-2z" fill="#FF0000" />
        </svg>
      )
    case 'se':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#005BAA" />
          <rect x="5" width="2" height="14" fill="#FECC00" />
          <rect y="5.5" width="20" height="2" fill="#FECC00" />
        </svg>
      )
    case 'us':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#FFFFFF" />
          {[0, 2, 4, 6, 8, 10, 12].map(y => <rect key={y} y={y} width="20" height="2" fill="#DD0000" />)}
          <rect width="8" height="7" rx="0.5" fill="#002868" />
          {[0, 1, 2, 3, 4, 5].map(row =>
            [0, 1, 2, 3].map(col => (
              <circle key={`${row}-${col}`} cx={1 + col * 2} cy={0.7 + row * 1.2} r="0.3" fill="#FFFFFF" />
            ))
          )}
        </svg>
      )
    case 'ua':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#005BBB" />
          <rect y="7" width="20" height="7" rx="1" fill="#FEDD00" />
        </svg>
      )
    case 'gb':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#00247D" />
          <rect x="0" y="5.5" width="20" height="3" fill="#FFFFFF" />
          <rect x="8.5" y="0" width="3" height="14" fill="#FFFFFF" />
          <path d="M0 0l8.5 7L0 14" stroke="#CF142B" strokeWidth="2.5" />
          <path d="M20 0l-8.5 7L20 14" stroke="#CF142B" strokeWidth="2.5" />
          <rect x="0" y="6" width="20" height="2" fill="#CF142B" />
          <rect x="9" y="0" width="2" height="14" fill="#CF142B" />
        </svg>
      )
    case 'za':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#DE3831" />
          <rect width="20" height="14" fill="#002395" />
          <rect y="4" width="20" height="6" fill="#FFFFFF" />
          <rect y="5" width="20" height="4" fill="#007A4D" />
          <polygon points="0,0 10,7 0,14" fill="#FFB612" />
          <polygon points="0,0 9,7 0,14" fill="#FFFFFF" />
          <polygon points="0,0 8,7 0,14" fill="#007A4D" />
          <polygon points="0,0 20,0 10,7" fill="#DE3831" />
          <polygon points="0,14 20,14 10,7" fill="#002395" />
          <polygon points="0,0 7,7 0,14" fill="#FFFFFF" />
        </svg>
      )
    case 'cn':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#DE2910" />
          <polygon points="2.5,1.5 3,3 4.5,3 3.3,4 3.7,5.5 2.5,4.7 1.3,5.5 1.7,4 0.5,3 2,3" fill="#FFDE00" />
          <polygon points="5.5,0.5 5.8,1.2 6.5,1.2 5.9,1.7 6.2,2.5 5.5,2 4.8,2.5 5.1,1.7 4.5,1.2 5.2,1.2" fill="#FFDE00" />
          <polygon points="6,3 6.2,3.5 6.8,3.5 6.3,3.8 6.5,4.3 6,4 5.5,4.3 5.7,3.8 5.2,3.5 5.8,3.5" fill="#FFDE00" />
          <polygon points="5.5,5 5.7,5.5 6.2,5.5 5.8,5.8 6,6.3 5.5,6 5,6.3 5.2,5.8 4.8,5.5 5.3,5.5" fill="#FFDE00" />
          <polygon points="4.5,4.5 4.7,5 5.2,5 4.8,5.3 5,5.8 4.5,5.5 4,5.8 4.2,5.3 3.8,5 4.3,5" fill="#FFDE00" />
        </svg>
      )
    case 'au':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#012169" />
          <rect x="0" y="5.5" width="10" height="3" fill="#FFFFFF" />
          <rect x="4" y="0" width="2" height="14" fill="#FFFFFF" />
          <path d="M0 0l4.5 3.5L0 7" stroke="#E4002B" strokeWidth="1.5" />
          <path d="M10 0l-5.5 3.5L10 7" stroke="#E4002B" strokeWidth="1.5" />
          <rect x="0" y="6" width="10" height="2" fill="#E4002B" />
          <rect x="4.5" y="0" width="1" height="14" fill="#E4002B" />
          <circle cx="14" cy="2" r="1" fill="#FFFFFF" />
          <circle cx="16" cy="4" r="0.6" fill="#FFFFFF" />
          <circle cx="17" cy="2" r="0.5" fill="#FFFFFF" />
          <circle cx="14.5" cy="5.5" r="0.5" fill="#FFFFFF" />
          <circle cx="13" cy="4" r="0.5" fill="#FFFFFF" />
          <polygon points="14,9 14.4,10 15.5,10 14.6,10.7 14.9,11.8 14,11.1 13.1,11.8 13.4,10.7 12.5,10 13.6,10" fill="#FFFFFF" />
        </svg>
      )
    case 'pt':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#006600" />
          <rect x="10" width="10" height="14" rx="1" fill="#FF0000" />
          <circle cx="10" cy="7" r="3" fill="#FFCC00" />
          <circle cx="10" cy="7" r="1.5" fill="#006600" />
          <circle cx="9.5" cy="7" r="0.5" fill="#FF0000" />
        </svg>
      )
    case 'es':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#C60B1E" />
          <rect y="3" width="20" height="8" fill="#FFC400" />
          <rect x="8" y="4" width="4" height="5" rx="0.5" fill="#C60B1E" />
          <rect x="9" y="6" width="2" height="2" fill="#FFC400" />
        </svg>
      )
    case 'fr':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#FFFFFF" />
          <rect width="6.67" height="14" rx="1" fill="#002395" />
          <rect x="13.33" width="6.67" height="14" rx="1" fill="#ED2939" />
        </svg>
      )
    case 'de':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#DD0000" />
          <rect y="4.67" width="20" height="4.66" fill="#FFCE00" />
          <rect y="9.33" width="20" height="4.67" rx="1" fill="#000000" />
        </svg>
      )
    case 'ir':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#239F40" />
          <rect y="4" width="20" height="6" fill="#FFFFFF" />
          <rect y="8" width="20" height="6" rx="1" fill="#DA0000" />
          <path d="M10 5 L10 9" stroke="#DA0000" strokeWidth="0.4" />
          <path d="M8 6 Q10 5.5 12 6" stroke="#DA0000" strokeWidth="0.3" fill="none" />
          <path d="M8 8 Q10 8.5 12 8" stroke="#DA0000" strokeWidth="0.3" fill="none" />
        </svg>
      )
    case 'mx':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#006847" />
          <rect x="6.67" width="6.66" height="14" fill="#FFFFFF" />
          <rect x="13.33" width="6.67" height="14" rx="1" fill="#CE1126" />
          <circle cx="10" cy="7" r="2" fill="#006847" />
        </svg>
      )
    case 'ch':
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#FF0000" />
          <rect x="7.5" y="4" width="5" height="6" fill="#FFFFFF" />
          <rect x="9" y="2" width="2" height="10" fill="#FFFFFF" />
        </svg>
      )
    default:
      return (
        <svg className={className} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" rx="1" fill="#666" />
          <text x="10" y="10" textAnchor="middle" fill="#fff" fontSize="8">?</text>
        </svg>
      )
  }
}
