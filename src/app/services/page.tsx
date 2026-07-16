import Link from "next/link";
import { SERVICE_CATALOG, groupCatalogItems } from "@/lib/catalog";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Services",
  description:
    "Precision construction estimating services organized by trade and delivery type. Explore drywall, flooring, insulation, millwork, openings, painting, and duct estimating services.",
  path: "/services",
});

const groupedServices = groupCatalogItems(SERVICE_CATALOG);

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary section-padding">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-8 md:gap-16 container-page lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">Services</p>
            <h1 className="mt-4 font-display-lg text-display-lg leading-tight text-on-primary">
              Precision construction estimates, delivered fast.
            </h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
              A focused list of estimating, takeoff, and pricing services organized by trade and delivery type. Every page follows the same contractor-friendly structure used across the reference site.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="bg-secondary px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
                Request an Estimate
              </Link>
              <Link href="/samples" className="border border-on-primary/30 px-8 py-4 text-center font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
                View Samples
              </Link>
            </div>
          </div>
          <div className="relative z-10 hidden h-[440px] lg:block float-slow">
            <div className="absolute inset-0 rounded-3xl border border-on-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-2xl" />
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full border border-secondary-fixed/20 bg-secondary-fixed/10" />
            <div className="absolute bottom-10 right-10 h-56 w-56 rounded-[2rem] border border-on-primary/10 bg-background/10 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/20 bg-surface-container-low py-6 md:py-8">
        <div className="mx-auto flex max-w-container-max flex-wrap items-center justify-center gap-4 md:gap-8 container-page text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-outline">
          <span>24-48hr Turnaround</span>
          <span>96% Accuracy</span>
          <span>All 50 States</span>
          <span>Free Revisions</span>
          <span>No Retainers</span>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-container-max container-page">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary">Services Included Right Now</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              A focused catalog of estimating services built for contractors, developers, and project teams that need dependable numbers without slowing the bid process.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedServices).map(([category, items]) => (
              <section key={category}>
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-outline-variant/20 pb-4">
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">{category}</p>
                    <h3 className="mt-2 font-headline-sm text-headline-sm text-primary">{items.length} service{items.length === 1 ? "" : "s"}</h3>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((service) => (
                    <article key={service.slug} className="premium-card group rounded-2xl p-8">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-2xl text-primary transition-transform duration-300 group-hover:scale-105">
                        <span className="material-symbols-outlined">{service.icon}</span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">{service.label}</p>
                      <h4 className="mt-2 font-headline-sm text-headline-sm text-primary">{service.title}</h4>
                      <p className="mt-4 font-body-md text-body-md text-on-surface-variant">{service.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.stats.map((stat) => (
                          <span key={stat.label} className="rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            {stat.value} {stat.label}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center justify-between gap-4">
                        <Link href={`/services/${service.slug}`} className="font-label-md text-label-md text-secondary transition-colors hover:text-primary hover:underline underline-offset-4">
                          View Service
                        </Link>
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">CSI Format</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest section-padding border-y border-outline-variant/20">
        <div className="mx-auto grid max-w-container-max gap-8 md:gap-12 container-page lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">What you get</p>
            <h2 className="mt-4 font-headline-lg text-headline-lg text-primary">More than a number.</h2>
            <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">
              Every estimate includes clear scope notes, clean deliverables, and a format that helps your team bid faster and review with less friction.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Excel delivery",
              "PDF markups",
              "Scope notes",
              "Zip code pricing",
              "Senior review",
              "Fast turnaround",
            ].map((item) => (
              <div key={item} className="border border-outline-variant/20 bg-background p-5 font-semibold text-primary shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-on-primary">
        <div className="mx-auto max-w-container-max container-page text-center">
          <h2 className="font-headline-lg text-headline-lg">Ready to estimate your next bid?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send your drawings and we will match the right service to your scope, deadline, and trade requirements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
              Send Plans Now
            </Link>
            <Link href="/trades" className="border border-on-primary/30 px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10">
              Browse Trades
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
