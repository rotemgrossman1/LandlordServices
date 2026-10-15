import { home, labels, stats } from "@/content/site";
import styles from "./NumbersStrip.module.css";

/** "מאז 2013" always shows; other numbers only when they have a value. */
export default function NumbersStrip() {
  const filled = stats.filter((s) => s.value);
  return (
    <ul className={styles.list} aria-label={labels.numbers}>
      <li className={styles.item}>
        <span className={styles.value}>{home.sinceLabel}</span>
        <span className={styles.label}>{home.sinceText}</span>
      </li>
      {filled.map((s) => (
        <li key={s.label} className={styles.item}>
          <span className={styles.value}>{s.value}</span>
          <span className={styles.label}>{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
