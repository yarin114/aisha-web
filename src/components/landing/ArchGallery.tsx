import Image from "next/image";
import SectionHeading from "./SectionHeading";

const HENNA_IMAGES = [
  "/henna/henna-1.jpeg",
  "/henna/henna-2.jpeg",
  "/henna/henna-3.jpeg",
  "/henna/henna-4.jpeg",
  "/henna/henna-5.jpeg",
];

export default function ArchGallery() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          eyebrow="מהאירועים שלנו"
          title="ככה זה נראה אצלנו"
          subtitle="כל פריט בתפאורה נבחר בקפידה — מהשטיחים המרוקאיים ועד קיר התאורה — כדי ליצור רקע שכל תמונה בו יוצאת מושלמת."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mt-12">
          {HENNA_IMAGES.map((src, i) => (
            <div key={src} className="arch-frame aspect-[3/4.1]">
              <Image
                src={src}
                alt={`עיצוב חינה — Aisha Boutique Events ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
