"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import RadioStep from "./steps/RadioStep";
import Step5Contact from "./steps/Step5Contact";
import { useQuestionnaire } from "./useQuestionnaire";
import { QUESTIONNAIRE_STEPS } from "@/config/questionnaire";
import { QuestionnaireAnswers } from "@/types";
import { ChevronRight } from "lucide-react";

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEP_FIELD_MAP: Record<number, keyof QuestionnaireAnswers> = {
  1: "eventType",
  2: "timing",
  3: "guestCount",
  4: "priority",
};

export default function QuestionnaireModal({ isOpen, onClose }: QuestionnaireModalProps) {
  const { currentStep, totalSteps, answers, errors, updateAnswer, goNext, goBack, submit, reset } =
    useQuestionnaire(onClose);

  // Reset when re-opened
  useEffect(() => {
    if (isOpen) reset();
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const stepConfig = QUESTIONNAIRE_STEPS[currentStep - 1];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="מצאו את האירוע המושלם שלכם">
      <ProgressBar current={currentStep} total={totalSteps} />

      {/* Step content with slide animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.25 }}
        >
          {stepConfig.type === "radio" && stepConfig.options ? (
            <RadioStep
              question={stepConfig.question}
              options={stepConfig.options}
              value={answers[STEP_FIELD_MAP[currentStep]] ?? ""}
              onChange={(val) => updateAnswer(STEP_FIELD_MAP[currentStep], val)}
              error={errors[STEP_FIELD_MAP[currentStep]]}
            />
          ) : (
            <Step5Contact answers={answers} errors={errors} onChange={updateAnswer} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 gap-3">
        {currentStep > 1 ? (
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-charcoal-light hover:text-burgundy transition-colors text-sm font-medium"
          >
            <ChevronRight size={16} className="rtl:rotate-0 ltr:rotate-180" aria-hidden="true" />
            חזור
          </button>
        ) : (
          <div />
        )}

        {currentStep < totalSteps ? (
          <Button onClick={goNext} className="min-w-32">
            המשך
          </Button>
        ) : (
          <Button onClick={submit} className="min-w-32 gap-2">
            שלח ב-WhatsApp ✨
          </Button>
        )}
      </div>
    </Modal>
  );
}
