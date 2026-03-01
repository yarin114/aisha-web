import type { Metadata } from "next";
import MasonryGrid from "@/components/features/gallery/MasonryGrid";
import FooterFormBlock from "@/components/sections/FooterFormBlock";

export const metadata: Metadata = {
  title: "גלריית תמונות",
  description: "גלריה של אירועי חינה והפרשת חלה מרהיבים – תיעוד מקצועי של כל רגע קסום",
};

export default function GalleryPage() {
  return (
    <>
      <div className="min-h-screen bg-cream pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-3">גלריית תמונות</h1>
            <p className="text-charcoal-light text-lg max-w-md mx-auto">
              כל תמונה מספרת סיפור – הצצה לאירועים שיצרנו בלב ובנשמה
            </p>
          </div>

          <MasonryGrid />
        </div>
      </div>

      <FooterFormBlock />
    </>
  );
}
