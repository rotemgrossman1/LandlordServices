import type { Metadata, Viewport } from "next";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MobileBar from "@/components/MobileBar";
import RevealObserver from "@/components/RevealObserver";
import WhatsAppFab from "@/components/WhatsAppFab";
import { getContent } from "@/content";
import { langMeta, langs } from "@/lib/i18n";
import { frank, heebo } from "@/lib/fonts";
import { organizationJsonLd } from "@/lib/seo";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { pages, site } = await getContent();
  return {
    metadataBase: new URL(site.url),
    title: pages.home.title,
    description: pages.home.description,
    applicationName: site.nameHe,
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#143f52",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang, labels, cta, site, nav, a11yMenu, cookieNotice, languageNames, link } = await getContent();
  return (
    <html lang={lang} dir={langMeta[lang].dir} className={`${heebo.variable} ${frank.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          {labels.skip}
        </a>
        <Header
          lang={lang}
          nav={nav.map((n) => ({ ...n, href: link(n.href) }))}
          home={link("/")}
          cta={{ label: cta.primary, href: link(cta.primaryHref) }}
          phone={site.phone}
          brand={site.nameHe}
          labels={{
            homeLink: labels.homeLink,
            menu: labels.menu,
            closeMenu: labels.closeMenu,
            mainNav: labels.mainNav,
            phone: labels.phone,
            language: labels.language,
          }}
          languageNames={languageNames}
        />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileBar />
        <WhatsAppFab phone={site.whatsapp} text={cta.whatsappText} label={cta.whatsappLong} />
        <AccessibilityMenu text={a11yMenu} statementHref={link("/accessibility")} />
        <CookieBanner text={cookieNotice} policyHref={link("/privacy")} />
        <RevealObserver />
        <JsonLd data={await organizationJsonLd()} />
      </body>
    </html>
  );
}
