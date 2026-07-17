import Link from "next/link";
import { SITE } from "@/config/site";

export default function LandingFooter() {
  return (
    <footer className="bg-henna-deep text-white/50 text-center text-[13px] font-light py-5 px-6 border-t border-gold-bright/25">
      <p>
        AISHA · הפקת חינות ואירועי מסורת · © {new Date().getFullYear()}{" "}
        {SITE.name} · כל הזכויות שמורות
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <Link
          href="/gallery"
          className="hover:text-gold-soft transition-colors"
        >
          גלריה
        </Link>
        <Link href="/book" className="hover:text-gold-soft transition-colors">
          לקביעת ייעוץ
        </Link>
        <Link
          href="/accessibility"
          className="hover:text-gold-soft transition-colors"
        >
          הצהרת נגישות
        </Link>
      </div>
    </footer>
  );
}
