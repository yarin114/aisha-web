export const SITE = {
  name: "Aisha Boutique Events",
  nameHebrew: "אישה בוטיק אבנטס",
  tagline: "חינה יוקרתית, צבעונית ושמחה",
  whatsappUrl: "https://wa.me/message/AW7JPMS5JSU5M1",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aishaboutiqueevents.co.il",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
} as const;

export const WA_URL = SITE.whatsappUrl;
