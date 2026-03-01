"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/security";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE } from "@/config/site";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Send } from "lucide-react";

export default function FooterFormBlock() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const url = buildWhatsAppUrl("contact", data);
    window.open(url, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <footer id="contact" className="mandala-bg pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Brand */}
          <div>
            <h2 className="text-3xl font-bold text-burgundy font-[family-name:var(--font-playfair)] mb-3">
              {SITE.name}
            </h2>
            <p className="text-charcoal-light leading-relaxed max-w-sm mb-6">
              חינה יוקרתית, צבעונית ושמחה – בלי שתצטרכו לדאוג לכלום.
              אתן מביאות את ההתרגשות, אנחנו מביאות את הקסם.
            </p>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-charcoal-light hover:text-burgundy transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-charcoal mb-2">צרו קשר</h3>
            <p className="text-charcoal-light text-sm mb-6">
              השאירו פרטים ונחזור אליכם בהקדם דרך WhatsApp
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-4"
            >
              <Input
                id="name"
                label="שם מלא *"
                placeholder="הכנס שם מלא"
                autoComplete="name"
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                id="email"
                type="email"
                label="אימייל *"
                placeholder="your@email.com"
                autoComplete="email"
                dir="ltr"
                {...register("email")}
                error={errors.email?.message}
              />
              <Input
                id="phone"
                type="tel"
                label="טלפון *"
                placeholder="05X-XXXXXXX"
                autoComplete="tel"
                dir="ltr"
                {...register("phone")}
                error={errors.phone?.message}
              />

              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="mt-2 gap-2"
              >
                <Send size={18} aria-hidden="true" />
                {isSubmitting ? "שולח..." : "שלח ב-WhatsApp"}
              </Button>

              <p className="text-xs text-charcoal-light/60 text-center">
                לחיצה על &quot;שלח&quot; תפתח את WhatsApp עם פרטיכם
              </p>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-khaki/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-light/60">
          <p>© {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-burgundy transition-colors">מדיניות פרטיות</a>
            <a href="/terms" className="hover:text-burgundy transition-colors">תנאי שימוש</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
