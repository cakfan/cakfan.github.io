import Hero from "@/components/home/hero";
import SelectedWork from "@/components/home/selected-work";
import AboutStrip from "@/components/home/about-strip";
import ContactCta from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutStrip />
      <ContactCta />
    </>
  );
}
