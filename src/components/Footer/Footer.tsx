import s from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src="/favicon.ico" alt="" className={s.logoIcon} />
          Studnie Dziurex
        </div>
        <div className={s.copy}>
          © 2026 Studnie Dziurex. Wszelkie prawa zastrzeżone.
        </div>
        <div className={s.right}>
          <span className={s.creator}>
            Created by <a href="mailto:slawomir.dev@" className={s.creatorLink}>slawomir.dev</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
