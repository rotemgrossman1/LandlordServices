import type { Step } from "@/content/site";
import styles from "./Steps.module.css";

export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.num} aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
