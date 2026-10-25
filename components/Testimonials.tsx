import { home, testimonials } from "@/content/site";
import ReviewsCarousel from "./ReviewsCarousel";
import styles from "./Testimonials.module.css";

/**
 * Google reviews as a slim, endless carousel of cream cards on a white band.
 * Every review is in the static HTML; the carousel only adds
 * the looping and the side buttons. Renders nothing until real reviews are added
 * in content/site.ts.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className={`section ${styles.section}`} aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className={`eyebrow ${styles.title}`}>
          {home.testimonialsTitle}
        </h2>
        <ReviewsCarousel prevLabel={home.reviewsPrev} nextLabel={home.reviewsNext}>
          {testimonials.map((t) => (
            <li key={t.name + t.text} className={styles.card}>
              {t.rating > 0 && <Stars rating={t.rating} />}
              <blockquote className={styles.quote}>
                <p>{t.text}</p>
              </blockquote>
              <p className={styles.who}>
                {t.name}
                {t.city && `, ${t.city}`}
              </p>
              {t.date && <p className={styles.date}>{t.date}</p>}
            </li>
          ))}
        </ReviewsCarousel>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  const n = Math.max(0, Math.min(5, rating));
  return (
    <span className={styles.stars} role="img" aria-label={home.reviewStars.replace("{n}", String(n))}>
      {"★".repeat(n)}
      <span className={styles.starsOff}>{"★".repeat(5 - n)}</span>
    </span>
  );
}
