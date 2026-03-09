import type { Metadata } from "next";
import BookingForm from "@/components/features/booking/BookingForm";
import FooterFormBlock from "@/components/sections/FooterFormBlock";

export const metadata: Metadata = {
  title: "קביעת ייעוץ",
  description: "קבעו שיחת ייעוץ חינם – נשוחח על האירוע שלכם ונבנה יחד את הקונספט המושלם",
};

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
            <p className="text-charcoal/70 text-lg max-w-lg mx-auto">
              מלאו את הפרטים ונחזור אליכם לתיאום מועד הייעוץ
            </p>
          </div>

          <BookingForm />
        </div>
      </div>

      <FooterFormBlock />
    </>
  );
}
