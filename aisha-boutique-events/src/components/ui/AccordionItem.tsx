"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-khaki last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-start text-charcoal font-semibold hover:text-burgundy transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 ms-3"
        >
          <ChevronDown size={20} className="text-burgundy" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-charcoal-light leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
