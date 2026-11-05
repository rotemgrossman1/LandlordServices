import { langMeta, type Lang } from "./i18n";

/** "054-2110096" or "+972-54-211-0096" → "542110096" (the number without the country code or leading 0) */
function nationalNumber(phone: string): string {
  return phone.replace(/\D/g, "").replace(/^972/, "").replace(/^0/, "");
}

/** "054-2110096" → "tel:+972542110096" */
export function telHref(phone: string): string {
  return `tel:+972${nationalNumber(phone)}`;
}

/** "054-2110096" → "https://wa.me/972542110096", optionally with a pre-filled message */
export function whatsappHref(phone: string, text?: string): string {
  const base = `https://wa.me/972${nationalNumber(phone)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** "עו״ד דורון מרום" → "דמ", "Adv. Doron Marom" → "DM" (title dropped, first letters of the first two words) */
export function initials(name: string): string {
  return name
    .replace(/^(עו״ד|Adv\.)\s+/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

/** "2026-10-20" → "20 באוקטובר 2026" / "October 20, 2026". Fixed time zone so the static build always prints the same day. */
export function formatDate(isoDate: string, lang: Lang) {
  return new Intl.DateTimeFormat(langMeta[lang].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
