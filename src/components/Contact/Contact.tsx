import { IconPhone } from "../../icons/icons";
import s from "./Contact.module.scss";

const IconGlobe = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

export default function Contact() {
  return (
    <section className={s.section} id="kontakt">
      <div className={s.inner}>
        <h3 className={s.heading}>Skontaktuj się z nami</h3>
        <div className={s.grid}>
          <a href="tel:781855146" className={s.item}>
            <div className={s.iconWrap}>
              <IconPhone />
            </div>
            <div className={s.itemBody}>
              <span className={s.label}>Telefon</span>
              <span className={s.value}>781 855 146</span>
            </div>
          </a>
          <a
            href="https://sgbb.pl"
            target="_blank"
            rel="noopener noreferrer"
            className={s.item}
          >
            <div className={s.iconWrap}>
              <IconGlobe />
            </div>
            <div className={s.itemBody}>
              <span className={s.label}>Nowa strona</span>
              <span className={s.value}>sgbb.pl</span>
            </div>
          </a>
        </div>
        <a
          href="https://sgbb.pl"
          target="_blank"
          rel="noopener noreferrer"
          className={s.btn}
        >
          Pełna oferta i kontakt → sgbb.pl
        </a>
      </div>
    </section>
  );
}
