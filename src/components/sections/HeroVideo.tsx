"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { WA_URL } from "@/config/site";

interface HeroVideoProps {
  onOpenQuestionnaire: () => void;
}

export default function HeroVideo({ onOpenQuestionnaire }: HeroVideoProps) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/p7.jpeg')" }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(44,44,44,0.55) 0%, rgba(44,44,44,0.3) 50%, rgba(44,44,44,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg font-[family-name:var(--font-playfair)]"
        >
          Aisha Boutique Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/95 text-xl sm:text-2xl font-semibold mb-4 drop-shadow"
        >
          חלמתם על חינה בלתי נשכחת? אנחנו מגשימים לכם אותה עד הפרט האחרון.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/85 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
        >
          חינה יוקרתית, צבעונית ושמחה – בלי שתצטרכו לדאוג לכלום.
          אתן מביאות את ההתרגשות, אנחנו מביאות את הקסם.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={onOpenQuestionnaire}
            className="shadow-xl"
          >
            לייעוץ והכוונה בחינם
          </Button>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 text-sm underline underline-offset-4 hover:text-white transition-colors"
          >
            צרו קשר ב-WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/60 text-xs tracking-widest">גלול</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-white/40 rounded-full"
        />
      </motion.div>
    </section>
  );
}
