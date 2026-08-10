import { m } from 'motion/react'
import { LuArrowRight } from 'react-icons/lu'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { profile, socials, stats } from '../data/site'
import { EASE, fadeUp, stagger } from '../lib/motion'

export default function Hero() {
  const github = socials.find((item) => item.icon === 'github')?.href
  const linkedin = socials.find((item) => item.icon === 'linkedin')?.href

  return (
    <section id="inicio" className="hero">
      <m.div
        className="container hero__copy"
        variants={stagger(0.07)}
        initial="hidden"
        animate="visible"
      >
        <m.p className="hero__status" variants={fadeUp}>
          Disponível para novos desafios
        </m.p>

        <m.h1
          className="hero__title"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
          }}
        >
          {profile.shortName}.
          <br />
          <span className="hero__title-muted">{profile.role}.</span>
        </m.h1>

        <m.p className="hero__stack" variants={fadeUp}>
          {profile.roles.join('  ·  ')}
        </m.p>

        <m.p className="hero__tagline" variants={fadeUp}>
          {profile.tagline}
        </m.p>

        <m.div className="hero__actions" variants={fadeUp}>
          <a href="#projetos" className="btn btn--primary">
            Ver projetos <LuArrowRight />
          </a>
          <a href="#contato" className="btn">
            Entrar em contato
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="btn btn--quiet">
            <SiGithub /> GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="btn btn--quiet">
            <FaLinkedin /> LinkedIn
          </a>
        </m.div>

        <m.dl className="hero__stats" variants={fadeUp}>
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-label">{stat.label}</dt>
              <dd className="hero__stat-value">{stat.value}</dd>
            </div>
          ))}
        </m.dl>
      </m.div>
    </section>
  )
}
