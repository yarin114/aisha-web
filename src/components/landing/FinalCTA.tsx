import { WA_URL } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 text-center text-white bg-gradient-to-bl from-henna to-henna-deep">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[clamp(30px,5vw,54px)] font-black leading-[1.25] font-[family-name:var(--font-frank)]">
          נשריין לך את <em className="not-italic text-gold-soft">התאריך?</em>
        </h2>
        <p className="mt-4.5 mx-auto max-w-[520px] font-light text-lg text-white/85">
          התאריכים לחודשים הקרובים מתמלאים — ומבצע ה-20% שמור ל-10 הלקוחות
          הראשונות בלבד.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-9 bg-gold-bright text-henna-deep font-bold text-[19px] px-13 py-4 rounded-full shadow-[0_14px_34px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1"
        >
          💬 דברו איתי בוואטסאפ
        </a>
      </div>
    </section>
  );
}
