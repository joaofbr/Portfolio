import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m } from 'motion/react'
import { LuX, LuChevronLeft, LuChevronRight, LuExpand } from 'react-icons/lu'
import { EASE } from '../lib/motion'

export default function ProjectGallery({ items, projectTitle }) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <>
      <ul className="shots">
        {items.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              className="shots__item"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar: ${item.label}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="shots__caption">
                {item.label}
                <LuExpand className="shots__icon" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        items={items}
        index={openIndex}
        projectTitle={projectTitle}
        onClose={() => setOpenIndex(-1)}
        onNavigate={setOpenIndex}
      />
    </>
  )
}

function Lightbox({ items, index, projectTitle, onClose, onNavigate }) {
  const open = index >= 0
  const closeRef = useRef(null)

  const navigate = useCallback(
    (step) => onNavigate((index + step + items.length) % items.length),
    [index, items.length, onNavigate],
  )

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowRight') navigate(1)
      else if (event.key === 'ArrowLeft') navigate(-1)
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose, navigate])

  if (typeof document === 'undefined' || !open) return null

  const item = items[index]

  return createPortal(
    <AnimatePresence>
      <m.div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`${projectTitle} — ${item.label}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: EASE }}
        onClick={onClose}
      >
        <button
          type="button"
          className="lightbox__close"
          aria-label="Fechar"
          ref={closeRef}
          onClick={onClose}
        >
          <LuX />
        </button>

        {items.length > 1 && (
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Imagem anterior"
            onClick={(event) => {
              event.stopPropagation()
              navigate(-1)
            }}
          >
            <LuChevronLeft />
          </button>
        )}

        <m.figure
          className="lightbox__figure"
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <img src={item.src} alt={item.alt} />
          <figcaption className="lightbox__caption">
            {item.label}
            <span className="lightbox__counter">
              {index + 1} / {items.length}
            </span>
          </figcaption>
        </m.figure>

        {items.length > 1 && (
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Próxima imagem"
            onClick={(event) => {
              event.stopPropagation()
              navigate(1)
            }}
          >
            <LuChevronRight />
          </button>
        )}
      </m.div>
    </AnimatePresence>,
    document.body,
  )
}
