import s from './Header.module.scss'
import { IconWell } from '../icons'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.logo}>
          <IconWell />
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
