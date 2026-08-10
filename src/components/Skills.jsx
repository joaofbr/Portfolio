import { m } from 'motion/react'
import { skillGroups } from '../data/site'
import { fadeUp, stagger, viewport } from '../lib/motion'
import Icon from './Icon'
import SectionHead from './ui/SectionHead'

export default function Skills() {
  return (
    <section id="skills" className="section section--divided">
      <div className="container">
        <SectionHead eyebrow="Skills" title="Ferramentas do" accent="dia a dia" />

        <m.div
          className="skills__groups"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillGroups.map((group) => (
            <m.div key={group.title} variants={fadeUp}>
              <h3 className="skill-group__title">{group.title}</h3>

              <div className="skill-group__items">
                {group.items.map((skill) => (
                  <span className="skill" key={skill.name}>
                    <Icon name={skill.icon} className="skill__icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  )
}
