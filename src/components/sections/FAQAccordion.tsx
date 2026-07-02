"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#F6F8FB]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <Reveal direction="up">
              <SectionLabel>FAQ</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-4">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                Everything you need to know about our estimating services. Have more
                questions? We're happy to help.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565D8] text-white font-semibold rounded-xl hover:bg-[#0E4DB3] transition-colors"
              >
                Ask a Question
              </a>
            </Reveal>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, 8).map((item, i) => (
              <Reveal key={item.question} direction="right" delay={i * 50}>
                <div className="bg-white border border-[#E6EAF0] rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-[#F6F8FB] transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-semibold text-[#1B1F24] text-sm leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-[#1565D8] flex-shrink-0 mt-0.5 transition-transform duration-200",
                        openIndex === i && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === i ? "max-h-64" : "max-h-0"
                    )}
                  >
                    <div className="px-6 pb-5 text-[#6B7280] text-sm leading-relaxed border-t border-[#E6EAF0] pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal direction="up" delay={400}>
              <div className="text-center pt-4">
                <a
                  href="/faq"
                  className="text-sm font-semibold text-[#1565D8] hover:text-[#082B6B] transition-colors"
                >
                  View all FAQs →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
