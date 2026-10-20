/** "054-2110096" → "tel:+972542110096" */
export function telHref(phone: string): string {
  return `tel:+972${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}

/** "054-2110096" → "https://wa.me/972542110096", optionally with a pre-filled message */
export function whatsappHref(phone: string, text?: string): string {
  const base = `https://wa.me/972${phone.replace(/\D/g, "").replace(/^0/, "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** "עו״ד דורון מרום" → "דמ" (title dropped, first letters of the first two words) */
export function initials(name: string): string {
  return name
    .replace(/^עו״ד\s+/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

/** "2026-10-20" → "20 באוקטובר 2026". Fixed time zone so the static build always prints the same day. */
export function formatDateHe(isoDate: string) {
  return new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
