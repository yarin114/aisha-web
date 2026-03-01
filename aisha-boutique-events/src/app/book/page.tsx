import type { Metadata } from "next";
import CalendarEmbed from "@/components/features/booking/CalendarEmbed";
import FooterFormBlock from "@/components/sections/FooterFormBlock";
import { WA_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "קביעת ייעוץ",
  description: "קבעו שיחת ייעוץ חינם – נשוחח על האירוע שלכם ונבנה יחד את הקונספט המושלם",
};

// TODO: Replace this URL with your actual Google Calendar appointment scheduling link
// How to get it: Google Calendar → Settings → "Appointment schedules" → Share → Copy embed URL
const CALENDAR_EMBED_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL ??
  "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID?gv=true";

export default function BookPage() {
  return (
    <>
      <div className="min-h-screen bg-cream pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-3">
              קביעת ייעוץ חינם
            </h1>
            <p className="text-charcoal-light text-lg max-w-lg mx-auto mb-4">
              בחרו את הזמן הנוח לכם ונשוחח על האירוע שלכם, ניתן רעיונות ונבנה יחד קונספט מושלם
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brown hover:text-burgundy transition-colors underline underline-offset-4"
            >
              מעדיפים ליצור קשר ישיר ב-WhatsApp? לחצו כאן
            </a>
          </div>

          {/* Calendar embed */}
          <CalendarEmbed src={CALENDAR_EMBED_URL} />

          <p className="text-center text-charcoal-light/60 text-xs mt-4">
            לאחר הקביעה תקבלו אישור במייל ותזכורת ב-WhatsApp
          </p>
        </div>
      </div>

      <FooterFormBlock />
    </>
  );
}
