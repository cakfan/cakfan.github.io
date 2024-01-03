import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
