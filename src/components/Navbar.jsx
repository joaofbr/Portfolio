import { useEffect, useState } from 'react'
import { AnimatePresence, m, useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks } from '../data/site'
import useActiveSection from '../hooks/useActiveSection'
import { EASE } from '../lib/motion'

const SECTION_IDS = navLinks.map((link) => link.id)

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useMotionValueEvent(scrollY, 'change', (value) => {
    const next = value > 16
    setScrolled((current) => (current === next ? current : next))
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
            joão pedro<span>.dev</span>
          </a>

          <div className="nav__links">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav__link${isActive ? ' nav__link--active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav__burger-lines">
              <m.span animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }} />
              <m.span animate={{ opacity: open ? 0 : 1 }} />
              <m.span animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <m.div
              className="nav__scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <m.div
              className="nav__drawer"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <ul className="nav__drawer-list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`nav__drawer-link${active === link.id ? ' nav__drawer-link--active' : ''}`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
