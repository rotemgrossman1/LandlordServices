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
  "ב-13 שנה ויותר מ-200 נכסים, אף בעל דירה שלנו לא נשאר בלי שכר דירה – גם כשהדייר הפסיק לשלם.";

// Numbers strip. Items with an empty value are hidden. "מאז 2013" is always shown.
export const stats: Stat[] = [
  { value: "170+", label: "נכסים בניהול היום" },
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
      title: "ניהול נכסים בתל אביב – ניהול דירות להשכרה | לנדלורד",
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
    galleryTitle: "דירות להשכרה בתל אביב",
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
    includesTitle: "מה אנחנו עושים בשבילכם בתל אביב",
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

// ---------------------------------------------------------------------------
// Home: "who is it for"
// ---------------------------------------------------------------------------

export const personas = {
  eyebrow: "למי זה מתאים",
  title: "יש לכם דירה. אין לכם כוח לנהל אותה.",
  titleAccent: "אין לכם כוח לנהל אותה.",
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
  lead: "השותף המנהל שלנו הוא עורך דין, ולכן כל שלב בשכירות בנוי אצלנו כדי להגן עליכם: מבדיקת הדייר, דרך חוזה חזק ועד שכר דירה מובטח. והתוצאה: " + rentRecord,
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

export const faq: FaqItem[] = [
  {
    id: "why-us",
    question: "למה לבחור בנו?",
    answer:
      "לנדלורד הוקמה ב-2013 על ידי שותפים שהם בעצמם בעלי דירות מושכרות, ולכן אנחנו מכירים את הצד שלכם מקרוב. השותף המנהל הוא עורך דין, כך שכל שלב – מבדיקת הדייר והחוזה ועד טיפול בדייר שלא משלם – מקבל גיבוי משפטי. יחד עם Landlord Safe, זו חבילה שקשה למצוא במקום אחר. אנחנו עובדים בשקיפות ובלי ניגוד עניינים: אנחנו מייצגים רק אתכם, בעלי הנכס. " + rentRecord,
  },
  {
    id: "for-whom",
    question: "למי מיועד השירות?",
    answer:
      "לבעלי דירות שמשכירים או מתכננים להשכיר ואין להם זמן, כוח או יכולת לנהל את השכירות בעצמם: יורשים, בעלי דירות שגרים רחוק או בחו״ל, מי שקשה לו לטפל בעצמו, ומשקיעים עם דירה אחת או כמה דירות.",
  },
  {
    id: "area",
    question: "באיזה אזור אתם פעילים?",
    answer:
      "אנחנו פעילים בגוש דן ובירושלים, ומתמקדים בערים עם ביקוש גבוה: תל אביב, רמת גן, גבעתיים, הרצליה, רעננה, גבעת שמואל ובת ים. המשרד שלנו נמצא בבני ברק. הנכס שלכם בעיר אחרת? דברו איתנו.",
  },
  {
    id: "services",
    question: "אילו שירותים אתם מספקים?",
    answer:
      "ניהול נכסים מושכרים, Landlord Safe – שירות שמבטיח שתמשיכו לקבל שכר דירה גם אם הדייר מפסיק לשלם, ניהול דירות לתושבי חוץ, ניהול נכסי יוקרה, וגם ניהול משרדים ונכסים מסחריים.",
  },
  {
    id: "broker",
    question: "במה אתם שונים ממשרד תיווך?",
    answer:
      "אנחנו לא משרד תיווך. מתווך עוזר למצוא דייר, ובדרך כלל העבודה שלו מסתיימת בחתימה על החוזה. אנחנו מנהלים את הדירה לאורך כל השכירות: בדיקת הדייר, חוזה משפטי, חשבונות, תקלות, מעקב תשלומים, ועם Landlord Safe גם שכר דירה מובטח, בכפוף לתנאי השירות.",
  },
  {
    id: "renovation",
    question: "אני רוצה לשפץ לפני כניסת דיירים",
    answer:
      "ספרו לנו מה אתם מתכננים. נשמח לפרט בשיחה איך נוכל לעזור לכם להכין את הדירה להשכרה.",
  },
  {
    id: "utilities",
    question: "מי מטפל בהעברת תשלומי הרשויות?",
    answer:
      "אנחנו. כחלק מניהול השכירות אנחנו מעבירים את חשבונות הרשויות (ארנונה, מים, חשמל, גז) על שם הדיירים, ובסוף השכירות בודקים שהדירה חוזרת אליכם ללא חובות.",
  },
  {
    id: "after-move-in",
    question: "מי ידאג לי אחרי כניסת הדיירים?",
    answer:
      "אנחנו ממשיכים ללוות אתכם לאורך כל תקופת השכירות: הדיירים פונים אלינו בכל תקלה, ואנחנו מטפלים בה. בסוף השכירות אנחנו בודקים שהדירה מוחזרת במצב תקין וללא חובות.",
  },
  {
    id: "price",
    question: "כמה זה עולה?",
    answer:
      "המחיר נגזר משכר הדירה, וכל לקוח מקבל חבילה שמותאמת לצרכים שלו. נשמח לפרט בשיחה ולהתאים לכם הצעה.",
  },
  {
    id: "sale",
    question: "האם תטפלו גם במכירת הדירה?",
    answer: "נשמח לפרט בשיחה.",
  },
  {
    id: "abroad-manage",
    question: "אני גר בחו״ל – תוכלו לנהל את הנכס?",
    answer:
      "כן. ניהול דירות לתושבי חוץ הוא אחד השירותים שלנו: אנחנו מטפלים בהשכרה, בדיירים ובתקלות כאן בישראל, ומעדכנים אתכם בכל מקום שבו אתם נמצאים.",
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
      question: "מה זה Landlord Safe?",
      answer:
        "שירות שמשלב בדיקה כלכלית של הדייר, חוזה וביטחונות, ערבות של החברה לתשלומי השכירות וטיפול משפטי מלא אם הדייר מפסיק לשלם.",
    },
    {
      id: "safe-rent",
      question: "האם אמשיך לקבל שכר דירה אם הדייר מפסיק לשלם?",
      answer:
        "כן. זו המטרה של השירות: אתם ממשיכים לקבל שכר דירה, ואנחנו מטפלים מול הדייר.",
    },
    {
      id: "safe-who",
      question: "מי יכול להצטרף?",
      answer:
        "כל בעל דירה יכול לפנות אלינו. ההצטרפות כפופה לעמידה בתנאי השירות, ועליהם נשמח לפרט בשיחה.",
    },
    {
      id: "safe-price",
      question: "כמה עולה Landlord Safe?",
      answer: "המחיר מותאם לכל נכס. נשמח לפרט בשיחה.",
    },
    {
      id: "safe-eviction",
      question: "מי מטפל בפינוי ובגביית החוב?",
      answer:
        "אנחנו, עם גיבוי משפטי: פינוי בהליך משפטי, כולל הוצאה לפועל, וגביית החוב מהדייר.",
    },
  ] as FaqItem[],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  story: [
    "לנדלורד הוקמה ב-2013 על ידי שותפים שהם בעצמם בעלי דירות מושכרות. הכרנו מקרוב את כל מה שמעסיק בעלי דירות: מציאת דיירים טובים, חוזה שמגן עליכם, תקלות באמצע הלילה, ודייר שמפסיק לשלם.",
    "מתוך הניסיון הזה בנינו חברת ניהול נכסים שעובדת כמו שהיינו רוצים שיעבדו בשבילנו: בשקיפות, בזמינות ועם גב משפטי. היום אנחנו מנהלים יותר מ-170 נכסים בגוש דן ובירושלים.",
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
      "לנדלורד היא חברת ניהול נכסים שמנהלת דירות מושכרות בשביל בעלי דירות בגוש דן ובירושלים. אנחנו מוצאים ובודקים דיירים, מכינים חוזה משפטי חזק ומטפלים בכל תקלה ובכל חשבון. ועם Landlord Safe, שכר הדירה מובטח (בכפוף לתנאי השירות).",
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
      "לנדלורד היא חברת ניהול נכסים שהוקמה ב-2013 על ידי שותפים שהם בעצמם בעלי דירות מושכרות. אנחנו מנהלים יותר מ-170 נכסים בשביל בעלי דירות בגוש דן ובירושלים, בהובלת השותף המנהל עו״ד דורון מרום.",
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
  eyebrow: "חברת ניהול נכסים לבעלי דירות",
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
  citiesLabel: "ערים בגוש דן ובירושלים", // numbers strip: "<count> ערים..."
  areasAllLabel: "הערים שבהן אנחנו פעילים",
  photoCredit: "צילום:", // before the photographer on Creative Commons city photos
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
