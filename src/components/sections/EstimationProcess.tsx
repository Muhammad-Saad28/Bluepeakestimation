import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  Upload,
  Search,
  Ruler,
  Calculator,
  Send,
  RefreshCw,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Upload,
  Search,
  Ruler,
  Calculator,
  Send,
  RefreshCw,
};

export function EstimationProcess() {
  return (
    <section className="section-padding bg-[#082B6B] relative overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">
                Our Process
              </span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mt-4 mb-4">
              From Plans to Estimate in 6 Simple Steps
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg leading-relaxed">
              A streamlined process built for speed, accuracy, and your complete peace of mind.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Upload;
            return (
              <Reveal key={step.step} direction="up" delay={i * 80}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute top-5 right-5 text-5xl font-extrabold font-heading text-white/5 group-hover:text-white/10 transition-colors select-none">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1565D8]/30 border border-[#1565D8]/40 flex items-center justify-center mb-5 group-hover:bg-[#1565D8] group-hover:border-[#1565D8] transition-all">
                    <Icon size={22} className="text-[#2A7FFF] group-hover:text-white transition-colors" />
                  </div>

                  {/* Step label */}
                  <span className="text-xs font-bold text-[#2A7FFF] tracking-widest uppercase mb-2 block">
                    Step {step.step}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector arrow */}
                  {i < PROCESS_STEPS.length - 1 && i % 3 !== 2 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-px bg-white/20" />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal direction="up" delay={400}>
          <div className="text-center mt-14">
            <a
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#1565D8] hover:bg-[#2A7FFF] text-white font-bold rounded-xl transition-colors shadow-blue-lg text-base"
            >
              Start Your Estimate Today
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
