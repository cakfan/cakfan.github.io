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
      return (
        <>
          <Image src={assets.linkedinBlack} alt="LinkedIn" className="w-4 block dark:hidden" />
          <Image src={assets.linkedinWhite} alt="LinkedIn" className="w-4 hidden dark:block" />
        </>
      );
    case "github":
      return (
        <>
          <Image src={assets.githubBlack} alt="GitHub" className="w-4 block dark:hidden" />
          <Image src={assets.githubWhite} alt="GitHub" className="w-4 hidden dark:block" />
        </>
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
          rel="noopener noreferrer"
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
