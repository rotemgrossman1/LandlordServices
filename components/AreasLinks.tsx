import Link from "next/link";
import { getContent } from "@/content";
import styles from "./AreasLinks.module.css";

/**
 * "Areas we serve": a plain list of links to every city page, with descriptive anchors
 * ("ניהול נכסים בתל אביב"). Shown on inner pages so each city page gets internal links.
 * Hidden when there are no city pages.
 */
export default async function AreasLinks({ alt = false }: { alt?: boolean }) {
  const { cityPages, labels, link } = await getContent();
  if (cityPages.length === 0) return null;
  return (
    <nav className={`section ${alt ? "section-alt" : ""} ${styles.section}`} aria-labelledby="areas-links-title">
      <div className="container">
        <h2 id="areas-links-title" className={styles.title}>
          {labels.areasWeServe}
        </h2>
        <ul className={styles.list}>
          {cityPages.map((c) => (
            <li key={c.slug}>
              <Link href={link(`/areas/${c.slug}`)} className={styles.link}>
                {labels.areaLink.replace("{city}", c.city)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
