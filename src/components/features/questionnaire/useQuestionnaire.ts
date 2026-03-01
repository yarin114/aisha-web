"use client";

import { useState } from "react";
import { QuestionnaireAnswers } from "@/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const TOTAL_STEPS = 5;

const initialAnswers: QuestionnaireAnswers = {
  eventType: "",
  timing: "",
  guestCount: "",
  priority: "",
  name: "",
  city: "",
  phone: "",
};

export function useQuestionnaire(onClose: () => void) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialAnswers);
  const [errors, setErrors] = useState<Partial<Record<keyof QuestionnaireAnswers, string>>>({});

  const updateAnswer = (field: keyof QuestionnaireAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<Record<keyof QuestionnaireAnswers, string>> = {};

    if (currentStep === 1 && !answers.eventType) {
      newErrors.eventType = "יש לבחור סוג אירוע";
    }
    if (currentStep === 2 && !answers.timing) {
      newErrors.timing = "יש לבחור מועד";
    }
    if (currentStep === 3 && !answers.guestCount) {
      newErrors.guestCount = "יש לבחור מספר אורחים";
    }
    if (currentStep === 4 && !answers.priority) {
      newErrors.priority = "יש לבחור עדיפות";
    }
    if (currentStep === 5) {
      if (!answers.name || answers.name.length < 2) newErrors.name = "שם חובה (לפחות 2 תווים)";
      if (!answers.city || answers.city.length < 2) newErrors.city = "עיר חובה";
      if (!answers.phone || answers.phone.length < 9) newErrors.phone = "מספר טלפון חובה";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const submit = () => {
    if (!validateStep()) return;
    const url = buildWhatsAppUrl("questionnaire", answers);
    window.location.href = url;
    onClose();
  };

  const reset = () => {
    setCurrentStep(1);
    setAnswers(initialAnswers);
    setErrors({});
  };

  return {
    currentStep,
    totalSteps: TOTAL_STEPS,
    answers,
    errors,
    updateAnswer,
    goNext,
    goBack,
    submit,
    reset,
  };
}
