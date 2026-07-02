import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { STATS, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85"
          alt="Construction site — BluePeak Estimation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082B6B]/95 via-[#082B6B]/80 to-[#1565D8]/60" />
        {/* Blueprint grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <Reveal direction="down" delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">
                Trusted by 500+ Contractors Nationwide
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Accurate Construction{" "}
              <span className="text-[#2A7FFF]">Estimates</span>{" "}
              That Help You{" "}
              <span className="relative">
                Win More Bids
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#2A7FFF]/50 rounded-full" />
              </span>
              .
            </h1>
          </Reveal>

          {/* Sub-headline */}
          <Reveal direction="up" delay={200}>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Professional construction cost estimating for contractors across all 50 states.
              Residential, commercial, industrial &amp; MEP — delivered in{" "}
              <strong className="text-white">24–48 hours</strong> with{" "}
              <strong className="text-white">98% accuracy</strong>.
            </p>
          </Reveal>

          {/* Trust points */}
          <Reveal direction="up" delay={300}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {[
                "No upfront commitment",
                "NDA protected",
                "RSMeans pricing",
                "All trades covered",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#2A7FFF] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal direction="up" delay={400}>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                as="a"
                href="/contact#quote"
                variant="primary"
                size="xl"
                className="shadow-blue-lg"
              >
                Get Free Estimate
                <ArrowRight size={18} />
              </Button>
              <Button
                as="a"
                href={`tel:${SITE.phone}`}
                variant="white"
                size="xl"
              >
                <Phone size={16} />
                Call Now
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal direction="up" delay={500}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden max-w-3xl border border-white/15 shadow-2xl">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] px-6 py-5 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2000 + i * 200}
                  />
                </div>
                <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
