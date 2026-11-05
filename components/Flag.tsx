import type { Lang } from "@/lib/i18n";

/**
 * Small flags for the language switcher, drawn as SVG because flag emoji don't show on Windows.
 * Decorative: the switcher's text names the language.
 */
export default function Flag({ lang, size = 20 }: { lang: Lang; size?: number }) {
  const props = {
    width: size,
    height: Math.round((size * 2) / 3),
    viewBox: "0 0 30 20",
    "aria-hidden": true,
    focusable: false,
    style: { borderRadius: 2, flexShrink: 0, boxShadow: "0 0 0 1px rgba(0,0,0,0.12)" },
  } as const;

  if (lang === "he") {
    // Israel: white field, two blue stripes, Star of David
    return (
      <svg {...props}>
        <rect width="30" height="20" fill="#fff" />
        <rect y="2" width="30" height="3" fill="#0038b8" />
        <rect y="15" width="30" height="3" fill="#0038b8" />
        <g fill="none" stroke="#0038b8" strokeWidth="0.9">
          <path d="M15 6.4 18.1 11.8H11.9Z" />
          <path d="M15 13.6 11.9 8.2H18.1Z" />
        </g>
      </svg>
    );
  }

  // United States: 13 stripes and a blue canton (stars simplified to dots at this size)
  const stripes = Array.from({ length: 7 }, (_, i) => (
    <rect key={i} y={(i * 2 * 20) / 13} width="30" height={20 / 13} fill="#b22234" />
  ));
  const stars = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      stars.push(<circle key={`${row}-${col}`} cx={1.5 + col * 2.6} cy={1.4 + row * 2.4} r="0.55" fill="#fff" />);
    }
  }
  return (
    <svg {...props}>
      <rect width="30" height="20" fill="#fff" />
      {stripes}
      <rect width="13" height={(20 * 7) / 13} fill="#3c3b6e" />
      {stars}
    </svg>
  );
}
