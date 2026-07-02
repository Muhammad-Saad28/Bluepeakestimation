import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/constants";

export function IndustriesServed() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <SectionLabel centered>Industries We Serve</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-4">
              Deep Expertise Across Every Sector
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              From single-family homes to billion-dollar infrastructure — we understand the
              nuances of every construction market.
            </p>
          </Reveal>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.slug} direction="up" delay={i * 50}>
              <Link
                href="/industries"
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
              >
                {/* Image */}
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B6B]/90 via-[#082B6B]/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-heading text-sm font-bold text-white">
                    {industry.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[#2A7FFF] text-xs font-medium">Explore</span>
                    <ArrowRight size={12} className="text-[#2A7FFF]" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={300}>
          <div className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[#1565D8] font-semibold hover:text-[#082B6B] transition-colors"
            >
              View All Industries
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
