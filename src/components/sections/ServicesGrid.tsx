import Link from "next/link";
import {
  Calculator,
  ClipboardList,
  Ruler,
  FileText,
  Home,
  Building2,
  Factory,
  Zap,
  Layers,
  Wind,
  Droplets,
  Mountain,
  Paintbrush,
  GitMerge,
  Square,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Calculator,
  ClipboardList,
  Ruler,
  FileText,
  Home,
  Building2,
  Factory,
  Zap,
  Layers,
  GitMerge,
  Square,
  Wind,
  Droplets,
  Mountain,
  Paintbrush,
  Construction: Building2,
};

const featuredServices = SERVICES.slice(0, 9);

export function ServicesGrid() {
  return (
    <section className="section-padding bg-[#F6F8FB]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <SectionLabel centered>Our Services</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-4">
              Every Trade. Every Project. One Trusted Partner.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              From a single material takeoff to a full project cost estimate, BluePeak covers
              every trade and every phase of construction.
            </p>
          </Reveal>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Calculator;
            return (
              <Reveal key={service.slug} direction="up" delay={i * 60}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col bg-white rounded-2xl p-7 border border-[#E6EAF0] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2FF] flex items-center justify-center mb-5 group-hover:bg-[#1565D8] transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#1565D8] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Category badge */}
                  <span className="inline-block text-xs font-semibold text-[#1565D8] bg-[#EBF2FF] px-2.5 py-1 rounded-full mb-3 w-fit">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#1B1F24] mb-3 group-hover:text-[#1565D8] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-[#1565D8]">
                    <span>Learn More</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View all CTA */}
        <Reveal direction="up" delay={200}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#082B6B] text-white font-semibold rounded-xl hover:bg-[#1565D8] transition-colors shadow-navy-sm"
            >
              View All 18 Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
