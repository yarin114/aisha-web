"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxServices() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden h-[520px] sm:h-[600px] flex items-center justify-center">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
        aria-hidden="true"
      >
        {/* Replace with your real event setup image: public/images/parallax-bg.jpg */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/p4.jpeg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>

      {/* Overlay text card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 glass-card rounded-3xl p-8 sm:p-10 max-w-xl mx-4 text-center shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-burgundy mb-4">
          הפרשת חלה עם אווירה ,סטייל ועיצוב מדוייק
        </h2>
        <p className="text-brown leading-relaxed text-lg">
          אירוע מרגש מתחיל בפרטים הקטנים
        </p>
      </motion.div>
    </section>
  );
}
