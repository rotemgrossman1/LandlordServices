"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import styles from "./Testimonials.module.css";

/**
 * An endless scroll-snap track of review cards with a button on each side.
 * The server HTML holds each review once; after mount a copy of the set is added
 * before and after it (hidden from assistive tech), and whenever scrolling settles
 * outside the middle set the track jumps back by one set width, so it never ends.
 * Swipe, trackpad and arrow keys on the focused track work natively.
 */
export default function ReviewsCarousel({
  children,
  prevLabel,
  nextLabel,
}: {
  children: React.ReactNode;
  prevLabel: string;
  nextLabel: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [looped, setLooped] = useState(false);
  const items = Children.toArray(children);
  const count = items.length;

  const geometry = () => {
    const el = track.current!;
    const card = el.firstElementChild as HTMLElement;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card.offsetWidth + gap;
    const rtl = getComputedStyle(el).direction === "rtl";
    return { el, step, set: step * count, rtl };
  };

  // Turn on the copies, then start on the first real card (the middle set)
  useEffect(() => setLooped(true), []);

  // Jump back by one set when the track has drifted out of the middle set
  const place = (pos: number) => {
    const { el, rtl } = geometry();
    el.scrollTo({ left: rtl ? -pos : pos, behavior: "instant" as ScrollBehavior });
  };
  const recentre = () => {
    if (!track.current) return;
    const { el, set } = geometry();
    const pos = Math.abs(el.scrollLeft);
    if (pos < set * 0.5) place(pos + set);
    else if (pos >= set * 1.5) place(pos - set);
  };

  useEffect(() => {
    if (!looped || !track.current) return;
    place(geometry().set);

    const el = track.current;
    let timer = 0;
    // `scrollend` where supported, a short idle timer as the fallback
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(recentre, 160);
    };
    const onResize = recentre;
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", recentre);
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timer);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", recentre);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [looped, count]);

  const move = (dir: 1 | -1) => {
    if (!track.current) return;
    recentre();
    const { el, step, rtl } = geometry();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: (rtl ? -dir : dir) * step, behavior: reduce ? "auto" : "smooth" });
  };

  const copies = (prefix: string) =>
    items.map((child) =>
      isValidElement(child)
        ? cloneElement(child as React.ReactElement<Record<string, unknown>>, {
            key: `${prefix}-${child.key}`,
            "aria-hidden": true,
            inert: true,
          })
        : child,
    );

  return (
    <div className={styles.carousel}>
      <button type="button" className={styles.navBtn} onClick={() => move(-1)} aria-label={prevLabel}>
        <Icon name="arrow" size={20} className={styles.prevIcon} />
      </button>
      <ul ref={track} className={styles.track} tabIndex={0}>
        {looped && copies("before")}
        {items}
        {looped && copies("after")}
      </ul>
      <button type="button" className={styles.navBtn} onClick={() => move(1)} aria-label={nextLabel}>
        <Icon name="arrow" size={20} />
      </button>
    </div>
  );
}
