import HomeHero from "@/components/home/home-hero";
import FeaturedCaseStudy from "@/components/home/featured-case-study";
import Philosophy from "@/components/home/philosophy";
import HomeCta from "@/components/home/home-cta";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedCaseStudy />
      <Philosophy />
      <HomeCta />
    </>
  );
}
