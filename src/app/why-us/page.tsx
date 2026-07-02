import type { Metadata } from "next";
import {
  Target, Clock, DollarSign, Award, Shield, MapPin,
  FileCheck, Headphones, TrendingUp, CheckCircle, Star,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose BluePeak Estimation | Accuracy, Speed & Trust",
  description:
    "Discover why 500+ contractors trust BluePeak Estimation. 98% accuracy, 24–48hr delivery, certified estimators, NDA protection, and nationwide USA coverage.",
  alternates: { canonical: `${SITE.url}/why-us` },
};

const differentiators = [
  {
    icon: Target,
    title: "98% Accuracy Guarantee",
    description:
      "We don't just claim accuracy — we back it. Our estimates are built using current RSMeans cost data, live material pricing, and regional labor benchmarks. If your actual costs deviate by more than 5%, we'll review your project at no charge.",
    highlight: "98% accuracy rate across 5,000+ projects",
  },
  {
    icon: Clock,
    title: "Industry-Leading Turnaround",
    description:
      "Standard estimates delivered in 24–48 hours. Rush delivery available for time-sensitive bids. Our streamlined process — from plan receipt to final QA — is designed to never miss your deadline.",
    highlight: "Average 36-hour delivery time",
  },
  {
    icon: Award,
    title: "Certified Estimating Team",
    description:
      "Every estimate is performed by credentialed estimators holding ASPE, AACE, or AIQS certifications with 10+ years of field and estimating experience. Senior review on every project before delivery.",
    highlight: "ASPE & AACE certified professionals",
  },
  {
    icon: Shield,
    title: "NDA & Full Confidentiality",
    description:
      "Your plans, designs, and project details are never shared. We sign NDAs before reviewing any documents, and all project files are handled under strict confidentiality protocols.",
    highlight: "NDA signed before any document review",
  },
  {
    icon: DollarSign,
    title: "Transparent, Affordable Pricing",
    description:
      "No hidden fees. No hourly rates. Our project-based pricing means you know exactly what you're paying before work begins. Typically 80% less expensive than hiring an in-house estimator.",
    highlight: "Starting at $149 per estimate",
  },
  {
    icon: FileCheck,
    title: "All Software & Formats",
    description:
      "We accept any plan format — PDF, CAD, Revit — and deliver in Excel and PDF. Our takeoffs are performed in PlanSwift, Bluebeam Revu, and On-Screen Takeoff for maximum precision and traceability.",
    highlight: "PlanSwift, Bluebeam, RSMeans",
  },
];

const comparisons = [
  { feature: "Turnaround Time", bluepeak: "24–48 hours", inHouse: "1–2 weeks", competitor: "3–5 days" },
  { feature: "Accuracy Rate", bluepeak: "98%", inHouse: "Varies", competitor: "90–95%" },
  { feature: "Cost Per Estimate", bluepeak: "From $149", inHouse: "$150K+/yr", competitor: "From $249" },
  { feature: "NDA Protection", bluepeak: "Always", inHouse: "Internal", competitor: "On request" },
  { feature: "All 50 States", bluepeak: "✓", inHouse: "Limited", competitor: "Partial" },
  { feature: "Rush Delivery", bluepeak: "✓ 12hr option", inHouse: "Rarely", competitor: "Limited" },
  { feature: "Free Revisions", bluepeak: "1 included", inHouse: "Unlimited", competitor: "Additional cost" },
  { feature: "Software Used", bluepeak: "PlanSwift, Bluebeam, RSMeans", inHouse: "Varies", competitor: "PlanSwift" },
];

const certifications = [
  "ASPE — American Society of Professional Estimators",
  "AACE International — Association for the Advancement of Cost Engineering",
  "AIQS — Australian Institute of Quantity Surveyors",
  "RSMeans Certified Cost Data Users",
  "Bluebeam Revu Certified Professionals",
  "OSHA 30-Hour Construction Safety",
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Why Choose Us</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Why 500+ Contractors<br />Trust BluePeak Estimation
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We've built our reputation on three things: accuracy, speed, and integrity.
              Here's what sets us apart from the competition.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-[#E6EAF0]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 5000, suffix: "+", label: "Estimates Delivered" },
              { value: 98, suffix: "%", label: "Accuracy Rate" },
              { value: 500, suffix: "+", label: "Satisfied Clients" },
              { value: 10, suffix: "+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold font-heading text-[#082B6B]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#6B7280] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal direction="up">
              <SectionLabel centered>Our Advantages</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4">
                What Makes BluePeak Different
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} direction="up" delay={i * 70}>
                  <div className="bg-white rounded-2xl p-7 border border-[#E6EAF0] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF2FF] flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[#1565D8]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#1B1F24] mb-3">{item.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
                    <div className="flex items-center gap-2 pt-4 border-t border-[#E6EAF0]">
                      <Star size={13} className="fill-[#1565D8] text-[#1565D8]" />
                      <span className="text-xs font-semibold text-[#1565D8]">{item.highlight}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Reveal direction="up">
              <SectionLabel centered>Comparison</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl font-extrabold text-[#1B1F24] mt-4">
                BluePeak vs. The Alternatives
              </h2>
            </Reveal>
          </div>
          <Reveal direction="up" delay={200}>
            <div className="overflow-x-auto rounded-2xl border border-[#E6EAF0] shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#082B6B] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="px-6 py-4 font-semibold text-[#2A7FFF]">BluePeak Estimation</th>
                    <th className="px-6 py-4 font-semibold text-white/60">In-House Estimator</th>
                    <th className="px-6 py-4 font-semibold text-white/60">Typical Competitor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F6F8FB]"}>
                      <td className="px-6 py-4 font-medium text-[#374151]">{row.feature}</td>
                      <td className="px-6 py-4 text-center font-semibold text-[#1565D8]">{row.bluepeak}</td>
                      <td className="px-6 py-4 text-center text-[#6B7280]">{row.inHouse}</td>
                      <td className="px-6 py-4 text-center text-[#6B7280]">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Reveal direction="up">
              <SectionLabel centered>Credentials</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-2xl font-extrabold text-[#1B1F24] mt-4">
                Professional Certifications & Standards
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <Reveal key={cert} direction="up" delay={i * 60}>
                <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-[#E6EAF0]">
                  <CheckCircle size={16} className="text-[#1565D8] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#374151] leading-snug">{cert}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
