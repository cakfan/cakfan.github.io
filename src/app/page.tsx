import Hero from "@/components/Hero";
import About from "@/components/About";
import LocalBusiness from "@/components/LocalBusiness";
import Projects from "@/components/Projects";
import ExperienceSection from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LocalBusiness />
      <Projects />
      <ExperienceSection />
      <Contact />
    </>
  );
}
