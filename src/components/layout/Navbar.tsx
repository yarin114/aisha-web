"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE } from "@/config/site";
import { clsx } from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-card border-b border-khaki/40"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Desktop nav links — appear on left in RTL */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)}
              />
            ))}
          </div>

          {/* Logo / Site name — appears on right in RTL */}
          <Link
            href="/"
            className="text-xl font-bold text-burgundy font-[family-name:var(--font-playfair)] tracking-wide"
          >
            {SITE.name}
          </Link>

          {/* BS"D badge — top right (absolute) */}
          <span
            className="absolute top-1 end-4 text-xs text-charcoal-light font-semibold tracking-widest"
            dir="rtl"
          >
            בס&quot;ד
          </span>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-burgundy/10 transition-colors text-charcoal"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-charcoal/30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 start-0 bottom-0 z-40 w-72 bg-cream shadow-2xl md:hidden flex flex-col pt-20 px-6 pb-8"
            >
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "text-lg font-semibold py-3 px-4 rounded-xl transition-colors",
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                        ? "bg-burgundy text-white"
                        : "text-charcoal hover:bg-burgundy/10 hover:text-burgundy"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-semibold px-4 py-2 rounded-full transition-all duration-150",
        isActive
          ? "border border-burgundy text-burgundy"
          : "text-charcoal hover:text-burgundy hover:bg-burgundy/8"
      )}
    >
      {label}
    </Link>
  );
}
