import Link from "next/link";
import { areas, cta, home } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./AreasStrip.module.css";

/** Cities we work in. Hidden when the list is empty. */
export default function AreasStrip() {
  if (areas.cities.length === 0) return null;
  return (
    <section className="section section-alt" aria-labelledby="areas-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <SectionHeading id="areas-title" title={home.areasTitle} lead={home.areasLead} />
          <Link href={cta.primaryHref} className="btn btn-outline">
            {cta.primary}
          </Link>
        </div>
        <ul className={styles.list}>
          {areas.cities.map((city) => (
            <li key={city} className={styles.city}>
              <Icon name="mapPin" size={18} />
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
