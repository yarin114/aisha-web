"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { readConsent, writeConsent } from "@/lib/consent";

interface ConsentContextValue {
  consentGiven: boolean | null;
  acceptConsent: () => void;
  rejectConsent: () => void;
}

const ConsentContext = createContext<ConsentContextValue>({
  consentGiven: null,
  acceptConsent: () => {},
  rejectConsent: () => {},
});

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const record = readConsent();
    if (record) setConsentGiven(record.status === "accepted");
  }, []);

  const acceptConsent = () => {
    writeConsent("accepted");
    setConsentGiven(true);
    // Fire-and-forget consent audit log
    fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "accepted", timestamp: new Date().toISOString() }),
    }).catch(() => {});
  };

  const rejectConsent = () => {
    writeConsent("rejected");
    setConsentGiven(false);
    fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "rejected", timestamp: new Date().toISOString() }),
    }).catch(() => {});
  };

  return (
    <ConsentContext.Provider value={{ consentGiven, acceptConsent, rejectConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => useContext(ConsentContext);
