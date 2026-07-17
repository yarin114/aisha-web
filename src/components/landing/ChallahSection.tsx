import Image from "next/image";
import SectionHeading from "./SectionHeading";

const HALLA_IMAGES = [
  "/halla/halla-1.jpeg",
  "/halla/halla-2.jpeg",
  "/halla/halla-3.jpeg",
  "/halla/halla-4.jpeg",
  "/halla/halla-5.jpeg",
  "/halla/halla-6.jpeg",
];

const PACK_ITEMS = [
  "עמדה מעוצבת עם מדבקה בעיצוב אישי",
  "קיר ושולחן לקיום הטקס",
  "מעמדים לבנים לנרות ומתנות",
  "סט מלח, שמרים, סוכר, שמן ומים",
];

export default function ChallahSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sand to-sand-deep">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          eyebrow="שירות נוסף"
          title="הפרשת חלה — רגע של משמעות"
          subtitle="עמדה מעוצבת ומכובדת לטקס הפרשת חלה — לרגעים שרוצים למלא בכוונה, מסורת וברכה."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-12">
          {HALLA_IMAGES.map((src, i) => (
            <div
              key={src}
              className="arch-frame aspect-square !rounded-[18px]"
            >
              <Image
                src={src}
                alt={`עמדת הפרשת חלה — Aisha Boutique Events ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 200px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Package + price */}
        <div className="mt-11 bg-white rounded-[18px] px-8 sm:px-10 py-9 shadow-[0_14px_34px_rgba(61,16,25,0.1)] flex flex-wrap gap-7 justify-between items-center">
          <ul>
            {PACK_ITEMS.map((item) => (
              <li
                key={item}
                className="py-1 font-light text-[16.5px] text-henna/80 before:content-['✦'] before:text-gold-bright before:ms-0 before:me-2.5 before:text-[13px]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="text-[44px] font-black text-henna leading-[1.1] font-[family-name:var(--font-frank)]">
            1,300 ₪
            <small className="block font-[family-name:var(--font-hebrew)] text-sm font-light text-henna/70 mt-1.5">
              + 200 ₪ שינוע, הובלה והרכבה
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
