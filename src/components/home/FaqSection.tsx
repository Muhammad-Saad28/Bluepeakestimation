"use client";

import { useState } from "react";
import { ShieldCheck, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { question: "How fast will I receive my estimate?", answer: "Our standard turnaround time is 24-48 hours depending on the project scope and complexity." },
  { question: "What file formats do you accept?", answer: "We accept PDF, DWG, DXF, and standard image formats for construction plans." },
  { question: "How accurate are your estimates?", answer: "We maintain a 97% accuracy rate across all trades, cross-referencing local material pricing and labor rates." },
  { question: "Do you charge a monthly retainer?", answer: "No, we work on a per-project basis with flat-fee pricing so you only pay for what you need." },
  { question: "What trades do you cover?", answer: "We cover all Division 1-33 trades including MEP, drywall, framing, concrete, and more." },
  { question: "Do you serve all US states?", answer: "Yes, our team is equipped to handle construction estimates for projects in all 50 states." },
  { question: "What if I need revisions?", answer: "We offer free reasonable revisions to ensure the estimate perfectly matches your bidding strategy." },
  { question: "What is included in a typical estimate?", answer: "A typical estimate includes a detailed material takeoff, labor hours, color-coded plans, and an Excel summary sheet." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="lg:col-span-5 lg:pr-8">
            <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#050F1E] leading-tight mb-6">
              Frequently <br className="hidden lg:block"/>
              Asked <span className="text-[#2563EB]">Questions</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Quick answers to the questions we hear most often about turnaround, file formats, pricing, and revisions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Fixed-price quotes, clear scope, and support built around contractor deadlines.
                </p>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  If your question is not listed here, reach out and we will point you in the right direction.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className={`font-bold text-[15px] ${isOpen ? 'text-[#050F1E]' : 'text-slate-700'}`}>
                        {faq.question}
                      </span>
                      <div className={`text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'text-blue-600' : ''}`}>
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-5 pt-0 pr-12 text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
