import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ToggleTheme } from "@/components/button/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import { BrandIcons } from "@/components/icons/brand-icons";
import { Reveal } from "../framer/reveal";

const SiteHeader = async () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container flex h-14 justify-end">
        <nav className="flex items-center">
          {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0",
              )}
            >
              <BrandIcons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0",
              )}
            >
              <BrandIcons.twitter className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link> */}
          <Reveal>
            <ToggleTheme />
          </Reveal>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
