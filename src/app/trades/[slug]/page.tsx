import { notFound } from "next/navigation";
import Link from "next/link";
import { getCatalogItem, TRADE_CATALOG } from "@/lib/catalog";
import { generatePageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TRADE_CATALOG.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const trade = getCatalogItem(slug);

  if (!trade) {
    return generatePageMetadata({
      title: "Trade",
      description: "Construction trade estimating details.",
      path: `/trades/${slug}`,
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: trade.title,
    description: trade.summary,
    path: `/trades/${trade.slug}`,
  });
}

export default async function TradeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trade = getCatalogItem(slug);

  if (!trade) {
    notFound();
  }

  return (
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 px-margin-mobile md:px-margin-desktop lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-on-primary/70">
              <Link href="/" className="transition-colors hover:text-on-primary">Home</Link>
              <span>/</span>
              <Link href="/trades" className="transition-colors hover:text-on-primary">Trades</Link>
              <span>/</span>
              <span className="text-secondary-fixed">{trade.title}</span>
            </div>
            <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">{trade.label}</p>
            <h1 className="mt-4 font-display-lg text-display-lg leading-tight text-on-primary">{trade.title}</h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">{trade.description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="bg-secondary px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
                Request Estimate
              </Link>
              <Link href="/samples" className="border border-on-primary/30 px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
                View Samples
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trade.stats.map((stat) => (
                <div key={stat.label} className="border border-on-primary/10 bg-on-primary/5 p-5 text-center">
                  <div className="font-headline-sm text-headline-sm text-on-primary">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-primary/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 hidden h-[440px] lg:block float-slow">
            <div className="absolute inset-0 rounded-3xl border border-on-primary/10 bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${trade.heroImage})` }} />
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-5 shadow-xl backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">Category</p>
              <p className="mt-2 font-headline-sm text-headline-sm text-primary">{trade.category}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-container-max gap-16 px-margin-mobile md:px-margin-desktop lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">Trade scope</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">{trade.title} for contractor bidding.</h2>
            <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">{trade.overview}</p>
            <div className="mt-10 space-y-4">
              {trade.applications.map((application) => (
                <div key={application} className="premium-card flex items-start gap-3 rounded-2xl p-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{application}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="premium-card rounded-2xl p-8">
            <p className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary">Deliverables</p>
            <h3 className="mt-3 font-headline-sm text-headline-sm text-primary">What you receive</h3>
            <ul className="mt-6 space-y-4">
              {trade.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-outline-variant/20 pb-4 last:border-b-0 last:pb-0">
                  <span className="material-symbols-outlined text-secondary">task_alt</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/20 bg-surface-container-low py-20">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["24-48h", "Turnaround"],
              ["Zip", "Pricing"],
              ["Excel", "Delivery"],
              ["CSI", "Format"],
            ].map(([value, label]) => (
              <div key={label} className="border border-outline-variant/20 bg-surface-container-lowest p-6 text-center shadow-sm">
                <div className="font-headline-sm text-headline-sm text-primary">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-outline">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-10 max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">Why it matters</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">Clear trade pricing keeps bids moving.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Consistent scope capture",
              "Senior estimator review",
              "Fast delivery in Excel and PDF",
            ].map((item) => (
              <div key={item} className="border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
                <p className="font-headline-sm text-headline-sm text-primary">{item}</p>
                <p className="mt-3 text-sm text-on-surface-variant">
                  Built so your team can compare scopes, review quantities, and move into pricing without losing time.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Need this trade estimated now?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Share your drawings and we will return a trade-specific estimate that is organized, reviewable, and bid ready.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
            Start Your Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
