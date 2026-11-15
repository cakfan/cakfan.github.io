"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export default function ContactCta() {
  const { t } = useTranslation();

  return (
    <Section divider className="pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <SectionHeading
            index="03"
            label={t("home.contactLabel")}
            title={t("home.ctaHeading")}
            titleClassName="text-h1"
          />
          <div className="lg:pb-1">
            <p className="max-w-[44ch] text-base leading-relaxed text-muted-foreground">
              {t("home.ctaSubtitle")}
            </p>
            <ButtonLink href="/contact" className="mt-6 w-full sm:w-auto">
              {t("home.getInTouch")}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
