import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator, ClipboardList, Ruler, FileText, Home, Building2,
  Factory, Zap, Layers, GitMerge, Square, Wind, Droplets,
  Mountain, Paintbrush, ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Construction Estimating Services | Material Takeoff & Cost Estimates USA",
  description:
    "Comprehensive construction estimating services including material takeoffs, MEP estimation, commercial, residential, civil and specialty trade estimates. Serving contractors across all 50 states.",
  alternates: { canonical: `${SITE.url}/services` },
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Calculator, ClipboardList, Ruler, FileText, Home, Building2, Factory,
  Zap, Layers, GitMerge, Square, Wind, Droplets, Mountain, Paintbrush,
  Construction: Building2,
};

const categories = ["Core Services", "By Trade", "Specialty", "MEP", "Civil"];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }}
        />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Services</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Complete Construction Estimating Services
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From a single material takeoff to a full multi-trade estimate — BluePeak covers
              every scope, every trade, and every project type across the USA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services by category */}
      {categories.map((category) => {
        const categoryServices = SERVICES.filter((s) => s.category === category);
        if (categoryServices.length === 0) return null;
        return (
          <section key={category} className="section-padding even:bg-[#F6F8FB] odd:bg-white">
            <div className="container-custom">
              <Reveal direction="up">
                <SectionLabel>{category}</SectionLabel>
              </Reveal>
              <Reveal direction="up" delay={100}>
                <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1B1F24] mt-3 mb-10">
                  {category === "Core Services" && "Foundation of Every Project"}
                  {category === "By Trade" && "Residential, Commercial & Industrial"}
                  {category === "Specialty" && "Specialty Trade Estimates"}
                  {category === "MEP" && "Mechanical, Electrical & Plumbing"}
                  {category === "Civil" && "Civil & Site Work"}
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryServices.map((service, i) => {
                  const Icon = iconMap[service.icon] ?? Calculator;
                  return (
                    <Reveal key={service.slug} direction="up" delay={i * 60}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex flex-col bg-white border border-[#E6EAF0] rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-[#1565D8]/30 transition-all duration-300 h-full"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#EBF2FF] flex items-center justify-center mb-4 group-hover:bg-[#1565D8] transition-colors">
                          <Icon size={20} className="text-[#1565D8] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-heading text-base font-bold text-[#1B1F24] mb-2 group-hover:text-[#1565D8] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-4">
                          {service.description}
                        </p>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-[#1565D8]">
                          Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA />
    </>
  );
}
