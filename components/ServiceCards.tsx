import Link from "next/link";
import { labels, services } from "@/content/site";
import Icon from "./Icon";
import styles from "./ServiceCards.module.css";

export default function ServiceCards() {
  return (
    <ul className={styles.grid}>
      {services.map((s, i) => (
        <li
          key={s.id}
          className={`${styles.card} ${s.id === "landlord-safe" ? styles.featured : ""}`}
          data-reveal
          style={{ "--reveal-i": i % 3 } as React.CSSProperties}
        >
          <span className={styles.icon}>
            <Icon name={s.icon} size={26} />
          </span>
          <h3 className={styles.title}>{s.title}</h3>
          <p className={styles.text}>{s.short}</p>
          <Link href={`/services#${s.id}`} className={styles.link}>
            {labels.learnMore}
            <span className="visually-hidden"> – {s.title}</span>
            <Icon name="arrow" size={18} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
