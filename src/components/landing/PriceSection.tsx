import SectionHeading from "./SectionHeading";

export default function PriceSection() {
  return (
    <section className="py-20 px-6 bg-henna-deep text-white text-center">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <SectionHeading
          eyebrow="ההשקעה"
          title="כל החבילה, מחיר אחד"
          dark
        />
        <div className="text-[clamp(64px,10vw,120px)] font-black text-gold-soft leading-none mt-6 mb-2 font-[family-name:var(--font-frank)]">
          6,000 ₪
        </div>
        <p className="text-[17px] font-light text-white/80">
          כולל מע&quot;מ, שינוע והרכבה — בלי הפתעות ובלי תוספות נסתרות
        </p>

        {/* Limited promo */}
        <div className="mt-13 max-w-[680px] w-full rounded-[18px] px-8 sm:px-9 py-8 bg-gold-bright/10 border-[1.5px] border-gold-bright">
          <span className="inline-block bg-gold-bright text-henna-deep font-bold text-sm tracking-[0.12em] px-4.5 py-1.5 rounded-full mb-4">
            מבצע מוגבל — 10 לקוחות בלבד
          </span>
          <h3 className="text-[26px] text-gold-soft mb-2.5 font-[family-name:var(--font-frank)] font-bold">
            20% הנחה על כל תוספת לחבילה
          </h3>
          <p className="font-light text-[17px] text-white/85">
            לסוגרות אירוע באוגוסט, ספטמבר או אוקטובר — כל תוספת שתבחרי
            (תלבושות לאורחים, שולחנות נחש ועוד) ב-20% הנחה.
          </p>
        </div>
      </div>
    </section>
  );
}
