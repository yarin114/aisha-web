"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AccessibilitySettings } from "@/types";

interface AccessibilityContextValue {
  settings: AccessibilitySettings;
  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => void;
}

const defaults: AccessibilitySettings = {
  fontSize: "normal",
  highContrast: false,
  reduceMotion: false,
  largeCursor: false,
};

const AccessibilityContext = createContext<AccessibilityContextValue>({
  settings: defaults,
  updateSetting: () => {},
});

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaults);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aisha_a11y");
      if (stored) setSettings(JSON.parse(stored));
    } catch {}
  }, []);

  // Apply CSS classes to <body> when settings change
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("font-large", settings.fontSize === "large");
    body.classList.toggle("font-xlarge", settings.fontSize === "xlarge");
    body.classList.toggle("high-contrast", settings.highContrast);
    body.classList.toggle("large-cursor", settings.largeCursor);
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      localStorage.setItem("aisha_a11y", JSON.stringify(next));
      return next;
    });
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => useContext(AccessibilityContext);
