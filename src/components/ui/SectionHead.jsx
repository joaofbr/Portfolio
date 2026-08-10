import { m } from 'motion/react'
import { reveal } from '../../lib/motion'

export default function SectionHead({ eyebrow, title, accent, subtitle }) {
  return (
    <m.header className="section-head" {...reveal}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}

      <h2 className="section-title">
        {title} {accent && <span className="accent">{accent}</span>}
      </h2>

      {subtitle && <p className="section-sub">{subtitle}</p>}
    </m.header>
  )
}
