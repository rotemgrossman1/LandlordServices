/**
 * English site content (served under /en). Mirrors content/site.ts exactly: same exports,
 * same keys, same facts. content/index.ts types this file against the Hebrew one, so the
 * build fails if anything is missing. Every change to site.ts must be mirrored here.
 */

import { images, site as heSite } from "./site";
import type { IconName } from "@/components/Icon";
import type {
  CityPage,
  CompareValue,
  FaqItem,
  Feature,
  HomeSection,
  PageMeta,
  Persona,
  PriceItem,
  Service,
  Stat,
  Step,
  TeamMember,
  Testimonial,
} from "./site";

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------

const addressFull = "BSR 2 Tower, 20th floor, 1 Derech Ben Gurion, Bnei Brak";

// Shared facts (URL, email, company number, map links, Facebook) come from the Hebrew file,
// so the two languages can't drift apart; only what reads differently in English is set here.
export const site = {
  ...heSite,
  nameHe: "Landlord Services", // the display name in this language
  shortNameHe: "Landlord Services",
  legalName: "Landlord Services Ltd",
  phone: "+972-54-211-0096", // the same number as on the Hebrew site, in international format
  whatsapp: heSite.whatsapp ? "+972-54-211-0096" : "",
  address: {
    ...heSite.address,
    street: "1 Derech Ben Gurion, BSR 2 Tower, 20th floor",
    city: "Bnei Brak",
    full: addressFull,
  },
  hours: "", // e.g. "Sun–Thu 9:00–17:00"
};

// Accessibility coordinator, shown in the accessibility statement.
// The law asks for the coordinator's name; empty name = the statement just says "us".
// Empty phone = only the email is listed.
export const accessibilityContact = {
  name: "Doron Marom",
  phone: "",
  email: site.email,
};

// Photos. Placeholder stock photos for now (sources in public/images/CREDITS.md);
// replace with your own office and apartment photos. Empty = the slot falls back
// to a plain colour field.
export { images };

// Confirmed by the company: true for all clients, not only Landlord Safe.
export const rentRecord: string =
  "In 13 years and more than 250 properties, not one of our owners has been left without rent, even when the tenant stopped paying.";

// Numbers strip. Items with an empty value are hidden. The founding year is always shown.
export const stats: Stat[] = [
  { value: "250+", label: "Properties under management today" },
  { value: "0", label: "Worries about tenants. We handle everything" },
];

// Real Google reviews only, copied word for word. Empty = the reviews section is hidden.
export const testimonials: Testimonial[] = [];

// value: e.g. "4.9", count: e.g. "37 reviews", url: the Google reviews link (defaults to the profile)
export const googleRating = { value: "", count: "", url: site.googleProfile };

// photo: "" = initials are shown instead
export const team: TeamMember[] = [
  { name: "Doron Marom", role: "CEO", photo: "" },
  { name: "Oren Katan", role: "Business Development Manager", photo: "" },
  { name: "Gilad Weinberg", role: "Client Relations Manager", photo: "" },
  { name: "Rotem Grossman", role: "Head of IT", photo: "" },
];

export const pricing: PriceItem[] = [];

export const safeTerms = {
  monthsCovered: "", // e.g. "12"
  price: "", // e.g. "X% of the rent"
};

export const areas = {
  regions: ["Greater Tel Aviv", "Jerusalem"],
  cities: [
    "Tel Aviv",
    "Ramat Gan",
    "Givatayim",
    "Herzliya",
    "Ra'anana",
    "Givat Shmuel",
    "Bat Yam",
    "Petah Tikva",
    "Bnei Brak",
    "Ramat HaSharon",
    "Arsuf",
    "Holon",
    "Rishon LeZion",
    "Kfar Saba",
    "Jerusalem",
  ],
  // Home page photo cards: views of the cities themselves (not our properties).
  // `credit` + `creditUrl` are required for Creative Commons photos (see public/images/CREDITS.md)
  featured: [
    {
      city: "Tel Aviv",
      region: "Greater Tel Aviv",
      image: "/images/area-tel-aviv-yoo.jpg",
      alt: "The YOO towers in Tel Aviv",
      credit: "Ynhockey, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Yoo_Towers_01.jpg",
    },
    {
      city: "Herzliya",
      region: "Greater Tel Aviv",
      image: "/images/area-herzliya-marina-towers.jpg",
      alt: "Towers above the Herzliya marina",
      credit: "",
      creditUrl: "",
    },
    {
      city: "Bat Yam",
      region: "Greater Tel Aviv",
      image: "/images/area-bat-yam.jpg",
      alt: "The Bat Yam beachfront",
      credit: "",
      creditUrl: "",
    },
    {
      city: "Jerusalem",
      region: "Jerusalem",
      image: "/images/area-jerusalem-old-city.jpg",
      alt: "The Old City walls and the Tower of David in Jerusalem",
      credit: "",
      creditUrl: "",
    },
    {
      city: "Givatayim",
      region: "Greater Tel Aviv",
      image: "/images/area-givatayim.jpg",
      alt: "Residential buildings in Givatayim",
      credit: "Юкатан, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Givatayim_-_03.jpg",
    },
    {
      city: "Givat Shmuel",
      region: "Greater Tel Aviv",
      image: "/images/area-givat-shmuel.jpg",
      alt: "Residential towers in Givat Shmuel at sunset",
      credit: "Davidi Vardi, PikiWiki, CC BY 2.5",
      creditUrl: "https://commons.wikimedia.org/wiki/File:140026_sunset_givat_shmuel_PikiWiki_Israel.jpg",
    },
  ],
};

// ---------------------------------------------------------------------------
// City pages (/en/areas/<slug>)
// ---------------------------------------------------------------------------

export const cityPages: CityPage[] = [
  {
    slug: "tel-aviv",
    city: "Tel Aviv",
    meta: {
      title: "Property Management in Tel Aviv – Managing Rented Apartments | Landlord Services",
      description:
        "Rented apartment management in Tel Aviv: about 50 properties citywide. Tenant screening, a lease with legal support, repairs and guaranteed rent with Landlord Safe.",
      h1: "Property Management in Tel Aviv",
      h1Accent: "in Tel Aviv",
      intro:
        "Landlord Services manages about 50 rented apartments in Tel Aviv, in neighborhoods all over the city. We find and screen tenants, prepare a lease with legal support and take care of every repair and every bill, and you receive the rent.",
    },
    eyebrow: "Service areas · Greater Tel Aviv",
    hero: {
      src: "/images/tel-aviv-white-city.jpg",
      alt: "A Bauhaus-style residential building in Tel Aviv's White City, with a palm tree in front",
      credit: "Lior Golgher, PikiWiki, CC BY 2.5",
      creditUrl: "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_9168_White_City_of_Tel_Aviv.JPG",
    },
    galleryTitle: "Managed properties in Tel Aviv",
    galleryNote: "Photos for illustration only: residential buildings in Tel Aviv, not properties we manage.",
    gallery: [
      {
        src: "/images/tel-aviv-balconies.jpg",
        alt: "A residential building in Tel Aviv with balconies full of plants",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/tel-aviv-dizengoff.jpg",
        alt: "A round residential building on Dizengoff Street",
        credit: "Shlomo Roded, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:127526_tel_aviv_residential_building_in_dizengoff_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/tel-aviv-rothschild.jpg",
        alt: "A residential building on Rothschild Boulevard",
        credit: "David Shankbone, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:118_Rothschild_Boulevard_by_David_Shankbone.jpg",
      },
      {
        src: "/images/tel-aviv-clock-building.jpg",
        alt: "An older residential building with balconies and a large clock on its facade",
        credit: "Deror Avi, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Buildings_in_Tel_Aviv_P1010824.JPG",
      },
      {
        src: "/images/tel-aviv-apartment-block.jpg",
        alt: "A typical Tel Aviv apartment building in the evening",
        credit: "TLV and more, CC BY 2.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Tel-aviv-residential-building-001-february-2016.jpg",
      },
    ],
    workTitle: "Our work in Tel Aviv",
    work: [
      "Tel Aviv is one of the main cities where we work. Today we manage about 50 properties here, in neighborhoods all over the city, for owners who don't want to, or can't, manage the rental themselves.",
      "Renting out an apartment in Tel Aviv comes with its own challenges: many applicants for every apartment, who need careful screening, and older buildings where repairs are a matter of routine. That's exactly why we're here: tenants contact us, and we see every issue through to the end.",
    ],
    facts: [
      { value: "~50", label: "Properties under management in Tel Aviv" },
      { value: "0", label: "Months without rent for our owners" },
      { value: `Since ${site.foundingYear}`, label: "Managing properties for owners" },
    ],
    includesTitle: "What you get in Tel Aviv",
    includes: [
      "Finding tenants and carefully screening applicants",
      "A financial check of the tenant and a lease with legal support",
      "Transferring the arnona (municipal property tax) with the Tel Aviv-Yafo Municipality, plus water, electricity and gas, to the tenants' names",
      "Handling every repair, with professionals who come to the apartment",
      "Landlord Safe: the rent keeps coming even if the tenant stops paying, subject to the terms of service",
      "Checking that the apartment comes back to you at the end of the lease in good condition and free of debts",
    ],
    faq: [
      {
        id: "tlv-areas",
        question: "Which Tel Aviv neighborhoods do you manage apartments in?",
        answer:
          "All over the city. Today we manage about 50 properties in Tel Aviv, in different neighborhoods from the north of the city to the south. Is your apartment in Tel Aviv? We'd be glad to hear about it.",
      },
      {
        id: "tlv-arnona",
        question: "Who takes care of the arnona and bills for a rented apartment in Tel Aviv?",
        answer:
          "We do. At the start of the lease we transfer the arnona (municipal property tax) account with the Tel Aviv-Yafo Municipality, as well as water, electricity and gas, to the tenants' names. At the end of the lease we check that the apartment comes back to you free of debts.",
      },
      {
        id: "tlv-abroad",
        question: "I live abroad and own an apartment in Tel Aviv. Can you manage it?",
        answer:
          "Yes. We handle the rental, the tenants and repairs here, and keep you updated wherever you are, so you won't need to travel to Israel for the apartment.",
      },
      {
        id: "tlv-stops-paying",
        question: "What happens if the tenant in my Tel Aviv apartment stops paying?",
        answer:
          "With Landlord Safe you keep receiving rent, subject to the terms of service, and we handle collection and eviction through legal proceedings. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "givatayim",
    city: "Givatayim",
    meta: {
      title: "Property Management in Givatayim – Managing Rented Apartments | Landlord Services",
      description:
        "Property management in Givatayim: about 10 apartments citywide, since we started. Screened tenants, legal support, repairs and guaranteed rent with Landlord Safe.",
      h1: "Property Management in Givatayim",
      h1Accent: "in Givatayim",
      intro:
        "We've worked in Givatayim since we started, and today we manage about 10 apartments all over the city. You remain the owner of the apartment, and we take on everything else: the tenants, the lease, repairs and bills.",
    },
    eyebrow: "Service areas · Greater Tel Aviv",
    hero: {
      src: "/images/givatayim-towers.jpg",
      alt: "Two residential towers in Givatayim above the treetops",
      credit: "Юкатан, CC BY-SA 4.0",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Givatayim_-_03.jpg",
    },
    galleryTitle: "Managed properties in Givatayim",
    galleryNote: "Photos for illustration only: residential buildings in Givatayim, not properties we manage.",
    gallery: [
      {
        src: "/images/givatayim-koslovsky-view.jpg",
        alt: "Houses and apartment buildings in Givatayim seen from Kozlovsky Hill, with the Tel Aviv towers in the background",
        credit: "Moataz1997, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Giv%27atayim_from_Koslovsky_Hill_2020.jpg",
      },
      {
        src: "/images/givatayim-street.jpg",
        alt: "Older residential buildings with balconies on a street in Givatayim",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/givatayim-palms.jpg",
        alt: "A tall residential building and palm trees in Givatayim",
        credit: "Chenspec, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Buildings_in_Givatayim,_March_2024_12.jpg",
      },
      {
        src: "/images/givatayim-old-house.jpg",
        alt: "An old house with a red tiled roof in Givatayim",
        credit: "Dr. Avishai Teicher, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_34059_An_old_house_in_Givatayim.JPG",
      },
      {
        src: "/images/givatayim-panorama.jpg",
        alt: "A wide view of Givatayim's residential neighborhoods",
        credit: "Eli Shani, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Giv%27atayim_Panorama.jpg",
      },
    ],
    workTitle: "Our work in Givatayim",
    work: [
      "Givatayim has been with us from the beginning. We've managed apartments here since we founded the company, and today we have about 10 properties under management in the city, in different neighborhoods, for owners who have trusted us over the years.",
      "Givatayim is a small, densely built residential city between Tel Aviv and Ramat Gan, where older buildings stand alongside new towers. An older building needs someone who comes quickly when something breaks, and in a new building you need to make sure the apartment is kept the way you received it. We do both, so you don't have to deal with it.",
    ],
    facts: [
      { value: "~10", label: "Properties under management in Givatayim" },
      { value: "0", label: "Months without rent for our owners" },
      { value: `Since ${site.foundingYear}`, label: "Managing properties for owners" },
    ],
    includesTitle: "What you get in Givatayim",
    includes: [
      "Finding tenants for the apartment and carefully screening applicants",
      "A financial check of the tenant, security deposits and a lease with legal support",
      "Transferring the arnona (municipal property tax) with the Givatayim Municipality, plus water, electricity and gas, to the tenants' names",
      "One point of contact for tenants for every repair, and professionals we send and supervise",
      "Landlord Safe: the rent keeps coming even if the tenant stops paying, subject to the terms of service",
      "At the end of the lease: inspecting the apartment and closing the accounts before it comes back to you",
    ],
    faq: [
      {
        id: "givatayim-areas",
        question: "Which areas of Givatayim do you manage apartments in?",
        answer:
          "All over the city. Today we manage about 10 properties in Givatayim, in different neighborhoods, and we've been active in the city since we started. If you have an apartment in Givatayim, we'd be glad to hear about it.",
      },
      {
        id: "givatayim-old-building",
        question: "My apartment is in an older building in Givatayim. Who handles repairs?",
        answer:
          "We do. Tenants contact us, not you, and we send a professional, make sure the repair is done and keep you updated.",
      },
      {
        id: "givatayim-arnona",
        question: "Who transfers the arnona with the Givatayim Municipality to the tenant's name?",
        answer:
          "We do. At the start of the lease we transfer the arnona (municipal property tax) account with the Givatayim Municipality, as well as water, electricity and gas, to the tenants' names. At the end of the lease we make sure there are no debts before the apartment comes back to you.",
      },
      {
        id: "givatayim-stops-paying",
        question: "And what if the tenant in Givatayim stops paying?",
        answer:
          "With Landlord Safe the rent keeps coming to you, subject to the terms of service, and we handle collection and eviction through legal proceedings. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "herzliya",
    city: "Herzliya",
    meta: {
      title: "Property Management in Herzliya – Managing Rented Apartments | Landlord Services",
      description:
        "Property management in Herzliya: about 20 managed properties, from older neighborhoods to Herzliya Pituach. Vetted tenants, legal support and Landlord Safe.",
      h1: "Property Management in Herzliya",
      h1Accent: "in Herzliya",
      intro:
        "In Herzliya we currently manage about 20 properties, in neighborhoods all across the city. We choose the tenants, take care of the lease, respond to every issue and handle the bills, so your apartment works for you, not the other way around.",
    },
    eyebrow: "Service areas · Greater Tel Aviv",
    hero: {
      src: "/images/herzliya-marina-towers.jpg",
      alt: "Residential buildings above the Herzliya Marina, with boats and palm trees",
      credit: "",
      creditUrl: "",
    },
    galleryTitle: "Managed properties in Herzliya",
    galleryNote: "Photos are for illustration: residential buildings in Herzliya, not properties we manage.",
    gallery: [
      {
        src: "/images/herzliya-neve-amirim.jpg",
        alt: "Residential towers and palm trees in the Neve Amirim neighborhood of Herzliya",
        credit: "David Shay, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Neve_Amirim.JPG",
      },
      {
        src: "/images/herzliya-brigade-street.jpg",
        alt: "New residential buildings with balconies on Jewish Brigade Street in Herzliya",
        credit: "David Shay, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Jewish_Brigade_Group_street,_Herzliya.jpg",
      },
      {
        src: "/images/herzliya-yad-hatisha.jpg",
        alt: "Residential buildings in the Yad HaTisha neighborhood of Herzliya",
        credit: "David Shay, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Yad_Hatisha_1.jpg",
      },
      {
        src: "/images/herzliya-bauhaus.jpg",
        alt: "A Bauhaus-style building in central Herzliya",
        credit: "Israel Zeller, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:115732_herzliya_bauhaus_building_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/herzliya-new-buildings.jpg",
        alt: "New residential buildings in Herzliya",
        credit: "David Shay, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:New_buildings_on_central_bus_station_of_Herzliya.jpg",
      },
    ],
    workTitle: "Our work in Herzliya",
    work: [
      "Today we manage about 20 properties in Herzliya, all across the city. We work for owners who don't have the time, energy or ability to manage the rental themselves, and want it to run without having to chase anyone.",
      "Herzliya is a city of contrasts: older buildings in the city center, neighborhoods like Neve Amirim and Yad HaTisha, new developments, and houses and large apartments in Herzliya Pituach. Each type of property needs a different approach. In an older apartment, it's important to fix issues quickly; in a luxury property, it's especially important to match the tenant to the property and keep track of its condition. We do this for you, through our Rental Apartment Management or Luxury Property Management service.",
    ],
    facts: [
      { value: "About 20", label: "properties under management in Herzliya" },
      { value: "0", label: "months without rent for our owners" },
      { value: `Since ${site.foundingYear}`, label: "managing properties for owners" },
    ],
    includesTitle: "What you get in Herzliya",
    includes: [
      "Finding suitable tenants and carefully screening every applicant",
      "Financial checks, security deposits and guarantees, and a lease with legal support",
      "Transferring arnona (municipal property tax) with the Herzliya Municipality, plus water, electricity and gas, to the tenants' names",
      "A response to every issue, with tradespeople who come to the property",
      "Landlord Safe: your rent keeps coming even if the tenant stops paying, subject to the terms of service",
      "Inspecting the property at the end of the tenancy, so it comes back to you in good condition and free of debts",
    ],
    faq: [
      {
        id: "herzliya-areas",
        question: "Which neighborhoods in Herzliya do you work in?",
        answer:
          "All over the city. Today we manage about 20 properties in Herzliya, in different neighborhoods. Tell us where your apartment is, and we'll be happy to see how we can help.",
      },
      {
        id: "herzliya-luxury",
        question: "I have a house or a large apartment in Herzliya Pituach. Do you manage properties like that too?",
        answer:
          "Yes. For properties that need special attention we have our Luxury Property Management service: everything included in Rental Apartment Management, plus careful matching of the tenant to the property and ongoing monitoring of its condition.",
      },
      {
        id: "herzliya-arnona",
        question: "What about arnona and the bills for a rented apartment in Herzliya?",
        answer:
          "We take care of it. At the start of the tenancy we transfer the arnona (municipal property tax) with the Herzliya Municipality, as well as water, electricity and gas, to the tenants' names, and at the end of the tenancy we check that no debts remain on the apartment.",
      },
      {
        id: "herzliya-stops-paying",
        question: "What happens if a tenant in Herzliya stops paying rent?",
        answer:
          "With Landlord Safe you keep receiving your rent, subject to the terms of service, and we handle collection and eviction through legal proceedings. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "givat-shmuel",
    city: "Givat Shmuel",
    meta: {
      title: "Property Management in Givat Shmuel – Managing Rented Apartments | Landlord Services",
      description:
        "Property management in Givat Shmuel: about 5 managed properties, run from our nearby Bnei Brak office. Vetted tenants, legal support, repairs and Landlord Safe.",
      h1: "Property Management in Givat Shmuel",
      h1Accent: "in Givat Shmuel",
      intro:
        "Do you have an apartment in Givat Shmuel and no time to manage it? We manage about 5 properties in the city, from our office right next door in Bnei Brak. We find tenants, sign a lease with them with legal support, and handle everything that happens in the apartment throughout the tenancy.",
    },
    eyebrow: "Service areas · Greater Tel Aviv",
    hero: {
      src: "/images/givat-shmuel-sunset.jpg",
      alt: "Residential towers in Givat Shmuel at sunset, above the South Park",
      credit: "Davidi Vardi, PikiWiki, CC BY 2.5",
      creditUrl: "https://commons.wikimedia.org/wiki/File:140026_sunset_givat_shmuel_PikiWiki_Israel.jpg",
    },
    galleryTitle: "Managed properties in Givat Shmuel",
    galleryNote: "Photos are for illustration: residential buildings in Givat Shmuel, not properties we manage.",
    gallery: [
      {
        src: "/images/givat-shmuel-skyline.jpg",
        alt: "Givat Shmuel at sunset, with Ramat Gan, Bnei Brak and Tel Aviv behind it",
        credit: "Davidi Vardi, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:140029_givat_shmuel_at_sunset_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/givat-shmuel-ramat-hadar.jpg",
        alt: "New residential towers in the Ramat Hadar neighborhood of Givat Shmuel",
        credit: "Davidi Vardi, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:140028_ramat_hadar_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/givat-shmuel-ramat-hadar-street.jpg",
        alt: "Residential buildings in the Ramat Hadar neighborhood of Givat Shmuel",
        credit: "Michael Jacobson, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:GivatShmuel23.jpg",
      },
      {
        src: "/images/givat-shmuel-ramon-park.jpg",
        alt: "Ramon Park in Givat Shmuel, surrounded by residential buildings",
        credit: "Dr. Avishai Teicher, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:PikiWiki_Israel_28348_Ramon_Park_in_Givat_Shmuel.JPG",
      },
      {
        src: "/images/givat-shmuel-towers.jpg",
        alt: "Tall residential buildings along a street in Givat Shmuel",
        credit: "Chenspec, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Givat_Shmuel,_May_2024_05.jpg",
      },
    ],
    workTitle: "Our work in Givat Shmuel",
    work: [
      "Givat Shmuel is a small city between Bnei Brak, Ramat Gan and Petah Tikva, near Bar-Ilan University. Our office is in Bnei Brak, so we're close to the apartments we manage here. Today we have about 5 properties under management in the city.",
      "Alongside the older homes, new neighborhoods with residential towers, such as Ramat Hadar, have been built in the city in recent years. But whether your apartment is in a new tower or an older building, what matters to you is much the same: a reliable tenant, rent that arrives on time, and someone who answers when something breaks. That's what we take on.",
    ],
    facts: [
      { value: "About 5", label: "properties under management in Givat Shmuel" },
      { value: "0", label: "months without rent for our owners" },
      { value: `Since ${site.foundingYear}`, label: "managing properties for owners" },
    ],
    includesTitle: "What you get in Givat Shmuel",
    includes: [
      "Finding tenants for the apartment and carefully screening applicants",
      "A financial check of the tenant, security deposits and a lease with legal support",
      "Transferring arnona (municipal property tax) with the Givat Shmuel Municipality, plus water, electricity and gas, to the tenants' names",
      "Handling every issue, with tradespeople who come to the apartment",
      "Landlord Safe: your rent keeps coming even if the tenant stops paying, subject to the terms of service",
      "Making sure the apartment comes back to you at the end of the tenancy in good condition and free of debts",
    ],
    faq: [
      {
        id: "givat-shmuel-areas",
        question: "Do you manage apartments throughout Givat Shmuel?",
        answer:
          "Yes. Today we manage about 5 properties in Givat Shmuel, and our office in Bnei Brak is close to every part of the city. Tell us about your apartment, and we'll be happy to see how we can help.",
      },
      {
        id: "givat-shmuel-arnona",
        question: "Who transfers the arnona with the Givat Shmuel Municipality to the tenant's name?",
        answer:
          "We do. At the start of the tenancy we transfer the arnona (municipal property tax) account with the Givat Shmuel Municipality, as well as water, electricity and gas, to the tenants' names. At the end of the tenancy we check that the apartment comes back to you free of debts.",
      },
      {
        id: "givat-shmuel-abroad",
        question: "I live abroad and have an apartment in Givat Shmuel. Can it be managed remotely?",
        answer:
          "Yes. We have our Property Management for Owners Abroad service: we're here, close to the property, handling the tenants and any issues and keeping you updated, so you won't need to travel to Israel for the apartment.",
      },
      {
        id: "givat-shmuel-stops-paying",
        question: "What happens if the tenant in Givat Shmuel stops paying?",
        answer:
          "With Landlord Safe your rent keeps coming, subject to the terms of service, and we handle collection and eviction through legal proceedings. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "bat-yam",
    city: "Bat Yam",
    meta: {
      title: "Property Management in Bat Yam – Managing Rented Apartments | Landlord Services",
      description:
        "Property management in Bat Yam: about 10 managed properties citywide, by the sea and in the neighborhoods. Vetted tenants, legal support, repairs, Landlord Safe.",
      h1: "Property Management in Bat Yam",
      h1Accent: "in Bat Yam",
      intro:
        "An apartment in Bat Yam needs a good tenant and someone to keep an eye on it. We manage about 10 properties in neighborhoods all across the city, and take care of the entire tenancy for you: from choosing the tenant and the lease to repairs and bills.",
    },
    eyebrow: "Service areas · Greater Tel Aviv",
    hero: {
      src: "/images/bat-yam-beach.jpg",
      alt: "The Bat Yam beach and tall residential buildings along the promenade",
      credit: "",
      creditUrl: "",
    },
    galleryTitle: "Managed properties in Bat Yam",
    galleryNote: "",
    gallery: [
      {
        src: "/images/bat-yam-managed-kitchen.jpg",
        alt: "A modern light-gray kitchen with a countertop, sink and oven space, in an apartment we manage in Bat Yam",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/bat-yam-managed-living-room.jpg",
        alt: "A bright living room with gray floor tiles and built-in closets, with the front door at the end of the hall, in an apartment we manage in Bat Yam",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/bat-yam-managed-balcony.jpg",
        alt: "A balcony with a glass railing overlooking residential buildings in Bat Yam, in an apartment we manage",
        credit: "",
        creditUrl: "",
      },
    ],
    workTitle: "Our work in Bat Yam",
    work: [
      "Bat Yam sits on the coast, just south of Tel Aviv-Yafo, and it has it all: older buildings in the neighborhoods, renovated buildings, and new residential towers near the sea. Today we manage about 10 properties in neighborhoods all across the city.",
      "In a city that's changing so fast, every apartment needs its own approach. In an older building, it's important to fix every issue quickly; in a new apartment, it's important to keep it in the condition you received it. Either way, the tenants contact us, and you get updates and your rent, without phone calls in the middle of the day.",
    ],
    facts: [
      { value: "About 10", label: "properties under management in Bat Yam" },
      { value: "0", label: "months without rent for our owners" },
      { value: `Since ${site.foundingYear}`, label: "managing properties for owners" },
    ],
    includesTitle: "What you get in Bat Yam",
    includes: [
      "Finding tenants for the apartment and carefully screening applicants",
      "A financial check of the tenant, security deposits and guarantees, and a lease with legal support",
      "Transferring arnona (municipal property tax) with the Bat Yam Municipality, plus water, electricity and gas, to the tenants' names",
      "Handling every issue, with tradespeople who come to the apartment",
      "Landlord Safe: your rent keeps coming even if the tenant stops paying, subject to the terms of service",
      "Making sure the apartment comes back to you at the end of the tenancy in good condition and free of debts",
    ],
    faq: [
      {
        id: "bat-yam-areas",
        question: "Which neighborhoods in Bat Yam do you manage apartments in?",
        answer:
          "All across the city. Today we manage about 10 properties in Bat Yam, in different neighborhoods. Tell us about your apartment, and we'll be happy to see how we can help.",
      },
      {
        id: "bat-yam-arnona",
        question: "Who takes care of the arnona and bills for a rented apartment in Bat Yam?",
        answer:
          "We do. At the start of the tenancy we transfer the arnona (municipal property tax) account with the Bat Yam Municipality, as well as water, electricity and gas, to the tenants' names. At the end of the tenancy we check that the apartment comes back to you free of debts.",
      },
      {
        id: "bat-yam-abroad",
        question: "I don't live in Israel and have an apartment in Bat Yam. Can you manage it?",
        answer:
          "Yes. We have our Property Management for Owners Abroad service: we handle the tenants and any issues here, close to the property, and keep you updated wherever you are.",
      },
      {
        id: "bat-yam-stops-paying",
        question: "And what if the tenant in Bat Yam stops paying?",
        answer:
          "With Landlord Safe your rent keeps coming, subject to the terms of service, and we handle collection and eviction through legal proceedings. " +
          rentRecord,
      },
    ],
  },
  {
    slug: "jerusalem",
    city: "Jerusalem",
    meta: {
      title: "Property Management in Jerusalem – Managing Rented Apartments | Landlord Services",
      description:
        "Property management in Jerusalem: about 20 managed properties in neighborhoods citywide. Vetted tenants, a lease with legal support, repairs and Landlord Safe.",
      h1: "Property Management in Jerusalem",
      h1Accent: "in Jerusalem",
      intro:
        "Not everyone who owns an apartment in Jerusalem lives nearby. We manage about 20 properties in neighborhoods all across the city, and take care of the entire tenancy for you: vetted tenants, a lease with legal support, issues that get handled and bills kept in order.",
    },
    eyebrow: "Service areas · Jerusalem",
    hero: {
      src: "/images/jerusalem-old-city.jpg",
      alt: "The Old City walls and the Tower of David, with Jerusalem's residential neighborhoods in the background",
      credit: "",
      creditUrl: "",
    },
    galleryTitle: "Managed properties in Jerusalem",
    galleryNote: "Photos are for illustration: residential buildings in Jerusalem, not properties we manage.",
    gallery: [
      {
        src: "/images/jerusalem-city-view.jpg",
        alt: "Aerial view of residential buildings in central Jerusalem",
        credit: "Hagai Agmon-Snir, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:CityTowerJerusalemNov112022.jpg",
      },
      {
        src: "/images/jerusalem-stone-street.jpg",
        alt: "Jerusalem-stone residential buildings on a residential street in Jerusalem",
        credit: "",
        creditUrl: "",
      },
      {
        src: "/images/jerusalem-baka.jpg",
        alt: "An old stone house with a garden in the Baka neighborhood of Jerusalem",
        credit: "Israel Zeller, PikiWiki, CC BY 2.5",
        creditUrl: "https://commons.wikimedia.org/wiki/File:114052_jerusalem_bakaa_neighborhood_PikiWiki_Israel.jpg",
      },
      {
        src: "/images/jerusalem-unsdorf.jpg",
        alt: "Apartment buildings in the Unsdorf neighborhood of Jerusalem",
        credit: "Yoninah, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Unsdorf,_Jerusalem.JPG",
      },
      {
        src: "/images/jerusalem-ramat-eshkol.jpg",
        alt: "A stone apartment building in the Ramat Eshkol neighborhood of Jerusalem",
        credit: "Yaakov, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Ramat_Eshkol7221.JPG",
      },
    ],
    workTitle: "Our work in Jerusalem",
    work: [
      "Jerusalem is the city where we work outside Greater Tel Aviv. Today we manage about 20 properties there, in neighborhoods all across the city, for owners who don't have the time, energy or ability to manage the rental themselves.",
      "Jerusalem is a city of neighborhoods that are very different from one another: old stone houses in historic neighborhoods, housing blocks from the 1960s and 70s, and new buildings in neighborhoods built since then. Each has its own kind of tenants, and each building has its own issues. We find the right tenant for every apartment, and handle everything that happens there until the end of the tenancy.",
    ],
    facts: [
      { value: "About 20", label: "properties under management in Jerusalem" },
      { value: "0", label: "months without rent for our owners" },
      { value: `Since ${site.foundingYear}`, label: "managing properties for owners" },
    ],
    includesTitle: "What you get in Jerusalem",
    includes: [
      "Finding tenants for the apartment and carefully screening applicants",
      "A financial check of the tenant, security deposits and guarantees, and a lease with legal support",
      "Transferring arnona (municipal property tax) with the Jerusalem Municipality, plus water, electricity and gas, to the tenants' names",
      "Handling every issue, with tradespeople who come to the apartment",
      "Landlord Safe: your rent keeps coming even if the tenant stops paying, subject to the terms of service",
      "Making sure the apartment comes back to you at the end of the tenancy in good condition and free of debts",
    ],
    faq: [
      {
        id: "jerusalem-areas",
        question: "Which neighborhoods in Jerusalem do you manage apartments in?",
        answer:
          "All across the city. Today we manage about 20 properties in Jerusalem, in different neighborhoods. Tell us where your apartment is, and we'll be happy to see how we can help.",
      },
      {
        id: "jerusalem-far",
        question: "I live far from Jerusalem, in Israel or abroad. Can the apartment be managed without my coming to it?",
        answer:
          "Yes. That's what we're here for: we handle the tenants, issues and bills and keep you updated, so you won't need to travel to Jerusalem for the apartment. For owners who live abroad, we also have our Property Management for Owners Abroad service.",
      },
      {
        id: "jerusalem-arnona",
        question: "Who transfers the arnona with the Jerusalem Municipality to the tenant's name?",
        answer:
          "We do. At the start of the tenancy we transfer the arnona (municipal property tax) account with the Jerusalem Municipality, as well as water, electricity and gas, to the tenants' names. At the end of the tenancy we check that the apartment comes back to you free of debts.",
      },
      {
        id: "jerusalem-stops-paying",
        question: "What happens if the tenant in my Jerusalem apartment stops paying?",
        answer:
          "With Landlord Safe you keep receiving rent, subject to the terms of service, and we handle collection and eviction through legal proceedings. " +
          rentRecord,
      },
    ],
  },
];

// Language switcher: each language's name in its own language
export const languageNames = { he: "עברית", en: "English" };

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/landlord-safe", label: "Landlord Safe" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const cta = {
  primary: "Book an introductory call",
  primaryHref: "/contact",
  call: "Call us",
  whatsapp: "WhatsApp",
  whatsappLong: "Chat with us on WhatsApp",
  whatsappText: "Hi, I'd like to hear about having you manage my apartment.", // pre-filled WhatsApp message
  email: "Email us",
};

// ---------------------------------------------------------------------------
// Home page: section order
// Remove a key to hide a section, or reorder keys to move sections.
// (The hero always comes first.)
// ---------------------------------------------------------------------------

// Order follows the Acre & Key design. "steps" and "ownerView" are off; "comparison" lives on /services.
// "areas" stays: it is where visitors find the city pages (the footer links to it).
export const homeSections: HomeSection[] = [
  "howItWorks",
  "personas",
  "services",
  "comparison",
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
    title: "Rental Apartment Management",
    short:
      "We find the tenants, check their income and their ability to keep up with the rent, transfer the utility accounts into the tenants' names, and handle every fault until it's fixed. Your job is simply to receive the rent in your bank account, worry-free.",
    forWhom:
      "For owners who rent out their apartment, or want to, and would rather have a professional take care of every detail for them.",
    includes: [
      "Finding tenants and screening applicants",
      "A lease with legal support",
      "Transferring the municipal and utility accounts (arnona (municipal property tax), water, electricity, gas) into the tenants' names",
      "Handling every fault throughout the lease, including coordinating tradespeople",
      "Checking that the apartment is returned at the end of the lease in good condition and free of debts",
    ],
  },
  {
    id: "landlord-safe",
    icon: "shieldCheck",
    title: "Landlord Safe",
    short:
      "A service unique to Landlord Services: even if the tenant stops paying, Landlord Services pays the rent in their place, subject to the terms of service. This unique service gives you peace of mind when it comes to your rent.",
    forWhom: "For owners who want the security of knowing the rent will keep coming in, and someone to handle the legal side if something goes wrong.",
    includes: [
      "A financial check of the tenant",
      "Advice on security deposits and guarantees",
      "Preparing the lease",
      "A rent guarantee: you keep receiving your rent",
      "Legal eviction, including enforcement proceedings at the Execution Office",
      "Debt collection through legal proceedings",
    ],
  },
  {
    id: "abroad",
    icon: "globe",
    title: "Property Management for Owners Abroad",
    short: "Living abroad? We're here, close to your property, taking care of it for you.",
    forWhom: "For owners of property in Israel who live abroad, or who only come to Israel to visit.",
    includes: [
      "Full management of renting out your apartment, remotely",
      "Handling faults and maintenance without you having to come",
      "Regular updates, wherever you are",
    ],
  },
  {
    id: "luxury",
    icon: "gem",
    title: "Luxury Property Management",
    short: "Close, personal attention for properties that need special care.",
    forWhom: "For owners of luxury apartments and properties who want the property kept to a high standard and the tenants to get a fast response.",
    includes: [
      "Everything included in Rental Apartment Management",
      "Careful matching of tenants to the property",
      "Ongoing monitoring of the property's condition",
    ],
  },
  {
    id: "commercial",
    icon: "building",
    title: "Offices & Commercial Properties",
    short: "Offices and commercial properties get the same organized, responsible management from us.",
    forWhom: "For owners of offices and commercial properties looking for someone to manage the lease and the property for them.",
    includes: [
      "Managing the lease with the tenants",
      "A lease agreement with legal support",
      "Handling faults and maintenance",
    ],
  },
];

// ---------------------------------------------------------------------------
// How it works (4 steps)
// ---------------------------------------------------------------------------

export const steps: Step[] = [
  {
    title: "Introductory call",
    text: "Tell us about the apartment and what matters to you. We'll put together a package that fits your needs exactly.",
  },
  {
    title: "Finding and screening tenants",
    text: "We find tenants, check them thoroughly and present you with the ones who fit.",
  },
  {
    title: "Lease and move-in",
    text: "We prepare a lease with legal support and transfer the municipal and utility accounts into the tenants' names.",
  },
  {
    title: "Ongoing management",
    text: "We handle every fault throughout the lease, and at the end we check that the apartment comes back to you in good condition and free of debts.",
  },
];

// Home: the short one-line strip under the hero. Empty items = hidden
export const howItWorks = {
  title: "How it works",
  items: [
    { icon: "search", text: "We find you the right tenant" },
    { icon: "contract", text: "A lease with legal backing" },
    { icon: "bill", text: "Move-in and utility accounts are on us" },
    { icon: "wrench", text: "We handle every fault" },
    { icon: "banknote", text: "The rent is yours, every month" },
  ] satisfies { icon: IconName; text: string }[],
};

// ---------------------------------------------------------------------------
// Home: "who is it for"
// ---------------------------------------------------------------------------

export const personas = {
  eyebrow: "Who it's for",
  title: "You own an apartment. You want to enjoy it without the headaches",
  titleAccent: "You want to enjoy it without the headaches",
  lead: "Our clients are owners of investment apartments and owners living abroad who want to entrust the day-to-day management to a professional.",
  // Closing card after the items. Empty title = hidden
  closingTitle: "Is your situation a little different?",
  closingText: "Tell us about the apartment, and together we'll see whether and how we can help.",
  items: [
    {
      icon: "homeHeart",
      title: "You've inherited an apartment",
      pain: "Suddenly you own a property, and you have no idea where to start.",
      solution: "We take over the apartment from day one: getting it ready to rent, tenants, lease and utility accounts.",
    },
    {
      icon: "globe",
      title: "You live far away or abroad",
      pain: "The apartment is in central Israel, and you're up north, on relocation or on the other side of the world.",
      solution: "We're close to the property for you, and keep you updated wherever you are.",
    },
    {
      icon: "heart",
      title: "When it's hard to manage it yourself",
      pain: "Calls from tenants, tradespeople and red tape just don't suit you anymore.",
      solution: "One reliable point of contact that handles everything, while you simply receive the rent.",
    },
    {
      icon: "briefcase",
      title: "You don't have the time",
      pain: "Work, family, and now a plumber in the middle of a meeting.",
      solution: "The tenants call us, not you. We handle it and keep you updated.",
    },
    {
      icon: "chart",
      title: "Investors with several apartments",
      pain: "Several apartments, several tenants and a great deal of paperwork.",
      solution: "Organized management of all your properties in one place, with full transparency.",
    },
  ] satisfies Persona[],
};

// ---------------------------------------------------------------------------
// Home: what the owner experiences (illustrative mockup)
// ---------------------------------------------------------------------------

export const ownerView = {
  title: "This is how it looks from your side",
  lead: "You don't chase anyone. We handle everything that happens in the apartment, and you get an update.",
  points: [
    {
      icon: "banknote",
      title: "The rent arrives on time",
      text: "The payment reaches you every month, on the date we agreed.",
    },
    {
      icon: "eye",
      title: "Full transparency",
      text: "You know what's happening at the property: faults, repairs and payments.",
    },
    {
      icon: "phone",
      title: "One point of contact for everything",
      text: "The tenants come to us, and we see things through to the end.",
    },
  ] satisfies Feature[],
  mock: {
    from: "Landlord Services",
    subtitle: "Updates about your apartment",
    messages: [
      { icon: "banknote", title: "Your rent has been transferred", text: "On the date we agreed, as every month." },
      { icon: "wrench", title: "Water heater fault reported", text: "We booked a technician. The fault has been fixed." },
      { icon: "bill", title: "Municipal and utility accounts", text: "Arnona (municipal property tax), water and electricity are in the tenants' names." },
      { icon: "calendar", title: "The lease is ending soon", text: "We'll get back to you with a recommendation on next steps." },
    ] satisfies Feature[],
    note: "For illustration only",
  },
};

// ---------------------------------------------------------------------------
// Home + Landlord Safe: layers of legal protection
// ---------------------------------------------------------------------------

export const protection = {
  eyebrow: "The legal backing",
  title: "Layered protection, before the tenant even moves in",
  titleAccent: "before the tenant even moves in",
  lead:
    "Own an apartment? Imagine that your only job is to see the money land in your bank account, and that's it. We take care of everything else. You get complete peace of mind. We'll find the tenants for you, check them, approve them, sign the lease on your behalf, including legal representation by lawyers, transfer all the accounts into the tenants' names, handle every fault, and at the end of the lease make sure the tenants leave the apartment in good condition and free of debts. Complete care from A to Z, all backed by our guarantee of your rent payments through our unique product, Landlord Safe.",
  layers: [
    {
      icon: "search",
      title: "Tenant screening",
      text: "A financial check of the tenant before signing, so you start with the right tenant.",
    },
    {
      icon: "contract",
      title: "A strong legal agreement",
      text:
        "Our lease is written by lawyers with more than 20 years of experience in property rentals. They accompany every single agreement and negotiate with the tenants until we reach the best possible lease for you.",
    },
    {
      icon: "users",
      title: "Security deposits and guarantees",
      text:
        "All our leases include a special section setting out the guarantees and security deposits the tenant provides when signing the agreement, all to ensure the tenant honors the agreement and to look after all your interests as the property owner.",
    },
    {
      icon: "shieldCheck",
      title: "Landlord Safe",
      text: "Even if the tenant stops paying, your rent keeps arriving every month, subject to the terms of service.",
    },
  ] satisfies Feature[],
  safeLink: "Discover Landlord Safe",
};

// ---------------------------------------------------------------------------
// Home: comparison table
// ---------------------------------------------------------------------------

export const comparison = {
  eyebrow: "What's the difference",
  title: "On your own, through a broker, or with Landlord Services",
  titleAccent: "or with Landlord Services",
  lead: "We're not a real-estate brokerage. Our work doesn't end when the lease is signed; that's where it begins.",
  columns: ["On your own", "Broker", "Landlord Services"],
  highlight: 2, // index of our column
  valueLabels: { yes: "Included", no: "Not included", you: "Up to you" } satisfies Record<CompareValue, string>,
  // How many rows each column covers; {n} and {total} are counted from `rows`
  tally: "{n} of {total} included",
  rows: [
    { label: "Finding tenants", values: ["you", "yes", "yes"] },
    { label: "Financial check of the tenant", values: ["you", "you", "yes"] },
    { label: "Lease with legal support", values: ["you", "you", "yes"] },
    { label: "Transferring the municipal and utility accounts", values: ["you", "you", "yes"] },
    { label: "Handling faults throughout the lease", values: ["you", "you", "yes"] },
    { label: "Tracking rent payments", values: ["you", "you", "yes"] },
    { label: "Guaranteed rent (Landlord Safe)", values: ["no", "no", "yes"], mark: "*" },
    { label: "Eviction and collection through legal proceedings", values: ["you", "you", "yes"], mark: "**" },
  ] satisfies { label: string; values: CompareValue[]; mark?: string }[],
  // `mark` is shown next to our column's value and points to the matching note below the table
  notes: [
    "A general comparison. Brokers' services vary from office to office.",
    "* This service is subject to meeting the terms of service, and to an additional fee.",
    "** The eviction and legal collection service does not include expenses and court fees, and does not include appeals or Execution Office proceedings.",
  ],
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
    question: "Why choose us?",
    answer:
      "Good question.\nFirst and foremost, because we understand your needs. Over the years we have developed unique capabilities designed to best meet the needs of property owners. We are professional, courteous and available for you. We have a high-quality, permanent team that gets up every morning to give you the highest level of service. That is what drives us, and it is also what keeps our clients with us for the long term.\nWe live by values that guide everything we do: professional service with complete discretion, uncompromising reliability and quality, full transparency, and a service package tailored to you.",
  },
  {
    id: "for-whom",
    question: "Who is the service for?",
    answer:
      "Our service suits any property owner who wants professional, high-quality management of their property that will maximize the return on it and free them from any work or worry involved in managing and maintaining it day to day.\n• Owners living abroad, or clients who spend most of their time abroad\n• Owners who don't want to deal with the day-to-day management and maintenance of their property;\n• People with demanding careers who can't deal with managing and maintaining a property they own;\n• Lawyers, accountants and estate administrators who want management by an external professional;\n• Jointly owned properties that need professional management;\n• Owners of multiple properties;",
  },
  {
    id: "area",
    question: "Which areas do you operate in?",
    answer:
      "We operate in Greater Tel Aviv and Jerusalem. Some of our services are also available for properties located outside these areas, and you are welcome to contact us so we can tailor a personal package for you.",
  },
  {
    id: "services",
    question: "What services do you provide?",
    answer:
      "We're glad you asked.\nWe provide an optimal, comprehensive package designed to maximize your return on the property while giving you peace of mind and freeing you completely from any work or worry involved in managing and maintaining it day to day.\n• Rental Apartment Management\n• Luxury Property Management\n• Ongoing upkeep and maintenance services for properties\n• Vacation apartment management (owners living abroad)\n• Management of offices and commercial properties\n• The Landlord Safe service: guaranteed rent for the property owner during the lease term",
  },
  {
    id: "broker",
    question: "How are you different from a real-estate broker?",
    answer:
      "We're not a real-estate brokerage. A broker helps find a tenant, and their work usually ends when the lease is signed. We manage the apartment throughout the lease: tenant screening, a legal lease, utility accounts, faults, payment tracking, and with Landlord Safe, guaranteed rent too, subject to the terms of service.",
  },
  {
    id: "renovation",
    question: "I want to renovate the apartment before the new tenants move in. What do I do?",
    answer:
      "No problem.\nOur service starts even before your property is rented out, and if needed we'll gladly take care of preparing and upgrading the apartment before the tenants move in, whether it's a complete, comprehensive renovation or just minor repairs. We work with a wide range of top-tier professionals in Israel and will get the apartment ready to rent for you quickly and to the highest quality.",
  },
  {
    id: "utilities",
    question: "Who handles transferring the property's municipal and utility payments?",
    answer:
      "We do, of course. After the lease is signed, we'll transfer the municipal and utility payments into the tenant's name for you. Our representatives will make sure all the accounts are transferred into the tenants' names with every relevant authority: the local municipality, the electric company, the building committee/management company, the municipal water company and the gas company. At the end of the process we'll send you a detailed report including the meter readings and the confirmations that the payments were transferred into the tenants' names.",
  },
  {
    id: "after-move-in",
    question: "Who will look after me once the tenants have moved in?",
    answer:
      "Property management is an area of expertise!\nOur goal is to maximize the return on your property while freeing you completely from any work or worry involved in managing and maintaining it day to day. After the tenants move into your property, we'll continue to oversee and manage it on an ongoing basis. During the lease we'll make periodic visits to your property (coordinated with the tenants, of course) and physically check the condition of the property and whether the tenants are meeting the terms of the agreement. After each visit you'll receive a visit summary report, including photos and our overall impression of the apartment and the tenants.",
  },
  {
    id: "price",
    question: "How much does it cost?",
    answer:
      "For a formal price quote, please contact us by email or mobile.",
  },
  {
    id: "sale",
    question: "If needed, will you also handle selling my apartment?",
    answer:
      "Of course.\nLandlord Services provides a complete package of services for your property, including help with and handling of the sale of the property and legal support during the sale process. For a formal price quote, please contact us by email or mobile.",
  },
  {
    id: "abroad-manage",
    question: "If I live abroad, can you manage the property for me?",
    answer:
      "Absolutely.\nThat's exactly what we're here for. We'll manage the property for you even if you're abroad or live far from your property. By signing a suitable power of attorney, we can manage your property, sign the lease with the tenants on your behalf and maintain the property on an ongoing basis. The rent goes directly into your account and doesn't pass through us, so you can sleep soundly while we manage the property for you.",
  },
  {
    id: "abroad-maintain",
    question: "I live abroad, I own a property in Israel and we come to visit from time to time. Can you help me maintain the property?",
    answer:
      "Certainly!\nWe'll make sure that when you arrive, your apartment is ready for you, clean and well kept especially for you, and above all that you have peace of mind.\nFor vacation apartments, our service package includes:\n• Paying the property's regular bills (building committee fees, arnona (municipal property tax), electricity, etc.)\n• Periodic inspections of the property, including a physical check of the property and running its systems: electricity, water, plumbing, air conditioners, etc.\n• Collecting mail and forwarding it to the property owners\n• Handling the repair of faults at the property\n• Periodic updates on the condition of the property",
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
    "Landlord Safe is a service for owners who want to know the rent will keep coming in. We check the tenant before signing, prepare the lease and the security deposits, and the company guarantees the rent payments. If the tenant stops paying, you keep receiving rent, and we handle the entire legal process.",
  promise: "Your rent is guaranteed",
  promiseText: "Even if the tenant stops paying, you keep getting paid, subject to the terms of service.",
  // "What happens if the tenant stops paying" – step by step
  process: [
    {
      title: "We spot the late payment",
      text: "As soon as a payment doesn't arrive, we contact the tenant and try to resolve the matter.",
    },
    {
      title: "You keep receiving rent",
      text: "Under the rent guarantee, your payments keep arriving.",
    },
    {
      title: "Legal eviction",
      text: "If needed, we handle evicting the tenant through legal proceedings, including enforcement proceedings at the Execution Office.",
    },
    {
      title: "Collecting the debt",
      text: "We collect the debt from the tenant through legal proceedings, and you don't have to deal with it.",
    },
  ] as Step[],
  faq: [
    {
      id: "safe-what",
      question: "What is the Landlord Safe service?",
      answer:
        "The Landlord Safe service is a unique product of Landlord Services, designed to make sure property owners keep receiving a steady income from their rented property, even if the tenant breaches their obligations, doesn't pay the rent or doesn't vacate the property at the end of the lease.",
    },
    {
      id: "safe-price",
      question: "How much does it cost?",
      answer:
        "For a formal price quote, please contact us by email or mobile.",
    },
    {
      id: "safe-eviction",
      question: "Will you handle the legal proceedings to evict the tenant?",
      answer:
        "Absolutely.\nIn addition to guaranteeing the rent payments, we will bear and handle all the legal aspects of evicting tenants who breach their lease from the property. Our interest is to get the property back on the market as quickly as possible so you can maximize your income from it.",
    },
    {
      id: "safe-cases",
      question: "In which cases will I be entitled to compensation from you?",
      answer:
        "Good question.\nCompensation is granted when the lease is breached in one of the following cases:\n• Non-payment of rent\n• Running a business in the apartment\n• Using the apartment in a way that violates the law or the lease.",
    },
    {
      id: "safe-new-tenants",
      question: "My apartment hasn't been rented out yet, but I have potential tenants. Is the service right for me?",
      answer:
        "No problem!\nWe'll check the identity and background of your potential tenants so they can be approved in advance, before they sign a lease with you. After the checks and the company's approval, you'll be granted the Landlord Safe service!\nFor a formal price quote, please contact us by email or mobile.",
    },
    {
      id: "safe-rented",
      question: "My apartment is already rented out. Is your service right for me?",
      answer:
        "Of course!\nIn that case we'll check the existing tenants, whether there are adequate guarantors and security deposits, and whether the rent has been paid on time up to the date you engage us. After the checks and the company's approval, you'll be granted the Landlord Safe service!\nFor a formal price quote, please contact us by email or mobile.",
    },
    {
      id: "safe-rent",
      question: "My tenant isn't paying the rent. What do I do?",
      answer:
        "That's what we're here for.\nThe Landlord Safe service guarantees you full payment of your rent until the end of the lease, or until we find you a replacement tenant who will ensure your continued income from the property.",
    },
    {
      id: "safe-timing",
      question: "How soon will I receive the compensation from you?",
      answer:
        "As soon as possible.\nOnce the company has confirmed that this is indeed a breach of the lease that justifies cancelling it, the company will credit your account with the monthly compensation within 14 days of the date your claim is approved.",
    },
    {
      id: "safe-who",
      question: "Is your service suitable for every apartment?",
      answer:
        "Yes.\nThe Landlord Safe service is granted for every rental deal approved by the company's team. The review covers the tenants or potential tenants, the security deposits, the lease, and whether the parties have kept to its ongoing terms in the period before engaging us.",
    },
    {
      id: "safe-end",
      question: "What happens if the tenant refuses to vacate the apartment at the end of the lease?",
      answer:
        "You can relax and sit back in your armchair. If the breach occurred at the end of the lease, when the tenant did not vacate the property on the agreed date even though they paid the rent, you will be entitled to compensation equal to the rent from the agreed end date of the lease until the end of a three-month period, or until the tenant vacates the property, whichever comes first.",
    },
    {
      id: "safe-replacement",
      question: "Will you look for a replacement tenant if the lease is breached?",
      answer:
        "Definitely.\nIf the lease is breached, our goal is to evict the breaching tenant and find a quality tenant to replace them as quickly as possible, one who will pass our background checks and sign a lease on terms as similar as possible, and for at least the lease term in the lease agreement, in place of the breaching tenant.",
    },
  ] as FaqItem[],
};

export const about = {
  story: [
    "Landlord Services was founded in 2013 by its managing partners, who are property owners themselves and found they needed a high-quality management company that would look after them personally.",
    "We looked for a professional management company free of conflicts of interest, one that is transparent with its clients and keeps up a high level of service over time. That need gave rise to Landlord Services.",
    "At Landlord Services we provide comprehensive service to property owners (apartments and houses), aimed at maximizing the return on the property while giving you peace of mind and freeing you completely from any work or worry involved in managing the property and its day-to-day upkeep.",
    "From its founding and throughout its years of operation, Landlord Services has grown quickly.",
    "The company has a skilled team with broad, extensive experience in real estate, from property management through project initiation to property development.",
  ],
  values: [
    {
      icon: "eye",
      title: "Transparency",
      text: "You know what is happening in your property, what the service includes and what you are paying for.",
    },
    {
      icon: "heart",
      title: "No conflict of interest",
      text: "We represent only you, the property owner.",
    },
    {
      icon: "scale",
      title: "Legal backing",
      text: "Our CEO is an attorney, and every stage, from the lease to an eviction proceeding, comes with legal support.",
    },
  ] satisfies Feature[],
};

export const partner = {
  name: "Doron Marom",
  role: "CEO",
  bio: "An attorney with LLB and LLM degrees and a bachelor's degree (BA) in business administration. He previously worked at the law firm Tadmor & Co.",
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
    title: "Landlord Services – Property Management for Owners of Rented Apartments",
    description:
      "Landlord Services has managed rental apartments in Greater Tel Aviv and Jerusalem since 2013: tenant screening, a legally sound lease, repairs and Landlord Safe for guaranteed rent, subject to the terms of service.",
    h1: "Your apartment, managed. Minimum hassle and headaches. Maximum enjoyment of your rent.",
    // In the hero each sentence of the accent sits on its own line, in a smaller size
    h1Accent: "Minimum hassle and headaches. Maximum enjoyment of your rent.",
    intro:
      "We offer several plans designed to give you peace of mind and free you completely from the work and worry of your apartment, dealing with your tenants or day-to-day maintenance, all while maximizing the return on your property.",
  },
  services: {
    title: "Rental Apartment and Property Management | Landlord Services",
    description:
      "All Landlord Services offerings: Rental Apartment Management, Landlord Safe, Property Management for Owners Abroad, Luxury Property Management, and Offices & Commercial Properties.",
    h1: "Property Management Services",
    h1Accent: "Property Management",
    intro:
      "As a real estate management company for apartment owners, we take care of everything involved in renting out your apartment: finding tenants, the lease, maintenance and rent collection. We work in Greater Tel Aviv and Jerusalem, including for owners who live abroad.",
  },
  safe: {
    title: "Landlord Safe – Guaranteed Rent and Legal Handling | Landlord Services",
    description:
      "Landlord Safe: even if the tenant stops paying, you keep receiving rent, subject to the terms of service. Tenant screening, security deposits and guarantees, legal eviction and debt collection.",
    h1: "Landlord Safe – the rent keeps coming",
    h1Accent: "the rent keeps coming",
    intro:
      "Landlord Safe is a service of the property management company Landlord Services, for owners who want security in renting out their apartment. If the tenant stops paying, you keep receiving rent, and we handle the eviction and collection through legal proceedings.",
  },
  about: {
    title: "About Landlord Services – Property Management Since 2013",
    description:
      "Landlord Services was founded in 2013 by partners who are apartment owners themselves. Transparency, no conflict of interest and legal backing, led by Doron Marom.",
    h1: "About Landlord Services",
    h1Accent: "Landlord Services",
    intro:
      "Landlord Services is a property management company founded in 2013 by partners who own rented apartments themselves. We manage more than 250 properties for owners in Greater Tel Aviv and Jerusalem, led by our CEO, Doron Marom.",
  },
  faq: {
    title: "Property Management FAQ | Landlord Services",
    description:
      "Answers to common questions about the services of the property management company Landlord Services: who the service is for, what is included, managing from abroad, paying municipal bills and more.",
    h1: "Frequently asked questions about property management",
    h1Accent: "about property management",
    intro:
      "Here we have gathered answers to the questions owners ask us before getting started. Landlord Services is a property management company for owners of rented apartments. Didn't find your answer? Talk to us.",
  },
  contact: {
    title: "Contact Us – Landlord Services Property Management",
    description:
      "Contact Landlord Services, a property management company in Greater Tel Aviv and Jerusalem: +972-54-211-0096 (also on WhatsApp), doron@landlords.co.il. Message us on WhatsApp or by email and we'll get back to you.",
    h1: "Let's talk about your apartment",
    h1Accent: "about your apartment",
    intro:
      "Message us on WhatsApp or by email, or give us a call. Landlord Services is a property management company for owners of rented apartments, and our office is in Bnei Brak.",
  },
  privacy: {
    title: "Privacy Policy | Landlord Services",
    description: "The Landlord Services privacy policy: what information we receive when you contact us, how we use it, and how to ask to review, correct or delete it.",
    h1: "Privacy Policy",
    intro: "",
  },
  accessibility: {
    title: "Accessibility Statement | Landlord Services",
    description: "The Landlord Services website accessibility statement: what we have done to make the site accessible to everyone, our aim to meet Israeli Standard SI 5568 at level AA, and how to contact us about accessibility.",
    h1: "Accessibility Statement",
    intro: "",
  },
};

// ---------------------------------------------------------------------------
// Home page sections
// ---------------------------------------------------------------------------

export const home = {
  eyebrow: "Property management company for apartment owners", // empty = hidden. Carries the main search phrase above the H1
  promise: "You enjoy the rent. We take care of everything else.",
  sinceLabel: `Since ${site.foundingYear}`,
  regionsJoin: " & ",
  foundedValue: String(site.foundingYear), // numbers strip, always shown
  foundedText: "Year the company was founded",
  ledBy: "Led by", // hero line: "Led by <partner>, <role>"
  servicesEyebrow: "What we do",
  servicesTitle: "Everything your apartment needs, in one place",
  servicesTitleAccent: "in one place",
  servicesMore: "All services",
  stepsTitle: "Four steps, and you can relax",
  areasEyebrow: "Where we work",
  areasTitle: "Active in Greater Tel Aviv and Jerusalem",
  areasTitleAccent: "in Greater Tel Aviv and Jerusalem",
  areasAllLabel: "Cities where we work",
  photoCredit: "Photo:", // before the photographer on Creative Commons city photos
  areasCityMore: "City page", // under a city photo that has its own page
  areasLead: "We focus on cities with high rental demand. Is your property in another city? Talk to us.",
  testimonialsTitle: "Reviews from Google",
  reviewsPrev: "Previous review",
  reviewsNext: "Next review",
  reviewStars: "{n} out of 5 stars", // screen-reader text for the stars
  faqEyebrow: "Questions and answers",
  faqTitle: "Frequently asked questions",
  faqMore: "All questions",
  ctaEyebrow: "Let's talk",
  ctaTitle: "An introductory call about your apartment",
  ctaTitleAccent: "about your apartment",
  ctaText: "A short call with no obligation. Message us on WhatsApp or by email, or give us a call.",
  // What happens after someone reaches out (shown as an ordered list)
  ctaNextTitle: "What happens after you contact us",
  ctaNext: [
    "Someone from our team gets back to you within one business day.",
    "On the introductory call, you tell us about the apartment and what matters to you.",
    "We offer you a package tailored to your property and your needs.",
  ],
  // Optional line under the partner's name; empty hides it (the legal backing is already said in "protection")
  ctaPartnerText: "",
};

// ---------------------------------------------------------------------------
// Contact page / footer labels
// ---------------------------------------------------------------------------

export const labels = {
  language: "Language",
  serviceCatalog: "Property management services",
  serviceType: "Property management",
  phone: "Phone",
  whatsapp: "WhatsApp",
  email: "Email",
  address: "Address",
  hours: "Opening hours",
  companyId: "Company No.",
  maps: "Directions in Google Maps",
  waze: "Directions in Waze",
  facebook: "Facebook",
  privacy: "Privacy policy",
  accessibility: "Accessibility statement",
  skip: "Skip to main content",
  menu: "Menu",
  closeMenu: "Close menu",
  forWhom: "Who it's for",
  includes: "What's included",
  whatsIncluded: "What's included in Landlord Safe",
  stopsPaying: "What happens if the tenant stops paying?",
  values: "Our values",
  team: "Our team",
  teamLead: "The people who look after your apartment.",
  office: "Our office",
  officeLead: "You're welcome to visit us – just arrange it in advance.",
  story: "Our story",
  whatItIs: "What is Landlord Safe",
  monthsCovered: "Guarantee period",
  price: "Price",
  learnMore: "Learn more",
  rights: "All rights reserved",
  notFoundTitle: "Page not found",
  notFoundText: "The link may be out of date, or the page may have moved.",
  backHome: "Back to the home page",
  contactUs: "Contact us",
  links: "Links",
  services: "Services",
  areas: "Service areas",
  numbers: "Landlord Services in numbers",
  mainNav: "Main navigation",
  footerNav: "Footer links",
  homeLink: "Home",
  onThisPage: "On this page",
  lastUpdated: "Last updated:",
  allServices: "All services",
  footerTagline: `A property management company for owners of rented apartments in Greater Tel Aviv and Jerusalem, since ${site.foundingYear}. You enjoy the rent – we take care of everything else.`,
};

// ---------------------------------------------------------------------------
// Legal pages
// ---------------------------------------------------------------------------

export const legal = {
  hebrewGoverns: "This is an English translation provided for convenience. The Hebrew version of this page is the binding one.",
  privacy: [
    {
      title: "General",
      text: "This policy explains what information we collect on the website and what we do with it.",
    },
    {
      title: "What information is collected",
      text: "When you contact us by WhatsApp, phone or email, we receive the details you have given us.",
    },
    {
      title: "Use of information",
      text: "We use your details only to get back to you and give you information about our services. We do not sell the information to any third party.",
    },
    {
      title: "External services",
      text: "The website is hosted by an external hosting provider.",
    },
    {
      title: "Cookies and browser storage",
      text: "The website stores only preferences in your browser: your choice about cookies, the language you chose for the site and your accessibility menu settings. Additional cookies, such as analytics tools, will be enabled only if you approve them in the cookie notice. You can change your choice at any time through the \"Cookie settings\" link at the bottom of the page, or delete cookies in your browser settings.",
    },
    {
      title: "Privacy inquiries",
      text: `To request to review, correct or delete your information, contact us by email at ${site.email}.`,
    },
  ],
  // Sections with an empty `text` are hidden
  accessibility: [
    {
      title: "Commitment to accessibility",
      text: "We work to make the website accessible to all users, including people with disabilities, in accordance with the Equal Rights for Persons with Disabilities Law, 1998, and the Equal Rights for Persons with Disabilities (Accessibility Adjustments to Service) Regulations, 2013.",
    },
    {
      title: "Accessibility level",
      text: "The website has been adapted according to Israeli Standard SI 5568, which is based on the WCAG 2.0 guidelines, at level AA, as far as possible.",
    },
    {
      title: "What we have done",
      text: "The website is built with a clear heading structure, alternative text for images, good color contrast, full keyboard navigation with a clearly visible focus indicator, a link to skip to the main content, screen reader support, respect for the \"reduce motion\" setting in the operating system, and adaptation to small screens.",
    },
    {
      title: "The accessibility menu",
      text: "Every page has an accessibility button that opens a menu with these options: increasing and decreasing text size, high contrast, grayscale, highlighting links, a readable font and stopping animations. The settings are saved in your browser and stay active as you move between pages.",
    },
    {
      title: "Known limitations",
      text: "Despite our efforts, some parts of the website may not yet be fully accessible. If you run into a problem, we would be glad to hear about it and fix it.",
    },
    {
      title: "Accessibility arrangements at the office",
      text: `Our office is located at ${site.address.full}. There is parking in the building, by prior arrangement with the office. The route from the parking lot to the offices is fully accessible, and there is an elevator to the office floor. Visitors who need assistance are welcome to call us before arriving, and we will be glad to help.`,
    },
    {
      title: "Accessibility inquiries",
      text: `Have you run into a problem, or do you have a suggestion for improvement? Contact ${accessibilityContact.name ? `our accessibility coordinator, ${accessibilityContact.name}, ` : "us "}${accessibilityContact.phone ? `by phone at ${accessibilityContact.phone} or ` : ""}by email at ${accessibilityContact.email}. We will do our best to get back to you as soon as possible.`,
    },
  ],
  accessibilityUpdated: "2026-11-04", // date the accessibility statement was last reviewed
};

// ---------------------------------------------------------------------------
// Cookie notice (components/CookieBanner.tsx)
// ---------------------------------------------------------------------------

export const cookieNotice = {
  title: "Cookies on this site",
  text: "This website stores only your preferences in your browser. Additional cookies, such as analytics tools, will be enabled only if you approve.",
  accept: "Accept",
  decline: "Decline",
  policyLink: "Privacy policy",
  settings: "Cookie settings", // footer link that reopens the notice
};

// ---------------------------------------------------------------------------
// Accessibility menu (components/AccessibilityMenu.tsx)
// ---------------------------------------------------------------------------

export const a11yMenu = {
  open: "Accessibility menu",
  close: "Close accessibility menu",
  title: "Accessibility",
  textSize: "Text size",
  increase: "Increase text size",
  decrease: "Decrease text size",
  decreaseSymbol: "A-",
  increaseSymbol: "A+",
  options: {
    contrast: "High contrast",
    grayscale: "Grayscale",
    links: "Highlight links",
    font: "Readable font",
    motion: "Stop animations",
  },
  reset: "Reset settings",
  statement: "Accessibility statement",
};

// Short company summary (also used for llms.txt wording and JSON-LD description)
export const summary: string =
  "Landlord Services is a property management company for owners of rented apartments, founded in 2013 and operating in Greater Tel Aviv and Jerusalem. The company provides Rental Apartment Management, Landlord Safe for guaranteed rent (subject to the terms of service), Property Management for Owners Abroad, Luxury Property Management, and management of Offices & Commercial Properties. " +
  rentRecord;
