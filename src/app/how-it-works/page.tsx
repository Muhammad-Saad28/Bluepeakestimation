import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "How It Works",
  description: "How BluePeak Estimation turns plans into bid-ready estimates in four simple steps.",
  path: "/how-it-works",
});

const steps = [
  {
    step: "01",
    title: "Send Your Plans",
    description: "Upload drawings in any format - PDF, DWG, DXF, Revit, or ZIP.",
  },
  {
    step: "02",
    title: "We Confirm Scope",
    description: "We review the plans, identify the trades, and confirm pricing and turnaround.",
  },
  {
    step: "03",
    title: "Takeoffs & Pricing",
    description: "Our estimators complete detailed takeoffs priced to your zip code and market.",
  },
  {
    step: "04",
    title: "Receive Deliverables",
    description: "You get Excel, PDF markups, and a clear summary ready for review and bidding.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto max-w-container-max container-page">
          <div className="flex items-center gap-2 mb-6 text-on-primary/50 text-xs tracking-widest uppercase">
            <Link href="/" className="hover:text-on-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
            <span className="text-on-primary">How It Works</span>
          </div>
          <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">How It Works</p>
          <h1 className="mt-4 max-w-3xl font-display-lg text-display-lg leading-tight text-on-primary">
            Four steps from drawings to a completed estimate.
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
            BluePeak keeps the workflow simple: upload plans, confirm scope, receive takeoffs, and bid with confidence.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-container-max container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map((step) => (
              <article key={step.step} className="border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
                <p className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary">{step.step}</p>
                <h2 className="mt-4 font-headline-sm text-headline-sm text-primary">{step.title}</h2>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/20 bg-surface-container-low py-16 md:py-20">
        <div className="mx-auto max-w-container-max container-page text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
            Send your drawings and we will confirm the right estimating path for your project.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
              Request an Estimate
            </Link>
            <Link href="/samples" className="border border-outline-variant/30 px-8 py-4 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-lowest">
              View Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}