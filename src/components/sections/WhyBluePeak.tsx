import {
  Target,
  Clock,
  DollarSign,
  Award,
  Headphones,
  MapPin,
  Shield,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: Target,
    title: "98% Accuracy Guaranteed",
    description:
      "Our estimates are backed by RSMeans cost data, current material pricing, and regional labor rates — so your numbers hold up in the field.",
  },
  {
    icon: Clock,
    title: "24–48 Hour Turnaround",
    description:
      "Fast delivery without sacrificing quality. Most estimates are completed within 24–48 hours. Rush delivery available.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Fraction of the cost of hiring an in-house estimator. Transparent, project-based pricing with no hidden fees.",
  },
  {
    icon: Award,
    title: "Certified Estimators",
    description:
      "Our team holds certifications from ASPE, AACE, and AIQS. Every estimate is reviewed by a senior estimator before delivery.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Your dedicated project manager is available throughout the process to answer questions and ensure accuracy.",
  },
  {
    icon: MapPin,
    title: "USA-Wide Coverage",
    description:
      "We serve contractors and developers across all 50 states with region-specific labor rates and material costs.",
  },
  {
    icon: Shield,
    title: "NDA & Confidentiality",
    description:
      "Your plans and project details are fully protected. We sign NDAs before reviewing any project documents.",
  },
  {
    icon: FileCheck,
    title: "All Formats Accepted",
    description:
      "PDF, CAD, Revit, Bluebeam — we work with any plan format and deliver estimates in Excel and PDF.",
  },
  {
    icon: TrendingUp,
    title: "Win More Bids",
    description:
      "Our clients report a 3× improvement in bid-win rates after switching to professional estimating services.",
  },
];

export function WhyBluePeak() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <SectionLabel centered>Why BluePeak</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-4">
              The Standard in Construction Estimating
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              We combine technology, experience, and precision to deliver estimates that give
              you a real competitive edge on every bid.
            </p>
          </Reveal>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} direction="up" delay={i * 70}>
                <div className="group flex gap-5 p-6 rounded-2xl border border-[#E6EAF0] hover:border-[#1565D8]/30 hover:bg-[#F6F8FB] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#EBF2FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1565D8] transition-colors">
                    <Icon
                      size={20}
                      className="text-[#1565D8] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#1B1F24] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
