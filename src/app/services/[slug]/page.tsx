import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Clock, Target, Shield } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SERVICES, SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Services | BluePeak Estimation`,
    description: `Professional ${service.title.toLowerCase()} services for contractors across all 50 US states. Accurate estimates delivered in 24–48 hours. ${service.description}`,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
  };
}

const serviceBenefits: Record<string, string[]> = {
  "construction-estimating": [
    "Comprehensive line-item cost breakdown",
    "RSMeans labor and material pricing",
    "Regional cost adjustments for your state",
    "Profit and overhead analysis",
    "Excel and PDF deliverable formats",
    "One free revision included",
  ],
  "material-takeoff": [
    "Digital takeoff using PlanSwift and Bluebeam",
    "All materials quantified from plans",
    "Organized by CSI division",
    "Detailed material schedules",
    "Compatible with your estimating software",
    "Same-day rush available",
  ],
  "mep-estimation": [
    "Full MEP system breakdowns",
    "Ductwork, piping, conduit quantities",
    "Equipment and labor pricing",
    "Coordination with GC estimates",
    "SMACNA and NFPA compliant",
    "Detailed system schematics reference",
  ],
};

const defaultBenefits = [
  "Accurate, detailed line-item estimates",
  "24–48 hour standard turnaround",
  "RSMeans cost data used throughout",
  "Regional pricing for your specific state",
  "Excel and PDF deliverable formats",
  "Senior estimator review on every project",
];

const serviceProcess = [
  { step: "01", title: "Submit Your Plans", desc: "Upload PDF, CAD, or Revit files via email or our secure portal." },
  { step: "02", title: "Scope Review", desc: "Our estimator reviews all documents and confirms project scope." },
  { step: "03", title: "Quantity Takeoff", desc: "Digital takeoff performed using PlanSwift, Bluebeam, or OST." },
  { step: "04", title: "Pricing & Delivery", desc: "Costs applied via RSMeans. Delivered in Excel & PDF within 24–48hrs." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const benefits = serviceBenefits[slug] ?? defaultBenefits;
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "BluePeak Estimation",
      url: SITE.url,
    },
    description: service.description,
    areaServed: { "@type": "Country", name: "United States" },
    url: `${SITE.url}/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="max-w-2xl">
            <Reveal direction="up">
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF] mb-4">
                {service.category}
              </span>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
                {service.title} Services
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {service.description} Available nationwide across all 50 US states with
                24–48 hour standard turnaround.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1565D8] hover:bg-[#2A7FFF] text-white font-bold rounded-xl transition-colors"
                >
                  Get Free Estimate <ArrowRight size={16} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Ask a Question
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-10 border-b border-[#E6EAF0] bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {[
              { icon: Clock, label: "Turnaround", value: "24–48 hrs" },
              { icon: Target, label: "Accuracy Rate", value: "98%" },
              { icon: Shield, label: "States Served", value: "All 50" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#1565D8]" />
                </div>
                <div>
                  <div className="font-bold text-[#1B1F24]">{value}</div>
                  <div className="text-[#6B7280] text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <Reveal direction="left">
                <SectionLabel>What You Get</SectionLabel>
              </Reveal>
              <Reveal direction="left" delay={100}>
                <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1B1F24] mt-4 mb-6">
                  What's Included in Every {service.shortTitle} Estimate
                </h2>
              </Reveal>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <Reveal key={benefit} direction="left" delay={i * 60}>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#1565D8] mt-0.5 flex-shrink-0" />
                      <span className="text-[#374151] leading-relaxed">{benefit}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal direction="left" delay={400}>
                <div className="mt-8 p-6 bg-[#EBF2FF] rounded-2xl border border-[#1565D8]/20">
                  <p className="text-[#082B6B] font-semibold text-sm mb-1">
                    Not sure what you need?
                  </p>
                  <p className="text-[#374151] text-sm">
                    Contact us and we'll recommend the right estimating package for your project.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-[#1565D8] hover:text-[#082B6B] transition-colors"
                  >
                    Talk to an Estimator <ArrowRight size={13} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Process */}
            <div>
              <Reveal direction="right">
                <SectionLabel>Our Process</SectionLabel>
              </Reveal>
              <Reveal direction="right" delay={100}>
                <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1B1F24] mt-4 mb-6">
                  How It Works
                </h2>
              </Reveal>
              <div className="space-y-5">
                {serviceProcess.map((step, i) => (
                  <Reveal key={step.step} direction="right" delay={i * 80}>
                    <div className="flex gap-5">
                      <div className="w-10 h-10 rounded-xl bg-[#082B6B] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1B1F24] mb-1">{step.title}</h3>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <Reveal direction="up">
            <h2 className="font-heading text-2xl font-extrabold text-[#1B1F24] mb-8">
              Related Services
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((s, i) => (
              <Reveal key={s.slug} direction="up" delay={i * 80}>
                <a
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-white p-5 rounded-xl border border-[#E6EAF0] hover:border-[#1565D8]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center group-hover:bg-[#1565D8] transition-colors flex-shrink-0">
                    <ArrowRight size={16} className="text-[#1565D8] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B1F24] text-sm group-hover:text-[#1565D8] transition-colors">{s.title}</div>
                    <div className="text-[#9CA3AF] text-xs">{s.category}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
