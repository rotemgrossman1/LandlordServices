import Link from "next/link";
import { labels, services } from "@/content/site";
import styles from "./ServiceCards.module.css";

export default function ServiceCards() {
  return (
    <ul className={styles.grid}>
      {services.map((s) => (
        <li key={s.id} className={styles.card}>
          <h3 className={styles.title}>{s.title}</h3>
          <p className={styles.text}>{s.short}</p>
          <Link href={`/services#${s.id}`} className={styles.link}>
            {labels.learnMore}
            <span className="visually-hidden"> – {s.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
