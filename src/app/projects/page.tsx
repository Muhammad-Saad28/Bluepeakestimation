import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Explore BluePeak Estimation's portfolio of completed construction estimating projects across commercial, healthcare, industrial, infrastructure, and residential sectors.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="bg-background text-on-background">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">Projects</p>
          <h1 className="mt-4 max-w-3xl font-display-lg text-display-lg leading-tight text-on-primary">
            Construction Estimating Projects Delivered Nationwide
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
            A selection of recent estimating engagements across project types, trades, and delivery methods we support.
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
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-headline-lg text-headline-lg text-primary">Recent Estimating Engagements</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              Every project listed below represents a real estimating engagement — from initial takeoff through final bid-ready delivery.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <article key={i} className="premium-card overflow-hidden rounded-2xl group">
                <div className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">{project.trade}</span>
                    <span className="text-xs font-semibold text-outline">{project.sqft}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-outline mb-2">{project.location}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                    <span className="font-headline-sm text-headline-sm text-secondary">Value: {project.value}</span>
                    <Link href="/samples" className="text-sm font-semibold text-secondary hover:underline underline-offset-4">
                      View Sample
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Ready for your next estimate?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send your drawings and we will match the right estimating approach for your project scope and deadline.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary transition-colors hover:bg-secondary-container">
            Start Your Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
