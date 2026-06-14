import s from './Showcase.module.scss'

export default function Showcase() {
  return (
    <section className={s.showcase} aria-label="Nasze atuty">
      <div className={`${s.panel} ${s.experience}`}>
        <div className={s.content}>
          <span className={s.badge}>Doświadczenie</span>
          <h3 className={s.panelTitle}>Wiercenia na terenie całej Polski</h3>
          <p className={s.panelText}>
            Wieloletnia praktyka i profesjonalne podejście do każdego
            zlecenia — od domowych studni po obiekty przemysłowe.
          </p>
        </div>
      </div>
      <div className={`${s.panel} ${s.water}`}>
        <div className={s.content}>
          <span className={s.badge}>Jakość</span>
          <h3 className={s.panelTitle}>Czysta woda pitna z głębi ziemi</h3>
          <p className={s.panelText}>
            Najwyższe standardy wykonania i dobór materiałów zapewniający
            czystą wodę przez długie lata.
          </p>
        </div>
      </div>
    </section>
  )
}
