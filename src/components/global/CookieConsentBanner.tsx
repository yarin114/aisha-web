"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useConsent } from "@/context/ConsentContext";
import Button from "@/components/ui/Button";
import { Cookie } from "lucide-react";

export default function CookieConsentBanner() {
  const { consentGiven, acceptConsent, rejectConsent } = useConsent();

  // Show only when not yet decided (null)
  const show = consentGiven === null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cookie-banner"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
          role="dialog"
          aria-label="הסכמה לעוגיות"
        >
          <div className="max-w-3xl mx-auto bg-charcoal text-white rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Cookie className="shrink-0 text-gold" size={28} aria-hidden="true" />

            <p className="flex-1 text-sm leading-relaxed text-white/90">
              אנו משתמשים בעוגיות לשיפור חוויית הגלישה שלך. בלחיצה על &quot;אישור&quot; אתה מסכים לשימוש בעוגיות.{" "}
              <a href="/privacy" className="underline text-gold hover:text-gold/80">
                מדיניות פרטיות
              </a>
            </p>

            <div className="flex gap-3 shrink-0 w-full sm:w-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={rejectConsent}
                className="!text-white !rounded-xl hover:!bg-white/10 flex-1 sm:flex-none"
              >
                דחה
              </Button>
              <Button
                size="sm"
                onClick={acceptConsent}
                className="flex-1 sm:flex-none bg-gold! hover:bg-gold/90! text-charcoal!"
              >
                אישור
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
