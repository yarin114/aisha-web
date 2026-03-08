import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "מידע על נגישות האתר, תכונות המיושמות ופרטי יצירת קשר עם רכז הנגישות",
};

export default function AccessibilityPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20 text-charcoal">
        <h1 className="text-3xl sm:text-4xl font-bold text-burgundy mb-10">
          הצהרת נגישות
        </h1>

        <section aria-labelledby="compliance-heading" className="mb-10">
          <h2 id="compliance-heading" className="text-xl font-bold mb-4 border-b border-khaki/40 pb-2">
            רמת תאימות
          </h2>
          <p className="leading-relaxed mb-4">
            אתר זה, <strong>Aisha Boutique Events</strong>, שואף לעמוד בדרישות
            תקן נגישות ישראלי 5568 ברמת AA, המבוסס על הנחיות
            WCAG 2.1 Level AA.
          </p>
          <p className="leading-relaxed">
            ביצענו בדיקות נגישות מקיפות ואנו ממשיכים לשפר את נגישות האתר
            באופן שוטף. האתר נבדק על ידי כלי בדיקה אוטומטיים ועל ידי
            בדיקה ידנית עם קורא מסך.
          </p>
        </section>

        <section aria-labelledby="features-heading" className="mb-10">
          <h2 id="features-heading" className="text-xl font-bold mb-4 border-b border-khaki/40 pb-2">
            תכונות נגישות המיושמות באתר
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>ניווט מלא במקלדת בכל רכיבי האתר ללא שימוש בעכבר</li>
            <li>קישור &quot;דלג לתוכן הראשי&quot; בראש כל עמוד</li>
            <li>תמיכה מלאה בקוראי מסך עם תגיות ARIA מלאות</li>
            <li>תפריט נגישות לשינוי גודל טקסט, ניגודיות, הפחתת אנימציות וסמן גדול</li>
            <li>עמידה ביחסי ניגודיות WCAG AA לכל הטקסטים</li>
            <li>מבנה סמנטי עם כותרות היררכיות ועוגנים לניווט</li>
            <li>תמיכה בהגדלת טקסט עד 200% ללא שבירת עיצוב</li>
            <li>הימנעות מבהוב ואנימציות אוטומטיות בהתאם להעדפת המשתמש</li>
            <li>מלכודת מיקוד (focus trap) בחלוניות קופצות לשמירת הקשר המשתמש</li>
            <li>הודעות חיות (aria-live) לעדכון קוראי מסך על שינויים דינמיים</li>
          </ul>
        </section>

        <section aria-labelledby="limitations-heading" className="mb-10">
          <h2 id="limitations-heading" className="text-xl font-bold mb-4 border-b border-khaki/40 pb-2">
            מגבלות ידועות
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              רכיב קביעת התור (Google Calendar) נטען ב-iframe — נגישותו
              תלויה בתקן הנגישות של Google ואינה בשליטתנו המלאה.
            </li>
            <li>
              תוכן מוגש על ידי צד שלישי (WhatsApp) — ממשק זה כפוף
              למדיניות הנגישות של WhatsApp.
            </li>
          </ul>
        </section>

        <section aria-labelledby="contact-heading" className="mb-10">
          <h2 id="contact-heading" className="text-xl font-bold mb-4 border-b border-khaki/40 pb-2">
            פניות בנושא נגישות
          </h2>
          <p className="leading-relaxed mb-4">
            נתקלתם בבעיית נגישות או שיש לכם שאלה? אנחנו כאן לעזור.
          </p>
          <address className="not-italic leading-loose bg-white rounded-2xl p-5 border border-khaki/40">
            <p><strong>רכז הנגישות:</strong> Aisha Boutique Events</p>
            <p>
              <strong>דוא&quot;ל:</strong>{" "}
              <a
                href="mailto:accessibility@aishaboutiqueevents.co.il"
                className="text-burgundy underline underline-offset-2 hover:text-burgundy-dark"
              >
                accessibility@aishaboutiqueevents.co.il
              </a>
            </p>
            <p className="mt-2 text-sm text-charcoal-light">
              נשתדל להגיב לפניות נגישות תוך 5 ימי עסקים.
            </p>
          </address>
        </section>

        <section aria-labelledby="tech-heading" className="mb-10">
          <h2 id="tech-heading" className="text-xl font-bold mb-4 border-b border-khaki/40 pb-2">
            טכנולוגיות נגישות נתמכות
          </h2>
          <p className="leading-relaxed mb-3">
            האתר נבדק ותואם לשימוש עם:
          </p>
          <ul className="list-disc list-inside space-y-1 leading-relaxed">
            <li>NVDA + Chrome (Windows)</li>
            <li>JAWS + Chrome / Edge (Windows)</li>
            <li>VoiceOver + Safari (macOS / iOS)</li>
            <li>TalkBack + Chrome (Android)</li>
          </ul>
        </section>

        <section aria-labelledby="date-heading">
          <h2 id="date-heading" className="text-xl font-bold mb-4 border-b border-khaki/40 pb-2">
            תאריך עדכון אחרון
          </h2>
          <p>מרץ 2026</p>
        </section>

        <div className="mt-12">
          <Link
            href="/"
            className="text-burgundy underline underline-offset-2 hover:text-burgundy-dark text-sm"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}
