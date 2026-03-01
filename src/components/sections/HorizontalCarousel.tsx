"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { clsx } from "clsx";

const CAROUSEL_IMAGES = [
  { src: "/p1.jpeg", alt: "חינה יוקרתית" },
  { src: "/p2.jpeg", alt: "עיצוב אירוע" },
  { src: "/p3.jpeg", alt: "שולחן ערוך" },
  { src: "/p4.jpeg", alt: "הפרשת חלה" },
  { src: "/p1.jpeg", alt: "אווירה מיוחדת" },
  { src: "/p2.jpeg", alt: "רגעים מיוחדים" },
];

export default function HorizontalCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    direction: "rtl",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-10">
          הרגעים שלנו
        </h2>

        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
          <div className="flex gap-4">
            {CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-72 sm:w-80 h-64 sm:h-72 relative rounded-2xl overflow-hidden shadow-card"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="320px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="p-2 rounded-full border border-khaki hover:bg-burgundy hover:text-white hover:border-burgundy disabled:opacity-30 transition-colors"
            aria-label="הקודם"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {CAROUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={clsx(
                  "rounded-full transition-all",
                  i === selectedIndex
                    ? "w-5 h-2 bg-burgundy"
                    : "w-2 h-2 bg-khaki hover:bg-brown"
                )}
                aria-label={`תמונה ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="p-2 rounded-full border border-khaki hover:bg-burgundy hover:text-white hover:border-burgundy disabled:opacity-30 transition-colors"
            aria-label="הבא"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
