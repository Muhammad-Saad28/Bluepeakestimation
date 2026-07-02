import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE, FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Construction Estimating Questions Answered",
  description:
    "Frequently asked questions about BluePeak Estimation's construction estimating services — turnaround times, accuracy, software, NDA, pricing, and more.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">FAQ</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Everything you need to know about working with BluePeak Estimation.
              Can't find your answer? Contact us directly.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
