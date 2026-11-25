/**
 * Articles (/articles and /articles/<slug>), in Hebrew. The English versions are in
 * content/articles.en.ts: same slugs, same order, same facts. Newest article first.
 *
 * Written by the weekly content pipeline (.claude/skills/weekly-content) and published only
 * after the owner approves it. Every fact must come from one of the article's `sources`.
 *
 * Inside paragraphs and bullets, [text](/path) links to one of our pages (it gets the /en
 * prefix on English pages) and [text](https://…) links to an outside site.
 */

import type { FaqItem, PageMeta, Photo } from "./site";

export type ArticleSection = {
  heading: string; // an H2
  paragraphs: string[];
  bullets: string[]; // shown after the paragraphs; [] = none
  after?: string[]; // paragraphs shown after the bullets; omit or [] = none
};

export type ArticleSource = {
  title: string; // the page's own title
  publisher: string; // e.g. "רשות המסים", "גלובס"
  url: string;
  date: string; // the source's publication date, "2026-10-20"; "" if the page has none
};

export type Article = {
  slug: string; // URL: /articles/<slug>, the same in both languages
  date: string; // publication date, "2026-11-16"
  updated: string; // last real update, or ""
  meta: PageMeta; // title + description for search; h1; intro = the opening paragraph
  image: Photo; // src "" = no image. Illustrative images say so in `alt` and have no credit.
  services: string[]; // ids from `services` in site.ts; shown as hashtags linking to /services#<id>
  sections: ArticleSection[];
  faq: FaqItem[]; // [] = no FAQ section
  sources: ArticleSource[];
  // Who wrote or reviewed it, shown under the title and in the JSON-LD. Omit or "" = the company
  author?: string;
  // true = a draft: left out of the build (routes, sitemap, llms.txt, lists, links) until the owner
  // approves it. Preview drafts locally with `SHOW_DRAFTS=1 npm run dev`.
  draft?: boolean;
};

/** Published articles only, unless SHOW_DRAFTS=1 (local preview). Used by both languages. */
export function published(list: Article[]): Article[] {
  return list.filter((a) => !a.draft || process.env.SHOW_DRAFTS === "1");
}

const allArticles: Article[] = [
  {
    "slug": "relocation-apartment-israel",
    "date": "2026-11-17",
    "updated": "",
    "meta": {
      "title": "רילוקיישן: 5 דברים לסגור לגבי הדירה בישראל | לנדלורד סרויסס",
      "description": "עוברים לחו\"ל? מה קורה עם המס על שכר הדירה, התושבות, הארנונה על דירה ריקה, הביטוח והתחזוקה מרחוק, ואיך מנהלים את הדירה בישראל בלי לטוס בחזרה לכל תקלה.",
      "h1": "רילוקיישן: 5 דברים שחשוב לסגור לגבי הדירה והנכסים בישראל לפני שטסים",
      "intro": "לפני שטסים לרילוקיישן כדאי לסגור חמישה דברים לגבי הדירה בישראל: המס על שכר הדירה, ההשפעה של הדירה על התושבות, ההחלטה אם להשכיר אותה או להשאיר אותה ריקה, הביטוח, ומי יטפל בדירה ובדיירים. חובת הדיווח והתשלום על הכנסה משכר דירה בישראל נמשכת גם כשאתם גרים בחו\"ל, ורוב שאר הדברים נשארים באחריותכם גם מרחוק. כאן נסביר כל נקודה בפשטות, כולל מה כדאי לבדוק עם רואה החשבון לפני הטיסה."
    },
    "image": {
      "src": "/images/articles/relocation-apartment-israel.jpg",
      "alt": "איור להמחשה: מזוודה ליד דלת הכניסה ומפתחות על שרפרף עץ בסלון מואר של דירה, לפני נסיעה לחו\"ל.",
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
        "heading": "1. המס על שכר הדירה טס איתכם",
        "paragraphs": [
          "המעבר לחו\"ל לא סוגר את תיק המס על הדירה. אתם ממשיכים לדווח ולשלם מס בישראל על שכר הדירה.",
          "מתחת לתקרה מסוימת, שכר הדירה פטור ממס ואין צורך לדווח עליו. מעל התקרה בוחרים באחת משתי דרכים: 10% קבועים מכל שכר הדירה (ברוטו), או מס לפי המדרגה השולית שלכם על מה שנשאר אחרי הוצאות.",
          "המסלול של 10% הוא הפשוט ביותר מבחינת ניירת. ככה הוא עובד:"
        ],
        "bullets": [
          "הוא מיועד רק לדירה בישראל שאדם פרטי משכיר למגורים, כששכר הדירה אינו הכנסה עסקית.",
          "אי אפשר לנכות הוצאות או פחת, ואין קיזוז, זיכוי או פטור על ההכנסה הזו.",
          "משלמים תוך 30 יום מסוף שנת המס שבה קיבלתם את שכר הדירה. על איחור מתווספים ריבית והפרשי הצמדה."
        ],
        "after": [
          "איזה מסלול מתאים לכם, והאם הוא פתוח בפניכם כתושבי חוץ, זו שאלה לרואה החשבון.",
          "ועוד משהו שכדאי לעקוב אחריו: נכון ל-3 בנובמבר 2026, רשות המסים רוצה לחייב במס את שכר הדירה מהשקל הראשון ולהקים מאגר של דירות מושכרות בחוק ההסדרים הקרוב. בינתיים זו רק הצעה, ולפי גלובס אין עדיין \"דיל\" סביבה."
        ]
      },
      {
        "heading": "2. הדירה היא חלק משאלת התושבות",
        "paragraphs": [
          "התושבות לצורכי מס נקבעת לפי \"מרכז החיים\" שלכם. יש גם שתי חזקות לפי מספר הימים בישראל. לפיהן מניחים שאתם תושבים אם שהיתם כאן 183 יום בשנת המס, או 30 יום בשנה ו-425 יום בשנה הזו ובשנתיים שלפניה. אפשר לסתור את שתיהן, ומבחן מרכז החיים גובר עליהן.",
          "מס הכנסה והביטוח הלאומי קובעים את התושבות כל אחד בנפרד, בהליך משלו. מי שמנתק תושבות בביטוח הלאומי מפסיק לשלם דמי ביטוח, אבל גם מאבד את הכיסוי.",
          "וכאן הדירה נכנסת לתמונה. בביטוח הלאומי בודקים גם מה עשיתם עם הבית שהשארתם בארץ.",
          "במס, כששתי מדינות רואות בכם תושבים, אמנת המס ביניהן מכריעה, והיא מתחילה בשאלה איפה בית הקבע שלכם. בדוגמה שפורסמה על מי שעבר לליסבון, דירה שלא הושכרה ושימשה לביקורים השאירה את השאלה הזו פתוחה. השכרה לטווח ארוך הייתה מכריעה אותה לטובת פורטוגל.",
          "לכן כדאי להחליט על הדירה יחד עם רואה החשבון, ובאותה פגישה לשאול גם על מס יציאה.",
          "מי שמפסיק להיות תושב ישראל נחשב כאילו מכר את כל נכסיו ההוניים לפי שווי השוק, ביום שלפני ניתוק התושבות. האפשרות האחרת היא לדחות את התשלום עד למכירה בפועל."
        ],
        "bullets": []
      },
      {
        "heading": "3. דירה ריקה היא לא תמיד חיסכון",
        "paragraphs": [
          "חושבים להשאיר את הדירה ריקה כדי לחסוך בארנונה? להנחה יש גבולות. על הנייר, התקנות מאפשרות הנחה של עד 100% בששת החודשים הראשונים, עד 66.66% בחודשים 7 עד 12 ועד 50% בחודשים 13 עד 36. ההחלטה בידי העירייה.",
          "בתל אביב, בפועל, מקבלים לכל היותר חצי שנה ב-100%, פעם אחת לכל תקופת בעלות. המניין מתחיל מחדש רק כשהנכס עובר לבעלים אחרים, ולא עם כל דייר חדש.",
          "\"ריק\" בעיני העירייה פירושו ריק מאדם ומחפץ, לפחות 30 ימים רצופים בכל פעם. בתל אביב ההנחה ניתנת מהיום שבו הגשתם הודעה בכתב, ולא לאחור.",
          "ויש גם את מלכודת הרהיטים. בית המשפט המחוזי בתל אביב פסק, בעניין דירה בהרצליה, שהשארת רהיטים בדירה נחשבת שימוש בנכס. ההנחה נדחתה, והבעלים חויב בהוצאות של 10,000 ₪. מי שטס ומשאיר את הסלון מרוהט, לא משאיר דירה ריקה."
        ],
        "bullets": []
      },
      {
        "heading": "4. הביטוח לא עובר לדיירים",
        "paragraphs": [
          "כשהדירה מושכרת, הדייר מבטח רק את התכולה שלו. ביטוח המבנה, שמכסה את הקירות, הרצפה, הצנרת, החשמל והמתקנים הקבועים, נשאר אצלכם. אם יש על הדירה משכנתא, הבנק מחייב לרכוש ביטוח מבנה ולשעבד אותו לטובתו.",
          "דירה ריקה דורשת יותר תשומת לב: אם היא עומדת ריקה תקופה ארוכה, היא עלולה לצאת מהכיסוי, לפי תנאי הפוליסה. אם זו התוכנית, בדקו את הפוליסה עם חברת הביטוח.",
          "בדקו גם את פרק צד שלישי. הוא מכסה את האחריות שלכם כלפי אחרים על אירוע שמתחיל בדירה, למשל נזק מים לשכן מלמטה. צינור שמתפוצץ כשאתם בחו\"ל הוא בדיוק הרגע שבו תרצו את הכיסוי הזה."
        ],
        "bullets": []
      },
      {
        "heading": "5. חוזה ותחזוקה מרחוק: מישהו צריך להיות קרוב לדירה",
        "paragraphs": [
          "חוק שכירות הוגנת, תיקון משנת 2017 לחוק השכירות והשאילה, חל על רוב חוזי השכירות למגורים: יותר מ-3 חודשים ועד 10 שנים, בשכר דירה של עד 20,000 ₪ בחודש. כמה מהחובות שלכם לפיו:"
        ],
        "bullets": [
          "פגם שנגרם משימוש סביר צריך לתקן תוך 30 יום מרגע שקיבלתם הודעה, ותוך 3 ימים אם הוא מונע מגורים בדירה.",
          "את הביטחונות מחזירים לדייר תוך 60 יום מהחזרת הדירה, יחד עם הריבית או הרווח שנצברו.",
          "אם אתם לא מתכוונים להמשיך את החוזה, צריך להודיע על כך 90 יום לפני שהוא מסתיים. השוכר צריך להודיע 60 יום לפני סוף החוזה.",
          "הביטחונות מוגבלים לסכום הנמוך מבין שליש משכר הדירה לכל התקופה לבין שלושה חודשי שכירות. בחוזה לשנה ב-6,000 ₪ בחודש, זה עד 18,000 ₪."
        ],
        "after": [
          "שלושה ימים לתיקון דירה שאי אפשר לגור בה הם זמן קצר גם מהעיר הסמוכה. מחו\"ל, עם הפרש שעות, צריך מישהו בשטח שמכיר בעלי מקצוע ויכול להגיע.",
          "ארנונה, ועד בית, חשמל ומים הם הוצאות שחלות על השוכר, אבל הם עוברים על שמו רק אם מישהו מטפל בזה. מהניסיון שלנו, רוב הבעיות לא מתחילות ביום הראשון. הן מצטברות בשקט: חשבון שלא הועבר על שם הדיירים, תקלה שמחכה שמישהו יזמין אינסטלטור.",
          "ובגלל שהביטחונות מוגבלים בחוק, כדאי לתכנן מראש מה יקרה אם הדייר יפסיק לשלם בזמן שאתם בחו\"ל. בשביל זה קיים [Landlord Safe](/landlord-safe), בכפוף לתנאי השירות."
        ]
      },
      {
        "heading": "איך לנדלורד סרויסס עוזרת לבעלי דירות שעוברים לחו\"ל",
        "paragraphs": [
          "לנדלורד סרויסס מנהלת דירות להשכרה בגוש דן ובירושלים מאז 2013, כולל דירות של בעלים שגרים בחו\"ל. למי שעובר לחו\"ל, שלושה מהשירותים שלנו עובדים יחד:"
        ],
        "bullets": [
          "[ניהול דירות לתושבי חוץ](/services#abroad): אנחנו מנהלים את כל ההשכרה מרחוק, מטפלים בתקלות ובתחזוקה בלי שתצטרכו לטוס, ומעדכנים אתכם בכל מקום שבו אתם נמצאים. עם ייפוי כוח מתאים אנחנו חותמים בשמכם על הסכם השכירות, ושכר הדירה נכנס ישירות לחשבון שלכם ולא עובר דרכנו.",
          "[ניהול דירות להשכרה](/services#rental-management): אנחנו מאתרים דיירים ומסננים מועמדים, כולל בדיקה של ההכנסה שלהם ושל היכולת לעמוד בשכר הדירה, ומטפלים בחוזה עם ליווי משפטי. אנחנו מעבירים את הארנונה, המים, החשמל והגז על שם הדיירים, עם דו\"ח שכולל קריאות מונים ואישורי העברה. במהלך השכירות אנחנו מגיעים לביקורים תקופתיים בתיאום עם הדיירים, ושולחים לכם דו\"ח עם צילומים.",
          "[Landlord Safe](/landlord-safe): אם הדייר מפסיק לשלם, אתם ממשיכים לקבל שכר דירה, בכפוף לתנאי השירות, ואנחנו מטפלים בפינוי בהליך משפטי ובגביית החוב."
        ],
        "after": [
          "משאירים את הדירה לביקורים שלכם במקום להשכיר? אנחנו משלמים את החשבונות השוטפים (ועד בית, ארנונה, חשמל), בודקים את הדירה ומפעילים את המערכות שלה מדי פעם, אוספים את הדואר ומטפלים בתקלות, כך שהיא מוכנה כשאתם מגיעים.",
          "את שאלות המס והתושבות השאירו לרואה החשבון, ואת הדירה לנו. לשיחה על הדירה שלכם לפני הטיסה, [צרו איתנו קשר](/contact)."
        ]
      }
    ],
    "faq": [
      {
        "id": "relocation-apartment-israel-q1",
        "question": "צריך לשלם מס בישראל על שכר דירה כשגרים בחו\"ל?",
        "answer": "כן. אתם ממשיכים לדווח ולשלם מס על שכר דירה בישראל גם כשאתם גרים בחו\"ל. איזה מסלול מתאים לכם, זו שאלה לרואה החשבון."
      },
      {
        "id": "relocation-apartment-israel-q2",
        "question": "אפשר לקבל הנחה בארנונה על דירה ריקה בתל אביב?",
        "answer": "לכל היותר חצי שנה ב-100%, פעם אחת לכל תקופת בעלות. הדירה צריכה להיות ריקה מאדם ומחפץ לפחות 30 ימים רצופים, ובית משפט כבר קבע שרהיטים בדירה נחשבים שימוש בנכס. ההנחה ניתנת מיום ההודעה בכתב, ולא לאחור."
      },
      {
        "id": "relocation-apartment-israel-q3",
        "question": "מי אחראי על ביטוח הדירה כשהיא מושכרת?",
        "answer": "הדייר מבטח את התכולה שלו, וביטוח המבנה נשאר אצלכם כבעלים."
      },
      {
        "id": "relocation-apartment-israel-q4",
        "question": "אפשר לנהל את הדירה בישראל בלי להגיע לארץ?",
        "answer": "כן. עם ייפוי כוח מתאים אנחנו מנהלים ומתחזקים את הדירה וחותמים בשמכם על הסכם השכירות, ושכר הדירה נכנס ישירות לחשבון שלכם. פרטים ב[ניהול דירות לתושבי חוץ](/services#abroad)."
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
