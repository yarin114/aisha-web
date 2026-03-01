import Image from "next/image";

const TRIO_IMAGES = [
  { src: "/p5.jpeg", alt: "טקס חינה מרגש" },
  { src: "/p6.jpeg", alt: "רגעים מיוחדים" },
  { src: "/p2.jpeg", alt: "עיצוב אירוע יוקרתי" },
  { src: "/p3.jpeg", alt: "הפרשת חלה בסטייל" },
];

export default function ImageTrio() {
  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {TRIO_IMAGES.map((img, i) => (
          <div key={i} className="arch-top overflow-hidden aspect-[3/4] relative shadow-card">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
