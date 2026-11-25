/**
 * Articles in English. Mirrors content/articles.ts: same slugs, same order, same facts,
 * same sources. See that file for the format.
 */

import { published, type Article } from "./articles";

const allArticles: Article[] = [
  {
    "slug": "relocation-apartment-israel",
    "date": "2026-11-17",
    "updated": "",
    "meta": {
      "title": "Relocating: 5 Things for Your Israeli Home | Landlord Services",
      "description": "Moving abroad? What happens to tax on your Israeli rent, your residency, arnona on an empty apartment, insurance and repairs, and how to manage it from afar.",
      "h1": "Relocating Abroad: 5 Things to Sort Out for Your Home and Property in Israel Before You Go",
      "intro": "Before you relocate, there are five things to settle about your apartment in Israel: the tax on the rent, how the apartment affects your residency, whether to rent it out or leave it empty, insurance, and who will look after the apartment and the tenants. You still have to report and pay tax on rent from an Israeli apartment while you live abroad, and most of the rest stays your responsibility too. Below we explain each point plainly, including what to check with your accountant before you fly."
    },
    "image": {
      "src": "/images/articles/relocation-apartment-israel.jpg",
      "alt": "Illustration: a suitcase by the front door and house keys on a wooden stool in a bright living room, ready for a move abroad.",
      "credit": "",
      "creditUrl": ""
    },
    "services": [
      "abroad",
      "rental-management",
      "landlord-safe"
    ],
    "sections": [
      {
        "heading": "1. Tax on your rent moves with you",
        "paragraphs": [
          "Moving abroad doesn't close the tax file on your apartment. You keep reporting and paying tax in Israel on the rent.",
          "Below a set ceiling, rent is tax-free and you don't have to report it. Above it, you pick one of two routes: a flat 10% of the full rent, or tax at your marginal rate on what's left after expenses.",
          "The 10% route is the easiest on paperwork. Here's how it works:"
        ],
        "bullets": [
          "It's only for a home in Israel that a private individual rents out as a residence, where the rent isn't business income.",
          "You can't deduct expenses or depreciation, and there's no offset, credit or exemption on that income.",
          "It's due within 30 days after the end of the tax year in which you got the rent. Paying late adds interest and linkage differences."
        ],
        "after": [
          "Which route suits you, and whether it's open to you as a foreign resident, is a question for your accountant.",
          "Also worth watching: as of November 3, 2026, the Israel Tax Authority wants to tax rent from the first shekel and set up a registry of rented apartments in the upcoming Arrangements Law. For now it's only a proposal, and Globes reports there's no deal on it yet."
        ]
      },
      {
        "heading": "2. Your apartment is part of the residency question",
        "paragraphs": [
          "Israeli tax residency follows your \"center of life.\" There are also two day-count rules: you're presumed a resident if you spend 183 days in Israel in a tax year, or 30 days in the year and 425 days over that year and the two before it. Both can be challenged, and the center-of-life test overrides them.",
          "The Tax Authority and National Insurance (Bituach Leumi) decide your residency separately, each in its own process. Cut it with National Insurance and you stop paying contributions, but you also lose the coverage.",
          "This is where the apartment comes in. National Insurance looks at what you did with the home you left behind.",
          "For tax, if two countries both treat you as a resident, the tax treaty between them breaks the tie, starting with where your permanent home is. In a published example of someone who moved to Lisbon, keeping the apartment unrented for visits left that question open. A long lease would have settled it in Portugal's favor.",
          "Decide about the apartment with your accountant, and ask about exit tax in the same meeting. When you stop being an Israeli resident, you're treated as if you sold all your capital assets at market value the day before you cut residency. You can instead put off paying until you actually sell."
        ],
        "bullets": []
      },
      {
        "heading": "3. An empty apartment isn't always cheaper",
        "paragraphs": [
          "Thinking of leaving the apartment empty to save on arnona (municipal property tax)? The discount has limits. On paper, the regulations allow up to 100% off for the first 6 months, up to 66.66% for months 7 to 12, and up to 50% for months 13 to 36. The municipality has the final say.",
          "In practice, Tel Aviv gives at most half a year at 100%, once per ownership period. The clock resets only when the property changes owners, not with each new tenant.",
          "To the municipality, \"empty\" means no people and no belongings, for at least 30 days in a row each time. In Tel Aviv, the discount starts from the day you give written notice and isn't backdated.",
          "Then there's the furniture trap. In a case about an apartment in Herzliya, the Tel Aviv District Court ruled that keeping furniture in the apartment counts as using it. The owner was denied the discount and ordered to pay NIS 10,000 in costs. Leave the living room furnished when you fly out, and the apartment isn't empty."
        ],
        "bullets": []
      },
      {
        "heading": "4. Insurance doesn't pass to the tenants",
        "paragraphs": [
          "Once the apartment is rented, the tenant insures only their own contents. Building insurance, which covers the walls, floor, pipes, electricity and fixtures, stays with you. If there's a mortgage, the bank requires you to buy building insurance and assign it to the bank.",
          "An empty apartment needs more care: if it stands empty for a long time, it can fall outside cover, depending on the policy terms. If that's your plan, check your policy with your insurer.",
          "Check the third-party section too. It covers your liability to others for something that starts in your apartment, like water damage to the neighbor below. A burst pipe while you're abroad is exactly when you'll want that cover."
        ],
        "bullets": []
      },
      {
        "heading": "5. Lease and repairs from afar: someone needs to be close by",
        "paragraphs": [
          "Israel's Fair Rental Law, a 2017 amendment to the Rental and Loan Law, covers most home leases: more than 3 months and up to 10 years, at up to NIS 20,000 a month. Some of your duties under it:"
        ],
        "bullets": [
          "A defect caused by reasonable use must be fixed within 30 days of being notified, or within 3 days if it makes the apartment unlivable.",
          "Return the tenant's guarantee within 60 days of getting the apartment back, with any interest or gain it earned.",
          "If you don't plan to continue the lease, you need to say so 90 days before it ends. The tenant needs to give notice 60 days before it ends.",
          "Guarantees are capped at one-third of the rent for the whole term or three months' rent, whichever is lower. On a one-year lease at NIS 6,000 a month, that's NIS 18,000 at most."
        ],
        "after": [
          "Three days to fix an unlivable apartment is tight even from the next town. From another time zone, you need someone on the ground who knows the tradespeople and can get there.",
          "Arnona, the building committee fee, electricity and water are costs that fall on the tenant, but they only move into the tenant's name if someone handles it. In our experience, most problems don't show up on day one. They build up quietly: a bill still in your name, a repair waiting for someone to call a plumber.",
          "And because the law caps guarantees, it's worth planning for a tenant who stops paying while you're abroad. That's what [Landlord Safe](/landlord-safe) is for, subject to the terms of service."
        ]
      },
      {
        "heading": "How Landlord Services helps apartment owners who relocate",
        "paragraphs": [
          "We've managed rental apartments in the Gush Dan area and Jerusalem since 2013, including for owners abroad. If you're relocating, three of our services work together:"
        ],
        "bullets": [
          "[Property Management for Owners Abroad](/services#abroad): we run the whole rental from afar, handle repairs and maintenance without you flying in, and keep you updated wherever you are. With a suitable power of attorney, we sign the lease on your behalf, and the rent goes straight into your account, not through us.",
          "[Rental Apartment Management](/services#rental-management): we find and screen tenants, checking their income and ability to pay, and handle the lease with legal support. We move arnona, water, electricity and gas into the tenants' names, with a report of meter readings and transfer confirmations. We also make periodic visits, coordinated with the tenants, and send you a report with photos.",
          "[Landlord Safe](/landlord-safe): if the tenant stops paying, you keep receiving rent, subject to the terms of service, and we handle legal eviction and debt collection."
        ],
        "after": [
          "Keeping the apartment for your own visits instead? We pay the regular bills (building committee, arnona, electricity), check the apartment and run its systems now and then, collect your mail and handle faults, so it's ready when you arrive.",
          "Leave the tax and residency questions to your accountant and the apartment to us. To talk it over before you fly, [contact us](/contact)."
        ]
      }
    ],
    "faq": [
      {
        "id": "relocation-apartment-israel-q1",
        "question": "Do I have to pay tax in Israel on rent while I live abroad?",
        "answer": "Yes. You keep reporting and paying tax on Israeli rent while you live abroad. Which route suits you is a question for your accountant."
      },
      {
        "id": "relocation-apartment-israel-q2",
        "question": "Can I get an arnona discount for an empty apartment in Tel Aviv?",
        "answer": "At most half a year at 100%, once per ownership period. The apartment must be empty of people and belongings for at least 30 days in a row, and a court has ruled that furniture counts as using it. The discount starts from your written notice, not retroactively."
      },
      {
        "id": "relocation-apartment-israel-q3",
        "question": "Who is responsible for insuring the apartment when it's rented out?",
        "answer": "The tenant insures their own contents, and building cover stays with you as the owner."
      },
      {
        "id": "relocation-apartment-israel-q4",
        "question": "Can you manage my apartment in Israel without me coming over?",
        "answer": "Yes. With a suitable power of attorney, we manage and maintain the apartment and sign the lease for you, and the rent goes directly into your account. See [Property Management for Owners Abroad](/services#abroad)."
      }
    ],
    "sources": [
      {
        "title": "רילוקיישן: איך נשמרות הזכויות מול המדינה ואיזה הוצאות מוכרות למס?",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/BizTech/news/article/20036074",
        "date": "2026-07-16"
      },
      {
        "title": "Thinking about leaving Israel? Everything you need to know about relocation and finances",
        "publisher": "The Jerusalem Post",
        "url": "https://www.jpost.com/business-and-innovation/banking-and-finance/article-821806",
        "date": "2024-09-26"
      },
      {
        "title": "מנהל רשות המסים: \"לבטל את הפטור על שכירות מנדל\"ן\"",
        "publisher": "Globes",
        "url": "https://www.globes.co.il/news/article.aspx?did=1001494266",
        "date": "2024-11-18"
      },
      {
        "title": "Your Taxes: Good news for Israelis with foreign rental income",
        "publisher": "The Jerusalem Post",
        "url": "https://www.jpost.com/business-and-innovation/banking-and-finance/article-890595",
        "date": "2026-03-20"
      },
      {
        "title": "הנדון: תיקון סעיף 122 לפקודת מס הכנסה",
        "publisher": "רשות המסים בישראל",
        "url": "https://www.gov.il/BlobFolder/dynamiccollectorresultitem/represent-info-281223/he/IncomeTax_IncomeTaxRepresentInfo_represent-info-281223.pdf",
        "date": "2024-01-10"
      },
      {
        "title": "מס על השכרת דירה: איזה מסלול משתלם לכם?",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/additives/393/rental-income-tax.html",
        "date": ""
      },
      {
        "title": "הצעד שיעלה ביוקר לבעלי הדירות וצ'ופר הניחומים שמגבשים באוצר",
        "publisher": "Globes",
        "url": "https://www.globes.co.il/news/article.aspx?did=1001561794",
        "date": "2026-11-03"
      },
      {
        "title": "היום שלפני העזיבה: כך נמדד מס היציאה על מי שמנתק תושבות",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/guides/news/article/20038377",
        "date": "2026-08-10"
      },
      {
        "title": "Your Taxes: Mulling a return to Israel? Here's what you need to know",
        "publisher": "The Jerusalem Post",
        "url": "https://www.jpost.com/business-and-innovation/banking-and-finance/article-907543",
        "date": "2026-09-04"
      },
      {
        "title": "ניתוק תושבות: למה פקיד השומה וביטוח לאומי מגיעים לשתי תשובות שונות",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/financialconsumerism/news/article/20042731",
        "date": "2026-09-22"
      },
      {
        "title": "ארנונה על דירה ריקה: התקנות מתירות 3 שנות הנחה, תל אביב וחיפה נותנות חצי שנה",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/realestates/news/article/20043459",
        "date": "2026-09-28"
      },
      {
        "title": "השארתם כיסא בדירה ריקה? אתם עלולים לאבד את הפטור מארנונה",
        "publisher": "Ynet",
        "url": "https://www.ynet.co.il/economy/article/hypv64wa0",
        "date": ""
      },
      {
        "title": "ביטוח דירה: מבנה מול תכולה, וטבלת ביטוח חסר - כמה פיצוי מקבלים בכל סכום ביטוח",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/Insurance/news/article/20038730",
        "date": "2026-08-13"
      },
      {
        "title": "שריפה, הצפה, טיל או שכן שנפגע: איזה ביטוח צריך?",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/guides/news/article/20039037",
        "date": "2026-08-17"
      },
      {
        "title": "שכירות בישראל 2026: כל מה ששוכר ומשכיר צריכים לדעת",
        "publisher": "Bizportal",
        "url": "https://www.bizportal.co.il/guides/news/article/20039018",
        "date": "2026-08-17"
      },
      {
        "title": "שכר הדירה לא יוגבל, הערבויות כן: אושר חוק שכירות הוגנת",
        "publisher": "TheMarker",
        "url": "https://www.themarker.com/realestate/2017-07-17/ty-article/0000017f-e0d0-d75c-a7ff-fcdde59f0000",
        "date": "2017-07-17"
      },
      {
        "title": "חוק שכירות הוגנת: השוכר יוכל להוריד את עלות התיקונים משכר הדירה",
        "publisher": "Ynet",
        "url": "https://www.ynet.co.il/articles/0,7340,L-4984064,00.html",
        "date": "2017-07-03"
      }
    ]
  },
];

export const articles = published(allArticles);
