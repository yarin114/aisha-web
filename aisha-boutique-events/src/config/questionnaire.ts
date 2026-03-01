export interface QuestionStep {
  id: string;
  question: string;
  options?: string[];
  type: "radio" | "contact";
}

export const QUESTIONNAIRE_STEPS: QuestionStep[] = [
  {
    id: "eventType",
    question: "איזה אירוע אתם חוגגים?",
    options: ["חינה", "הפרשת חלה", "אירוע אחר"],
    type: "radio",
  },
  {
    id: "timing",
    question: "מתי בערך מתוכנן האירוע?",
    options: ["בחודש הקרוב", "עוד מספר חודשים", "טרם נקבע תאריך"],
    type: "radio",
  },
  {
    id: "guestCount",
    question: "כמה אורחים צפויים להגיע?",
    options: ["עד 50", "50-100", "100+"],
    type: "radio",
  },
  {
    id: "priority",
    question: "מה הכי חשוב לכם באירוע?",
    options: ["עיצוב ואווירה", "אוכל ושפע", "תמונות וסושיאל", "הכל מהכל"],
    type: "radio",
  },
  {
    id: "contact",
    question: "השאירו פרטים ונחזור אליכם עם קונספט מושלם",
    type: "contact",
  },
];
