import s from './Hero.module.scss'

function ScrollHint() {
  return (
    <div className={s.scrollHint} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.inner}>
        <div className={s.eyebrow}>
          <span className={s.eyebrowLine} />
          Strona w przebudowie
        </div>

        <h1 className={s.title}>
          <span className={s.titleRow}>Wiercenie</span>
          <span className={`${s.titleRow} ${s.hollow}`}>Studni</span>
          <span className={`${s.titleRow} ${s.titleSm}`}>Głębinowych</span>
        </h1>

        <p className={s.desc}>
          Strona internetowa jest obecnie w przebudowie. Zapraszamy wkrótce.
        </p>
      </div>
      <ScrollHint />
    </section>
  )
}
