import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyBluePeak } from "@/components/sections/WhyBluePeak";
import { EstimationProcess } from "@/components/sections/EstimationProcess";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Accurate Construction Estimates That Help You Win More Bids`,
  description:
    "Professional construction cost estimating services for contractors across all 50 states. Material takeoffs, MEP estimates, commercial & residential — delivered in 24–48 hours with 98% accuracy.",
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <WhyBluePeak />
      <EstimationProcess />
      <IndustriesServed />
      <FeaturedProjects />
      <Testimonials />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
