import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, DollarSign, Layers, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PROJECTS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Featured Construction Estimating Projects | BluePeak Estimation",
  description:
    "A portfolio of construction estimating projects by BluePeak Estimation — commercial towers, hospitals, industrial campuses, infrastructure, and residential developments across the USA.",
  alternates: { canonical: `${SITE.url}/projects` },
};

const trades = ["All", "Commercial", "Healthcare", "Industrial", "Civil", "Residential", "Education"];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Our Work</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Featured Projects
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A sample of the construction projects our estimating team has supported — from
              mixed-use towers to highway infrastructure across America.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          {/* Category pills */}
          <Reveal direction="up">
            <div className="flex flex-wrap gap-2 mb-10">
              {trades.map((trade) => (
                <button
                  key={trade}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    trade === "All"
                      ? "bg-[#082B6B] text-white"
                      : "bg-white border border-[#E6EAF0] text-[#6B7280] hover:border-[#1565D8] hover:text-[#1565D8]"
                  }`}
                >
                  {trade}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} direction="up" delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-[#E6EAF0] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#082B6B]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {project.trade}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#1565D8] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {project.value}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-heading text-lg font-bold text-[#1B1F24] mb-2 group-hover:text-[#1565D8] transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#9CA3AF] text-xs mb-3">
                      <span className="flex items-center gap-1"><MapPin size={11} />{project.location}</span>
                      <span className="flex items-center gap-1"><Layers size={11} />{project.sqft}</span>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA card */}
          <Reveal direction="up" delay={300}>
            <div className="mt-12 bg-[#082B6B] rounded-2xl p-10 text-center">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Have a Similar Project?
              </h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Let us provide an accurate estimate for your next construction project.
                No commitment required.
              </p>
              <a
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1565D8] hover:bg-[#2A7FFF] text-white font-bold rounded-xl transition-colors"
              >
                Request a Free Estimate <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
