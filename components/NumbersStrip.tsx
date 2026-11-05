import { getContent } from "@/content";
import styles from "./NumbersStrip.module.css";

/**
 * The design's hairline stats strip. The founding year always shows; other numbers only when
 * they have a value. `band` (home page) renders it as its own full-width section.
 */
export default async function NumbersStrip({ band = false }: { band?: boolean }) {
  const { home, labels, stats } = await getContent();
  const items = [
    { value: home.foundedValue, label: home.foundedText },
    ...stats.filter((s) => s.value),
  ];
  const list = (
    <ul className={styles.list} aria-label={labels.numbers}>
      {items.map((s) => (
        <li key={s.label} className={styles.item}>
          <span className={styles.value}>{s.value}</span>
          <span className={styles.label}>{s.label}</span>
        </li>
      ))}
    </ul>
  );
  if (!band) return list;
  return (
    <section className={styles.band}>
      <div className="container">{list}</div>
    </section>
  );
}
