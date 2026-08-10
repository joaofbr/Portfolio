import { m } from 'motion/react'
import { experiences } from '../data/site'
import { fadeUp, stagger, viewport } from '../lib/motion'
import SectionHead from './ui/SectionHead'

export default function Experience() {
  return (
    <section id="experiencia" className="section section--divided">
      <div className="container">
        <SectionHead eyebrow="Experiência" title="Onde eu" accent="construí coisas" />

        <m.div
          className="timeline"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {experiences.map((item) => (
            <m.article
              key={`${item.company}-${item.period}`}
              className="card timeline__item"
              variants={fadeUp}
            >
              <div className="timeline__head">
                <h3 className="timeline__role">{item.role}</h3>
                {item.period && <span className="timeline__period">{item.period}</span>}
              </div>

              <p className="timeline__company">{item.company}</p>

              <p className="timeline__summary">{item.summary}</p>

              <ul className="timeline__bullets">
                {item.bullets.map((bullet) => (
                  <li className="timeline__bullet" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              {item.highlight && (
                <div className="timeline__highlight">
                  <p className="timeline__highlight-label">Projeto em destaque</p>
                  <h4 className="timeline__highlight-title">{item.highlight.title}</h4>
                  <p className="timeline__highlight-summary">{item.highlight.summary}</p>

                  <ul className="timeline__bullets">
                    {item.highlight.bullets.map((bullet) => (
                      <li className="timeline__bullet" key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="timeline__tags">
                {item.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  )
}
