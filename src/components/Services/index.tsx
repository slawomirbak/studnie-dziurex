import s from './Services.module.scss'
import { IconDrill, IconPump, IconMaintenance, IconDocs } from '../icons'

const SERVICES = [
  {
    icon: <IconDrill />,
    title: 'Wiercenie studni',
    desc: 'Profesjonalne wiercenie studni głębinowych do 100 m i więcej. Nowoczesny sprzęt, precyzyjne wykonanie.'
  },
  {
    icon: <IconPump />,
    title: 'Pompy głębinowe',
    desc: 'Dobór, montaż i uruchomienie pomp głębinowych. Pełna instalacja hydrauliczna z osprzętem.'
  },
  {
    icon: <IconMaintenance />,
    title: 'Konserwacja studni',
    desc: 'Przeglądy, czyszczenie i regeneracja studni. Diagnostyka i usuwanie awarii pomp i instalacji.'
  },
  {
    icon: <IconDocs />,
    title: 'Dokumentacja',
    desc: 'Opracowanie dokumentacji hydrogeologicznej wymaganej przez przepisy. Obsługa formalna i prawna.'
  }
]

export default function Services() {
  return (
    <section className={s.section} id="uslugi">
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.label}>Specjalizacja</span>
          <h2 className={s.heading}>Nasze usługi</h2>
          <p className={s.subtext}>Kompleksowe usługi z zakresu wiercenia i eksploatacji studni głębinowych</p>
        </div>
        <div className={s.grid}>
          {SERVICES.map((svc, i) => (
            <div
              className={s.card}
              key={svc.title}
              style={{ '--card-i': i } as React.CSSProperties}
            >
              <div className={s.icon}>{svc.icon}</div>
              <h3 className={s.cardTitle}>{svc.title}</h3>
              <p className={s.cardDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
