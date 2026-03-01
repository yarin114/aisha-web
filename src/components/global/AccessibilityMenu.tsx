"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Type, Contrast, MousePointer, Minus, Plus, X } from "lucide-react";
import { useAccessibility } from "@/context/AccessibilityContext";
import { clsx } from "clsx";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting } = useAccessibility();

  return (
    <div className="fixed start-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start gap-2">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-12 h-12 rounded-full bg-burgundy text-white shadow-lg flex items-center justify-center hover:bg-burgundy-dark transition-colors"
        aria-label={isOpen ? "סגור תפריט נגישות" : "פתח תפריט נגישות"}
        aria-expanded={isOpen}
      >
        <Accessibility size={22} />
      </button>

      {/* Menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="a11y-panel"
            initial={{ opacity: 0, x: -16, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute start-14 top-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-khaki/40"
            role="region"
            aria-label="אפשרויות נגישות"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-charcoal text-sm">נגישות</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-khaki/30 text-charcoal-light"
                aria-label="סגור"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {/* Font size */}
              <div>
                <div className="flex items-center gap-2 text-xs text-charcoal-light font-semibold mb-2">
                  <Type size={14} />
                  <span>גודל טקסט</span>
                </div>
                <div className="flex gap-2">
                  {(["normal", "large", "xlarge"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting("fontSize", size)}
                      className={clsx(
                        "flex-1 py-1.5 text-xs rounded-lg border transition-colors",
                        settings.fontSize === size
                          ? "bg-burgundy text-white border-burgundy"
                          : "border-khaki text-charcoal hover:border-burgundy"
                      )}
                    >
                      {size === "normal" ? "א" : size === "large" ? "אא" : "אאא"}
                    </button>
                  ))}
                </div>
              </div>

              {/* High contrast */}
              <ToggleRow
                icon={<Contrast size={14} />}
                label="ניגודיות גבוהה"
                value={settings.highContrast}
                onChange={(v) => updateSetting("highContrast", v)}
              />

              {/* Reduce motion */}
              <ToggleRow
                icon={<Minus size={14} />}
                label="הפחת אנימציות"
                value={settings.reduceMotion}
                onChange={(v) => updateSetting("reduceMotion", v)}
              />

              {/* Large cursor */}
              <ToggleRow
                icon={<MousePointer size={14} />}
                label="סמן גדול"
                value={settings.largeCursor}
                onChange={(v) => updateSetting("largeCursor", v)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-xs text-charcoal-light font-semibold">
        {icon}
        <span>{label}</span>
      </div>
      <button
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={clsx(
          "w-11 h-6 rounded-full transition-colors relative",
          value ? "bg-burgundy" : "bg-khaki"
        )}
      >
        <span
          className={clsx(
            "absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all",
            value ? "end-0.5 start-auto" : "start-0.5 end-auto"
          )}
        />
      </button>
    </div>
  );
}
