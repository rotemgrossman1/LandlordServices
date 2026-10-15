import type { Step } from "@/content/site";
import styles from "./Steps.module.css";

export default function Steps({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "alt" }) {
  return (
    <ol className={`${styles.steps} ${tone === "alt" ? styles.alt : ""}`}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step} data-reveal style={{ "--reveal-i": i } as React.CSSProperties}>
          <span className={styles.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.text}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
