import SectionHeading from "./SectionHeading";

const STACK_ITEMS = [
  {
    title: "קיר תאורה מרשים",
    text: "רקע יוקרתי וחגיגי שכל תמונה עליו נראית כמו הפקה",
  },
  {
    title: "במה מרכזית מעוצבת",
    text: "הלב של האירוע — המקום שבו הכול קורה",
  },
  {
    title: "ספה לחתן ולכלה",
    text: "מקום הכבוד שלכם, בעיצוב שמשתלב בתפאורה",
  },
  {
    title: "שטיחים מרוקאיים אותנטיים",
    text: "הפרט שנותן לכל החלל תחושה אמיתית של מרוקו",
  },
  {
    title: "לפידים דקורטיביים",
    text: "אווירה חמה ודרמטית שמרגישים אותה מהכניסה",
  },
  {
    title: "אקססוריז מוזהבים",
    text: "פרטי זהב בסגנון מרוקאי בכל פינה בתפאורה",
  },
  {
    title: "אפיריונים מפוארים",
    text: "לרגע ההרמה של החתן והכלה — השיא של הערב",
  },
  {
    title: "שולחן זהב לטקס החינה",
    text: "מוקד הטקס, מעוצב עד הפרט האחרון",
  },
  {
    title: "טאג'ינים מרוקאיים מסורתיים",
    text: "הנגיעה המסורתית שסוגרת את התמונה",
  },
];

export default function ValueStack() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          eyebrow="חבילת הבסיס"
          title="מה מקבלים? הכול."
          subtitle="לא סתם עמדה — תפאורה שלמה שהופכת את החינה שלך לחוויה מלאה, מהרגע הראשון ועד התמונה האחרונה."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-14 mt-12">
          {STACK_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 items-start py-5 border-b border-sand-deep"
            >
              <span
                className="shrink-0 w-3 h-3 mt-2.5 bg-gold-bright rotate-45"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[19px] font-bold text-henna-deep">
                  {item.title}
                </h3>
                <p className="text-[15.5px] font-light text-henna/75">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Escort banner */}
        <div className="mt-11 rounded-[18px] px-8 sm:px-10 py-9 flex flex-col sm:flex-row gap-5 items-center text-center sm:text-start bg-gradient-to-bl from-henna-deep to-henna text-white shadow-[0_20px_44px_rgba(61,16,25,0.25)]">
          <div>
            <div className="text-[26px] font-bold text-gold-soft font-[family-name:var(--font-frank)]">
              וליווי אישי לאורך כל האירוע 🤍
            </div>
            <p className="font-light text-white/85 text-[17px] mt-1">
              את מגיעה לחינה בראש שקט ורגוע — אני דואגת לכל פרט, את רק נהנית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
