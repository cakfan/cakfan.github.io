"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

export interface WorkSection {
  id: string;
  index: string;
  label: string;
  count: number;
}

export default function WorkAnchorNav({ sections }: { sections: WorkSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const ids = sections.map((section) => section.id).join(",");
  const { t } = useTranslation();

  useEffect(() => {
    const elements = ids
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  if (sections.length === 0) return null;

  return (
    <div className="sticky top-14 z-30 -mx-5 mt-8 border-y border-border bg-background/90 py-2 backdrop-blur-md sm:-mx-6 lg:-mx-8 lg:top-16">
      <nav
        aria-label={t("work.anchorLabel")}
        className="no-scrollbar flex gap-2 overflow-x-auto px-5 sm:px-6 lg:px-8"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? "true" : undefined}
            className={cn(
              "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-control border px-3 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors sm:min-h-9",
              active === section.id
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            <span
              className={cn(
                active === section.id ? "text-accent-foreground" : "text-accent"
              )}
            >
              {section.index}
            </span>
            {section.label}
            <span className="opacity-60">{section.count}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
