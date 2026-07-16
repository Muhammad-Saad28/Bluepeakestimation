import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Why BluePeak",
  description:
    "Discover why contractors choose BluePeak Estimation: 24-48 hour turnaround, 99.4% accuracy, certified estimators, CSI-formatted deliverables, and fixed-fee pricing with no retainers.",
  path: "/why-us",
});

const reasons = [
  {
    icon: "speed",
    title: "24-48 Hour Turnaround",
    description: "Bid windows don't wait. Our standard turnaround keeps your pipeline moving without sacrificing accuracy or scope detail.",
  },
  {
    icon: "verified",
    title: "99.4% Estimate Accuracy",
    description: "Our dual-review protocol and RSMeans-based pricing ensure every estimate reflects real-world conditions and current market costs.",
  },
  {
    icon: "groups",
    title: "Certified Estimators",
    description: "Every account is staffed with ASPE Certified Professional Estimators and AACE-accredited cost analysts.",
  },
  {
    icon: "description",
    title: "CSI-Formatted Deliverables",
    description: "All estimates follow CSI MasterFormat standards so your team can review, compare, and submit without reformatting.",
  },
  {
    icon: "lock",
    title: "NDA-Protected & Confidential",
    description: "Your drawings, pricing, and project data are protected by non-disclosure agreements. We never share your information.",
  },
  {
    icon: "payments",
    title: "Fixed-Fee, No Retainers",
    description: "Project-based pricing means you only pay when you need an estimate. No monthly commitments or surprise charges.",
  },
  {
    icon: "edit_note",
    title: "Free Revisions Included",
    description: "We include reasonable revisions when scope or drawing details change. Your estimate stays current through bid day.",
  },
  {
    icon: "map",
    title: "Nationwide Coverage",
    description: "We serve contractors and developers across all 50 states with local market knowledge and zip-code-based pricing.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">Why BluePeak</p>
          <h1 className="mt-4 max-w-3xl font-display-lg text-display-lg leading-tight text-on-primary">
            Why Contractors Trust BluePeak Estimation
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
            We help contractors win more bids with faster turnaround, clearer deliverables, and estimates built around real scope — not guesses.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="bg-secondary px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
              Request an Estimate
            </Link>
            <Link href="/about" className="border border-on-primary/30 px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary">Built for Contractors Who Need Reliable Numbers</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              Every aspect of our delivery is designed around one objective: helping you submit a competitive, accurate bid on time.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason, i) => (
              <article key={i} className="premium-card rounded-2xl p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-2xl text-primary">
                  <span className="material-symbols-outlined">{reason.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{reason.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Ready to experience the difference?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send your plans and get a precision estimate delivered in 24-48 hours.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
            Get Your Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
