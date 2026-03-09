"use client";

import { useState } from "react";
import { WA_URL } from "@/config/site";

interface FormState {
  name: string;
  phone: string;
  email: string;
}

const EMPTY: FormState = { name: "", phone: "", email: "" };

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "נא להזין שם מלא";
    if (!form.phone.trim()) e.phone = "נא להזין מספר טלפון";
    if (!form.email.trim()) e.email = "נא להזין כתובת מייל";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "כתובת מייל לא תקינה";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      "שלום! אני מעוניין/ת לקבוע ייעוץ 📅",
      "",
      `שם מלא: ${form.name}`,
      `טלפון: ${form.phone}`,
      `אימייל: ${form.email}`,
      "",
      "אשמח שתחזרו אליי לתיאום מועד 🙏",
    ].join("\n");

    const url = `${WA_URL}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function field(
    id: keyof FormState,
    label: string,
    type: string,
    placeholder: string
  ) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="text-sm font-medium text-charcoal">
          {label}
        </label>
        <input
          id={id}
          type={type}
          value={form[id]}
          placeholder={placeholder}
          onChange={(ev) =>
            setForm((f) => ({ ...f, [id]: ev.target.value }))
          }
          className={`w-full rounded-xl border px-4 py-3 text-charcoal bg-white placeholder:text-charcoal/40 outline-none transition focus:ring-2 focus:ring-burgundy/30 ${
            errors[id] ? "border-red-400" : "border-khaki"
          }`}
        />
        {errors[id] && (
          <p className="text-xs text-red-500">{errors[id]}</p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-8 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-charcoal">קביעת ייעוץ בוואטסאפ</h2>
        <p className="text-sm text-charcoal/60">נחזור אליכם לתיאום מועד</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {field("name", "שם מלא", "text", "ישראל ישראלי")}
        {field("phone", "מספר טלפון", "tel", "050-0000000")}
        {field("email", "כתובת מייל", "email", "example@email.com")}

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a34a] text-white font-bold py-3.5 text-base transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.845L.057 23.427a.75.75 0 0 0 .916.916l5.633-1.463A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.928 0-3.736-.518-5.289-1.423l-.379-.223-3.932 1.022 1.04-3.824-.245-.393A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          שלחו לי הודעה בוואטסאפ
        </button>
      </form>

      <p className="text-center text-xs text-charcoal/40 mt-4">
        לאחר השליחה נחזור אליכם בהקדם לתיאום מועד הייעוץ
      </p>
    </div>
  );
}
