import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "שם חייב להכיל לפחות 2 תווים")
    .max(100, "שם ארוך מדי")
    .trim(),
  email: z
    .string()
    .email("כתובת אימייל לא תקינה")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(9, "מספר טלפון קצר מדי")
    .max(15, "מספר טלפון ארוך מדי")
    .regex(/^[+\d\s\-()]{9,15}$/, "מספר טלפון לא תקין")
    .trim(),
});

export const step5Schema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים").trim(),
  city: z.string().min(2, "עיר חייבת להכיל לפחות 2 תווים").trim(),
  phone: z
    .string()
    .min(9, "מספר טלפון קצר מדי")
    .regex(/^[+\d\s\-()]{9,15}$/, "מספר טלפון לא תקין")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type Step5Data = z.infer<typeof step5Schema>;
