/** "03-5775622" → "tel:+97235775622" */
export function telHref(phone: string): string {
  return `tel:+972${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}

/** "054-2110096" → "https://wa.me/972542110096" */
export function whatsappHref(phone: string): string {
  return `https://wa.me/972${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}
