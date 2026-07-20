"use client";

import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function BackToTopButton() {
  const { t } = useTranslation();
  const visible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={t("nav.backToTop")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <ArrowUp size={18} />
    </button>
  );
}
