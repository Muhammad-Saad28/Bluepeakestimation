import Link from "next/link";
import { TRADE_CATALOG, groupCatalogItems } from "@/lib/catalog";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Trades",
  description:
    "Construction trades we estimate across MEP, structure, finishes, and site scopes. Explore every trade page with bid-ready deliverables and 24-48 hour turnaround.",
  path: "/trades",
});

const groupedTrades = groupCatalogItems(TRADE_CATALOG);

export default function TradesPage() {
  return (
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 px-margin-mobile md:px-margin-desktop lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">Trades</p>
            <h1 className="mt-4 font-display-lg text-display-lg leading-tight text-on-primary">
              Every construction trade. One estimating team.
            </h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
              From concrete foundations to rooftop finishes, we cover the major CSI trades with precise material takeoffs, labor calculations, and cost analysis.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="bg-secondary px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
                Get a Trade Estimate
              </Link>
              <Link href="/samples" className="border border-on-primary/30 px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
                See Samples
              </Link>
            </div>
          </div>
          <div className="relative z-10 hidden h-[440px] lg:block float-slow">
            <div className="absolute inset-0 rounded-3xl border border-on-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-2xl" />
            <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-secondary-fixed/20 bg-secondary-fixed/10" />
            <div className="absolute bottom-8 left-8 h-56 w-56 rounded-[2rem] border border-on-primary/10 bg-background/10 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/20 bg-surface-container-low py-8">
        <div className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-8 px-margin-mobile text-sm font-semibold uppercase tracking-[0.25em] text-outline md:px-margin-desktop">
          <span>24-48hr Turnaround</span>
          <span>96% Accuracy</span>
          <span>All 50 States</span>
          <span>Free Revisions</span>
          <span>No Retainers</span>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary">Construction Trades We Estimate</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              Organized by trade family so contractors can quickly find the scope they need and jump into a dedicated page.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedTrades).map(([category, items]) => (
              <section key={category}>
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-outline-variant/20 pb-4">
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">{category}</p>
                    <h3 className="mt-2 font-headline-sm text-headline-sm text-primary">{items.length} trade{items.length === 1 ? "" : "s"}</h3>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((trade) => (
                    <article key={trade.slug} className="premium-card group rounded-2xl p-8">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-2xl text-primary transition-transform duration-300 group-hover:scale-105">
                        <span className="material-symbols-outlined">{trade.icon}</span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">{trade.label}</p>
                      <h4 className="mt-2 font-headline-sm text-headline-sm text-primary">{trade.title}</h4>
                      <p className="mt-4 font-body-md text-body-md text-on-surface-variant">{trade.summary}</p>
                      <ul className="mt-6 space-y-2 text-sm text-on-surface-variant">
                        {trade.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex items-center justify-between gap-4">
                        <Link href={`/trades/${trade.slug}`} className="font-label-md text-label-md text-secondary transition-colors hover:text-primary hover:underline underline-offset-4">
                          View Trade
                        </Link>
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">Bid Ready</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-24 lg:py-32 border-y border-outline-variant/20">
        <div className="mx-auto grid max-w-container-max gap-12 px-margin-mobile md:px-margin-desktop lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">How we work</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">A trade-specific estimator for every scope.</h2>
            <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">
              We keep each trade organized with consistent markup, pricing structure, and senior review so the estimate reads cleanly regardless of scope size.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "MEP coverage",
              "Structure coverage",
              "Finishes coverage",
              "Site coverage",
              "Excel delivery",
              "PDF markups",
            ].map((item) => (
              <div key={item} className="border border-outline-variant/20 bg-background p-5 font-semibold text-primary shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Ready to estimate across every trade?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send us your drawings and we will handle single-trade or multi-trade estimating with the same fast, consistent workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
              Get Your Estimate
            </Link>
            <Link href="/services" className="border border-on-primary/30 px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
