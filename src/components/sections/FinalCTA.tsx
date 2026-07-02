import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#1565D8]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#082B6B]/30 rounded-full translate-y-1/2 -translate-x-1/4" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <Reveal direction="up">
          <span className="inline-block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Ready to Win More Bids?
          </span>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto mb-6">
            Let's Build Your Next Winning Bid Together.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Upload your plans and get a professional construction estimate delivered in
            24–48 hours — accurate, detailed, and bid-ready.
          </p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#082B6B] font-bold text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Free Estimate
              <ArrowRight size={18} />
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>
        </Reveal>
        <Reveal direction="up" delay={400}>
          <p className="text-white/50 text-sm mt-8">
            No commitment required · Confidential · Serving all 50 states
          </p>
        </Reveal>
      </div>
    </section>
  );
}
