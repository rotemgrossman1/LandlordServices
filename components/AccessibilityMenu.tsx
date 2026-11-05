"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { SiteContent } from "@/content";
import Icon from "./Icon";
import styles from "./AccessibilityMenu.module.css";

const STORAGE_KEY = "a11y-settings";
const SCALES = [90, 100, 112.5, 125, 137.5, 150]; // root font size, %
const DEFAULT_SCALE = 1;

type Text = SiteContent["a11yMenu"];
type Option = keyof Text["options"];
const OPTIONS: Option[] = ["contrast", "grayscale", "links", "font", "motion"];

type Settings = { scale: number } & Record<Option, boolean>;
const DEFAULTS: Settings = {
  scale: DEFAULT_SCALE,
  contrast: false,
  grayscale: false,
  links: false,
  font: false,
  motion: false,
};

function load(): Settings {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...DEFAULTS, ...saved };
  } catch {
    return DEFAULTS;
  }
}

/** Applies the settings as `a11y-*` classes on <html> (styles in globals.css) */
function apply(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = s.scale === DEFAULT_SCALE ? "" : `${SCALES[s.scale]}%`;
  for (const o of OPTIONS) root.classList.toggle(`a11y-${o}`, s[o]);
}

/**
 * Accessibility menu: a floating button that opens a panel for text size, high contrast,
 * grayscale, link highlighting, a readable font and stopping animations. Settings are kept
 * in localStorage (a preference, not tracking) and re-applied on every page.
 */
export default function AccessibilityMenu({ text: a11yMenu, statementHref }: { text: Text; statementHref: string }) {
  const [open, setOpen] = useState(false);
  // null until the saved settings are read, so the defaults never overwrite them
  const [saved, setSaved] = useState<Settings | null>(null);
  const settings = saved ?? DEFAULTS;
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSaved(load());
  }, []);

  useEffect(() => {
    if (!saved) return;
    apply(saved);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {
      // storage blocked: settings last for this page only
    }
  }, [saved]);

  // Escape or a click outside closes the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const setScale = (step: number) =>
    setSaved((prev) => {
      const s = prev ?? DEFAULTS;
      return { ...s, scale: Math.min(SCALES.length - 1, Math.max(0, s.scale + step)) };
    });
  const toggle = (o: Option) =>
    setSaved((prev) => {
      const s = prev ?? DEFAULTS;
      return { ...s, [o]: !s[o] };
    });

  return (
    <div ref={wrapRef} className={styles.wrap}>
      {open && (
        <div id={panelId} className={styles.panel} role="group" aria-labelledby={`${panelId}-title`}>
          <div className={styles.head}>
            <h2 id={`${panelId}-title`} className={styles.title}>
              {a11yMenu.title}
            </h2>
            <button
              type="button"
              className={styles.close}
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
              aria-label={a11yMenu.close}
            >
              <Icon name="x" size={22} />
            </button>
          </div>

          <div className={styles.sizeRow}>
            <span>{a11yMenu.textSize}</span>
            <div className={styles.sizeButtons}>
              <button
                type="button"
                className={styles.sizeBtn}
                onClick={() => setScale(-1)}
                disabled={settings.scale === 0}
                aria-label={a11yMenu.decrease}
              >
                {a11yMenu.decreaseSymbol}
              </button>
              <span className={styles.sizeValue} aria-live="polite">
                {Math.round(SCALES[settings.scale])}%
              </span>
              <button
                type="button"
                className={styles.sizeBtn}
                onClick={() => setScale(1)}
                disabled={settings.scale === SCALES.length - 1}
                aria-label={a11yMenu.increase}
              >
                {a11yMenu.increaseSymbol}
              </button>
            </div>
          </div>

          <ul className={styles.options}>
            {OPTIONS.map((o) => (
              <li key={o}>
                <button
                  type="button"
                  className={styles.option}
                  aria-pressed={settings[o]}
                  onClick={() => toggle(o)}
                >
                  <span className={styles.check} aria-hidden="true">
                    {settings[o] && <Icon name="check" size={16} />}
                  </span>
                  {a11yMenu.options[o]}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.foot}>
            <button type="button" className={styles.reset} onClick={() => setSaved(DEFAULTS)}>
              {a11yMenu.reset}
            </button>
            <Link href={statementHref} className={styles.statement} onClick={() => setOpen(false)}>
              {a11yMenu.statement}
            </Link>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={a11yMenu.open}
        title={a11yMenu.open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="accessibility" size={28} />
      </button>
    </div>
  );
}
