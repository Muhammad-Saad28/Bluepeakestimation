import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | Affordable Construction Estimating Plans",
  description:
    "Transparent, project-based pricing for professional construction estimating. Starting at $149. No hidden fees, no hourly rates — just accurate estimates delivered fast.",
  alternates: { canonical: `${SITE.url}/pricing` },
};

const plans = [
  {
    name: "Basic Takeoff",
    price: "$149",
    description: "Perfect for small residential projects and single-trade takeoffs.",
    turnaround: "48 hours",
    bestFor: "Single-family homes, renovations",
    features: [
      "Up to 5,000 sq ft",
      "Single trade takeoff",
      "PDF & Excel deliverable",
      "Material quantities only",
      "1 revision included",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional Estimate",
    price: "$349",
    description: "The most popular plan for commercial and multi-trade projects.",
    turnaround: "36 hours",
    bestFor: "Commercial TI, multi-trade projects",
    features: [
      "Up to 50,000 sq ft",
      "Up to 3 trades included",
      "Full cost estimate with labor",
      "RSMeans pricing included",
      "Bid-ready format",
      "2 revisions included",
      "Priority email & phone support",
      "Project manager assigned",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scope estimating for large, complex, and multi-phase projects.",
    turnaround: "Custom SLA",
    bestFor: "Large commercial, industrial, infrastructure",
    features: [
      "Unlimited project size",
      "All trades covered",
      "Full MEP + civil + structural",
      "Value engineering analysis",
      "Phased construction pricing",
      "Unlimited revisions",
      "Dedicated estimating team",
      "NDA + confidentiality agreement",
      "24/7 support access",
    ],
    cta: "Contact for Quote",
    highlighted: false,
  },
];

const addons = [
  { name: "Rush Delivery (12 hours)", price: "+$99" },
  { name: "Additional Trade", price: "+$79/trade" },
  { name: "Value Engineering Report", price: "+$149" },
  { name: "Bid Package Preparation", price: "+$199" },
  { name: "Monthly Retainer (5 estimates)", price: "$999/mo" },
  { name: "NDA Signing", price: "Free" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Pricing</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Transparent, Project-Based Pricing
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              No hourly rates. No hidden fees. Pay per project and know exactly what
              you're getting before work begins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} direction="up" delay={i * 100}>
                <div
                  className={`relative flex flex-col rounded-2xl overflow-hidden h-full ${
                    plan.highlighted
                      ? "bg-[#082B6B] shadow-2xl ring-2 ring-[#1565D8] scale-[1.02]"
                      : "bg-white border border-[#E6EAF0] shadow-card"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-[#1565D8] text-white text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${plan.highlighted ? "pt-12" : ""} flex flex-col flex-1`}>
                    <h2
                      className={`font-heading text-xl font-bold mb-2 ${
                        plan.highlighted ? "text-white" : "text-[#1B1F24]"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/60" : "text-[#6B7280]"}`}>
                      {plan.description}
                    </p>
                    <div className="mb-2">
                      <span
                        className={`text-4xl font-extrabold font-heading ${
                          plan.highlighted ? "text-white" : "text-[#082B6B]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className={`text-sm ml-1 ${plan.highlighted ? "text-white/50" : "text-[#9CA3AF]"}`}>
                          /estimate
                        </span>
                      )}
                    </div>
                    <div className={`flex items-center gap-2 text-xs mb-6 ${plan.highlighted ? "text-[#2A7FFF]" : "text-[#1565D8]"}`}>
                      <Zap size={12} />
                      <span className="font-semibold">{plan.turnaround} delivery</span>
                    </div>
                    <div className={`text-xs font-medium mb-5 ${plan.highlighted ? "text-white/50" : "text-[#9CA3AF]"}`}>
                      Best for: {plan.bestFor}
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            size={15}
                            className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-[#2A7FFF]" : "text-[#1565D8]"}`}
                          />
                          <span className={`text-sm ${plan.highlighted ? "text-white/80" : "text-[#374151]"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={plan.price === "Custom" ? "/contact" : "/contact#quote"}
                      className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                        plan.highlighted
                          ? "bg-[#1565D8] hover:bg-[#2A7FFF] text-white"
                          : "bg-[#EBF2FF] hover:bg-[#1565D8] text-[#1565D8] hover:text-white"
                      }`}
                    >
                      {plan.cta} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Add-ons */}
          <Reveal direction="up" delay={300}>
            <div className="mt-16 max-w-2xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-[#1B1F24] text-center mb-8">
                Optional Add-Ons
              </h3>
              <div className="bg-white rounded-2xl border border-[#E6EAF0] overflow-hidden">
                {addons.map((addon, i) => (
                  <div
                    key={addon.name}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i < addons.length - 1 ? "border-b border-[#E6EAF0]" : ""
                    }`}
                  >
                    <span className="text-[#374151] text-sm">{addon.name}</span>
                    <span className="font-bold text-[#082B6B] text-sm">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Money-back note */}
          <Reveal direction="up" delay={400}>
            <div className="text-center mt-12">
              <p className="text-[#6B7280] text-sm">
                Not satisfied? We offer a{" "}
                <strong className="text-[#1B1F24]">100% satisfaction guarantee</strong>
                {" "}— we'll revise until you're happy or refund your payment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
