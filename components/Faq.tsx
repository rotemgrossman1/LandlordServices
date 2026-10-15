import type { FaqItem } from "@/content/site";
import styles from "./Faq.module.css";

/** Questions and answers are plain HTML, so crawlers read them without JS. */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.faq}>
      {items.map((item) => (
        <details key={item.id} id={item.id} className={styles.item}>
          <summary className={styles.question}>{item.question}</summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
