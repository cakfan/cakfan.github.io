"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import SocialLinks from "@/components/ui/SocialLinks";

export default function ContactPageContent() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-section max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
          {t("contact.heading")}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {t("contact.subtitle")}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
          {t("contact.description")}
        </p>

        <div className="space-y-6 mb-12">
          <a
            href={`mailto:${t("contact.emailAddress")}`}
            className="group flex items-center gap-4 p-5 rounded-xl border hover:bg-muted/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg shrink-0">
              @
            </div>
            <div>
              <p className="font-medium group-hover:text-teal transition-colors">{t("contact.email")}</p>
              <p className="text-sm text-muted-foreground">{t("contact.emailAddress")}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-xl border">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">{t("contact.locationLabel")}</p>
              <p className="text-sm text-muted-foreground">{t("contact.locationValue")}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-4">
            {t("contact.findOnline")}
          </h2>
          <SocialLinks mode="contact" />
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("contact.seeWork")}
          </Link>
        </div>
      </div>
    </section>
  );
}
