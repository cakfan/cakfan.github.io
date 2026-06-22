import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Wadde",
    slug: "bwa-wadde",
    description: "Landing page dark mode untuk SaaS platform dengan multiple pages (Pricing, Contact, About, Sign In), testimonial slider, dan mobile app promotion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://cakfan.github.io/bwa-wadde/",
    github: "https://github.com/cakfan/bwa-wadde",
  },
  {
    name: "Supacars",
    slug: "supacars",
    description: "Landing page rental & jual-beli mobil dengan dealer listings, search filters, dan Google Maps integration.",
    tech: ["HTML", "Tailwind CSS", "Swiper JS"],
    demo: "https://cakfan.github.io/supacars/",
    github: "https://github.com/cakfan/supacars",
  },
  {
    name: "PastiLaris",
    slug: "pastilaris",
    description: "SaaS landing page — template untuk membantu perusahaan berkembang dengan fitur automasi, real-time analytics, dan high protection.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://cakfan.github.io/pastilaris/",
    github: "https://github.com/cakfan/pastilaris",
  },
  {
    name: "Moviez Streaming",
    slug: "bwa-moviez",
    description: "Mobile UI streaming film dengan featured movies, kategori Disney, dan star ratings — dibangun dengan Next.js.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Swiper JS"],
    demo: "https://cakfan.github.io/bwa-moviez/",
    github: "https://github.com/cakfan/bwa-moviez",
  },
  {
    name: "Transaction Dashboard",
    slug: "transaction-dashboard",
    description: "Store dashboard untuk transaksi top-up game dengan overview spending, riwayat transaksi, dan status tracking (pending/success/failed).",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://cakfan.github.io/transaction-dashboard/",
    github: "https://github.com/cakfan/transaction-dashboard",
  },
  {
    name: "Resto",
    slug: "resto",
    description: "Fuddy — landing page restoran dengan featured restaurants, city-based filtering, expert chefs profiles, dan reservasi online.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://cakfan.github.io/resto/",
    github: "https://github.com/cakfan/resto",
  },
  {
    name: "Foodyar",
    slug: "foodyar",
    description: "Landing page food recipe dengan kategori healthy food, lunch, vege desert, dan shake, lengkap dengan chef testimonials.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://cakfan.github.io/foodyar/",
    github: "https://github.com/cakfan/foodyar",
  },
  {
    name: "Pricing Pro",
    slug: "pricing-pro",
    description: "Halaman pricing dengan tiered subscription cards (Basic/Gold), FAQ accordion, dan responsive design.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://cakfan.github.io/pricing-pro/",
    github: "https://github.com/cakfan/pricing-pro",
  },
  {
    name: "Detail Product",
    slug: "detail-product-mobile",
    description: "Mobile product detail screen untuk e-commerce dengan color/size selectors, quantity counter, image gallery, dan sticky bottom cart.",
    tech: ["HTML", "Tailwind CSS", "Swiper JS"],
    demo: "https://cakfan.github.io/detail-product-mobile/",
    github: "https://github.com/cakfan/detail-product-mobile",
  },
  {
    name: "DawahPlay",
    slug: null,
    description: "Platform streaming kajian Islam tanpa iklan, memberikan pengalaman menonton yang nyaman dan fokus.",
    tech: ["Next.js", "TailwindCSS"],
    demo: "https://dawahplay.vercel.app",
    github: "https://github.com/cakfan",
  },
  {
    name: "DelokFilm",
    slug: null,
    description: "Platform web untuk browsing dan mengelola film serta drama Asia, terinspirasi dari MyDramaList.",
    tech: ["Next.js", "TypeScript", "Shadcn-UI", "Server Actions"],
    demo: "https://delokfilm.vercel.app",
    github: "https://github.com/cakfan/delok-film-web",
  },
  {
    name: "Introvesia.com",
    slug: null,
    description: "Berkontribusi sebagai volunteer dalam pengembangan platform untuk personal growth dan self-reflection.",
    tech: ["Next.js", "TypeScript"],
    demo: "https://introvesia.com",
    github: "https://github.com/Introvesia",
  },
  {
    name: "Dockeranium",
    slug: null,
    description: "Docker control panel modern — panel kontrol Docker berbasis web yang intuitif. Kontributor open-source.",
    tech: ["TypeScript"],
    demo: null,
    github: "https://github.com/Introvesia/dockeranium",
  },
  {
    name: "E-Commerce Admin & Store",
    slug: null,
    description: "Sistem manajemen e-commerce lengkap dengan admin dashboard dan toko online.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    demo: null,
    github: "https://github.com/cakfan/ecommerce-admin",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-section">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
            Projects
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Things I&apos;ve built
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-xl border bg-background overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {project.slug && (
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={`/projects/${project.slug}.jpg`}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label={`${project.name} demo`}
                      >
                        <ExternalLink size={16} />
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label={`${project.name} source code`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
