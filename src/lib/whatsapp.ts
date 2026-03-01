import { ContactFields, QuestionnaireAnswers } from "@/types";
import { WA_URL } from "@/config/site";

function formatContactMessage(fields: ContactFields): string {
  return [
    "שלום! קיבלתי פנייה חדשה מהאתר ✨",
    "",
    `שם: ${fields.name}`,
    `אימייל: ${fields.email}`,
    `טלפון: ${fields.phone}`,
  ].join("\n");
}

function formatQuestionnaireMessage(answers: QuestionnaireAnswers): string {
  return [
    "שלום! מילאתי את השאלון באתר 📋",
    "",
    `סוג האירוע: ${answers.eventType}`,
    `מועד האירוע: ${answers.timing}`,
    `מספר אורחים: ${answers.guestCount}`,
    `הכי חשוב לי: ${answers.priority}`,
    "",
    `שם: ${answers.name}`,
    `עיר: ${answers.city}`,
    `טלפון: ${answers.phone}`,
  ].join("\n");
}

export function buildWhatsAppUrl(type: "contact", data: ContactFields): string;
export function buildWhatsAppUrl(type: "questionnaire", data: QuestionnaireAnswers): string;
export function buildWhatsAppUrl(
  type: "contact" | "questionnaire",
  data: ContactFields | QuestionnaireAnswers
): string {
  const message =
    type === "contact"
      ? formatContactMessage(data as ContactFields)
      : formatQuestionnaireMessage(data as QuestionnaireAnswers);
  return `${WA_URL}?text=${encodeURIComponent(message)}`;
}
