"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import type { WorkCategory } from "@/types/work";

type FilterOption = "all" | WorkCategory;

export default function WorkFilter({
  onFilter,
}: {
  onFilter: (category: FilterOption) => void;
}) {
  const { t } = useTranslation();
  const [active, setActive] = useState<FilterOption>("all");

  const filters: { value: FilterOption; label: string }[] = [
    { value: "all", label: t("work.all") },
    { value: "client-work", label: t("work.clientWork") },
    { value: "engineering", label: t("work.engineering") },
    { value: "experiment", label: t("work.experiments") },
  ];

  const handleFilter = (value: FilterOption) => {
    setActive(value);
    onFilter(value);
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={t("work.filterLabel")}>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => handleFilter(f.value)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
            active === f.value
              ? "bg-foreground text-background"
              : "border text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
