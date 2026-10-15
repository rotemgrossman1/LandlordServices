import { googleRating, home, testimonials } from "@/content/site";
import SectionHeading from "./SectionHeading";
import styles from "./Testimonials.module.css";

/** Renders nothing until real testimonials are added in content/site.ts. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading id="testimonials-title" eyebrow={home.testimonialsEyebrow} title={home.testimonialsTitle} />
        {googleRating.value && (
          <p className={styles.rating}>
            {googleRating.url ? (
              <a href={googleRating.url} rel="noopener">
                {home.googleRatingLabel} {googleRating.value}
              </a>
            ) : (
              <>
                {home.googleRatingLabel} {googleRating.value}
              </>
            )}
            {googleRating.count && ` (${googleRating.count})`}
          </p>
        )}
        <ul className={styles.grid}>
          {testimonials.map((t) => (
            <li key={t.name + t.text} className={styles.card} data-reveal>
              <blockquote className={styles.quote}>
                <p>{t.text}</p>
              </blockquote>
              <p className={styles.who}>
                {t.name}
                {t.city && `, ${t.city}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
