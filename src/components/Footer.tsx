"use client";

import { ArrowUp } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t py-8">
      <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Taufan Fatahillah. {t("footer.reserved")}
        </p>
        <a
          href="#home"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("footer.backToTop")}
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
