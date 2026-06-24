interface AvatarProps {
  initials: string
  color: string
  photo?: string
  size?: number
  onClick?: () => void
}

export function Avatar({ initials, color, photo, size = 120, onClick }: AvatarProps) {
  const Wrapper = onClick ? 'button' : 'div'

  if (photo) {
    const webpSrc = photo.replace(/\.\w+$/, '.webp')
    return (
      <Wrapper
        onClick={onClick}
        className={`overflow-hidden rounded-full shrink-0 ${onClick ? 'cursor-pointer transition-transform hover:scale-105' : ''}`}
        style={{ width: size, height: size }}
      >
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img src={photo} alt={initials} width={size} height={size} className="h-full w-full object-cover" />
        </picture>
      </Wrapper>
    )
  }

  return (
    <Wrapper
      onClick={onClick}
      className={`rounded-full shrink-0 ${onClick ? 'cursor-pointer transition-transform hover:scale-105' : ''}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 400 400">
        <defs>
          <linearGradient id={`g-${initials}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" rx="200" fill={`url(#g-${initials})`} />
        <text x="200" y="215" fontFamily="Inter, sans-serif" fontSize={size > 120 ? 120 : 100} fontWeight={700} fill="white" textAnchor="middle" dominantBaseline="middle">
          {initials}
        </text>
      </svg>
    </Wrapper>
  )
}
