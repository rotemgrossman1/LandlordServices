import Link from "next/link";
import { home, services } from "@/content/site";
import styles from "./SafeHighlight.module.css";

export default function SafeHighlight() {
  const safeService = services.find((s) => s.id === "landlord-safe");
  return (
    <section className={styles.safe} aria-labelledby="safe-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 id="safe-title" className={styles.title}>
            {home.safeTitle}
          </h2>
          <p className={styles.text}>{home.safeText}</p>
          <Link href="/landlord-safe" className="btn btn-light">
            {home.safeLink}
          </Link>
        </div>
        {safeService && (
          <ul className={`check-list ${styles.list}`}>
            {safeService.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
