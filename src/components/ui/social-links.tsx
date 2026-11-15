"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/site";

export default function SocialLinks({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "stack";
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-1",
        variant === "stack" && "flex-col items-start",
        className
      )}
    >
      {socialLinks.map((social) => (
        <li key={social.href}>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {social.label}
            <ArrowUpRight
              size={13}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-colors group-hover:text-accent"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
