import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Pricing",
  description: "BluePeak pricing is project-based, scope-driven, and built around fast bid turnaround without retainers.",
  path: "/pricing",
});

const pricingCards = [
  {
    name: "Single Trade",
    price: "Project-based",
    description: "Best for one trade or a tightly scoped takeoff package.",
    features: ["24-48 hour turnaround", "Excel + PDF delivery", "Scope notes included", "Free revisions"],
  },
  {
    name: "Multi-Trade",
    price: "Custom quote",
    description: "For projects that span multiple scopes and need coordinated pricing.",
    features: ["Combined trade review", "CSI-style organization", "Bid-ready summary", "Dedicated estimator"],
  },
  {
    name: "Rush Delivery",
    price: "Expedited",
    description: "For deadline-driven bids that need priority handling.",
    features: ["Priority queue", "Fast scope confirmation", "Direct communication", "Deadline support"],
  },
];

const pricingNotes = [
  "Pricing depends on scope size, trade mix, drawing quality, and delivery timeline.",
  "We do not require retainers or monthly commitments.",
  "Every estimate includes a clean deliverable format your team can review quickly.",
  "Revisions are included when drawings or scope details change within reason.",
];

export default function PricingPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex-1">
      <section className="bg-[#050F1E] text-white py-16 md:py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Pricing</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Project-based pricing built around scope, trade mix, and turnaround. No retainers. No surprise charges.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3 mb-16">
          {pricingCards.map((card) => (
            <article key={card.name} className="premium-card rounded-2xl p-8 flex flex-col">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#2563EB] mb-4">{card.name}</p>
              <h2 className="text-3xl font-extrabold text-[#050F1E] mb-3">{card.price}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">{card.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-bold transition-colors">
                Request a Quote
              </Link>
            </article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="premium-card rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-[#050F1E] mb-4">What affects pricing</h2>
            <div className="h-1 w-16 bg-[#2563EB] mb-8" />
            <div className="grid gap-4 md:grid-cols-2">
              {pricingNotes.map((note) => (
                <div key={note} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700 leading-relaxed transition-transform duration-300 hover:-translate-y-1 hover:border-[#1E40AF]/30">
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#050F1E] text-white rounded-2xl shadow-sm border border-slate-800 p-10 premium-card">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400 mb-4">Need a fast quote?</p>
            <h2 className="text-2xl font-extrabold mb-4">Send your plans and we will price the scope.</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Upload the drawings, tell us the trade or project type, and we will confirm the best pricing path for your bid.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-bold transition-colors">
                Get Estimate
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-md font-bold transition-colors">
                <ArrowLeft className="w-5 h-5 rotate-180" /> How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
