import { useState } from 'react'
import { AnimatePresence, m, useScroll, useMotionValueEvent } from 'motion/react'
import { LuArrowUp } from 'react-icons/lu'
import { EASE } from '../../lib/motion'

export default function BackToTop() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (value) => {
    const next = value > window.innerHeight
    setVisible((current) => (current === next ? current : next))
  })

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          className="to-top"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <LuArrowUp />
        </m.button>
      )}
    </AnimatePresence>
  )
}
