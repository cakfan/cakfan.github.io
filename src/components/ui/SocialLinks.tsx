"use client";

import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets";

interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "instagram";
}

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/cakfan", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/cakfan", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/withcakfan", icon: "instagram" },
];

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "linkedin":
      return <Image src={assets.linkedin} alt="LinkedIn" className="w-4" />;
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "instagram":
      return (
        <>
          <Image src={assets.instagramBlack} alt="Instagram" className="w-4 block dark:hidden" />
          <Image src={assets.instagramWhite} alt="Instagram" className="w-4 hidden dark:block" />
        </>
      );
  }
}

type SocialLinksMode = "hero" | "contact" | "inline";

const modeStyles: Record<SocialLinksMode, { wrapper: string; link: string }> = {
  hero: {
    wrapper: "flex flex-wrap items-center justify-center gap-4 mt-2",
    link: "inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors",
  },
  contact: {
    wrapper: "flex flex-wrap items-center justify-center gap-4",
    link: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
  },
  inline: {
    wrapper: "flex items-center gap-4",
    link: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group",
  },
};

const iconStyleByMode: Record<SocialLinksMode, string> = {
  hero: "",
  contact: "group-hover:scale-110 transition-transform duration-200",
  inline: "group-hover:scale-110 transition-transform duration-200",
};

export default function SocialLinks({ mode = "hero" }: { mode?: SocialLinksMode }) {
  const styles = modeStyles[mode];

  return (
    <div className={styles.wrapper}>
      {socialLinks.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          className={styles.link}
        >
          <span className={iconStyleByMode[mode]}>
            <SocialIcon icon={social.icon} />
          </span>
          {social.label}
        </Link>
      ))}
    </div>
  );
}
