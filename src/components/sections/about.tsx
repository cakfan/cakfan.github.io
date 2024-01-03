import { Reveal } from "@/components/framer/reveal";
import { BrandIcons } from "@/components/icons/brand-icons";
import { aboutSite } from "@/config/about";

const AboutSection = () => {
  return (
    <section
      id="#about"
      className="flex min-h-screen w-full flex-col gap-6 px-24 py-12 opacity-80"
    >
      <div className="flex items-center gap-2">
        <Reveal>
          <h2 className="w-auto text-6xl font-black leading-normal tracking-tight">
            About<span className="text-primary">.</span>
          </h2>
        </Reveal>
        <hr className="flex-1" />
      </div>
      <div className="flex justify-between gap-12">
        <div className="description flex w-2/3 flex-col gap-8 text-pretty text-lg leading-relaxed">
          {aboutSite.about.map((about) => (
            <Reveal key={about}>
              <p>{about}</p>
            </Reveal>
          ))}
        </div>
        <div className="skills flex flex-1 flex-col gap-2">
          <Reveal>
            <h4 className="flex items-center gap-2 text-2xl font-semibold">
              <BrandIcons.terminal /> Use at work
            </h4>
          </Reveal>
          <ul className="flex w-full flex-wrap gap-2">
            {aboutSite.skills.map((skill) => (
              <Reveal key={skill}>
                <li className="w-auto rounded-md bg-foreground px-2 font-semibold text-background">
                  {skill}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
