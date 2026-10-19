import { areas, home, labels, stats } from "@/content/site";
import styles from "./NumbersStrip.module.css";

/**
 * The design's hairline stats strip. "מאז 2013" always shows; other numbers only when
 * they have a value. `band` (home page) renders it as its own full-width section and
 * adds the number of cities we work in.
 */
export default function NumbersStrip({ band = false }: { band?: boolean }) {
  const items = [
    { value: home.sinceLabel, label: home.sinceText },
    ...stats.filter((s) => s.value),
    ...(band && areas.cities.length > 0
      ? [{ value: String(areas.cities.length), label: home.citiesLabel }]
      : []),
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
