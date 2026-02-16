import { Link } from '@tanstack/react-router'

type BrandLinkProps = {
  className?: string
}

export function BrandLink({ className = 'brand' }: BrandLinkProps) {
  return (
    <Link to="/" className={className}>
      <img
        src="/homeglance-icon.png"
        alt="HomeGlance app icon"
        className="brand-icon"
      />
      <span className="brand-text">
        <span className="brand-word">HomeGlance</span>
        <span className="brand-subtitle">for Home Assistant</span>
      </span>
    </Link>
  )
}
