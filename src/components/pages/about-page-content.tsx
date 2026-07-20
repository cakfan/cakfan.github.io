"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { getSiteConfig } from "@/lib/get-work";

export default function AboutPageContent() {
  const { t } = useTranslation();
  const config = getSiteConfig();

  return (
    <section className="section-padding">
      <div className="container-section max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
          {t("about.heading")}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          {t("about.subtitle")}
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>{t("about.bio1").replace("{name}", config.name).replace("{title}", config.title)}</p>
          <p>{t("about.bio2")}</p>
          <p>{t("about.bio3")}</p>
          <p>{t("about.bio4")}</p>
          <p>{t("about.bio5")}</p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-4">
            {t("about.techHeading")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-medium mb-1">{t("about.frontEnd")}</h3>
              <p className="text-muted-foreground">{t("about.frontEndList")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">{t("about.backEnd")}</h3>
              <p className="text-muted-foreground">{t("about.backEndList")}</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">{t("about.tools")}</h3>
              <p className="text-muted-foreground">{t("about.toolsList")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("about.seeWork")}
          </Link>
        </div>
      </div>
    </section>
  );
}
