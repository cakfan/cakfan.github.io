"use client";

import { useTranslation, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale } = useTranslation();

  const toggle = () => {
    const next: Locale = locale === "en" ? "id" : "en";
    setLocale(next);
  };

  return (
    <button
      onClick={toggle}
      className={cn(
        "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-2 py-1 rounded hover:bg-muted",
        className
      )}
      aria-label="Toggle language"
    >
      {locale === "en" ? "ID" : "EN"}
    </button>
  );
}
