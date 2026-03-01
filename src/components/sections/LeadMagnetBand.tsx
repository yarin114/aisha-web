"use client";

import Button from "@/components/ui/Button";

interface LeadMagnetBandProps {
  onOpenQuestionnaire: () => void;
}

export default function LeadMagnetBand({ onOpenQuestionnaire }: LeadMagnetBandProps) {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "#C8B89A" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
          מתלבטים מה מתאים לכם?
        </h2>

        <p className="text-charcoal/75 mb-8 max-w-md mx-auto">
          ענו על כמה שאלות קצרות ונחזור אליכם עם קונספט מושלם שמותאם בדיוק לחלום שלכם
        </p>

        <Button
          size="lg"
          onClick={onOpenQuestionnaire}
          className="shadow-soft"
        >
          ✨ ענו על השאלון וקבלו קונספט מותאם אישית
        </Button>
      </div>
    </section>
  );
}
