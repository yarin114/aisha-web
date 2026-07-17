import type { Metadata } from "next";
import { Heebo, Playfair_Display, Frank_Ruhl_Libre } from "next/font/google";
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

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-frank-ruhl",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aisha Boutique Events | חינה והפרשת חלה יוקרתית",
    template: "%s | Aisha Boutique Events",
  },
  description:
    "הפקת חינה מרוקאית אותנטית ומלאת יוקרה — תפאורה שלמה, ליווי אישי, וראש שקט לאורך כל האירוע. חבילה מלאה במחיר אחד.",
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
    <html lang="he" dir="rtl" className={`${heebo.variable} ${playfair.variable} ${frankRuhl.variable}`}>
      <body className="font-[family-name:var(--font-heebo)] bg-cream text-charcoal antialiased">
        <ConsentProvider>
          <AccessibilityProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:bg-burgundy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:shadow-lg"
            >
              דלג לתוכן הראשי
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <FloatingWhatsApp />
            <AccessibilityMenu />
            <CookieConsentBanner />
          </AccessibilityProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
