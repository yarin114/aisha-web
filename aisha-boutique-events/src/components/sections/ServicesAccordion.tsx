"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AccordionItem from "@/components/ui/AccordionItem";

const ACCORDION_ITEMS = [
  {
    question: "עמדת חינה - חבילה מלאה",
    answer:
      "חבילת חינה בעיצוב מלא , חוויה מרוקאית אמיתית . תלבושות , עמדת חינה עשירה והכל באווירה צבעונית ומרגשת",
  },
  {
    question: "הפרשת חלה - חבילה מלאה",
    answer:
      "הפרשת חלה מוקפדת בעיצוב קסום ומרגש + מדבקה בעיצוב אישי בחינם",
  },
  {
    question: "עיצוב שולחנות, בופה ותפאורה מלאה",
    answer:
      "אירוע מוצלח נבנה ממעטפת מדויקת. אנחנו מעצבים כל פינה – שולחנות ערוכים בטעם רב, עיצוב בופה מרשים, פינות צילום, פרחים ועוד. כל פרט נבחר בהתאם לקונספט שלכם.",
  },
  {
    question: "צילום סושיאל מקצועי",
    answer:
      "אם אתם מחפשים אירוע שמשלב רגש, סטייל ותיעוד ברמה הגבוהה ביותר – הגעתם למקום הנכון. אנחנו עובדים עם צלמות מהטובות ביותר ומספקים חומר מדהים לסושיאל מדיה שישאיר את הזיכרונות חיים לנצח.",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            מה אנחנו מציעים?
          </h2>
          <p className="text-charcoal-light text-lg">
            כל מה שצריך לאירוע מושלם – במקום אחד
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-card p-2 sm:p-4">
          {ACCORDION_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
