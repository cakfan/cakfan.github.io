"use client";

import { ArrowLeft, Download } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/layout/language-toggle";
import { Button } from "@/components/ui/button";

export default function CvToolbar() {
  const { t } = useTranslation();

  return (
    <div className="no-print sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container-section flex h-14 items-center justify-between gap-3">
        <a
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
          {t("cv.toolbar.back")}
        </a>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <Button size="sm" onClick={() => window.print()}>
            <Download size={15} strokeWidth={1.75} aria-hidden="true" />
            {t("cv.toolbar.downloadPdf")}
          </Button>
        </div>
      </div>
    </div>
  );
}
