export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

export const stagger = (children = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren: children } },
})

export const viewport = { once: true, amount: 0.15 }

export const reveal = {
  variants: fadeUp,
  initial: 'hidden',
  whileInView: 'visible',
  viewport,
}
