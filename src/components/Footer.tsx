"use client";

import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t py-8">
      <div className="container-section flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Taufan Fatahillah. {t("footer.reserved")}
        </p>
      </div>
    </footer>
  );
}
