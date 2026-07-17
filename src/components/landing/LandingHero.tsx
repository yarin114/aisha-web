"use client";

import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <header className="relative min-h-[88vh] bg-henna-deep text-white flex flex-col justify-center items-center text-center px-6 py-16 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/henna/henna-v1.mp4"
        poster="/henna/henna-1.jpeg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,15,20,.7) 0%, rgba(42,15,20,.55) 45%, rgba(42,15,20,.85) 100%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-[15px] tracking-[0.42em] text-gold-soft font-semibold mb-6"
      >
        A I S H A
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-[clamp(40px,7vw,84px)] font-black leading-[1.15] max-w-[820px] font-[family-name:var(--font-frank)]"
      >
        החינה שלך.
        <br />
        <em className="not-italic text-gold-soft">הרגע שכולם יזכרו.</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-7 text-[clamp(17px,2.2vw,22px)] font-light max-w-[560px] text-white/85 leading-relaxed"
      >
        הפקת חינה מרוקאית אותנטית ומלאת יוקרה — תפאורה שלמה, ליווי אישי,
        וראש שקט לאורך כל האירוע.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 z-10 text-[13px] tracking-[0.2em] text-gold-soft/80"
        aria-hidden="true"
      >
        גללו למטה ↓
      </motion.div>
    </header>
  );
}
