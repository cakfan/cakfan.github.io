import TechBadge from "./ui/TechBadge";

const techs = [
  "Next.js", "React", "TypeScript", "TailwindCSS",
  "JavaScript", "Shadcn-UI", "Express.js", "NestJS",
  "Git", "Docker", "HTML5", "CSS3",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
            About
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            Crafting digital experiences through clean code & design
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m a Front-End Engineer based in Jember, Indonesia, with a
            passion for building fast, accessible, and user-centric web
            applications. I specialize in modern JavaScript frameworks and
            tools, turning complex problems into elegant solutions. When
            I&apos;m not coding, I enjoy exploring new technologies and
            contributing to open-source projects.
          </p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <TechBadge key={tech} label={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
