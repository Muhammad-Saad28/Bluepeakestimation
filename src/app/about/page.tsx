import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About BluePeak Estimation | US Construction Estimating Company",
  description:
    "Learn about BluePeak Estimation — our story, mission, and the team of certified estimators delivering accurate construction cost estimates across all 50 US states.",
  alternates: { canonical: `${SITE.url}/about` },
};

const values = [
  {
    icon: Award,
    title: "Precision Over Speed",
    description:
      "We never sacrifice accuracy for turnaround. Every estimate is reviewed by a senior estimator before delivery.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We treat every client as a long-term partner. Your success in the bid process is our success.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We stay current with RSMeans updates, market fluctuations, and software advances to keep your bids competitive.",
  },
  {
    icon: CheckCircle,
    title: "Integrity First",
    description:
      "Honest pricing, transparent methods, and confidentiality on every project — always.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "BluePeak Founded",
    description: "Started as a boutique estimating firm serving residential contractors in the Northeast.",
  },
  {
    year: "2017",
    title: "Commercial Expansion",
    description: "Expanded services to commercial and industrial sectors, onboarding first Fortune 500 subcontractor.",
  },
  {
    year: "2019",
    title: "MEP Specialization",
    description: "Built dedicated MEP division with certified mechanical, electrical, and plumbing estimators.",
  },
  {
    year: "2021",
    title: "Nationwide Coverage",
    description: "Achieved full 50-state coverage with regional pricing databases for accurate local estimates.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Integrated AI-assisted takeoff tools, cutting turnaround time by 40% without sacrificing accuracy.",
  },
  {
    year: "2025",
    title: "5,000 Projects Milestone",
    description: "Delivered 5,000+ successful project estimates, maintaining an industry-leading 98% accuracy rate.",
  },
];

const stats = [
  { value: 5000, suffix: "+", label: "Projects Estimated" },
  { value: 98, suffix: "%", label: "Accuracy Rate" },
  { value: 50, suffix: "", label: "States Served" },
  { value: 10, suffix: "+", label: "Years in Business" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#082B6B] py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">About Us</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              The Estimating Partner<br />Contractors Trust
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Since 2015, BluePeak Estimation has delivered accurate, fast, and affordable
              construction cost estimates for contractors across America.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[#E6EAF0]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold font-heading text-[#082B6B]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#6B7280] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="BluePeak Estimation team at work"
                  width={600}
                  height={480}
                  className="rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#082B6B] text-white rounded-2xl p-6 shadow-xl hidden lg:block">
                  <div className="text-3xl font-extrabold">10+</div>
                  <div className="text-white/70 text-sm">Years of Excellence</div>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal direction="right">
                <SectionLabel>Our Story</SectionLabel>
              </Reveal>
              <Reveal direction="right" delay={100}>
                <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-6">
                  Built by Estimators, for the Construction Industry
                </h2>
              </Reveal>
              <Reveal direction="right" delay={200}>
                <div className="space-y-4 text-[#6B7280] leading-relaxed">
                  <p>
                    BluePeak Estimation was founded in 2015 by a team of senior construction
                    estimators who saw a clear gap in the market: contractors needed fast,
                    reliable estimates — but couldn't afford to hire full-time estimating staff.
                  </p>
                  <p>
                    We built a solution: an expert team delivering RSMeans-accurate estimates at
                    a fraction of the in-house cost. Within three years, we had served contractors
                    from Maine to California across residential, commercial, and industrial sectors.
                  </p>
                  <p>
                    Today, BluePeak serves contractors, developers, and subcontractors across all
                    50 states. Our 98% accuracy rate and 24–48 hour delivery have made us one
                    of the most trusted estimating firms in the USA.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="left">
              <div className="bg-white rounded-2xl p-10 border border-[#E6EAF0] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#082B6B] flex items-center justify-center mb-6">
                  <Award size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1B1F24] mb-4">Our Mission</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  To empower every contractor — from small residential builders to large commercial
                  firms — with the accurate, professional cost estimates they need to bid
                  confidently and build profitably.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="bg-[#082B6B] rounded-2xl p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <TrendingUp size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be the most trusted construction estimating firm in the United States —
                  where every contractor, regardless of size, has access to enterprise-grade
                  estimating expertise.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal direction="up">
              <SectionLabel centered>Core Values</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl font-extrabold text-[#1B1F24] mt-4">
                The Principles That Guide Every Estimate
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} direction="up" delay={i * 80}>
                  <div className="text-center p-8 rounded-2xl border border-[#E6EAF0] hover:border-[#1565D8]/30 hover:bg-[#F6F8FB] transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF2FF] flex items-center justify-center mx-auto mb-5">
                      <Icon size={26} className="text-[#1565D8]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#1B1F24] mb-3">{value.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal direction="up">
              <SectionLabel centered>Our Journey</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl font-extrabold text-[#1B1F24] mt-4">
                A Decade of Growth
              </h2>
            </Reveal>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-[#E6EAF0] lg:-translate-x-0.5" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                  <div className={`relative flex gap-8 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? "lg:pr-10 lg:text-right" : "lg:pl-10 lg:ml-auto"} pl-16 lg:pl-0`}>
                      <div className="bg-white rounded-xl p-6 border border-[#E6EAF0] shadow-sm">
                        <span className="text-[#1565D8] font-bold text-sm">{item.year}</span>
                        <h3 className="font-heading text-lg font-bold text-[#1B1F24] mt-1 mb-2">{item.title}</h3>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#1565D8] border-4 border-white shadow-sm flex-shrink-0" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
