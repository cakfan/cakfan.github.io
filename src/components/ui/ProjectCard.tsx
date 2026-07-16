import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { assets } from "@/assets";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  name: string;
  slug: string | null;
  description: string;
  demo: string | null;
  github: string;
  tech?: string[];
  category?: string;
}

export default function ProjectCard({ name, slug, description, demo, github, tech, category }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border bg-background overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 break-inside-avoid mb-8">
      {slug && (
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={`/projects/${slug}.jpg`}
            alt={`${name} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 448px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            {category && (
              <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-medium">
                {category}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-4">
            {demo && (
              <Link
                href={demo}
                target="_blank"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={`${name} demo`}
              >
                <ExternalLink size={16} />
              </Link>
            )}
            <Link
              href={github}
              target="_blank"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={`${name} source code`}
            >
              <Image src={assets.githubBlack} alt="GitHub" className="w-4 block dark:hidden" />
              <Image src={assets.githubWhite} alt="GitHub" className="w-4 hidden dark:block" />
            </Link>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        {tech && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <TechBadge key={t} label={t} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
