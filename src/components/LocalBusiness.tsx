"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import type { LocalBusinessItem } from "@/lib/types";
import SectionHeader from "./ui/SectionHeader";
import Image from "next/image";

function BusinessCard({ item }: { item: LocalBusinessItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group rounded-xl border bg-background overflow-hidden transition-all duration-300",
        expanded ? "shadow-lg" : "hover:shadow-md hover:-translate-y-0.5"
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={`/projects/${item.slug}.jpg`}
          alt={`${item.name} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 448px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-teal/10 text-teal font-medium">
              {item.category}
            </span>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer shrink-0"
            aria-label={expanded ? "Collapse details" : "Expand details"}
          >
            <ChevronDown
              size={18}
              className={cn(
                "transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="pt-4 border-t space-y-3">
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="text-muted-foreground shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">{item.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">{item.phone}</span>
            </div>
            <Link
              href={item.demo}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity mt-2"
            >
              Kunjungi Website
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LocalBusiness() {
  const { t, tArray } = useTranslation();
  const items = tArray<LocalBusinessItem>("localBusiness.items");

  return (
    <section
      id="local-business"
      aria-label="Local Business"
      className="section-padding"
    >
      <div className="container-section">
        <SectionHeader heading={t("localBusiness.heading")} subtitle={t("localBusiness.subtitle")} />

        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 items-start">
          {items.map((item) => (
            <BusinessCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
