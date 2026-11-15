"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { getFeaturedWork, getLocalizedWork } from "@/lib/get-work";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import WorkCard from "@/components/work/work-card";

export default function SelectedWork() {
  const { t, locale } = useTranslation();
  const featured = getFeaturedWork().map((item) => getLocalizedWork(item, locale));

  if (featured.length === 0) return null;

  return (
    <Section divider>
      <Container>
        <SectionHeading
          index="01"
          label={t("home.selectedWork")}
          description={t("home.selectedWorkDescription")}
        />

        <div className="mt-9 grid gap-5">
          {featured.map((item, index) => (
            <WorkCard
              key={item.slug}
              item={item}
              variant="featured"
              index={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/work" variant="ghost" className="px-0">
            {t("home.viewAllWork")}
            <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
