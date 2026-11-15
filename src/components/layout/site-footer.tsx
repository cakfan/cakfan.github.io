"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { contactEmail } from "@/lib/site";
import Wordmark from "@/components/brand/wordmark";
import Mark from "@/components/brand/mark";
import Handle from "@/components/brand/handle";
import SocialLinks from "@/components/ui/social-links";

const navigate = [
  { labelKey: "nav.work", href: "/work" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.experience", href: "/experience" },
  { labelKey: "nav.contact", href: "/contact" },
  { labelKey: "nav.services", href: "/services" },
];

export default function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className="container-section py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <div className="flex flex-col items-start gap-3">
              <Mark className="h-8 w-8" />
              <Wordmark href="/" className="text-2xl" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <Handle
              link
              dot={false}
              className="mt-4 inline-flex text-xs text-muted-foreground"
            />
          </div>

          <div>
            <h2 className="label-mono text-muted-foreground">
              {t("footer.navigate")}
            </h2>
            <ul className="mt-3">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-foreground transition-colors hover:text-accent sm:min-h-9"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-mono text-muted-foreground">
              {t("footer.contact")}
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex min-h-11 items-center text-foreground transition-colors hover:text-accent sm:min-h-9"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="text-muted-foreground">{t("footer.location")}</li>
              <li>
                <Link
                  href="/cv"
                  className="inline-flex min-h-11 items-center text-foreground transition-colors hover:text-accent sm:min-h-9"
                >
                  {t("footer.cv")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label-mono text-muted-foreground">
              {t("footer.elsewhere")}
            </h2>
            <SocialLinks variant="stack" className="mt-2" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Taufan Fatahillah.{" "}
            {t("footer.reserved")}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link
              href="/privacy-policy"
              className="inline-flex min-h-11 items-center transition-colors hover:text-foreground sm:min-h-9"
            >
              {t("footer.privacy")}
            </Link>
            <span className="font-mono tracking-[0.08em]">
              {t("footer.built")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
