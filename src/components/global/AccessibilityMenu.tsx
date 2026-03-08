"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Type, Contrast, MousePointer, Minus, X, FileText } from "lucide-react";
import { useAccessibility } from "@/context/AccessibilityContext";
import { clsx } from "clsx";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatementOpen, setIsStatementOpen] = useState(false);
  const { settings, updateSetting } = useAccessibility();

  return (
    <>
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

                {/* Accessibility Statement */}
                <button
                  onClick={() => { setIsStatementOpen(true); setIsOpen(false); }}
                  className="flex items-center gap-2 text-xs text-burgundy font-semibold mt-1 hover:underline"
                >
                  <FileText size={14} />
                  <span>הצהרת נגישות</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Accessibility Statement Modal */}
      <AnimatePresence>
        {isStatementOpen && (
          <>
            <motion.div
              key="statement-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-charcoal/50"
              onClick={() => setIsStatementOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="statement-modal"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-4 sm:inset-8 md:inset-16 z-[61] bg-white rounded-3xl shadow-2xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="הצהרת נגישות"
            >
              <div className="p-6 sm:p-10 max-w-3xl mx-auto text-right" dir="rtl">
                {/* Close */}
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={() => setIsStatementOpen(false)}
                    className="p-2 rounded-xl hover:bg-khaki/30 text-charcoal"
                    aria-label="סגור"
                  >
                    <X size={20} />
                  </button>
                  <h2 className="text-2xl font-bold text-burgundy">הצהרת נגישות – Aisha Boutique Events</h2>
                </div>

                <p className="text-charcoal leading-relaxed mb-6">
                  חברת Aisha Boutique Events רואה חשיבות עליונה במתן שירות שוויוני, מכבד ונגיש לכלל הלקוחות, לרבות אנשים עם מוגבלויות. אנו פועלים רבות כדי להנגיש את האתר ואת שירותי הפקת האירועים שלנו (חינות, הפרשות חלה ואירועי בוטיק), במטרה לאפשר לכל אדם חוויית גלישה נוחה וקבלת שירות מלאה ועצמאית.
                </p>

                <h3 className="text-lg font-bold text-charcoal mb-3">נגישות האתר</h3>
                <p className="text-charcoal leading-relaxed mb-3">
                  אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013. התאמות הנגישות בוצעו ע&quot;פ המלצות התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA, ומסמך WCAG 2.1 הבינלאומי.
                </p>
                <p className="text-charcoal font-semibold mb-2">הפעולות שבוצעו במסגרת הנגשת האתר:</p>
                <ul className="list-disc list-inside text-charcoal leading-relaxed mb-6 space-y-2 pr-2">
                  <li><strong>ניווט מקלדת:</strong> האתר מותאם לגלישה בעזרת מקלדת בלבד (שימוש במקשי Tab, Enter וחיצים), לרבות מעבר בין שירותים, טפסים ותפריטים.</li>
                  <li><strong>קוראי מסך:</strong> האתר מותאם לתמיכה בתוכנות קוראות מסך (כגון NVDA ו-JAWS), כולל תיאור טקסטואלי חלופי לכל התמונות בגלריה ולכל האלמנטים הוויזואליים.</li>
                  <li><strong>הגדלת תצוגה וניגודיות:</strong> האתר תומך בהגדלת הטקסט עד 200% ללא פגיעה בתוכן, ועומד בתקני ניגודיות גבוהה בין צבעי הטקסט לצבעי הרקע.</li>
                  <li><strong>פופ-אפים וטפסים:</strong> כל שדות יצירת הקשר והשאלונים באתר הונגשו כך שיספקו חיווי ברור על שגיאות או הצלחה בשליחת הפרטים.</li>
                </ul>

                <h3 className="text-lg font-bold text-charcoal mb-3">הסדרי נגישות פיזיים</h3>
                <p className="text-charcoal leading-relaxed mb-6">
                  אנו מספקים מעטפת מלאה לאירועים, החל משלב התכנון ועד לביצוע. כאשר אנו מפיקים את האירוע באולם או במתחם אירועים חיצוני, אנו מוודאים כי המקום עומד בדרישות הנגישות החוקיות (חניות נכים, שירותי נכים וגישה לכיסאות גלגלים).
                </p>

                <h3 className="text-lg font-bold text-charcoal mb-3">פניות בנושא נגישות</h3>
                <p className="text-charcoal leading-relaxed mb-4">
                  אם נתקלתם בבעיית נגישות באתר או שאתם זקוקים להתאמה מיוחדת בקבלת השירות שלנו, נשמח לעמוד לרשותכם.
                </p>
                <div className="bg-cream rounded-2xl p-4 text-charcoal space-y-1 text-sm">
                  <p className="font-bold text-burgundy mb-2">פרטי רכז הנגישות בעסק:</p>
                  <p>שם: זיו סבאג</p>
                  <p>טלפון / וואטסאפ: <a href="tel:+972546055412" className="text-burgundy underline">+972546055412</a></p>
                  <p>דוא&quot;ל: <a href="mailto:ziv971180@gmail.com" className="text-burgundy underline">ziv971180@gmail.com</a></p>
                  <p>
                    פנייה ישירה בוואטסאפ:{" "}
                    <a href="https://wa.me/message/AW7JPMS5JSU5M1" target="_blank" rel="noopener noreferrer" className="text-burgundy underline">
                      לחצו כאן
                    </a>
                  </p>
                </div>

                <p className="text-xs text-charcoal/50 mt-6">תאריך עדכון ההצהרה: מרץ 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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
