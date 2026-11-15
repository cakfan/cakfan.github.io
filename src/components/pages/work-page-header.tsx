"use client";

import { useTranslation } from "@/lib/i18n";
import SectionHeading from "@/components/ui/section-heading";

export default function WorkPageHeader() {
  const { t } = useTranslation();

  return (
    <SectionHeading
      index="00"
      label={t("work.pageHeading")}
      title={t("work.pageSubtitle")}
      description={t("work.pageDescription")}
      as="h1"
      titleClassName="text-h1"
    />
  );
}
