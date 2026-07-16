"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import SectionHeader from "./ui/SectionHeader";
import SocialLinks from "./ui/SocialLinks";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" aria-label="Contact" className="section-padding bg-muted/30">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader heading={t("contact.heading")} subtitle={t("contact.subtitle")} />

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t("contact.description")}
          </p>

          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin size={16} />
              {t("contact.location")}
            </div>
            <SocialLinks mode="contact" />
          </div>

          <Link
            href="https://linkedin.com/in/cakfan"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            {t("contact.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
