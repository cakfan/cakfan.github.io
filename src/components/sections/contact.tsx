import { Reveal } from "@/components/framer/reveal";
import { aboutSite } from "@/config/about";
import { BrandIcons } from "@/components/icons/brand-icons";

const ContactSection = () => {
  return (
    <section className="flex min-h-screen w-2/3 flex-col items-center gap-4 p-24 opacity-80">
      <Reveal>
        <h2 className="flex-col text-pretty text-8xl font-black leading-normal tracking-tight">
          Contact<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-pretty text-center text-lg leading-relaxed">
          Shoot me an email if you want to connect! You can also find me on
          Linkedin or Twitter if that&apos;s more your speed.
        </p>
      </Reveal>

      <div className="mylinks flex items-center gap-4">
        {aboutSite.myLinks.map((link) => (
          <Reveal key={link.link}>
            <a
              href={link.link}
              target="_blank"
              className="hover:text-primary"
              title={link.title}
            >
              <link.icon className="h-5 w-5 fill-current" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
