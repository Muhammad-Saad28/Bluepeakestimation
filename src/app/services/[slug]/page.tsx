import { notFound } from "next/navigation";
import Link from "next/link";
import { getCatalogItem, SERVICE_CATALOG } from "@/lib/catalog";
import { generatePageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_CATALOG.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getCatalogItem(slug);

  if (!service) {
    return generatePageMetadata({
      title: "Service",
      description: "Construction estimating service details.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getCatalogItem(slug);

  if (!service) {
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
              <Link href="/services" className="transition-colors hover:text-on-primary">Services</Link>
              <span>/</span>
              <span className="text-secondary-fixed">{service.title}</span>
            </div>
            <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">{service.label}</p>
            <h1 className="mt-4 font-display-lg text-display-lg leading-tight text-on-primary">{service.title}</h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">{service.description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="bg-secondary px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
                Request an Estimate
              </Link>
              <Link href="/samples" className="border border-on-primary/30 px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
                View Samples
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {service.stats.map((stat) => (
                <div key={stat.label} className="border border-on-primary/10 bg-on-primary/5 p-5 text-center">
                  <div className="font-headline-sm text-headline-sm text-on-primary">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-on-primary/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 hidden h-[440px] lg:block float-slow">
            <div className="absolute inset-0 rounded-3xl border border-on-primary/10 bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${service.heroImage})` }} />
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-5 shadow-xl backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">Category</p>
              <p className="mt-2 font-headline-sm text-headline-sm text-primary">{service.category}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-container-max gap-16 px-margin-mobile md:px-margin-desktop lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">Overview</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">{service.title} built for contractor deadlines.</h2>
            <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">{service.overview}</p>
            <div className="mt-10 space-y-4">
              {service.applications.map((application) => (
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
              {service.deliverables.map((item) => (
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
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">Why it works</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">A cleaner bid package starts here.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Trade-specific scope capture",
              "Senior estimator review",
              "Fast delivery in Excel and PDF",
            ].map((item) => (
              <div key={item} className="border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm">
                <p className="font-headline-sm text-headline-sm text-primary">{item}</p>
                <p className="mt-3 text-sm text-on-surface-variant">
                  Built to keep scope, pricing, and deliverables aligned so your team can move from review to bid submission faster.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Ready to estimate this scope?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send your plans and we’ll return a bid-ready estimate that matches the trade, the deadline, and the level of detail your team expects.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
            Start Your Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
