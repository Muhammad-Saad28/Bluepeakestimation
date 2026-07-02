import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { INDUSTRIES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries We Serve | Construction Estimating for All Sectors",
  description:
    "BluePeak Estimation serves commercial, residential, industrial, healthcare, education, government, infrastructure, and specialty construction sectors across all 50 US states.",
  alternates: { canonical: `${SITE.url}/industries` },
};

const industryDetails: Record<string, { overview: string; services: string[] }> = {
  commercial: {
    overview:
      "Commercial construction encompasses office towers, retail centers, hotels, mixed-use developments, and corporate campuses. Our estimators understand the complexity of commercial projects — multiple trades, phased construction, tenant improvements, and life safety systems.",
    services: ["Full project CSI estimates", "Tenant improvement buildouts", "Shell & core pricing", "MEP coordination estimates", "Value engineering support"],
  },
  residential: {
    overview:
      "From luxury custom homes to large multi-family developments, residential construction requires precise material takeoffs and accurate labor pricing. We serve home builders, developers, and contractors at every scale.",
    services: ["Single-family home estimates", "Multi-family & condo projects", "Renovation & addition pricing", "Production builder packages", "Custom spec home estimates"],
  },
  industrial: {
    overview:
      "Industrial facilities demand rigorous estimating across structural steel, concrete, mechanical systems, and specialized equipment. Our industrial estimators have deep experience with manufacturing plants, warehouses, and processing facilities.",
    services: ["Warehouse & distribution centers", "Manufacturing plant estimates", "Food processing facilities", "Cold storage & refrigeration", "Heavy civil & foundations"],
  },
  healthcare: {
    overview:
      "Healthcare construction is highly regulated and technically complex. We understand the specialized requirements of hospitals, surgical centers, labs, and outpatient clinics — including clean rooms, medical gas systems, and infection control.",
    services: ["Hospital & clinic estimates", "Surgical suite MEP", "Medical office buildouts", "Lab & cleanroom pricing", "Imaging center construction"],
  },
  education: {
    overview:
      "School and university construction requires balancing tight budgets with demanding specifications. Our estimators work with K-12 districts, universities, and charter schools on new buildings, renovations, and campus expansions.",
    services: ["K-12 school new construction", "University building estimates", "Gymnasium & athletic facilities", "Science lab construction", "Campus infrastructure"],
  },
  government: {
    overview:
      "Government projects demand compliance with prevailing wage, Davis-Bacon Act, Buy America requirements, and strict specification standards. Our estimators are experienced in federal, state, and municipal construction.",
    services: ["Federal facility estimates", "Prevailing wage pricing", "Military construction (MILCON)", "Courthouse & civic buildings", "Public safety facilities"],
  },
  infrastructure: {
    overview:
      "Civil infrastructure projects — bridges, highways, airports, transit — require specialized earthwork, structural, and utility estimating. We provide detailed civil estimates for DOT, port authority, and transit agency projects.",
    services: ["Bridge & structure estimates", "Highway & roadway projects", "Airport infrastructure", "Transit & rail systems", "Utility & pipeline projects"],
  },
  retail: {
    overview:
      "Retail construction — from small boutique buildouts to large shopping centers — requires fast, competitive pricing. Our estimators understand retail timelines, prototype rollouts, and landlord delivery conditions.",
    services: ["Big-box retail estimates", "Shopping center shell & TI", "Restaurant & QSR buildouts", "Prototype rollout packages", "Anchor tenant construction"],
  },
  energy: {
    overview:
      "Energy sector construction includes solar farms, wind projects, substations, and utility-scale infrastructure. Our estimators work with EPC contractors, developers, and utilities on renewable and conventional energy projects.",
    services: ["Solar farm civil & electrical", "Wind project foundation & balance of plant", "Substation & switchyard estimates", "Battery storage systems", "O&M facility construction"],
  },
  hospitality: {
    overview:
      "Hotel, resort, and restaurant construction combines architectural complexity with demanding MEP requirements. We understand hospitality brand standards, FF&E coordination, and the tight schedules that drive hospitality construction.",
    services: ["Hotel new construction", "Resort & amenity packages", "Restaurant & food service", "Spa & wellness facility", "Convention center estimates"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Industries</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Industries We Serve
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Deep sector expertise across every construction vertical — from single-family
              homes to billion-dollar infrastructure programs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      {INDUSTRIES.map((industry, i) => {
        const details = industryDetails[industry.slug];
        const isEven = i % 2 === 0;
        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className={`section-padding ${isEven ? "bg-white" : "bg-[#F6F8FB]"}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <Reveal direction={isEven ? "left" : "right"}>
                  <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={industry.image}
                      alt={`${industry.title} construction estimating`}
                      width={600}
                      height={400}
                      className="rounded-2xl object-cover shadow-xl w-full"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                  </div>
                </Reveal>
                {/* Content */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <Reveal direction={isEven ? "right" : "left"}>
                    <SectionLabel>{industry.title}</SectionLabel>
                  </Reveal>
                  <Reveal direction={isEven ? "right" : "left"} delay={100}>
                    <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1B1F24] mt-4 mb-4">
                      {industry.title} Construction Estimating
                    </h2>
                  </Reveal>
                  <Reveal direction={isEven ? "right" : "left"} delay={200}>
                    <p className="text-[#6B7280] leading-relaxed mb-6">
                      {details?.overview ?? industry.description}
                    </p>
                  </Reveal>
                  {details?.services && (
                    <div className="space-y-2.5 mb-6">
                      {details.services.map((service, j) => (
                        <Reveal key={service} direction={isEven ? "right" : "left"} delay={280 + j * 50}>
                          <div className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-[#1565D8] flex-shrink-0" />
                            <span className="text-[#374151] text-sm">{service}</span>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  )}
                  <Reveal direction={isEven ? "right" : "left"} delay={500}>
                    <a
                      href="/contact#quote"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565D8] text-white font-semibold rounded-xl hover:bg-[#0E4DB3] transition-colors"
                    >
                      Get {industry.title} Estimate <ArrowRight size={15} />
                    </a>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA />
    </>
  );
}
