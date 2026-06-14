import s from './Footer.module.scss'
import { IconWell } from '../icons'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.logo}>
          <IconWell />
          Studnie Dziurex
        </div>
        <div className={s.copy}>
          © 2026 Studnie Dziurex. Wszelkie prawa zastrzeżone.
        </div>
        <a
          href="https://sgbb.pl"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          Nowa strona: sgbb.pl →
        </a>
      </div>
    </footer>
  )
}
