import MetricStat from "@/components/work/metric-stat";
import TechStack from "@/components/ui/tech-stack";

export default function StylePreview() {
  return (
    <div className="container-section section-padding space-y-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Design System Preview
        </h1>
        <p className="text-muted-foreground text-lg">
          Temporary page — remove before production.
        </p>
      </div>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-border pb-2">Typography</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Heading — Instrument Serif</span>
            <h1 className="text-5xl font-normal mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Building for business results
            </h1>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Body — Geist</span>
            <p className="text-base mt-1 max-w-prose" style={{ fontFamily: "var(--font-body)" }}>
              Full-Stack Developer yang membangun untuk hasil bisnis, bukan cuma untuk demo. 
              Dibuktikan lewat produk nyata yang dipakai UMKM di Jember.
            </p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-border pb-2">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-16 rounded-lg border" style={{ backgroundColor: "#FAFAF7" }} />
            <span className="text-xs text-muted-foreground">Background Light<br />#FAFAF7</span>
          </div>
          <div className="space-y-2">
            <div className="h-16 rounded-lg border" style={{ backgroundColor: "#141412" }} />
            <span className="text-xs text-muted-foreground">Background Dark<br />#141412</span>
          </div>
          <div className="space-y-2">
            <div className="h-16 rounded-lg" style={{ backgroundColor: "#1A6B5C" }} />
            <span className="text-xs text-muted-foreground">Accent — Deep Teal<br />#1A6B5C</span>
          </div>
          <div className="space-y-2">
            <div className="h-16 rounded-lg bg-muted" />
            <span className="text-xs text-muted-foreground">Muted<br />OKLCH 92%</span>
          </div>
        </div>
      </section>

      {/* Metric Stat */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-border pb-2">Metric Stat</h2>
        <div className="flex gap-12 items-end">
          <MetricStat value="10+" label="Years in business" />
          <MetricStat value="16" label="Projects shipped" />
          <MetricStat value="98" label="Lighthouse score" />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-border pb-2">Tech Stack (Monochrome)</h2>
        <TechStack items={["Next.js", "TypeScript", "TailwindCSS", "React", "Shadcn-UI", "Docker"]} />
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-border pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
            Primary CTA
          </button>
          <button className="px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors">
            Secondary
          </button>
          <button
            className="px-6 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(var(--teal))" }}
          >
            Teal Accent
          </button>
        </div>
      </section>
    </div>
  );
}
