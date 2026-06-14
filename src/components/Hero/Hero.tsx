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
          Rebranding w toku
        </div>

        <h1 className={s.title}>
          <span className={s.titleRow}>Wiercenie</span>
          <span className={`${s.titleRow} ${s.hollow}`}>Studni</span>
          <span className={`${s.titleRow} ${s.titleSm}`}>Głębinowych</span>
        </h1>

        <p className={s.desc}>
          Studnie Dziurex to teraz <strong>SGBB Krzysztof Bąk</strong> —
          Studnie Głębinowe Bielsko&#8209;Biała. Pracujemy nad nową stroną
          internetową, gdzie znajdziesz pełną ofertę usług i dane kontaktowe.
        </p>

        <a
          href="https://sgbb.pl"
          className={s.btnCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.btnText}>Odwiedź nową stronę</span>
          <span className={s.btnDomain}>sgbb.pl →</span>
        </a>
      </div>
      <ScrollHint />
    </section>
  )
}
