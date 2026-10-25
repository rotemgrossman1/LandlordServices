import { howItWorks } from "@/content/site";
import Icon from "./Icon";
import styles from "./HowItWorks.module.css";

/** Home: what the owner gets, as one short line of icon steps joined by a thin line. Hidden when empty. */
export default function HowItWorks() {
  if (howItWorks.items.length === 0) return null;
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className={`eyebrow ${styles.title}`}>
          {howItWorks.title}
        </h2>
        <ol className={styles.list}>
          {howItWorks.items.map((s) => (
            <li key={s.text} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name={s.icon} size={24} />
              </span>
              <span className={styles.text}>{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
