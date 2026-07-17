import SectionHeading from "./SectionHeading";

export default function AddonsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading eyebrow="שדרוגים לאירוע" title="רוצה עוד? יש לנו." />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-12">
          <div className="bg-white rounded-[18px] px-8 py-8 shadow-[0_14px_34px_rgba(61,16,25,0.1)] border-t-[5px] border-gold-bright">
            <h3 className="text-[22px] text-henna-deep font-bold mb-2">
              👗 תלבושות לאורחים
            </h3>
            <div className="text-3xl font-bold text-henna my-2.5 font-[family-name:var(--font-frank)]">
              1,000 ₪
            </div>
            <p className="font-light text-[15.5px] text-henna/75">
              עד 20 תלבושות מרוקאיות במגוון מידות — צבע, אותנטיות ותמונות
              מרהיבות לכל האורחים.
            </p>
            <span className="inline-block mt-2.5 text-[13.5px] font-bold text-gold-bright border border-gold-bright rounded-full px-3.5 py-0.5">
              תלבושות לחתן ולכלה — במתנה 🎁
            </span>
          </div>

          <div className="bg-white rounded-[18px] px-8 py-8 shadow-[0_14px_34px_rgba(61,16,25,0.1)] border-t-[5px] border-gold-bright">
            <h3 className="text-[22px] text-henna-deep font-bold mb-2">
              ✨ עיצוב וסידור שולחן
            </h3>
            <div className="text-3xl font-bold text-henna my-2.5 font-[family-name:var(--font-frank)]">
              1,250 ₪
            </div>
            <p className="font-light text-[15.5px] text-henna/75">
              עיצוב וסידור שולחן מלא ל-25 אורחים — כל פרט על השולחן משתלב
              בתפאורה ובאווירה המרוקאית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
