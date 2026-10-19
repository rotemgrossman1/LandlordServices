import Link from "next/link";
import { services } from "@/content/site";
import Icon from "./Icon";
import styles from "./ServiceCards.module.css";

/** Compact list of services for the home page; each links to its full description. */
export default function ServiceCards() {
  return (
    <ul className={styles.list}>
      {services.map((s) => (
        <li key={s.id}>
          <Link href={`/services#${s.id}`} className={styles.link}>
            <span className={styles.title}>
              {s.title}
              <Icon name="arrow" size={18} />
            </span>
            <span className={styles.text}>{s.short}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
