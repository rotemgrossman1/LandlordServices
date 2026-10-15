import Image from "next/image";
import { team } from "@/content/site";
import { initials } from "@/lib/format";
import styles from "./TeamGrid.module.css";

/** Team cards: photo when set, otherwise initials. Renders nothing while the list is empty. */
export default function TeamGrid() {
  if (team.length === 0) return null;
  return (
    <ul className={styles.grid}>
      {team.map((m, i) => (
        <li key={m.name} className={styles.card} data-reveal style={{ "--reveal-i": i } as React.CSSProperties}>
          {m.photo ? (
            <Image src={m.photo} alt={m.name} width={160} height={160} className={styles.photo} />
          ) : (
            <span className={styles.avatar} aria-hidden="true">
              {initials(m.name)}
            </span>
          )}
          <h3 className={styles.name}>{m.name}</h3>
          <p className={styles.role}>{m.role}</p>
        </li>
      ))}
    </ul>
  );
}
