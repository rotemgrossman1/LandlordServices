/**
 * Phone check shared by the contact form and /api/contact, so both accept the same numbers.
 *
 * Accepts:
 * - Israeli landlines and mobiles: "03-1234567", "050-1234567", "+972 50 123 4567", "972501234567"
 * - Numbers abroad with a country code: "+44 20 7946 0958", "001 212 555 0100"
 * Spaces, dashes, dots and parentheses are ignored. "+" is allowed only at the start.
 */
export function isValidPhone(input: string): boolean {
  const raw = input.trim();
  if (!/^\+?[\d\s().-]+$/.test(raw)) return false;

  const digits = raw.replace(/\D/g, "");
  const international = raw.startsWith("+") || digits.startsWith("00");

  if (international) {
    const number = digits.replace(/^00/, "");
    if (number.startsWith("972")) return isIsraeli(`0${number.slice(3)}`);
    // E.164: country code + subscriber number, 8–15 digits in total
    return number.length >= 8 && number.length <= 15;
  }

  if (digits.startsWith("972")) return isIsraeli(`0${digits.slice(3)}`);
  return isIsraeli(digits);
}

/** 9-digit landlines (02, 03, 04, 08, 09) and 10-digit mobiles and VoIP numbers (05X, 07X). */
function isIsraeli(digits: string): boolean {
  return /^0[23489]\d{7}$/.test(digits) || /^0[57]\d{8}$/.test(digits);
}
