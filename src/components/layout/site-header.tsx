"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import Mark from "@/components/brand/mark";
import Lockup from "@/components/brand/lockup";
import LanguageToggle from "@/components/layout/language-toggle";
import ThemeToggle from "@/components/layout/theme-toggle";
import MobileMenu, { type NavItem } from "@/components/layout/mobile-menu";
import { ButtonLink } from "@/components/ui/button";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition(24);
  const { t } = useTranslation();
  const pathname = usePathname();

  const navLinks: NavItem[] = [
    { label: t("nav.home"), href: "/", index: "01" },
    { label: t("nav.work"), href: "/work", index: "02" },
    { label: t("nav.about"), href: "/about", index: "03" },
    { label: t("nav.experience"), href: "/experience", index: "04" },
    { label: t("nav.contact"), href: "/contact", index: "05" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md transition-colors duration-200",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="container-section flex h-14 items-center justify-between gap-4 lg:h-16">
        <div className="flex min-w-0 items-center">
          <Link
            href="/"
            aria-label="Taufan Fatahillah — Home"
            className="inline-flex sm:hidden"
          >
            <Mark animate={pathname === "/"} className="h-7 w-7" />
          </Link>
          <Lockup animate={pathname === "/"} className="hidden sm:inline-flex" />
        </div>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "relative py-3 text-sm transition-colors hover:text-foreground",
                isActive(link.href)
                  ? "text-foreground after:absolute after:inset-x-0 after:-bottom-[1px] after:h-px after:bg-accent"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <ButtonLink href="/cv" size="sm" className="ml-1 hidden sm:inline-flex lg:ml-2">
            {t("nav.cv")}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-control text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} links={navLinks} />
    </header>
  );
}
