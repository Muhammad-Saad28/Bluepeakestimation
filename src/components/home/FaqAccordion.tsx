"use client";
import { useState } from "react";

const faqItems = [
  { q: "What is your typical turnaround time?", a: "For most commercial and residential projects, we provide a complete estimate within 24-48 hours. Larger industrial projects may require 3-5 business days depending on complexity." },
  { q: "How do you ensure estimate accuracy?", a: "We utilize industry-leading software like Bluebeam and Planswift, integrated with RSMeans for localized pricing. Every estimate undergoes a dual-review process by a senior estimator." },
  { q: "Which trades do you cover?", a: "We provide comprehensive takeoffs for all CSI divisions, including Civil, Concrete, Masonry, Metals, Wood, Thermal/Moisture Protection, Openings, Finishes, Specialties, Equipment, MEP, and more." },
];

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-margin-mobile md:px-0">
      <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-10 md:mb-16">Frequently Asked Questions About <strong>Construction Estimating Services</strong></h2>
      <div className="space-y-4">
        {faqItems.map((item, i) => {
          const isOpen = openFaq === i;
          return (
            <div key={i} className="premium-card rounded-2xl overflow-hidden">
              <h3>
                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left bg-surface-container-low hover:bg-surface-container transition-all duration-300 gap-4"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  <span className="font-label-md text-label-md text-primary">{item.q}</span>
                  <span className="material-symbols-outlined text-secondary flex-shrink-0">{isOpen ? 'remove' : 'add'}</span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className={`px-6 md:px-8 py-5 md:py-6 bg-surface-container-lowest text-on-surface-variant text-sm transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
