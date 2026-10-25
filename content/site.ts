/**
 * ALL site text and business facts live here.
 *
 * Rules:
 * - Never invent facts. If a value is unknown, leave it as "" or [].
 * - An empty value hides the section/element that uses it.
 */

import type { IconName } from "@/components/Icon";

export type Stat = { value: string; label: string };
// A Google review, copied as written. rating: 1–5 stars (0 = no stars shown); date: e.g. "לפני חודש"
export type Testimonial = { name: string; city: string; text: string; rating: number; date: string };
export type TeamMember = { name: string; role: string; photo: string };
export type PriceItem = { title: string; price: string; note: string };
export type FaqItem = { id: string; question: string; answer: string };
export type Step = { title: string; text: string };
export type Service = {
  id: string; // anchor on /services
  icon: IconName;
  title: string;
  short: string; // one line for cards
  forWhom: string;
  includes: string[];
};
// h1Accent: part of h1 shown in the accent colour (must appear in h1)
export type PageMeta = { title: string; description: string; h1: string; h1Accent?: string; intro: string };
export type Feature = { icon: IconName; title: string; text: string };
// credit + creditUrl are required for Creative Commons photos (see public/images/CREDITS.md)
export type Photo = { src: string; alt: string; credit: string; creditUrl: string };
export type CityPage = {
  slug: string; // URL: /areas/<slug>
  city: string; // must match a name in areas.cities
  meta: PageMeta;
  eyebrow: string;
  hero: Photo;
  galleryTitle: string;
  galleryNote: string; // e.g. "for illustration only"
  gallery: Photo[]; // Empty = gallery hidden
  workTitle: string;
  work: string[]; // paragraphs
  facts: Stat[]; // items with an empty value are hidden
  includesTitle: string;
  includes: string[];
  faq: FaqItem[];
};
export type Persona = { icon: IconName; title: string; pain: string; solution: string };
export type CompareValue = "yes" | "no" | "you";
export type HomeSection =
  | "howItWorks"
  | "personas"
  | "ownerView"
  | "protection"
  | "services"
  | "comparison"
  | "steps"
  | "areas"
  | "testimonials"
  | "faq"
  | "cta";

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------

const addressFull = "ב.ס.ר 2, קומה 20, דרך בן גוריון 1, בני ברק";
// Google Business Profile link (e.g. "https://maps.app.goo.gl/…"). When set, the
// "Google Maps" links open the profile and it is listed in the JSON-LD `sameAs`.
const googleProfile = "";

export const site = {
  name: "Landlord",
  nameHe: "לנדלורד",
  legalName: "", // e.g. "לנדלורד שירותי ניהול בע\"מ" – fill in when confirmed
  url: "https://landlords.co.il",
  foundingYear: 2013,
  phone: "054-2110096", // the one number for calls and WhatsApp
  whatsapp: "054-2110096", // Empty = WhatsApp buttons hidden
  email: "info@landlords.co.il",
  address: {
    street: "דרך בן גוריון 1, ב.ס.ר 2, קומה 20",
    city: "בני ברק",
    full: addressFull,
  },
  googleProfile,
  mapsUrl:
    googleProfile ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("דרך בן גוריון 1, בני ברק")}`,
  wazeUrl: `https://waze.com/ul?q=${encodeURIComponent("דרך בן גוריון 1, בני ברק")}&navigate=yes`,
  facebook: "https://www.facebook.com/landlordservicesltd",
  hours: "", // e.g. "א׳–ה׳ 9:00–17:00"
  companyId: "", // ח.פ.
};

// Photos. Placeholder stock photos for now (sources in public/images/CREDITS.md);
// replace with your own office and apartment photos. Empty = the slot falls back
// to a plain colour field.
export const images = {
  hero: "/images/hero.jpg", // landscape, at least 1800px wide
  heroAlt: "", // decorative: the headline carries the meaning
  office: "", // e.g. "/images/office.jpg"
  personas: "/images/personas-building.jpg", // background of "who is it for". Empty = plain forest
  protection: "/images/protection-law.jpg", // side panel of the legal-protection card. Empty = plain forest
};

// Confirmed by the company: true for all clients, not only Landlord Safe.
export const rentRecord =
  "ב-13 שנה ויותר מ-250 נכסים, אף בעל דירה שלנו לא נשאר בלי שכר דירה – גם כשהדייר הפסיק לשלם.";

// Numbers strip. Items with an empty value are hidden. "מאז 2013" is always shown.
export const stats: Stat[] = [
  { value: "250+", label: "נכסים מנוהלים היום" },
  { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
];

// Real Google reviews only, copied word for word. Empty = the reviews section is hidden.
export const testimonials: Testimonial[] = [ // TEMP SAMPLE: remove before publishing
  { name: "דוגמה 1", city: "תל אביב", text: "טקסט לדוגמה בלבד לבדיקת התצוגה. ביקורת אמיתית מ-Google תופיע כאן ותכלול כמה משפטים על השירות.", rating: 5, date: "לפני חודש" },
  { name: "דוגמה 2", city: "תל אביב", text: "טקסט לדוגמה בלבד לבדיקת התצוגה. ביקורת אמיתית מ-Google תופיע כאן ותכלול כמה משפטים על השירות.", rating: 5, date: "לפני חודש" },
  { name: "דוגמה 3", city: "תל אביב", text: "טקסט לדוגמה בלבד לבדיקת התצוגה. ביקורת אמיתית מ-Google תופיע כאן ותכלול כמה משפטים על השירות.", rating: 5, date: "לפני חודש" },
  { name: "דוגמה 4", city: "תל אביב", text: "טקסט לדוגמה בלבד לבדיקת התצוגה. ביקורת אמיתית מ-Google תופיע כאן ותכלול כמה משפטים על השירות.", rating: 5, date: "לפני חודש" },
  { name: "דוגמה 5", city: "תל אביב", text: "טקסט לדוגמה בלבד לבדיקת התצוגה. ביקורת אמיתית מ-Google תופיע כאן ותכלול כמה משפטים על השירות.", rating: 5, date: "לפני חודש" },
];

// value: e.g. "4.9", count: e.g. "37 ביקורות", url: the Google reviews link (defaults to the profile)
export const googleRating = { value: "", count: "", url: site.googleProfile };

// photo: "" = initials are shown instead
export const team: TeamMember[] = [
  { name: "עו״ד דורון מרום", role: "שותף ומנהל", photo: "" },
  { name: "אורן קטן", role: "מנהל פיתוח עסקי", photo: "" },
  { name: "גלעד ויינברג", role: "מנהל קשרי לקוחות", photo: "" },
  { name: "רותם גרוסמן", role: "מנהל מחלקת IT", photo: "" },
];

export const pricing: PriceItem[] = [];

export const safeTerms = {
  monthsCovered: "", // e.g. "12"
  price: "", // e.g. "X% מדמי השכירות"
};

export const areas = {
  regions: ["גוש דן", "ירושלים"],
  cities: ["תל אביב", "רמת גן", "גבעתיים", "הרצליה", "רעננה", "גבעת שמואל", "בת ים", "ירושלים"],
  // Home page photo cards: views of the cities themselves (not our properties).
  // `credit` + `creditUrl` are required for Creative Commons photos (see public/images/CREDITS.md)
  featured: [
    {
      city: "תל אביב",
      region: "גוש דן",
      image: "/images/area-tel-aviv-yoo.jpg",
      alt: "מגדלי YOO בתל אביב",
      credit: "Ynhockey, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Yoo_Towers_01.jpg",
    },
    {
      city: "הרצליה",
      region: "גוש דן",
      image: "/images/area-herzliya-marina-towers.jpg",
      alt: "מגדלים מעל המרינה של הרצליה",
      credit: "",
      creditUrl: "",
    },
    {
      city: "בת ים",
      region: "גוש דן",
      image: "/images/area-bat-yam.jpg",
      alt: "חוף הים של בת ים",
      credit: "",
      creditUrl: "",
    },
    {
      city: "ירושלים",
      region: "ירושלים",
      image: "/images/area-jerusalem-old-city.jpg",
      alt: "חומות העיר העתיקה ומגדל דוד בירושלים",
      credit: "",
      creditUrl: "",
    },
    {
      city: "גבעתיים",
      region: "גוש דן",
      image: "/images/area-givatayim.jpg",
      alt: "בנייני מגורים בגבעתיים",
      credit: "Юкатан, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Givatayim_-_03.jpg",
    },
    {
      city: "גבעת שמואל",
      region: "גוש דן",
      image: "/images/area-givat-shmuel.jpg",
      alt: "מגדלי מגורים בגבעת שמואל בשקיעה",
      credit: "דוידי ורדי, PikiWiki, CC BY 2.5",
      creditUrl: "https://commons.wikimedia.org/wiki/File:140026_sunset_givat_shmuel_PikiWiki_Israel.jpg",
    },
  ],
};

// ---------------------------------------------------------------------------
// City pages (/areas/<slug>)
// Photos are placeholders of each city's buildings, not properties we manage,
// until we have photos of our own apartments.
// ---------------------------------------------------------------------------

export const cityPages: CityPage[] = [
  {
    slug: "tel-aviv",
    city: "תל אביב",
    meta: {
      title: "ניהול נכסים בתל אביב – ניהול דירות מושכרות | לנדלורד",
      description:
        "ניהול דירות מושכרות בתל אביב: כ-50 נכסים בניהול בכל רחבי העיר. בדיקת דיירים, חוזה עם ליווי משפטי, טיפול בתקלות ושכר דירה מובטח עם Landlord Safe.",
      h1: "ניהול נכסים בתל אביב",
      h1Accent: "בתל אביב",
      intro:
        "לנדלורד מנהלת כ-50 דירות מושכרות בתל אביב, בשכונות בכל רחבי העיר. אנחנו מוצאים ובודקים דיירים, מכינים חוזה עם ליווי משפטי ומטפלים בכל תקלה ובכל חשבון, ואתם מקבלים את שכר הדירה.",
    },
    eyebrow: "אזורי פעילות · גוש דן",
    hero: {
      src: "/images/tel-aviv-white-city.jpg",
      alt: "בניין מגורים בסגנון באוהאוס בעיר הלבנה בתל אביב, עם עץ דקל בחזית",
      credit: "ליאור גולגר, PikiWiki, CC BY 2.5",
      creditUrl: "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_9168_White_City_of_Tel_Aviv.JPG",
    },
    galleryTitle: "נכסים מנוהלים בתל אביב",
    galleryNote: "התמונות להמחשה: בנייני מגורים בתל אביב, לא נכסים שבניהולנו.",
    gallery: [
      {
        src: "/images/tel-aviv-balconies.jpg",
        alt: "בניין מגורים עם מרפסות מלאות צמחייה בתל אביב",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/tel-aviv-dizengoff.jpg",
        alt: "בניין מגורים עגול ברחוב דיזנגוף",
        credit: "שלמה רודד, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:127526_tel_aviv_residential_building_in_dizengoff_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/tel-aviv-rothschild.jpg",
        alt: "בניין מגורים בשדרות רוטשילד",
        credit: "David Shankbone, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:118_Rothschild_Boulevard_by_David_Shankbone.jpg",
      },
      {
        src: "/images/tel-aviv-clock-building.jpg",
        alt: "בניין מגורים ותיק עם מרפסות ושעון גדול בחזית",
        credit: "Deror Avi, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Buildings_in_Tel_Aviv_P1010824.JPG",
      },
      {
        src: "/images/tel-aviv-apartment-block.jpg",
        alt: "בניין דירות טיפוסי בתל אביב בערב",
        credit: "TLV and more, CC BY 2.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Tel-aviv-residential-building-001-february-2016.jpg",
      },
    ],
    workTitle: "העבודה שלנו בתל אביב",
    work: [
      "תל אביב היא אחת הערים המרכזיות שבהן אנחנו פעילים. היום אנחנו מנהלים בה כ-50 נכסים, בשכונות בכל רחבי העיר, בשביל בעלי דירות שלא רוצים או לא יכולים לנהל את השכירות בעצמם.",
      "השכרת דירה בתל אביב מגיעה עם אתגרים משלה: הרבה מועמדים לכל דירה, שצריך לסנן בקפידה, ובניינים ותיקים שבהם תקלות הן עניין שבשגרה. בדיוק בשביל זה אנחנו כאן: הדיירים פונים אלינו, ואנחנו מטפלים עד הסוף.",
    ],
    facts: [
      { value: "כ-50", label: "נכסים בניהול בתל אביב" },
      { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
      { value: `מאז ${site.foundingYear}`, label: "מנהלים נכסים בשביל בעלי דירות" },
    ],
    includesTitle: "מה אתם מקבלים בתל אביב",
    includes: [
      "איתור דיירים וסינון קפדני של המועמדים",
      "בדיקה כלכלית של הדייר וחוזה עם ליווי משפטי",
      "העברת הארנונה בעיריית תל אביב-יפו, המים, החשמל והגז על שם הדיירים",
      "טיפול בכל תקלה, עם בעלי מקצוע שמגיעים לדירה",
      "Landlord Safe: שכר הדירה ממשיך להגיע גם אם הדייר מפסיק לשלם, בכפוף לתנאי השירות",
      "בדיקה שהדירה חוזרת אליכם בסוף השכירות תקינה וללא חובות",
    ],
    faq: [
      {
        id: "tlv-areas",
        question: "באילו שכונות בתל אביב אתם מנהלים דירות?",
        answer:
          "בכל רחבי העיר. היום אנחנו מנהלים כ-50 נכסים בתל אביב, בשכונות שונות מצפון העיר ועד דרומה. הדירה שלכם בתל אביב? נשמח לשמוע עליה.",
      },
      {
        id: "tlv-arnona",
        question: "מי מטפל בארנונה ובחשבונות של דירה מושכרת בתל אביב?",
        answer:
          "אנחנו. בתחילת השכירות אנחנו מעבירים את חשבון הארנונה בעיריית תל אביב-יפו, וגם את המים, החשמל והגז, על שם הדיירים. בסוף השכירות אנחנו בודקים שהדירה חוזרת אליכם ללא חובות.",
      },
      {
        id: "tlv-abroad",
        question: "אני גר בחו״ל ויש לי דירה בתל אביב. תוכלו לנהל אותה?",
        answer:
          "כן. אנחנו מטפלים בהשכרה, בדיירים ובתקלות כאן, ומעדכנים אתכם בכל מקום שבו אתם נמצאים, כך שלא תצטרכו להגיע לארץ בשביל הדירה.",
      },
      {
        id: "tlv-stops-paying",
        question: "מה קורה אם הדייר בדירה שלי בתל אביב מפסיק לשלם?",
        answer:
          "עם Landlord Safe אתם ממשיכים לקבל שכר דירה, בכפוף לתנאי השירות, ואנחנו מטפלים בגבייה ובפינוי בהליך משפטי. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "givatayim",
    city: "גבעתיים",
    meta: {
      title: "ניהול נכסים בגבעתיים – ניהול דירות מושכרות | לנדלורד",
      description:
        "ניהול נכסים בגבעתיים: כ-10 דירות בניהול בכל רחבי העיר, מאז שהתחלנו. דיירים בדוקים, חוזה עם ליווי משפטי, טיפול בתקלות ושכר דירה מובטח עם Landlord Safe.",
      h1: "ניהול נכסים בגבעתיים",
      h1Accent: "בגבעתיים",
      intro:
        "בגבעתיים אנחנו עובדים מאז שהתחלנו, והיום מנהלים בה כ-10 דירות בכל רחבי העיר. אתם נשארים הבעלים של הדירה, ואנחנו לוקחים על עצמנו את כל השאר: הדיירים, החוזה, התקלות והחשבונות.",
    },
    eyebrow: "אזורי פעילות · גוש דן",
    hero: {
      src: "/images/givatayim-towers.jpg",
      alt: "שני מגדלי מגורים בגבעתיים מעל צמרות העצים",
      credit: "Юкатан, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Givatayim_-_03.jpg",
    },
    galleryTitle: "נכסים מנוהלים בגבעתיים",
    galleryNote: "התמונות להמחשה: בנייני מגורים בגבעתיים, לא נכסים שבניהולנו.",
    gallery: [
      {
        src: "/images/givatayim-koslovsky-view.jpg",
        alt: "בתים ובנייני מגורים בגבעתיים במבט מגבעת קוזלובסקי, ומגדלי תל אביב ברקע",
        credit: "Moataz1997, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Giv%27atayim_from_Koslovsky_Hill_2020.jpg",
      },
      {
        src: "/images/givatayim-street.jpg",
        alt: "בנייני מגורים ותיקים עם מרפסות ברחוב בגבעתיים",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/givatayim-palms.jpg",
        alt: "בניין מגורים גבוה ועצי דקל בגבעתיים",
        credit: "Chenspec, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Buildings_in_Givatayim,_March_2024_12.jpg",
      },
      {
        src: "/images/givatayim-old-house.jpg",
        alt: "בית ותיק עם גג רעפים אדום בגבעתיים",
        credit: "ד״ר אבישי טייכר, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_34059_An_old_house_in_Givatayim.JPG",
      },
      {
        src: "/images/givatayim-panorama.jpg",
        alt: "מבט רחב על שכונות המגורים של גבעתיים",
        credit: "אלי שני, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Giv%27atayim_Panorama.jpg",
      },
    ],
    workTitle: "העבודה שלנו בגבעתיים",
    work: [
      "גבעתיים הייתה איתנו מההתחלה. אנחנו מנהלים בה דירות מאז שהקמנו את החברה, והיום יש לנו בעיר כ-10 נכסים בניהול, בשכונות שונות, של בעלי דירות שסומכים עלינו לאורך השנים.",
      "גבעתיים היא עיר מגורים קטנה וצפופה בין תל אביב לרמת גן, ובניינים ותיקים עומדים בה לצד מגדלים חדשים. בבניין ותיק צריך מישהו שיגיע מהר כשמשהו מתקלקל, ובבניין חדש צריך לדאוג שהדירה תישמר כמו שקיבלתם אותה. אנחנו עושים את שניהם, כדי שאתם לא תצטרכו להתעסק בזה.",
    ],
    facts: [
      { value: "כ-10", label: "נכסים בניהול בגבעתיים" },
      { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
      { value: `מאז ${site.foundingYear}`, label: "מנהלים נכסים בשביל בעלי דירות" },
    ],
    includesTitle: "מה אתם מקבלים בגבעתיים",
    includes: [
      "איתור דיירים לדירה וסינון קפדני של המועמדים",
      "בדיקה כלכלית של הדייר, ביטחונות וחוזה שכירות עם ליווי משפטי",
      "העברת הארנונה בעיריית גבעתיים, המים, החשמל והגז על שם הדיירים",
      "קו אחד לדיירים לכל תקלה, ובעלי מקצוע שאנחנו שולחים ומפקחים עליהם",
      "Landlord Safe: שכר הדירה ממשיך להגיע גם אם הדייר מפסיק לשלם, בכפוף לתנאי השירות",
      "בסוף השכירות: בדיקת הדירה וסגירת החשבונות לפני שהיא חוזרת אליכם",
    ],
    faq: [
      {
        id: "givatayim-areas",
        question: "באילו אזורים בגבעתיים אתם מנהלים דירות?",
        answer:
          "בכל רחבי העיר. היום אנחנו מנהלים כ-10 נכסים בגבעתיים, בשכונות שונות, ואנחנו פעילים בעיר מאז שהתחלנו לעבוד. אם יש לכם דירה בגבעתיים, נשמח לשמוע עליה.",
      },
      {
        id: "givatayim-old-building",
        question: "הדירה שלי בבניין ותיק בגבעתיים. מי מטפל בתקלות?",
        answer:
          "אנחנו. הדיירים פונים אלינו ולא אליכם, ואנחנו שולחים בעל מקצוע, מוודאים שהתיקון נעשה ומעדכנים אתכם.",
      },
      {
        id: "givatayim-arnona",
        question: "מי מעביר את הארנונה בעיריית גבעתיים על שם הדייר?",
        answer:
          "אנחנו. בתחילת השכירות אנחנו מעבירים את חשבון הארנונה בעיריית גבעתיים, וגם את המים, החשמל והגז, על שם הדיירים. בסוף השכירות אנחנו מוודאים שאין חובות לפני שהדירה חוזרת אליכם.",
      },
      {
        id: "givatayim-stops-paying",
        question: "ומה אם הדייר בגבעתיים מפסיק לשלם?",
        answer:
          "עם Landlord Safe שכר הדירה ממשיך להגיע אליכם, בכפוף לתנאי השירות, ואנחנו מטפלים בגבייה ובפינוי בהליך משפטי. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "herzliya",
    city: "הרצליה",
    meta: {
      title: "ניהול נכסים בהרצליה – ניהול דירות מושכרות | לנדלורד",
      description:
        "ניהול נכסים בהרצליה: כ-20 נכסים בניהול בכל רחבי העיר, מהשכונות הוותיקות ועד הרצליה פיתוח. דיירים בדוקים, ליווי משפטי ושכר דירה מובטח עם Landlord Safe.",
      h1: "ניהול נכסים בהרצליה",
      h1Accent: "בהרצליה",
      intro:
        "בהרצליה אנחנו מנהלים היום כ-20 נכסים, בשכונות בכל רחבי העיר. אנחנו בוחרים את הדיירים, דואגים לחוזה, עונים לכל תקלה ומטפלים בחשבונות, כדי שהדירה שלכם תעבוד בשבילכם ולא להפך.",
    },
    eyebrow: "אזורי פעילות · גוש דן",
    hero: {
      src: "/images/herzliya-marina-towers.jpg",
      alt: "בנייני מגורים מעל המרינה של הרצליה, עם סירות ועצי דקל",
      credit: "",
      creditUrl: "",
    },
    galleryTitle: "נכסים מנוהלים בהרצליה",
    galleryNote: "התמונות להמחשה: בנייני מגורים בהרצליה, לא נכסים שבניהולנו.",
    gallery: [
      {
        src: "/images/herzliya-neve-amirim.jpg",
        alt: "מגדלי מגורים ועצי דקל בשכונת נווה עמירים בהרצליה",
        credit: "David Shay, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Neve_Amirim.JPG",
      },
      {
        src: "/images/herzliya-brigade-street.jpg",
        alt: "בנייני מגורים חדשים עם מרפסות ברחוב הבריגדה היהודית בהרצליה",
        credit: "דוד שי, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Jewish_Brigade_Group_street,_Herzliya.jpg",
      },
      {
        src: "/images/herzliya-yad-hatisha.jpg",
        alt: "בנייני מגורים בשכונת יד התשעה בהרצליה",
        credit: "דוד שי, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Yad_Hatisha_1.jpg",
      },
      {
        src: "/images/herzliya-bauhaus.jpg",
        alt: "בניין בסגנון באוהאוס במרכז הרצליה",
        credit: "ישראל זלר, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:115732_herzliya_bauhaus_building_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/herzliya-new-buildings.jpg",
        alt: "בנייני מגורים חדשים בהרצליה",
        credit: "דוד שי, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:New_buildings_on_central_bus_station_of_Herzliya.jpg",
      },
    ],
    workTitle: "העבודה שלנו בהרצליה",
    work: [
      "היום אנחנו מנהלים בהרצליה כ-20 נכסים, בכל רחבי העיר. בשביל בעלי דירות שאין להם זמן, כוח או יכולת לנהל את השכירות בעצמם, ורוצים שהיא תתנהל בלי שיצטרכו לרדוף אחרי אף אחד.",
      "הרצליה היא עיר של ניגודים: בניינים ותיקים במרכז העיר, שכונות כמו נווה עמירים ויד התשעה, פרויקטים חדשים, ובתים ודירות גדולות בהרצליה פיתוח. כל סוג נכס דורש יחס אחר. בדירה ותיקה חשוב לטפל מהר בתקלות, ובנכס יוקרתי חשוב במיוחד להתאים את הדייר לנכס ולעקוב אחרי מצבו. אנחנו עושים את זה בשבילכם, דרך שירות ניהול נכסים מושכרים או שירות ניהול נכסי יוקרה.",
    ],
    facts: [
      { value: "כ-20", label: "נכסים בניהול בהרצליה" },
      { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
      { value: `מאז ${site.foundingYear}`, label: "מנהלים נכסים בשביל בעלי דירות" },
    ],
    includesTitle: "מה אתם מקבלים בהרצליה",
    includes: [
      "מציאת דיירים מתאימים וסינון קפדני של כל מועמד",
      "בדיקה כלכלית, ביטחונות וערבויות, וחוזה שכירות עם ליווי משפטי",
      "העברת הארנונה בעיריית הרצליה, המים, החשמל והגז על שם הדיירים",
      "מענה לכל תקלה, עם בעלי מקצוע שמגיעים לנכס",
      "Landlord Safe: שכר הדירה ממשיך להגיע גם אם הדייר מפסיק לשלם, בכפוף לתנאי השירות",
      "בדיקת הנכס בסוף השכירות, כדי שיחזור אליכם תקין וללא חובות",
    ],
    faq: [
      {
        id: "herzliya-areas",
        question: "באילו שכונות בהרצליה אתם עובדים?",
        answer:
          "בכל העיר. היום אנחנו מנהלים כ-20 נכסים בהרצליה, בשכונות שונות. ספרו לנו איפה הדירה שלכם, ונשמח לבדוק איך אפשר לעזור.",
      },
      {
        id: "herzliya-luxury",
        question: "יש לי בית או דירה גדולה בהרצליה פיתוח. אתם מנהלים גם נכסים כאלה?",
        answer:
          "כן. בשביל נכסים שדורשים תשומת לב מיוחדת יש לנו שירות ניהול נכסי יוקרה: כל מה שכלול בניהול נכסים מושכרים, ועוד התאמה קפדנית של הדייר לנכס ומעקב שוטף אחרי מצבו.",
      },
      {
        id: "herzliya-arnona",
        question: "מה עם הארנונה והחשבונות של דירה מושכרת בהרצליה?",
        answer:
          "אנחנו מטפלים בזה. בתחילת השכירות אנחנו מעבירים את הארנונה בעיריית הרצליה, את המים, החשמל והגז על שם הדיירים, ובסוף השכירות בודקים שלא נשארו חובות על הדירה.",
      },
      {
        id: "herzliya-stops-paying",
        question: "מה קורה אם דייר בהרצליה מפסיק לשלם שכר דירה?",
        answer:
          "עם Landlord Safe אתם ממשיכים לקבל את שכר הדירה, בכפוף לתנאי השירות, ואנחנו מטפלים בגבייה ובפינוי בהליך משפטי. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "givat-shmuel",
    city: "גבעת שמואל",
    meta: {
      title: "ניהול נכסים בגבעת שמואל – ניהול דירות מושכרות | לנדלורד",
      description:
        "ניהול נכסים בגבעת שמואל: כ-5 נכסים בניהול, מהמשרד שלנו בבני ברק הסמוכה. דיירים בדוקים, חוזה עם ליווי משפטי, טיפול בתקלות ושכר דירה מובטח עם Landlord Safe.",
      h1: "ניהול נכסים בגבעת שמואל",
      h1Accent: "בגבעת שמואל",
      intro:
        "יש לכם דירה בגבעת שמואל ואין לכם זמן לנהל אותה? אנחנו מנהלים בעיר כ-5 נכסים, מהמשרד שלנו בבני ברק, ממש בשכנות. אנחנו מוצאים דיירים, חותמים איתם על חוזה עם ליווי משפטי ומטפלים בכל מה שקורה בדירה לאורך השכירות.",
    },
    eyebrow: "אזורי פעילות · גוש דן",
    hero: {
      src: "/images/givat-shmuel-sunset.jpg",
      alt: "מגדלי מגורים בגבעת שמואל בשקיעה, מעל הפארק הדרומי",
      credit: "דוידי ורדי, PikiWiki, CC BY 2.5",
      creditUrl: "https://commons.wikimedia.org/wiki/File:140026_sunset_givat_shmuel_PikiWiki_Israel.jpg",
    },
    galleryTitle: "נכסים מנוהלים בגבעת שמואל",
    galleryNote: "התמונות להמחשה: בנייני מגורים בגבעת שמואל, לא נכסים שבניהולנו.",
    gallery: [
      {
        src: "/images/givat-shmuel-skyline.jpg",
        alt: "גבעת שמואל בשקיעה, ומאחוריה רמת גן, בני ברק ותל אביב",
        credit: "דוידי ורדי, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:140029_givat_shmuel_at_sunset_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/givat-shmuel-ramat-hadar.jpg",
        alt: "מגדלי מגורים חדשים בשכונת רמת הדר בגבעת שמואל",
        credit: "דוידי ורדי, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:140028_ramat_hadar_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/givat-shmuel-ramat-hadar-street.jpg",
        alt: "בנייני מגורים בשכונת רמת הדר בגבעת שמואל",
        credit: "Michael Jacobson, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:GivatShmuel23.jpg",
      },
      {
        src: "/images/givat-shmuel-ramon-park.jpg",
        alt: "פארק רמון בגבעת שמואל, ובנייני מגורים מסביב",
        credit: "ד״ר אבישי טייכר, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_28348_Ramon_Park_in_Givat_Shmuel.JPG",
      },
      {
        src: "/images/givat-shmuel-towers.jpg",
        alt: "בנייני מגורים גבוהים לאורך רחוב בגבעת שמואל",
        credit: "Chenspec, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Givat_Shmuel,_May_2024_05.jpg",
      },
    ],
    workTitle: "העבודה שלנו בגבעת שמואל",
    work: [
      "גבעת שמואל היא עיר קטנה, בין בני ברק, רמת גן ופתח תקווה, ליד אוניברסיטת בר-אילן. המשרד שלנו נמצא בבני ברק, כך שאנחנו קרובים לדירות שאנחנו מנהלים כאן. היום יש לנו בעיר כ-5 נכסים בניהול.",
      "לצד הבתים הוותיקים נבנו בעיר בשנים האחרונות שכונות חדשות עם מגדלי מגורים, כמו רמת הדר. אבל לא משנה אם הדירה שלכם במגדל חדש או בבניין ותיק, מה שחשוב לכם דומה: דייר אמין, שכר דירה שמגיע בזמן, ומישהו שעונה כשמשהו מתקלקל. את זה אנחנו לוקחים על עצמנו.",
    ],
    facts: [
      { value: "כ-5", label: "נכסים בניהול בגבעת שמואל" },
      { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
      { value: `מאז ${site.foundingYear}`, label: "מנהלים נכסים בשביל בעלי דירות" },
    ],
    includesTitle: "מה אתם מקבלים בגבעת שמואל",
    includes: [
      "איתור דיירים לדירה וסינון קפדני של המועמדים",
      "בדיקה כלכלית של הדייר, ביטחונות וחוזה שכירות עם ליווי משפטי",
      "העברת הארנונה בעיריית גבעת שמואל, המים, החשמל והגז על שם הדיירים",
      "טיפול בכל תקלה, עם בעלי מקצוע שמגיעים לדירה",
      "Landlord Safe: שכר הדירה ממשיך להגיע גם אם הדייר מפסיק לשלם, בכפוף לתנאי השירות",
      "בדיקה שהדירה חוזרת אליכם בסוף השכירות תקינה וללא חובות",
    ],
    faq: [
      {
        id: "givat-shmuel-areas",
        question: "אתם מנהלים דירות בכל גבעת שמואל?",
        answer:
          "כן. היום אנחנו מנהלים בגבעת שמואל כ-5 נכסים, והמשרד שלנו בבני ברק קרוב לכל חלקי העיר. ספרו לנו על הדירה שלכם, ונשמח לבדוק איך אפשר לעזור.",
      },
      {
        id: "givat-shmuel-arnona",
        question: "מי מעביר את הארנונה בעיריית גבעת שמואל על שם הדייר?",
        answer:
          "אנחנו. בתחילת השכירות אנחנו מעבירים את חשבון הארנונה בעיריית גבעת שמואל, וגם את המים, החשמל והגז, על שם הדיירים. בסוף השכירות אנחנו בודקים שהדירה חוזרת אליכם ללא חובות.",
      },
      {
        id: "givat-shmuel-abroad",
        question: "אני גר בחו״ל ויש לי דירה בגבעת שמואל. אפשר לנהל אותה מרחוק?",
        answer:
          "כן. יש לנו שירות ניהול דירות לתושבי חוץ: אנחנו כאן, ליד הנכס, מטפלים בדיירים ובתקלות ומעדכנים אתכם, כך שלא תצטרכו להגיע לארץ בשביל הדירה.",
      },
      {
        id: "givat-shmuel-stops-paying",
        question: "מה קורה אם הדייר בגבעת שמואל מפסיק לשלם?",
        answer:
          "עם Landlord Safe שכר הדירה ממשיך להגיע אליכם, בכפוף לתנאי השירות, ואנחנו מטפלים בגבייה ובפינוי בהליך משפטי. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "bat-yam",
    city: "בת ים",
    meta: {
      title: "ניהול נכסים בבת ים – ניהול דירות מושכרות | לנדלורד",
      description:
        "ניהול נכסים בבת ים: כ-10 נכסים בניהול בכל רחבי העיר, ליד הים ובשכונות. דיירים בדוקים, חוזה עם ליווי משפטי, טיפול בתקלות ושכר דירה מובטח עם Landlord Safe.",
      h1: "ניהול נכסים בבת ים",
      h1Accent: "בבת ים",
      intro:
        "דירה בבת ים צריכה דייר טוב ומישהו שישים עליה עין. אנחנו מנהלים בעיר כ-10 נכסים, בשכונות בכל רחבי העיר, ומטפלים בשבילכם בכל השכירות: מבחירת הדייר והחוזה ועד התקלות והחשבונות.",
    },
    eyebrow: "אזורי פעילות · גוש דן",
    hero: {
      src: "/images/bat-yam-beach.jpg",
      alt: "חוף הים של בת ים ובנייני מגורים גבוהים לאורך הטיילת",
      credit: "",
      creditUrl: "",
    },
    galleryTitle: "נכסים מנוהלים בבת ים",
    galleryNote: "התמונות להמחשה: בנייני מגורים בבת ים, לא נכסים שבניהולנו.",
    gallery: [
      {
        src: "/images/bat-yam-coast.jpg",
        alt: "מבט מלמעלה על שכונות המגורים של בת ים לאורך חוף הים",
        credit: "בר, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Bat_Yam.jpg",
      },
      {
        src: "/images/bat-yam-renovated.jpg",
        alt: "בניין מגורים ותיק ומשופץ בבת ים",
        credit: "שלמה רודד, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:150835_bat_yam_-_renovated_residential_buildings_-_charac_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/bat-yam-towers.jpg",
        alt: "מגדלי מגורים בבת ים",
        credit: "Юкатан, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Skyscrapers_of_Bat-Yam_03.jpg",
      },
      {
        src: "/images/bat-yam-apartments.jpg",
        alt: "בנייני דירות ורצועת דשא ברחוב בבת ים",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/bat-yam-city-park.jpg",
        alt: "מגדלי מגורים מעל הפארק העירוני של בת ים",
        credit: "Ynhockey, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:City_Park_Bat_Yam_01.jpg",
      },
    ],
    workTitle: "העבודה שלנו בבת ים",
    work: [
      "בת ים יושבת על חוף הים, מדרום לתל אביב-יפו, ויש בה הכול: בניינים ותיקים בשכונות, בניינים שעברו שיפוץ, ומגדלי מגורים חדשים ליד הים. היום אנחנו מנהלים בעיר כ-10 נכסים, בשכונות בכל רחבי העיר.",
      "בעיר שמשתנה כל כך מהר, כל דירה צריכה יחס משלה. בבניין ותיק חשוב לטפל מהר בכל תקלה, ובדירה חדשה חשוב לשמור עליה במצב שבו קיבלתם אותה. בכל מקרה, הדיירים פונים אלינו, ואתם מקבלים עדכון ושכר דירה, בלי טלפונים באמצע היום.",
    ],
    facts: [
      { value: "כ-10", label: "נכסים בניהול בבת ים" },
      { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
      { value: `מאז ${site.foundingYear}`, label: "מנהלים נכסים בשביל בעלי דירות" },
    ],
    includesTitle: "מה אתם מקבלים בבת ים",
    includes: [
      "איתור דיירים לדירה וסינון קפדני של המועמדים",
      "בדיקה כלכלית של הדייר, ביטחונות וערבויות, וחוזה שכירות עם ליווי משפטי",
      "העברת הארנונה בעיריית בת ים, המים, החשמל והגז על שם הדיירים",
      "טיפול בכל תקלה, עם בעלי מקצוע שמגיעים לדירה",
      "Landlord Safe: שכר הדירה ממשיך להגיע גם אם הדייר מפסיק לשלם, בכפוף לתנאי השירות",
      "בדיקה שהדירה חוזרת אליכם בסוף השכירות תקינה וללא חובות",
    ],
    faq: [
      {
        id: "bat-yam-areas",
        question: "באילו שכונות בבת ים אתם מנהלים דירות?",
        answer:
          "בכל רחבי העיר. היום אנחנו מנהלים כ-10 נכסים בבת ים, בשכונות שונות. ספרו לנו על הדירה שלכם, ונשמח לבדוק איך אפשר לעזור.",
      },
      {
        id: "bat-yam-arnona",
        question: "מי מטפל בארנונה ובחשבונות של דירה מושכרת בבת ים?",
        answer:
          "אנחנו. בתחילת השכירות אנחנו מעבירים את חשבון הארנונה בעיריית בת ים, וגם את המים, החשמל והגז, על שם הדיירים. בסוף השכירות אנחנו בודקים שהדירה חוזרת אליכם ללא חובות.",
      },
      {
        id: "bat-yam-abroad",
        question: "אני לא גר בארץ ויש לי דירה בבת ים. תוכלו לנהל אותה?",
        answer:
          "כן. יש לנו שירות ניהול דירות לתושבי חוץ: אנחנו מטפלים בדיירים ובתקלות כאן, ליד הנכס, ומעדכנים אתכם בכל מקום שבו אתם נמצאים.",
      },
      {
        id: "bat-yam-stops-paying",
        question: "ומה אם הדייר בבת ים מפסיק לשלם?",
        answer:
          "עם Landlord Safe שכר הדירה ממשיך להגיע אליכם, בכפוף לתנאי השירות, ואנחנו מטפלים בגבייה ובפינוי בהליך משפטי. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "jerusalem",
    city: "ירושלים",
    meta: {
      title: "ניהול נכסים בירושלים – ניהול דירות מושכרות | לנדלורד",
      description:
        "ניהול נכסים בירושלים: כ-20 נכסים בניהול בשכונות בכל רחבי העיר. דיירים בדוקים, חוזה עם ליווי משפטי, טיפול בתקלות ושכר דירה מובטח עם Landlord Safe.",
      h1: "ניהול נכסים בירושלים",
      h1Accent: "בירושלים",
      intro:
        "לא כל מי שיש לו דירה בירושלים גר לידה. אנחנו מנהלים בעיר כ-20 נכסים, בשכונות בכל רחבי העיר, ודואגים בשבילכם לכל השכירות: דיירים בדוקים, חוזה עם ליווי משפטי, תקלות שמטופלות וחשבונות מסודרים.",
    },
    eyebrow: "אזורי פעילות · ירושלים",
    hero: {
      src: "/images/jerusalem-old-city.jpg",
      alt: "חומות העיר העתיקה ומגדל דוד, ושכונות המגורים של ירושלים ברקע",
      credit: "",
      creditUrl: "",
    },
    galleryTitle: "נכסים מנוהלים בירושלים",
    galleryNote: "התמונות להמחשה: בנייני מגורים בירושלים, לא נכסים שבניהולנו.",
    gallery: [
      {
        src: "/images/jerusalem-city-view.jpg",
        alt: "מבט מלמעלה על בנייני המגורים במרכז ירושלים",
        credit: "חגי אגמון-שניר, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:CityTowerJerusalemNov112022.jpg",
      },
      {
        src: "/images/jerusalem-stone-street.jpg",
        alt: "בנייני מגורים מאבן ירושלמית ברחוב מגורים בירושלים",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/jerusalem-baka.jpg",
        alt: "בית אבן ותיק עם גינה בשכונת בקעה בירושלים",
        credit: "ישראל זלר, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:114052_jerusalem_bakaa_neighborhood_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/jerusalem-unsdorf.jpg",
        alt: "בנייני דירות בשכונת אונסדורף בירושלים",
        credit: "Yoninah, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Unsdorf,_Jerusalem.JPG",
      },
      {
        src: "/images/jerusalem-ramat-eshkol.jpg",
        alt: "בניין דירות מאבן בשכונת רמת אשכול בירושלים",
        credit: "יעקב, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Ramat_Eshkol7221.JPG",
      },
    ],
    workTitle: "העבודה שלנו בירושלים",
    work: [
      "ירושלים היא העיר שבה אנחנו פעילים מחוץ לגוש דן. היום אנחנו מנהלים בה כ-20 נכסים, בשכונות בכל רחבי העיר, בשביל בעלי דירות שאין להם זמן, כוח או יכולת לנהל את השכירות בעצמם.",
      "ירושלים היא עיר של שכונות שונות מאוד זו מזו: בתי אבן ותיקים בשכונות היסטוריות, שיכונים משנות השישים והשבעים, ובניינים חדשים בשכונות שנבנו מאז. לכל אחת מהן קהל דיירים משלה, ולכל בניין תקלות משלו. אנחנו מוצאים לכל דירה את הדייר שמתאים לה, ומטפלים בכל מה שקורה בה עד סוף השכירות.",
    ],
    facts: [
      { value: "כ-20", label: "נכסים בניהול בירושלים" },
      { value: "0", label: "חודשים בלי שכר דירה לבעלי הדירות שלנו" },
      { value: `מאז ${site.foundingYear}`, label: "מנהלים נכסים בשביל בעלי דירות" },
    ],
    includesTitle: "מה אתם מקבלים בירושלים",
    includes: [
      "איתור דיירים לדירה וסינון קפדני של המועמדים",
      "בדיקה כלכלית של הדייר, ביטחונות וערבויות, וחוזה שכירות עם ליווי משפטי",
      "העברת הארנונה בעיריית ירושלים, המים, החשמל והגז על שם הדיירים",
      "טיפול בכל תקלה, עם בעלי מקצוע שמגיעים לדירה",
      "Landlord Safe: שכר הדירה ממשיך להגיע גם אם הדייר מפסיק לשלם, בכפוף לתנאי השירות",
      "בדיקה שהדירה חוזרת אליכם בסוף השכירות תקינה וללא חובות",
    ],
    faq: [
      {
        id: "jerusalem-areas",
        question: "באילו שכונות בירושלים אתם מנהלים דירות?",
        answer:
          "בכל רחבי העיר. היום אנחנו מנהלים כ-20 נכסים בירושלים, בשכונות שונות. ספרו לנו איפה הדירה שלכם, ונשמח לבדוק איך אפשר לעזור.",
      },
      {
        id: "jerusalem-far",
        question: "אני גר רחוק מירושלים, בארץ או בחו״ל. אפשר לנהל את הדירה בלי להגיע אליה?",
        answer:
          "כן. בשביל זה אנחנו כאן: אנחנו מטפלים בדיירים, בתקלות ובחשבונות ומעדכנים אתכם, כך שלא תצטרכו לנסוע לירושלים בשביל הדירה. לבעלי דירות שגרים בחו״ל יש לנו גם שירות ניהול דירות לתושבי חוץ.",
      },
      {
        id: "jerusalem-arnona",
        question: "מי מעביר את הארנונה בעיריית ירושלים על שם הדייר?",
        answer:
          "אנחנו. בתחילת השכירות אנחנו מעבירים את חשבון הארנונה בעיריית ירושלים, וגם את המים, החשמל והגז, על שם הדיירים. בסוף השכירות אנחנו בודקים שהדירה חוזרת אליכם ללא חובות.",
      },
      {
        id: "jerusalem-stops-paying",
        question: "מה קורה אם הדייר בדירה שלי בירושלים מפסיק לשלם?",
        answer:
          "עם Landlord Safe אתם ממשיכים לקבל שכר דירה, בכפוף לתנאי השירות, ואנחנו מטפלים בגבייה ובפינוי בהליך משפטי. " +
          rentRecord,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const nav = [
  { href: "/services", label: "שירותים" },
  { href: "/landlord-safe", label: "Landlord Safe" },
  { href: "/about", label: "אודות" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

export const cta = {
  primary: "תאמו שיחת היכרות",
  primaryHref: "/contact",
  call: "התקשרו",
  whatsapp: "וואטסאפ",
  whatsappLong: "דברו איתנו בוואטסאפ",
  whatsappText: "שלום, אשמח לשמוע על ניהול הדירה שלי", // pre-filled WhatsApp message
};

// ---------------------------------------------------------------------------
// Home page: section order
// Remove a key to hide a section, or reorder keys to move sections.
// (The hero always comes first.)
// ---------------------------------------------------------------------------

// Order follows the Acre & Key design. "steps" and "ownerView" are off; "comparison" lives on /services.
// "areas" should come off once all the city pages exist (they get linked from the footer).
export const homeSections: HomeSection[] = [
  "howItWorks",
  "personas",
  "services",
  "protection",
  "testimonials",
  "areas",
  "faq",
  "cta",
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const services: Service[] = [
  {
    id: "rental-management",
    icon: "key",
    title: "ניהול נכסים מושכרים",
    short: "מציאת דיירים, חוזה, העברת חשבונות וטיפול בכל תקלה – עד שהדירה חוזרת אליכם.",
    forWhom:
      "לבעלי דירות שמשכירים או רוצים להשכיר, ומעדיפים שמישהו מקצועי ידאג לכל הפרטים במקומם.",
    includes: [
      "איתור דיירים וסינון מועמדים",
      "חוזה שכירות עם ליווי משפטי",
      "העברת חשבונות הרשויות (ארנונה, מים, חשמל, גז) על שם הדיירים",
      "טיפול בכל התקלות לאורך תקופת השכירות, כולל תיאום בעלי מקצוע",
      "בדיקה שהדירה מוחזרת בסוף השכירות במצב תקין וללא חובות",
    ],
  },
  {
    id: "landlord-safe",
    icon: "shieldCheck",
    title: "Landlord Safe",
    short: "שקט נפשי: גם אם הדייר מפסיק לשלם, אתם ממשיכים לקבל שכר דירה.",
    forWhom: "לבעלי דירות שרוצים ביטחון שהשכירות תמשיך להגיע, ומישהו שיטפל משפטית אם משהו משתבש.",
    includes: [
      "בדיקה כלכלית של הדייר",
      "ייעוץ בנושא ביטחונות וערבויות",
      "הכנת חוזה השכירות",
      "ערבות על דמי השכירות – אתם ממשיכים לקבל שכר דירה",
      "פינוי משפטי, כולל הליכי הוצאה לפועל",
      "גביית חובות בהליך משפטי",
    ],
  },
  {
    id: "abroad",
    icon: "globe",
    title: "ניהול דירות לתושבי חוץ",
    short: "גרים בחו״ל? אנחנו כאן, ליד הנכס, ומטפלים בו בשבילכם.",
    forWhom: "לבעלי דירות בישראל שגרים בחו״ל, או שמגיעים לארץ רק לביקורים.",
    includes: [
      "ניהול מלא של השכרת הדירה מרחוק",
      "טיפול בתקלות ובתחזוקה בלי שתצטרכו להגיע",
      "עדכונים שוטפים, בכל מקום שבו אתם נמצאים",
    ],
  },
  {
    id: "luxury",
    icon: "gem",
    title: "ניהול נכסי יוקרה",
    short: "ליווי אישי וצמוד לנכסים שדורשים תשומת לב מיוחדת.",
    forWhom: "לבעלי דירות ונכסי יוקרה שחשוב להם שהנכס יישמר ברמה גבוהה ושהדיירים יקבלו מענה מהיר.",
    includes: [
      "כל מה שכלול בניהול נכסים מושכרים",
      "התאמה קפדנית של דיירים לנכס",
      "מעקב שוטף אחר מצב הנכס",
    ],
  },
  {
    id: "commercial",
    icon: "building",
    title: "משרדים ונכסים מסחריים",
    short: "גם משרדים ונכסים מסחריים מקבלים אצלנו ניהול מסודר ואחראי.",
    forWhom: "לבעלי משרדים ונכסים מסחריים שמחפשים מישהו שינהל את השכירות והנכס בשבילם.",
    includes: [
      "ניהול השכירות מול השוכרים",
      "הסכם שכירות עם ליווי משפטי",
      "טיפול בתקלות ובתחזוקה",
    ],
  },
];

// ---------------------------------------------------------------------------
// How it works (4 steps)
// ---------------------------------------------------------------------------

export const steps: Step[] = [
  {
    title: "שיחת היכרות",
    text: "מספרים לנו על הדירה ועל מה שחשוב לכם. נבנה לכם חבילה שמתאימה בדיוק לצרכים שלכם.",
  },
  {
    title: "מציאת דיירים ובדיקתם",
    text: "אנחנו מאתרים דיירים, בודקים אותם לעומק ומציגים לכם את המתאימים.",
  },
  {
    title: "חוזה וכניסה לדירה",
    text: "מכינים חוזה עם ליווי משפטי ומעבירים את חשבונות הרשויות על שם הדיירים.",
  },
  {
    title: "ניהול שוטף",
    text: "מטפלים בכל תקלה לאורך השכירות, ובסוף בודקים שהדירה חוזרת אליכם תקינה וללא חובות.",
  },
];

// Home: the short one-line strip under the hero. Empty items = hidden
export const howItWorks = {
  title: "איך זה עובד",
  items: [
    { icon: "search", text: "אנחנו מוצאים לכם דייר מתאים" },
    { icon: "contract", text: "חוזה עם גב משפטי" },
    { icon: "bill", text: "מעבר דירה וחשבונות באחריותנו" },
    { icon: "wrench", text: "מטפלים בכל תקלה" },
    { icon: "banknote", text: "שכר הדירה אצלכם, כל חודש" },
  ] satisfies { icon: IconName; text: string }[],
};

// ---------------------------------------------------------------------------
// Home: "who is it for"
// ---------------------------------------------------------------------------

export const personas = {
  eyebrow: "למי זה מתאים",
  title: "יש לכם דירה. אין לכם אפשרות לנהל אותה.",
  titleAccent: "אין לכם אפשרות לנהל אותה.",
  lead: "רוב הלקוחות שלנו הם אנשים רגילים עם דירה אחת עד שלוש, שלא יכולים או לא רוצים לנהל את השכירות בעצמם.",
  // Closing card after the items. Empty title = hidden
  closingTitle: "המצב שלכם קצת אחר?",
  closingText: "ספרו לנו על הדירה, ונבדוק יחד אם ואיך אנחנו יכולים לעזור.",
  items: [
    {
      icon: "homeHeart",
      title: "ירשתם דירה",
      pain: "פתאום יש לכם נכס, ואין לכם מושג מאיפה מתחילים.",
      solution: "לוקחים את הדירה מהיום הראשון: הכנה להשכרה, דיירים, חוזה וחשבונות.",
    },
    {
      icon: "globe",
      title: "גרים רחוק או בחו״ל",
      pain: "הדירה במרכז, ואתם בצפון, ברילוקיישן או בצד השני של העולם.",
      solution: "אנחנו ליד הנכס בשבילכם, ומעדכנים אתכם בכל מקום שבו אתם נמצאים.",
    },
    {
      icon: "heart",
      title: "כשקשה לטפל בעצמכם",
      pain: "טלפונים מדיירים, בעלי מקצוע ובירוקרטיה כבר לא מתאימים לכם.",
      solution: "כתובת אחת אמינה שמטפלת בהכול, ואתם רק מקבלים את שכר הדירה.",
    },
    {
      icon: "briefcase",
      title: "אין לכם זמן",
      pain: "עבודה, משפחה, ועכשיו גם אינסטלטור באמצע ישיבה.",
      solution: "הדיירים מתקשרים אלינו, לא אליכם. אנחנו מטפלים ומעדכנים.",
    },
    {
      icon: "chart",
      title: "משקיעים עם כמה דירות",
      pain: "כמה דירות, כמה דיירים והרבה מאוד ניירת.",
      solution: "ניהול מסודר של כל הנכסים במקום אחד, בשקיפות מלאה.",
    },
  ] satisfies Persona[],
};

// ---------------------------------------------------------------------------
// Home: what the owner experiences (illustrative mockup)
// ---------------------------------------------------------------------------

export const ownerView = {
  title: "ככה זה נראה מהצד שלכם",
  lead: "אתם לא רודפים אחרי אף אחד. אנחנו מטפלים בכל מה שקורה בדירה, ואתם מקבלים עדכון.",
  points: [
    {
      icon: "banknote",
      title: "שכר הדירה מגיע בזמן",
      text: "התשלום מגיע אליכם בכל חודש, במועד שסיכמנו.",
    },
    {
      icon: "eye",
      title: "שקיפות מלאה",
      text: "אתם יודעים מה קורה בנכס: תקלות, תיקונים ותשלומים.",
    },
    {
      icon: "phone",
      title: "כתובת אחת לכל דבר",
      text: "הדיירים פונים אלינו, ואנחנו מטפלים עד הסוף.",
    },
  ] satisfies Feature[],
  mock: {
    from: "לנדלורד",
    subtitle: "עדכונים על הדירה שלכם",
    messages: [
      { icon: "banknote", title: "שכר הדירה הועבר אליכם", text: "במועד שסיכמנו, כמו בכל חודש." },
      { icon: "wrench", title: "דווחה תקלה בדוד המים", text: "תיאמנו טכנאי. התקלה טופלה." },
      { icon: "bill", title: "חשבונות הרשויות", text: "ארנונה, מים וחשמל – על שם הדיירים." },
      { icon: "calendar", title: "סוף החוזה מתקרב", text: "נחזור אליכם עם המלצה להמשך." },
    ] satisfies Feature[],
    note: "להמחשה בלבד",
  },
};

// ---------------------------------------------------------------------------
// Home + Landlord Safe: layers of legal protection
// ---------------------------------------------------------------------------

export const protection = {
  eyebrow: "הגב המשפטי",
  title: "הגנה בשכבות, עוד לפני שהדייר נכנס",
  titleAccent: "עוד לפני שהדייר נכנס",
  lead:
    'בעל דירה? דמיין שהעבודה היחידה שלך היא רק לראות שהכסף נכנס לחשבון הבנק שלך וזהו. בכל השאר אנחנו מטפלים. לך יש שקט מוחלט. אנחנו נמצא את הדיירים בשבילך, נבדוק אותם, נחתום על הסכם שכירות, כולל יצוג משפטי ע"י עורכי דין, נדאג להעברת כל החשבונות על שם הדיירים, נטפל בכל התקלות, ובסיום השכירות נבדוק שהדיירים יפנו את הדירה במצב תקין וללא חובות. טיפול כולל מ-א\' ועד ת\', והכל כולל ערבות שלנו לתשלומי שכר הדירה באמצעות המוצר הייחודי שלנו Landlord Safe.',
  layers: [
    {
      icon: "search",
      title: "בדיקת שוכרים",
      text: "בדיקה כלכלית של הדייר לפני החתימה, כדי להתחיל עם הדייר הנכון.",
    },
    {
      icon: "contract",
      title: "הסכם משפטי חזק",
      text: "חוזה שכירות איכותי שנכתב בליווי משפטי, כדי להגן עליכם.",
    },
    {
      icon: "users",
      title: "ביטחונות וערבויות",
      text: "ביטחונות וערבים שאנחנו בודקים ומאשרים לפני הכניסה לדירה.",
    },
    {
      icon: "shieldCheck",
      title: "Landlord Safe",
      text: "שכר הדירה מובטח, בכפוף לתנאי השירות: גם אם הדייר מפסיק לשלם, אתם ממשיכים לקבל.",
    },
  ] satisfies Feature[],
  safeLink: "להכיר את Landlord Safe",
};

// ---------------------------------------------------------------------------
// Home: comparison table
// ---------------------------------------------------------------------------

export const comparison = {
  eyebrow: "מה ההבדל",
  title: "לבד, דרך מתווך, או עם לנדלורד",
  titleAccent: "או עם לנדלורד",
  lead: "אנחנו לא משרד תיווך. העבודה שלנו לא נגמרת בחתימה על החוזה – היא מתחילה שם.",
  columns: ["לבד", "מתווך", "לנדלורד"],
  highlight: 2, // index of our column
  valueLabels: { yes: "כלול", no: "לא כלול", you: "עליכם" } satisfies Record<CompareValue, string>,
  rows: [
    { label: "מציאת דיירים", values: ["you", "yes", "yes"] },
    { label: "בדיקה כלכלית של הדייר", values: ["you", "you", "yes"] },
    { label: "חוזה בליווי משפטי", values: ["you", "you", "yes"] },
    { label: "העברת חשבונות הרשויות", values: ["you", "you", "yes"] },
    { label: "טיפול בתקלות לאורך השכירות", values: ["you", "you", "yes"] },
    { label: "מעקב אחרי תשלומי השכירות", values: ["you", "you", "yes"] },
    { label: "שכר דירה מובטח (Landlord Safe)", values: ["no", "no", "yes"] },
    { label: "פינוי וגבייה בהליך משפטי", values: ["you", "you", "yes"] },
  ] satisfies { label: string; values: CompareValue[] }[],
  note: "השוואה כללית. השירות של מתווכים משתנה ממשרד למשרד. Landlord Safe בכפוף לתנאי השירות.",
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

// Date the FAQ answers last changed (YYYY-MM-DD). Shown on /faq and sent as dateModified,
// since AI search prefers fresh answers. Update it when you edit an answer. Empty = hidden.
export const faqUpdated = "2026-10-21";

export const faq: FaqItem[] = [
  {
    id: "why-us",
    question: "למה לבחור בנו?",
    answer:
      "שאלה טובה.\nבראש ובראשונה כי אנחנו מבינים את הצרכים שלך. במשך השנים פיתחנו יכולות ייחודיות אשר נועדו לתת מענה מיטבי לצרכים של בעלי הנכסים. אנחנו מקצועיים, אדיבים וזמינים בשבילך. יש לנו צוות איכותי וקבוע שקם כל בוקר על מנת לתת לך שירות ברמה הגבוהה ביותר. זה מה שמניע אותנו וגם מה שגורם ללקוחות שלנו להישאר איתנו לתקופות ארוכות.\nחרטנו על דגלנו ערכים שמלווים אותנו בכל פעולה שאנחנו עושים - שירות מקצועי תוך הקפדה על דיסקרטיות מלאה, אמינות ואיכות ללא פשרות, שקיפות מלאה והתאמת חבילת השירות המתאימה לך.",
  },
  {
    id: "for-whom",
    question: "למי מיועד השירות?",
    answer:
      "השירות שלנו מתאים לכל בעל נכס המעוניין בניהול מקצועי ואיכותי של הנכס שלו אשר ימקסם את התשואה מהנכס וישחרר אותו מכל עיסוק או דאגה הקשורים בניהול הנכס ואחזקתו השוטפת.\n• תושבי חוץ או לקוחות שמבלים את מרבית זמנם בחו\"ל\n• בעלי נכס שאינם רוצים להתעסק בניהול השוטף ואחזקת הנכס שבבעלותם;\n• אנשים בעלי קריירה תובענית שאינם יכולים להתעסק בניהול ותחזוקת נכס בבעלותם;\n• עורכי דין רואי חשבון ומנהלי עיזבון המעוניינים בניהול גורם מקצועי וחיצוני;\n• נכסים בבעלות משותפת המעוניינים בניהול מקצועי;\n• בעלי נכסים מרובים;",
  },
  {
    id: "area",
    question: "באיזה איזור אתם פעילים?",
    answer:
      "אנחנו חברת הניהול בעלת הפריסה הרחבה ביותר בישראל. חלק מהשירותים שלנו זמינים גם לנכסים הממוקמים מחוץ לגבולות האלה ואתם מוזמנים ליצור עמנו קשר כדי שנוכל להתאים לכם חבילה אישית.",
  },
  {
    id: "services",
    question: "איזה שירותים אתם מספקים?",
    answer:
      "שמחים ששאלת.\nאנחנו מספקים סל אופטימלי ומקיף אשר נועד למקסם את התשואה שלך מהנכס תוך מתן שקט נפשי ושחרור מלא שלך מכל עיסוק או דאגה הקשורים בניהול הנכס ואחזקתו השוטפת.\n• ניהול נכסים מושכרים\n• ניהול נכסי יוקרה\n• שירותי אחזקה ותחזוקה שוטפת לנכסים\n• ניהול דירות חופשה (תושבי חוץ)\n• ניהול משרדים ונכסים מסחריים\n• שירות לנדלורד Safe – הבטחת שכ\"ד דירה לבעל הנכס במהלך תקופת הסכם השכירות",
  },
  {
    id: "broker",
    question: "במה אתם שונים ממשרד תיווך?",
    answer:
      "אנחנו לא משרד תיווך. מתווך עוזר למצוא דייר, ובדרך כלל העבודה שלו מסתיימת בחתימה על החוזה. אנחנו מנהלים את הדירה לאורך כל השכירות: בדיקת הדייר, חוזה משפטי, חשבונות, תקלות, מעקב תשלומים, ועם Landlord Safe גם שכר דירה מובטח, בכפוף לתנאי השירות.",
  },
  {
    id: "renovation",
    question: "אני רוצה לשפץ את הדירה לפני הכנסת הדיירים החדשים, מה עושים?",
    answer:
      "אין בעיה.\nהשירות שלנו מתחיל עוד לפני השכרת הנכס שלך ובמקרה הצורך נשמח לדאוג להכנת והשבחת הדירה בטרם כניסת הדיירים - בין אם מדובר בשיפוץ כולל ומקיף או בתיקונים קלים בלבד. אנחנו עובדים עם מגוון אנשי מקצוע מהשורה הראשונה בישראל ונדאג בשבילך להכנת הדירה להשכרה במהירות ובאיכות הגבוהה ביותר.",
  },
  {
    id: "utilities",
    question: "מי מטפל בהעברת תשלומי הרשויות בנכס?",
    answer:
      "כמובן שאנחנו. לאחר חתימה על הסכם השכירות נדאג להעברת תשלומי הרשויות על שם השוכר בשבילך. נציגינו יוודאו כי כל החשבונות יעברו על שם השוכרים מול כל הרשויות הרלוונטיות: הרשות המקומית, חברת חשמל, ועד הבית/חברת הניהול, חברת המים העירונית וחברת הגז. בסיום התהליך נשלח לך דו\"ח מפורט הכולל את קריאות המונה ואת אישורי העברת התשלומים על שם השוכרים.",
  },
  {
    id: "after-move-in",
    question: "מי ידאג לי אחרי כניסת הדיירים לדירה?",
    answer:
      "ניהול נכס זו מומחיות!\nמטרתנו למקסם את התשואה מהנכס שלך תוך שחרור מלא שלך מכל עיסוק או דאגה הקשורים בניהול הנכס ואחזקתו השוטפת. לאחר כניסת הדיירים לנכס שלך, נמשיך, נפקח וננהל את הנכס באופן שוטף. במהלך תקופת השכירות נגיע לביקורים תקופתיים בנכס שלך (בתיאום עם השוכרים כמובן), נבדוק פיזית את מצב הנכס והאם השוכרים עומדים בתנאי ההסכם. לאחר כל ביקור יישלח אליך דו\"ח סיכום ביקור לרבות צילומים והתרשמות כללית מהדירה ומהשוכרים.",
  },
  {
    id: "price",
    question: "כמה זה עולה לי?",
    answer:
      "לקבלת הצעת מחיר מסודרת נשמח אם תצרו עימנו קשר במייל או בנייד.",
  },
  {
    id: "sale",
    question: "במקרה הצורך, אתם תטפלו גם במכירת הדירה שלי?",
    answer:
      "כמובן.\nחברת לנדלורד סרויסס מעניקה סל שירותים כולל לנכס שלך לרבות עזרה וטיפול במכירת הנכס וליווי משפטי בהליך המכירה. לקבלת הצעת מחיר מסודרת נשמח אם תצרו עימנו קשר במייל או בנייד.",
  },
  {
    id: "abroad-manage",
    question: "אם אני גר בחו\"ל – תוכלו לנהל בשבילי את הנכס?",
    answer:
      "ברור.\nבדיוק בשביל זה אנחנו כאן. אנחנו ננהל עבורך את הנכס גם אם אתה בחו\"ל או גר רחוק מהנכס שלך. באמצעות חתימה על ייפוי כוח מתאים נוכל לנהל את הנכס שלך, לחתום בשמך על הסכם השכירות מול הדיירים ולתחזק את הנכס באופן שוטף. הכסף משכר הדירה נכנס ישירות לחשבונך ולא עובר דרכנו כך שאתה יכול לישון בשקט כשאנחנו מנהלים עבורך את הנכס.",
  },
  {
    id: "abroad-maintain",
    question: "אני חי בחו\"ל, בבעלותי נכס בישראל ואנחנו מגיעים לביקורים מדי פעם, תוכלו לעזור לי באחזקת הנכס?",
    answer:
      "בוודאי!\nאנחנו נדאג לכך שתגיעו לדירה שלכם כשהיא מוכנה לקראתכם, נקייה ומתוחזקת במיוחד בשבילכם והעיקר שאתם בראש שקט.\nלדירות נופש סל השירותים שלנו כולל:\n• תשלום חשבונות שוטפים של הנכס (ועד בית, ארנונה, חשמל וכו')\n• ביקורת תקופתית בנכס הכוללת בדיקה פיזית של הנכס והפעלת מערכות הנכס: חשמל, מים, אינסטלציה, מזגנים וכו'\n• איסוף דואר והפנייתו לבעלי הנכס\n• טיפול בתיקון תקלות בנכס\n• עדכון תקופתי על מצב הנכס",
  },
];

// Questions shown on the home page (by id)
// "for-whom" is left out: the personas section already answers it on the home page
export const homeFaqIds = ["why-us", "broker", "area", "price"];

// ---------------------------------------------------------------------------
// Landlord Safe
// ---------------------------------------------------------------------------

export const safe = {
  whatItIs:
    "Landlord Safe הוא שירות לבעלי דירות שרוצים לדעת שהשכירות תמשיך להגיע. אנחנו בודקים את הדייר לפני החתימה, מכינים את החוזה ואת הביטחונות, והחברה ערבה לתשלומי השכירות. אם הדייר מפסיק לשלם, אתם ממשיכים לקבל שכר דירה, ואנחנו מטפלים בכל ההליך המשפטי.",
  promise: "שכר הדירה מובטח",
  promiseText: "גם אם הדייר מפסיק לשלם – אתם ממשיכים לקבל, בכפוף לתנאי השירות.",
  // "What happens if the tenant stops paying" – step by step
  process: [
    {
      title: "אנחנו מזהים את הפיגור",
      text: "ברגע שתשלום לא מגיע, אנחנו פונים לדייר ומנסים לפתור את העניין.",
    },
    {
      title: "אתם ממשיכים לקבל שכר דירה",
      text: "במסגרת הערבות על דמי השכירות, התשלום אליכם ממשיך להגיע.",
    },
    {
      title: "פינוי משפטי",
      text: "אם צריך, אנחנו מטפלים בפינוי הדייר בהליך משפטי, כולל הליכי הוצאה לפועל.",
    },
    {
      title: "גביית החוב",
      text: "אנחנו גובים את החוב מהדייר בהליך משפטי, ואתם לא צריכים להתעסק בזה.",
    },
  ] as Step[],
  faq: [
    {
      id: "safe-what",
      question: "מה זה שירות לנדלורד סייף?",
      answer:
        "שירות לנדלורד Safe הינו מוצר ייחודי של חברת לנדלורד שמטרתו לוודא שבעל הנכס ממשיך לקבל הכנסה קבועה מהנכס המושכר שבבעלותו וזאת גם במקרה שהשוכר מפר את התחייבויותיו, לא משלם שכר דירה או לא מתפנה מהנכס בתום תקופת השכירות.",
    },
    {
      id: "safe-price",
      question: "כמה זה עולה לי?",
      answer:
        "לקבלת הצעת מחיר מסודרת נשמח אם תצרו עימנו קשר במייל או בנייד.",
    },
    {
      id: "safe-eviction",
      question: "האם אתם תטפלו בהליכים המשפטיים לפינוי הדייר?",
      answer:
        "ברור.\nבנוסף על הבטחת תשלום שכר הדירה אנחנו נישא ונטפל בכל ההיבטים המשפטיים של פינוי השוכרים המפרים מהנכס. האינטרס שלנו הוא להחזיר את הנכס לשוק כמה שיותר מהר כדי שתוכל להשיא את ההכנסה שלך מהנכס.",
    },
    {
      id: "safe-cases",
      question: "באילו מקרים אהיה זכאי לפיצוי מכם?",
      answer:
        "שאלה טובה.\nהפיצוי יוענק במקרה הפרת הסכם השכירות באחד מהמקרים הבאים:\n• אי תשלום שכ\"ד\n• הפעלת עסק בדירה\n• עשיית שימוש בדירה המנוגד לדין או להסכם השכירות.",
    },
    {
      id: "safe-new-tenants",
      question: "הדירה שלי טרם הושכרה אבל יש לי דיירים פוטנציאליים. השירות מתאים לי?",
      answer:
        "אין בעיה!\nאנחנו נבדוק את זהות ורקע הדיירים הפוטנציאליים שלך לצורך אישורם מראש טרם ההתקשרות בהסכם שכירות איתך. לאחר הבדיקות ואישור החברה - יוענק לך שירות לנדלורד Safe!\nלקבלת הצעת מחיר מסודרת נשמח אם תצרו עימנו קשר במייל או בנייד.",
    },
    {
      id: "safe-rented",
      question: "הדירה שלי מושכרת. השירות שלכם מתאים לי?",
      answer:
        "כמובן!\nבמקרה כזה נבדוק את הדיירים הקיימים, קיומם של ערבים ובטחונות נאותים, ועמידה בתשלומי שכר הדירה עד למועד ההתקשרות עימנו. לאחר הבדיקות ואישור החברה - יוענק לך שירות לנדלורד Safe!\nלקבלת הצעת מחיר מסודרת נשמח אם תצרו עימנו קשר במייל או בנייד.",
    },
    {
      id: "safe-rent",
      question: "הדייר שלי לא משלם את שכר הדירה. מה עושים?",
      answer:
        "בשביל זה אנחנו כאן.\nשירות לנדלורד Safe מבטיח לך את מלוא תשלום שכר הדירה שלך עד לתום תקופת השכירות או עד שנמצא לך שוכר חלופי אשר יבטיח לך את המשך ההכנסה מהנכס שלך.",
    },
    {
      id: "safe-timing",
      question: "תוך כמה זמן אקבל את הפיצוי מכם?",
      answer:
        "בהקדם האפשרי.\nלאחר בדיקת החברה כי אכן מדובר בהפרה של הסכם השכירות המצדיקה את ביטולו - תזכה החברה את חשבונך בפיצוי החודשי בתוך 14 ימים ממועד אישור בקשתך.",
    },
    {
      id: "safe-who",
      question: "השירות שלכם מתאים לכל דירה?",
      answer:
        "כן.\nשירות לנדלורד Safe יוענק לכל עסקת שכירות שאושרה על ידי צוות החברה. הבדיקה כוללת את בדיקת השוכרים או השוכרים הפוטנציאליים, בדיקת הביטחונות, הסכם השכירות ועמידת הצדדים בתנאיו השוטפים בתקופה טרם ההתקשרות עימנו.",
    },
    {
      id: "safe-end",
      question: "מה קורה אם הדייר לא מוכן לפנות את הדירה בסיום הסכם השכירות?",
      answer:
        "אתם יכולים להיות רגועים ולהתרווח בכורסא. במקרה וההפרה קרתה בתום תקופת השכירות, כאשר הדייר לא פינה את הנכס במועד המוסכם, על אף ששילם את תשלומי שכר הדירה, תהיה זכאי לפיצוי בגובה דמי שכירות החל מהמועד המוסכם לסיום השכירות, ועד לתום תקופה של שלושה חודשים, או עד לפינוי הדייר מהנכס, לפי המוקדם מביניהם.",
    },
    {
      id: "safe-replacement",
      question: "האם תחפשו שוכר חליפי במקרה של הפרת הסכם?",
      answer:
        "בהחלט.\nבמקרה של הפרת ההסכם מטרתנו לפנות את השוכר המפר ולמצוא שוכר איכותי במקומו, במהירות האפשרית, אשר יעבור את בדיקות הרקע שלנו ויחתום על הסכם שכירות בתנאים דומים ככל האפשר ולפחות לתקופת ההשכרה שבהסכם השכירות במקום השוכר המפר.",
    },
  ] as FaqItem[],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  story: [
    "חברת Landlord הוקמה בשנת 2013 על ידי השותפים המנהלים שלה שהם בעלי נכסים בעצמם אשר נתקלו בצורך בחברת ניהול איכותית שתסייע להם באופן אישי.",
    "חיפשנו חברת ניהול מקצועית שאינה נגועה בניגודי עניינים, חברת ניהול המתנהלת בשקיפות מול לקוחותיה ושומרת על רמת שירות גבוהה לאורך זמן. הצורך הזה הוליד את חברת Landlord.",
    "בחברת Landlord אנחנו נותנים שירות מקיף לבעלי נכסים (דירות ובתים) שמטרתו למקסם את התשואה מהנכס תוך מתן שקט נפשי ושחרור מלא מכל עיסוק או דאגה הקשורים בניהול הנכס ואחזקתו השוטפת.",
    "החל מהקמת החברה ובכל שנות פעילותה, צמחה חברת Landlord בקצב מהיר עד שביססה עצמה כחברת ניהול הנכסים האיכותית, המקצועית והמובילה בישראל.",
    "לחברה יש צוות עובדים מיומן בעלי ניסיון עשיר ורב בתחום הנדל\"ן, החל מניהול נכסים, דרך ייזום פרויקטים וכלה בפיתוח נכסים.",
  ],
  values: [
    {
      icon: "eye",
      title: "שקיפות",
      text: "אתם יודעים מה קורה בנכס שלכם, מה כלול בשירות ועל מה אתם משלמים.",
    },
    {
      icon: "heart",
      title: "בלי ניגוד עניינים",
      text: "אנחנו מייצגים רק אתכם, בעלי הנכס.",
    },
    {
      icon: "scale",
      title: "גיבוי משפטי",
      text: "השותף המנהל הוא עורך דין, וכל שלב – מהחוזה ועד הליך פינוי – נעשה עם ליווי משפטי.",
    },
  ] satisfies Feature[],
};

export const partner = {
  name: "עו״ד דורון מרום",
  role: "שותף מנהל",
  bio: "עורך דין, בוגר LLB ו-LLM ותואר ראשון (BA) במנהל עסקים. בעבר עבד במשרד עורכי הדין תדמור ושות׳.",
  photo: "", // e.g. "/images/partner-doron-marom.jpg". Empty = initials shown
};

// ---------------------------------------------------------------------------
// Pages (meta + H1 + opening answer)
// ---------------------------------------------------------------------------

export const pages: Record<
  "home" | "services" | "safe" | "about" | "faq" | "contact" | "privacy" | "accessibility",
  PageMeta
> = {
  home: {
    title: "לנדלורד – חברת ניהול נכסים לבעלי דירות מושכרות",
    description:
      "לנדלורד מנהלת דירות להשכרה בגוש דן ובירושלים מאז 2013: בדיקת שוכרים, חוזה משפטי, טיפול בתקלות ו-Landlord Safe לשכר דירה מובטח, בכפוף לתנאי השירות.",
    h1: "ניהול הדירה המושכרת שלכם, מקצה לקצה ועם גב משפטי",
    h1Accent: "מקצה לקצה ועם גב משפטי",
    intro:
      "אנחנו מספקים סל אופטימלי ומקיף אשר נועד למקסם את התשואה שלך מהנכס תוך מתן שקט נפשי ושחרור מלא שלך מכל עיסוק או דאגה הקשורים בניהול הנכס ואחזקתו השוטפת",
  },
  services: {
    title: "ניהול דירות ונכסים להשכרה | לנדלורד",
    description:
      "כל שירותי לנדלורד: ניהול נכסים מושכרים, Landlord Safe, ניהול דירות לתושבי חוץ, נכסי יוקרה, משרדים ונכסים מסחריים.",
    h1: "שירותי ניהול נכסים",
    h1Accent: "ניהול נכסים",
    intro:
      "כחברת ניהול נדל״ן לבעלי דירות, אנחנו מטפלים בכל מה שקשור להשכרת הדירה שלכם: מציאת דיירים, חוזה, תחזוקה וגבייה. אנחנו פועלים בגוש דן ובירושלים, גם עבור בעלי דירות שגרים בחו״ל.",
  },
  safe: {
    title: "Landlord Safe – שכר דירה מובטח וטיפול משפטי | לנדלורד",
    description:
      "Landlord Safe: גם אם הדייר מפסיק לשלם, אתם ממשיכים לקבל שכר דירה, בכפוף לתנאי השירות. בדיקת דייר, ביטחונות, פינוי משפטי וגביית חובות.",
    h1: "Landlord Safe – שכר הדירה ממשיך להגיע",
    h1Accent: "שכר הדירה ממשיך להגיע",
    intro:
      "Landlord Safe הוא שירות של חברת ניהול הנכסים לנדלורד, לבעלי דירות שרוצים ביטחון בשכירות. אם הדייר מפסיק לשלם, אתם ממשיכים לקבל שכר דירה, ואנחנו מטפלים בפינוי ובגבייה בהליך משפטי.",
  },
  about: {
    title: "אודות לנדלורד – חברת ניהול נכסים מאז 2013",
    description:
      "לנדלורד הוקמה ב-2013 על ידי שותפים שהם בעצמם בעלי דירות. שקיפות, בלי ניגוד עניינים וגיבוי משפטי, בהובלת עו״ד דורון מרום.",
    h1: "אודות לנדלורד",
    h1Accent: "לנדלורד",
    intro:
      "לנדלורד היא חברת ניהול נכסים שהוקמה ב-2013 על ידי שותפים שהם בעצמם בעלי דירות מושכרות. אנחנו מנהלים יותר מ-250 נכסים בשביל בעלי דירות בגוש דן ובירושלים, בהובלת השותף המנהל עו״ד דורון מרום.",
  },
  faq: {
    title: "שאלות נפוצות על ניהול נכסים | לנדלורד",
    description:
      "תשובות לשאלות נפוצות על שירותי חברת ניהול הנכסים לנדלורד: למי השירות מיועד, מה כלול, ניהול מחו״ל, תשלומי רשויות ועוד.",
    h1: "שאלות נפוצות על ניהול נכסים",
    h1Accent: "על ניהול נכסים",
    intro:
      "כאן ריכזנו תשובות לשאלות שבעלי דירות שואלים אותנו לפני שמתחילים. לנדלורד היא חברת ניהול נכסים לבעלי דירות מושכרות. לא מצאתם תשובה? דברו איתנו.",
  },
  contact: {
    title: "צור קשר – לנדלורד חברת ניהול נכסים",
    description:
      "צרו קשר עם לנדלורד, חברת ניהול נכסים בגוש דן ובירושלים: 054-2110096 (גם בוואטסאפ), info@landlords.co.il. השאירו פרטים ונחזור אליכם.",
    h1: "בואו נדבר על הדירה שלכם",
    h1Accent: "על הדירה שלכם",
    intro:
      "השאירו פרטים ונחזור אליכם, או כתבו לנו בוואטסאפ. לנדלורד היא חברת ניהול נכסים לבעלי דירות מושכרות, והמשרד שלנו נמצא בבני ברק.",
  },
  privacy: {
    title: "מדיניות פרטיות | לנדלורד",
    description: "מדיניות הפרטיות של לנדלורד: איזה מידע נאסף בטופס יצירת הקשר, איך אנחנו משתמשים בו, ואיך לבקש לעיין במידע, לתקן אותו או למחוק אותו.",
    h1: "מדיניות פרטיות",
    intro: "",
  },
  accessibility: {
    title: "הצהרת נגישות | לנדלורד",
    description: "הצהרת הנגישות של אתר לנדלורד: מה עשינו כדי שהאתר יהיה נגיש לכולם, השאיפה לתקן הישראלי 5568 ברמה AA, ואיך לפנות אלינו בנושא נגישות.",
    h1: "הצהרת נגישות",
    intro: "",
  },
};

// ---------------------------------------------------------------------------
// Home page sections
// ---------------------------------------------------------------------------

export const home = {
  eyebrow: "חברת ניהול הנכסים הטובה בישראל",
  promise: "אתם נהנים מהשכירות. אנחנו דואגים לכל השאר.",
  sinceLabel: `מאז ${site.foundingYear}`,
  sinceText: "מנהלים נכסים בשביל בעלי דירות",
  ledBy: "בהובלת", // hero line: "בהובלת <partner>, <role>"
  servicesEyebrow: "מה אנחנו עושים",
  servicesTitle: "כל מה שהדירה שלכם צריכה, במקום אחד",
  servicesTitleAccent: "במקום אחד",
  servicesMore: "לכל השירותים",
  stepsTitle: "ארבעה צעדים, ואתם בשקט",
  areasEyebrow: "איפה אנחנו",
  areasTitle: "פעילים בגוש דן ובירושלים",
  areasTitleAccent: "בגוש דן ובירושלים",
  citiesLabel: "ערים מרכזיות בגוש דן ובירושלים", // numbers strip: "<count> ערים..."
  areasAllLabel: "הערים שבהן אנחנו פעילים",
  photoCredit: "צילום:", // before the photographer on Creative Commons city photos
  areasCityMore: "לעמוד העיר", // under a city photo that has its own page
  areasLead: "אנחנו מתמקדים בערים עם ביקוש גבוה להשכרה. הנכס שלכם בעיר אחרת? דברו איתנו.",
  testimonialsTitle: "ביקורות מ-Google",
  reviewsPrev: "הביקורת הקודמת",
  reviewsNext: "הביקורת הבאה",
  reviewStars: "{n} מתוך 5 כוכבים", // screen-reader text for the stars
  faqEyebrow: "שאלות ותשובות",
  faqTitle: "שאלות נפוצות",
  faqMore: "לכל השאלות",
  ctaEyebrow: "בואו נדבר",
  ctaTitle: "שיחת היכרות על הדירה שלכם",
  ctaTitleAccent: "על הדירה שלכם",
  ctaText: "שיחה קצרה ולא מחייבת. אפשר להשאיר טלפון, או לכתוב לנו עכשיו בוואטסאפ.",
  // What happens after someone leaves details (shown as an ordered list)
  ctaNextTitle: "מה קורה אחרי שתשאירו פרטים",
  ctaNext: [
    "מישהו מהצוות שלנו חוזר אליכם תוך יום עסקים.",
    "בשיחת ההיכרות אתם מספרים לנו על הדירה ועל מה שחשוב לכם.",
    "אנחנו מציעים לכם חבילה שמותאמת לנכס ולצרכים שלכם.",
  ],
  // Optional line under the partner's name; empty hides it (the legal backing is already said in "protection")
  ctaPartnerText: "",
};

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------

export const form = {
  titleShort: "השאירו שם וטלפון",
  name: "שם",
  phone: "טלפון",
  consent: "קראתי ואני מסכים/ה ל",
  consentLink: "מדיניות הפרטיות",
  submit: "חזרו אליי לשיחת היכרות",
  sending: "שולח…",
  required: "(חובה)",
  success: "תודה! קיבלנו את הפרטים. מישהו מהצוות יחזור אליכם תוך יום עסקים.",
  error: "לא הצלחנו לשלוח את הטופס. אפשר להתקשר אלינו:",
  phoneHint: "מספר ישראלי, או מספר מחו״ל עם קידומת מדינה (+)",
  missingPhone: "כתבו מספר טלפון כדי שנוכל לחזור אליכם.",
  invalidPhone: "מספר הטלפון לא נראה תקין. כתבו מספר ישראלי, למשל 050-1234567, או מספר מחו״ל שמתחיל ב-+.",
  invalidConsent: "כדי שנוכל לחזור אליכם, סמנו שקראתם את מדיניות הפרטיות.",
};

// ---------------------------------------------------------------------------
// Contact page / footer labels
// ---------------------------------------------------------------------------

export const labels = {
  phone: "טלפון",
  whatsapp: "וואטסאפ",
  email: "אימייל",
  address: "כתובת",
  hours: "שעות פעילות",
  companyId: "ח.פ.",
  maps: "ניווט ב-Google Maps",
  waze: "ניווט ב-Waze",
  facebook: "פייסבוק",
  privacy: "מדיניות פרטיות",
  accessibility: "הצהרת נגישות",
  skip: "דילוג לתוכן הראשי",
  menu: "תפריט",
  closeMenu: "סגירת תפריט",
  forWhom: "למי זה מתאים",
  includes: "מה כלול",
  whatsIncluded: "מה כלול ב-Landlord Safe",
  stopsPaying: "מה קורה אם הדייר מפסיק לשלם?",
  values: "הערכים שלנו",
  team: "הצוות",
  teamLead: "האנשים שמטפלים בדירה שלכם.",
  office: "המשרד",
  officeLead: "מוזמנים לבקר אותנו – רק תאמו מראש.",
  story: "הסיפור שלנו",
  whatItIs: "מה זה Landlord Safe",
  monthsCovered: "תקופת הערבות",
  price: "מחיר",
  learnMore: "לפרטים",
  rights: "כל הזכויות שמורות",
  notFoundTitle: "העמוד לא נמצא",
  notFoundText: "ייתכן שהקישור ישן או שהעמוד הועבר.",
  backHome: "לעמוד הבית",
  contactUs: "צרו קשר",
  links: "קישורים",
  services: "שירותים",
  areas: "אזורי פעילות",
  numbers: "לנדלורד במספרים",
  mainNav: "ניווט ראשי",
  footerNav: "קישורים בתחתית העמוד",
  homeLink: "עמוד הבית",
  onThisPage: "בעמוד הזה",
  lastUpdated: "עודכן לאחרונה:",
  cityPage: "ניהול נכסים ב{city}", // footer link to a city page
  allServices: "לכל השירותים",
  footerTagline: `חברת ניהול נכסים לבעלי דירות מושכרות בגוש דן ובירושלים, מאז ${site.foundingYear}. אתם נהנים מהשכירות – אנחנו דואגים לכל השאר.`,
};

// ---------------------------------------------------------------------------
// Legal pages (drafts)
// ---------------------------------------------------------------------------

export const legal = {
  draftNote: "טיוטה – לאישור עורך דין",
  privacy: [
    {
      title: "כללי",
      text: "מדיניות זו מסבירה איזה מידע אנחנו אוספים באתר ומה אנחנו עושים בו.",
    },
    {
      title: "איזה מידע נאסף",
      text: "כשאתם ממלאים את טופס יצירת הקשר, אנחנו מקבלים את הפרטים שמסרתם: שם וטלפון.",
    },
    {
      title: "שימוש במידע",
      text: "אנחנו משתמשים בפרטים רק כדי לחזור אליכם ולתת לכם מידע על השירותים שלנו. איננו מוכרים את המידע לצד שלישי.",
    },
    {
      title: "שירותים חיצוניים",
      text: "הטופס נשלח אלינו באמצעות שירות דיוור חיצוני. האתר מתארח אצל ספק אחסון חיצוני.",
    },
    {
      title: "פנייה בנושא פרטיות",
      text: `לבקשה לעיין במידע, לתקן אותו או למחוק אותו, פנו אלינו באימייל ${site.email}.`,
    },
  ],
  accessibility: [
    {
      title: "מחויבות לנגישות",
      text: "אנחנו פועלים כדי שהאתר יהיה נגיש לכל המשתמשים, כולל אנשים עם מוגבלויות.",
    },
    {
      title: "מה עשינו",
      text: "האתר בנוי עם כותרות מסודרות, ניגודיות צבעים טובה, תוויות לכל שדות הטופס, אפשרות ניווט מלאה במקלדת, קישור לדילוג לתוכן הראשי והתאמה למסכים קטנים.",
    },
    {
      title: "רמת הנגישות",
      text: "השאיפה היא לעמוד בתקן הישראלי 5568 ברמה AA. ייתכן שחלקים מסוימים עדיין אינם נגישים במלואם.",
    },
    {
      title: "פנייה בנושא נגישות",
      text: `נתקלתם בבעיה? נשמח לשמוע: טלפון ${site.phone}, אימייל ${site.email}.`,
    },
  ],
};

// Short company summary (also used for llms.txt wording and JSON-LD description)
export const summary =
  "לנדלורד היא חברת ניהול נכסים לבעלי דירות מושכרות, שהוקמה ב-2013 ופועלת בגוש דן ובירושלים. החברה מספקת ניהול נכסים מושכרים, Landlord Safe לשכר דירה מובטח (בכפוף לתנאי השירות), ניהול דירות לתושבי חוץ, ניהול נכסי יוקרה וניהול משרדים ונכסים מסחריים. " +
  rentRecord;
