"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition(40);
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { t } = useTranslation();
  const pathname = usePathname();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.work"), href: "/work" },
    { label: t("nav.experience"), href: "/experience" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b"
          : "bg-transparent"
      )}
    >
      <nav className="container-section flex items-center justify-between h-16" aria-label="Main navigation">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:text-primary/80 transition-colors"
          aria-label="Taufan Fatahillah — Home"
        >
          TF<span className="text-teal">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                isActive(link.href)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            CV
          </Link>
          <LanguageToggle />
          <button
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav id="mobile-nav" className="md:hidden bg-background border-b animate-fade-in" aria-label="Mobile navigation">
          <div className="container-section flex flex-col gap-2 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "py-2 text-sm transition-colors",
                  isActive(link.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cv"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CV
            </Link>
            <button
              onClick={toggleDark}
              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {isDark ? t("nav.lightMode") : t("nav.darkMode")}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
