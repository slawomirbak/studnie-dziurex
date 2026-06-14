import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src="/favicon.ico" alt="" className={s.logoIcon} />
          Studnie Dziurex
        </div>
        <div className={s.badge}>
          <span className={s.pipDot} />
          Trwają prace
        </div>
      </div>
    </header>
  )
}
