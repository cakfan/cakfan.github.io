"use client";

import { useTranslation, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation();

  const toggle = () => {
    const next: Locale = locale === "en" ? "id" : "en";
    setLocale(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex h-11 min-w-11 items-center justify-center rounded-control px-2 font-mono text-xs tracking-[0.08em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:h-9 lg:min-w-9",
        className
      )}
      aria-label={locale === "en" ? "Switch to Indonesian" : "Switch to English"}
    >
      {locale === "en" ? "ID" : "EN"}
    </button>
  );
}
