"use client";

import { useState } from "react";
import { ShieldCheck, Clock, BadgeCheck, DollarSign, Settings2, Target, Plus, Minus } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Unmatched Accuracy",
    content: "Our estimators use advanced software and proven methodologies to deliver highly accurate takeoffs, minimizing errors and maximizing your profit margins."
  },
  {
    icon: Clock,
    title: "Saves Time and Money",
    content: "Outsourcing takeoffs reduces overhead and helps your team move faster on bids."
  },
  {
    icon: BadgeCheck,
    title: "Certified Estimators",
    content: "Our team consists of industry-certified professionals with years of hands-on experience across multiple construction trades."
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Estimates",
    content: "We provide competitive, flat-rate pricing with no hidden fees, allowing you to accurately budget for your pre-construction costs."
  },
  {
    icon: Settings2,
    title: "Customized Solutions",
    content: "Every project is unique. We tailor our estimating format and deliverables to match your specific requirements and bidding style."
  },
  {
    icon: Target,
    title: "Meet Your Deadlines",
    content: "With our guaranteed 24-48 hour turnaround times, you'll never miss a bid submission deadline again."
  }
];

export default function WhyChooseUsSection() {
  const [openIndex, setOpenIndex] = useState<number>(1); // Open the second one by default to match screenshot

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Content - Image */}
          <div className="relative w-full h-full min-h-[400px]">
            <div className="sticky top-24 w-full h-[600px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl flex items-center justify-center text-slate-400">
              <span className="text-sm">Estimator reviewing construction plans</span>
            </div>
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4">
              Frustrated by Inaccurate Bids and Lost Profits?
            </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#050F1E] leading-tight mb-6">
              Why Choose <span className="text-[#2563EB]">BluePeak Estimation?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              We help contractors win bids with detailed estimating, responsive support, and a workflow built to keep projects moving on time.
            </p>

            {/* Accordion */}
            <div className="space-y-3 mb-12">
              {benefits.map((benefit, index) => {
                const isOpen = openIndex === index;
                const Icon = benefit.icon;
                
                return (
                  <div 
                    key={index} 
                    className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`font-bold text-[15px] ${isOpen ? 'text-[#050F1E]' : 'text-slate-700'}`}>
                          {benefit.title}
                        </span>
                      </div>
                      <div className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'text-blue-600' : ''}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-5 pt-0 pl-[4.5rem] pr-8 text-slate-600 text-sm leading-relaxed">
                        {benefit.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#050F1E] rounded-xl p-6 text-center shadow-lg border border-slate-800">
                <div className="text-2xl font-extrabold text-white mb-1">3,200+</div>
                <div className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">Projects Delivered</div>
              </div>
              <div className="bg-[#050F1E] rounded-xl p-6 text-center shadow-lg border border-slate-800">
                <div className="text-2xl font-extrabold text-white mb-1">$500M+</div>
                <div className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">Construction Valued</div>
              </div>
              <div className="bg-[#050F1E] rounded-xl p-6 text-center shadow-lg border border-slate-800">
                <div className="text-2xl font-extrabold text-white mb-1">1,000+</div>
                <div className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">Satisfied Contractors</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
