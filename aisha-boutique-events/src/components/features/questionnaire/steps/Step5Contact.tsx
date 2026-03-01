"use client";

import Input from "@/components/ui/Input";
import { QuestionnaireAnswers } from "@/types";

interface Step5ContactProps {
  answers: QuestionnaireAnswers;
  errors: Partial<Record<keyof QuestionnaireAnswers, string>>;
  onChange: (field: keyof QuestionnaireAnswers, value: string) => void;
}

export default function Step5Contact({ answers, errors, onChange }: Step5ContactProps) {
  return (
    <div>
      <p className="text-lg font-semibold text-charcoal mb-2 text-center">
        השאירו פרטים ונחזור אליכם עם קונספט מושלם
      </p>
      <p className="text-charcoal-light text-sm text-center mb-6">
        נחזור אליכם בתוך 24 שעות עם קונספט מותאם אישית
      </p>
      <div className="flex flex-col gap-4">
        <Input
          id="q-name"
          label="שם מלא *"
          placeholder="הכנס שם מלא"
          value={answers.name}
          onChange={(e) => onChange("name", e.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          id="q-city"
          label="עיר *"
          placeholder="עיר המגורים"
          value={answers.city}
          onChange={(e) => onChange("city", e.target.value)}
          error={errors.city}
          autoComplete="address-level2"
        />
        <Input
          id="q-phone"
          type="tel"
          label="טלפון *"
          placeholder="05X-XXXXXXX"
          value={answers.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          error={errors.phone}
          autoComplete="tel"
          dir="ltr"
        />
      </div>
    </div>
  );
}
