import { Reveal } from "@/components/framer/reveal";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen w-2/3 flex-col justify-center p-24 opacity-80">
      <Reveal>
        <h2 className="flex-col text-pretty text-6xl font-black leading-normal tracking-tight">
          Hey, I&apos;m Taufan<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <Reveal>
        <h3 className="text-2xl font-light leading-normal">
          I&apos;m a{" "}
          <span className="font-black text-primary">Full Stack Developer</span>
        </h3>
      </Reveal>
      <Reveal>
        <p className="my-4 text-pretty text-lg leading-relaxed">
          I&apos;ve spent the last 5 years building and scaling software for
          some pretty cool companies. I also teach people to paint online
          (incase you&apos;ve got an empty canvas layin&apos; around 🎨).{" "}
          Let&apos;s connect!
        </p>
      </Reveal>
      <Reveal>
        <Button className="mt-4 bg-primary font-bold text-primary-foreground hover:bg-primary hover:text-primary-foreground">
          Contact me
        </Button>
      </Reveal>
    </section>
  );
};

export default HeroSection;
