import s from './RedirectBand.module.scss'

export default function RedirectBand() {
  return (
    <div className={s.band}>
      <div className={s.inner}>
        <p className={s.text}>
          Pełna oferta, cennik i kontakt dostępne na nowej stronie
        </p>
        <a
          href="https://sgbb.pl"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          sgbb.pl ↗
        </a>
      </div>
    </div>
  )
}
