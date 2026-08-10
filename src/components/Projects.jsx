import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { LuChevronDown, LuArrowUpRight } from 'react-icons/lu'
import { projects } from '../data/site'
import { EASE, fadeUp, stagger, viewport } from '../lib/motion'
import SectionHead from './ui/SectionHead'
import ProjectGallery from './ProjectGallery'
import useMediaQuery from '../hooks/useMediaQuery'

const COMPACT_QUERY = '(max-width: 1023px)'

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(-1)
  const compact = useMediaQuery(COMPACT_QUERY)

  return (
    <section id="projetos" className="section section--divided">
      <div className="container">
        <SectionHead eyebrow="Projetos" title="O que eu" accent="tenho construído" />

        <m.div
          className="projects__list"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              compact={compact}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </m.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, compact, open, onToggle }) {
  const gallery = project.gallery && (
    <ProjectGallery items={project.gallery} projectTitle={project.title} />
  )
  const description = <p className="project__desc">{project.description}</p>

  return (
    <m.article className="card project" variants={fadeUp}>
      <div className="project__head">
        <h3 className="project__title">{project.title}</h3>

        {project.links?.length > 0 && (
          <div className="project__links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="project__link"
                aria-label={`Abrir o repositório ${link.label} de ${project.title}`}
              >
                {link.label} <LuArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="project__subtitle">{project.subtitle}</p>

      {!compact && description}

      <div className="project__tech">
        {project.tech.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      {!compact && gallery}

      <button type="button" className="project__toggle" aria-expanded={open} onClick={onToggle}>
        {open
          ? compact
            ? 'Ver menos'
            : 'Ocultar detalhes'
          : compact
            ? 'Ver mais'
            : 'Ver detalhes'}
        <LuChevronDown />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            className="project__details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {compact && description}
            {compact && gallery}

            <ul className="project__bullets">
              {project.bullets.map((bullet) => (
                <li className="project__bullet" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </m.article>
  )
}
