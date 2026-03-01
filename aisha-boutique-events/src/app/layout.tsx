import type { Metadata } from "next";
import { Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import FloatingWhatsApp from "@/components/global/FloatingWhatsApp";
import AccessibilityMenu from "@/components/global/AccessibilityMenu";
import CookieConsentBanner from "@/components/global/CookieConsentBanner";
import { ConsentProvider } from "@/context/ConsentContext";
import { AccessibilityProvider } from "@/context/AccessibilityContext";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aisha Boutique Events | חינה והפרשת חלה יוקרתית",
    template: "%s | Aisha Boutique Events",
  },
  description:
    "חינה יוקרתית, צבעונית ושמחה – בלי שתצטרכו לדאוג לכלום. אירועי חינה והפרשת חלה מקצועיים עם עיצוב מושלם.",
  keywords: ["חינה", "הפרשת חלה", "אירוע חינה", "עיצוב אירועים", "Aisha Boutique Events"],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "Aisha Boutique Events",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-heebo)] bg-cream text-charcoal antialiased">
        <ConsentProvider>
          <AccessibilityProvider>
            <Navbar />
            <main>{children}</main>
            <FloatingWhatsApp />
            <AccessibilityMenu />
            <CookieConsentBanner />
          </AccessibilityProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
