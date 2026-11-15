"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/layout/language-toggle";
import { ButtonLink } from "@/components/ui/button";

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavItem[];
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- close only when the route changes
  }, [pathname]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={t("nav.menu")}
    >
      <button
        type="button"
        aria-label={t("nav.closeMenu")}
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-foreground/25 backdrop-blur-[2px]"
      />

      <div
        ref={panelRef}
        id="mobile-menu"
        className="absolute inset-x-0 top-14 max-h-[calc(100svh-3.5rem)] animate-fade-in overflow-y-auto border-b border-border bg-background shadow-sm"
      >
        <nav className="container-section py-3" aria-label="Mobile navigation">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-border last:border-0">
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={link.href === pathname ? "page" : undefined}
                  className="flex min-h-12 items-center justify-between gap-4 text-lg text-foreground transition-colors hover:text-accent"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="label-mono text-accent">{link.index}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="text-muted-foreground"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between gap-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <LanguageToggle />
            <ButtonLink href="/cv" size="sm" onClick={onClose}>
              {t("nav.cv")}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
