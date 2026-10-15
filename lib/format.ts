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
