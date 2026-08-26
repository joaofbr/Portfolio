import { m } from 'motion/react'
import { about } from '../data/site'
import { reveal } from '../lib/motion'
import SectionHead from './ui/SectionHead'

export default function About() {
  return (
    <section id="sobre" className="section section--divided">
      <div className="container">
        <SectionHead eyebrow="Sobre" title="Do IFRJ ao" accent="back-end em produção" />

        <div className="about__grid">
          <m.div className="about__text" {...reveal}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </m.div>

          <m.dl className="about__highlights" {...reveal}>
            {about.highlights.map((highlight) => (
              <div className="about__highlight" key={highlight.label}>
                <dt className="about__highlight-label">{highlight.label}</dt>
                <dd className="about__highlight-value">{highlight.value}</dd>
              </div>
            ))}
          </m.dl>
        </div>
      </div>
    </section>
  )
}
