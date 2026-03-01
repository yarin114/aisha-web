import { ConsentRecord } from "@/types";

const CONSENT_KEY = "aisha_consent_v1";
const CONSENT_VERSION = "1.0";

export function writeConsent(status: "accepted" | "rejected"): void {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    status,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;
  try {
    const record = JSON.parse(raw) as ConsentRecord;
    if (record.version !== CONSENT_VERSION) return null;
    return record;
  } catch {
    return null;
  }
}

export function clearConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
}
