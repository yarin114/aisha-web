export interface ContactFields {
  name: string;
  email: string;
  phone: string;
}

export interface QuestionnaireAnswers {
  eventType: string;
  timing: string;
  guestCount: string;
  priority: string;
  name: string;
  city: string;
  phone: string;
}

export interface ConsentRecord {
  version: string;
  status: "accepted" | "rejected";
  timestamp: string;
  userAgent: string;
}

export interface AccessibilitySettings {
  fontSize: "normal" | "large" | "xlarge";
  highContrast: boolean;
  reduceMotion: boolean;
  largeCursor: boolean;
}
