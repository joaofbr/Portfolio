import { SiGithub, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { profile, socials } from '../data/site'

const SOCIAL_ICONS = {
  github: SiGithub,
  linkedin: FaLinkedin,
  instagram: SiInstagram,
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="footer__socials">
          {socials.map((social) => {
            const SocialIcon = SOCIAL_ICONS[social.icon]
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
                aria-label={social.label}
              >
                <SocialIcon />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
