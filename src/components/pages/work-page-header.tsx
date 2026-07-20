"use client";

import { useTranslation } from "@/lib/i18n";

export default function WorkPageHeader() {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
        {t("work.pageHeading")}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {t("work.pageSubtitle")}
      </h1>
      <p className="text-muted-foreground text-lg">
        {t("work.pageDescription")}
      </p>
    </div>
  );
}
