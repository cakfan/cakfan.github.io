"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { contactEmail } from "@/lib/site";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import SocialLinks from "@/components/ui/social-links";

export default function ContactPageContent() {
  const { t } = useTranslation();

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        index="01"
        label={t("contact.heading")}
        title={t("contact.subtitle")}
        description={t("contact.description")}
        as="h1"
        titleClassName="text-h1"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${contactEmail}`}
          className="group flex min-h-28 flex-col justify-between gap-6 rounded-card border border-border bg-card p-5 transition-colors hover:border-foreground/30"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="label-mono text-muted-foreground">
              {t("contact.email")}
            </span>
            <ArrowUpRight
              size={17}
              strokeWidth={1.75}
              aria-hidden="true"
              className="text-muted-foreground transition-colors group-hover:text-accent"
            />
          </div>
          <span className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
            {contactEmail}
          </span>
        </a>

        <div className="flex min-h-28 flex-col justify-between gap-6 rounded-card border border-border bg-card p-5">
          <div className="flex items-start justify-between gap-4">
            <span className="label-mono text-muted-foreground">
              {t("contact.locationLabel")}
            </span>
            <MapPin size={17} strokeWidth={1.75} aria-hidden="true" className="text-muted-foreground" />
          </div>
          <span className="text-base font-medium text-foreground">
            Jember, East Java, Indonesia
          </span>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="label-mono text-muted-foreground">
          {t("contact.findOnline")}
        </h2>
        <SocialLinks className="mt-3" />
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <Link
          href="/work"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("contact.seeWork")}
          <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </Container>
  );
}
