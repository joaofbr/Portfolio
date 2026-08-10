import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { LuCheck, LuMail, LuMapPin, LuInfo, LuTriangleAlert, LuArrowUpRight } from 'react-icons/lu'
import { SiWhatsapp, SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { contactConfig, profile, socials } from '../data/site'
import { EASE, reveal } from '../lib/motion'
import SectionHead from './ui/SectionHead'

const IDLE = 'idle'
const SENDING = 'sending'
const SENT = 'sent'
const ERROR = 'error'

export default function Contact() {
  const [status, setStatus] = useState(IDLE)
  const [errorMessage, setErrorMessage] = useState('')

  const endpoint = contactConfig.endpoint

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (!endpoint) {
      const subject = encodeURIComponent(data.get('subject') || 'Contato pelo portfólio')
      const body = encodeURIComponent(
        `${data.get('message')}\n\n—\n${data.get('name')}\n${data.get('email')}`,
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus(SENT)
      return
    }

    setStatus(SENDING)
    setErrorMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.errors?.[0]?.message ?? 'Não foi possível enviar a mensagem.')
      }

      form.reset()
      setStatus(SENT)
    } catch (error) {
      setErrorMessage(error.message)
      setStatus(ERROR)
    }
  }

  return (
    <section id="contato" className="section section--divided">
      <div className="container">
        <SectionHead
          eyebrow="Contato"
          title="Vamos"
          accent="conversar?"
          subtitle="Tem uma vaga, um projeto ou só quer trocar ideia sobre .NET? Manda mensagem."
        />

        <div className="contact__grid">
          <m.div className="contact__form-wrap" {...reveal}>
            <AnimatePresence mode="wait">
              {status === SENT ? (
                <m.div
                  key="success"
                  className="contact__success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <span className="contact__success-icon">
                    <LuCheck />
                  </span>
                  <h3>Mensagem enviada</h3>
                  <p>Obrigado pelo contato. Respondo o mais rápido possível.</p>
                  <button type="button" className="btn btn--sm" onClick={() => setStatus(IDLE)}>
                    Enviar outra
                  </button>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  className="contact__form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <div className="field--row">
                    <Field label="Nome" name="name" placeholder="Como posso te chamar?" required />
                    <Field
                      label="E-mail"
                      name="email"
                      type="email"
                      placeholder="voce@empresa.com"
                      required
                    />
                  </div>

                  <Field label="Assunto" name="subject" placeholder="Sobre o que quer falar?" />

                  <div>
                    <label className="field__label" htmlFor="message">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="field__textarea"
                      placeholder="Escreva sua mensagem…"
                      required
                    />
                  </div>

                  {status === ERROR && (
                    <p className="contact__error">
                      <LuTriangleAlert /> {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn--primary btn--full"
                    disabled={status === SENDING}
                  >
                    {status === SENDING ? (
                      <>
                        <span className="spinner" /> Enviando…
                      </>
                    ) : (
                      'Enviar mensagem'
                    )}
                  </button>

                  {!endpoint && (
                    <p className="contact__note">
                      <LuInfo />
                      O envio abrirá seu aplicativo de e-mail. Para receber as mensagens direto no
                      portfólio, configure o Formspree em <code>src/data/site.js</code>.
                    </p>
                  )}
                </m.form>
              )}
            </AnimatePresence>
          </m.div>

          <m.div className="contact__side" {...reveal}>
            <ContactLink
              href={`https://wa.me/${profile.whatsapp}`}
              icon={<SiWhatsapp />}
              label="WhatsApp"
              value="Resposta mais rápida"
              external
            />
            <ContactLink
              href={`mailto:${profile.email}`}
              icon={<LuMail />}
              label="E-mail"
              value={profile.email}
            />
            <ContactLink
              href={socials.find((item) => item.icon === 'linkedin')?.href}
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="/in/joaofbr1"
              external
            />
            <ContactLink
              href={socials.find((item) => item.icon === 'github')?.href}
              icon={<SiGithub />}
              label="GitHub"
              value="@joaofbr"
              external
            />

            <div className="contact-link">
              <span className="contact-link__icon">
                <LuMapPin />
              </span>
              <span>
                <span className="contact-link__label">Localização</span>
                <span className="contact-link__value">{profile.location}</span>
              </span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="field__input"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

function ContactLink({ href, icon, label, value, external }) {
  return (
    <a
      href={href}
      className="contact-link"
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span className="contact-link__icon">{icon}</span>
      <span>
        <span className="contact-link__label">{label}</span>
        <span className="contact-link__value">{value}</span>
      </span>
      <LuArrowUpRight className="contact-link__arrow" />
    </a>
  )
}
