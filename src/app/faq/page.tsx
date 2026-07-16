import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

const steps = [
  ["01", "Send Your Plans", "Upload drawings in PDF, DWG, DXF, Revit, or ZIP format."],
  ["02", "We Confirm Scope", "We review the documents, identify the trades, and confirm the timeline."],
  ["03", "Takeoffs & Pricing", "Our estimators build the quantities and price them to the project location."],
  ["04", "Receive Deliverables", "You get Excel, PDF markups, and a bid-ready summary."],
];

const faqs = [
  ["How fast will I receive my estimate?", "Most estimates are delivered in 24-48 hours depending on the scope and drawing set."],
  ["What file formats do you accept?", "We accept PDF, DWG, DXF, Revit, ZIP, PNG, and JPG plan sets."],
  ["What trades do you cover?", "We cover services, trades, sample deliverables, and multi-trade packages across CSI divisions."],
  ["Do you charge monthly retainers?", "No. We use project-based pricing so you only pay when you need an estimate."],
  ["What is included in a typical estimate?", "Quantities, scope notes, clean deliverables, and a format your team can review quickly."],
  ["Can I request revisions?", "Yes. Reasonable revisions are included when the scope or drawing set changes."],
];

export const metadata = generatePageMetadata({
  title: "FAQ",
  description: "BluePeak Estimation FAQs and a simple four-step overview of how the estimating process works.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto max-w-container-max container-page">
          <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">How It Works</p>
          <h1 className="mt-4 max-w-3xl font-display-lg text-display-lg leading-tight text-on-primary">
            Four simple steps, then a bid-ready estimate.
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
            The same process, whether you need one trade or a coordinated multi-scope package.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-container-max container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map(([step, title, description]) => (
              <article key={step} className="premium-card rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{step}</p>
                <h2 className="mt-4 font-headline-sm text-headline-sm text-primary">{title}</h2>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/20 bg-surface-container-low section-padding">
        <div className="mx-auto max-w-container-max container-page">
          <div className="mb-12 max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">FAQ</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">Common questions from contractors</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="premium-card rounded-2xl p-6 group">
                <summary className="cursor-pointer list-none font-label-md text-label-md text-primary flex items-center justify-between gap-6">
                  <span>{question}</span>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-45">add</span>
                </summary>
                <p className="mt-4 pr-8 font-body-md text-body-md text-on-surface-variant">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-on-primary">
        <div className="mx-auto max-w-container-max container-page text-center">
          <h2 className="font-headline-lg text-headline-lg">Need a bid started today?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send your plans and we will match the right service, trade, or sample format to your scope.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
              Request an Estimate
            </Link>
            <Link href="/samples" className="border border-on-primary/30 px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
              View Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

