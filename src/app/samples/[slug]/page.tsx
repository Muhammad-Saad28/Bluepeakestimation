import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SAMPLE_CATALOG } from '@/lib/catalog'
import { generatePageMetadata } from '@/lib/metadata'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SAMPLE_CATALOG.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const sample = SAMPLE_CATALOG.find(s => s.slug === slug)
  if (!sample) {
    return generatePageMetadata({
      title: 'Sample',
      description: 'Construction estimating sample details.',
      path: `/samples/${slug}`,
      noIndex: true,
    })
  }
  return generatePageMetadata({
    title: `${sample.title} - Free Download | BluePeak Estimation`,
    description: `Download our free ${sample.label.toLowerCase()} estimating sample. Professional Excel spreadsheet with quantity takeoff, material costs and labor rates.`,
    path: `/samples/${sample.slug}`,
  })
}

function getRelated(slug: string, category: string) {
  return SAMPLE_CATALOG.filter(s => s.category === category && s.slug !== slug).slice(0, 3)
}

export default async function SampleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const sample = SAMPLE_CATALOG.find(s => s.slug === slug)
  if (!sample) notFound()

  const related = getRelated(slug, sample.category)

  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="border-b border-outline-variant/20 bg-surface-container-low">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-outline">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/samples" className="hover:text-primary transition-colors">Samples</Link>
            <span>/</span>
            <span className="text-primary">{sample.title}</span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <Link href="/samples" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors mb-8">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Samples
          </Link>

          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">{sample.category}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-on-surface-variant">{sample.label}</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary leading-tight">{sample.title}</h1>
              <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{sample.description}</p>

              <div className="mt-10">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">What&apos;s Included</h2>
                <div className="space-y-3">
                  {sample.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-md text-body-md">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Category', value: sample.category },
                  { label: 'Trade', value: sample.label },
                  { label: 'Format', value: 'Excel' },
                  { label: 'Pages', value: String(sample.deliverables.length) },
                ].map(stat => (
                  <div key={stat.label} className="border border-outline-variant/20 bg-surface-container-lowest p-4 rounded-lg">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-outline">{stat.label}</div>
                    <div className="mt-1 font-headline-sm text-headline-sm text-primary">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-28">
              <div className="premium-card rounded-2xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">description</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary text-center">{sample.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant text-center">Excel Spreadsheet</p>

                <div className="mt-6 space-y-3 border-t border-outline-variant/20 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">Format</span>
                    <span className="font-semibold text-primary">XLSX</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">Size</span>
                    <span className="font-semibold text-primary">245 KB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">Pages</span>
                    <span className="font-semibold text-primary">{sample.deliverables.length}</span>
                  </div>
                </div>

                <a
                  href={sample.downloadFile}
                  download={`${sample.title}.xlsx`}
                  className="mt-8 w-full flex items-center justify-center gap-3 bg-primary text-on-primary py-4 px-6 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">download</span>
                  Download Free Sample
                </a>

                <div className="mt-4 space-y-2 text-center">
                  {['No signup required', 'Instant download', 'Professional grade'].map((text) => (
                    <div key={text} className="flex items-center justify-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm text-secondary">check</span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-outline-variant/20 bg-surface-container-low py-16 lg:py-24">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Other Samples You Might Like</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map(s => (
                <Link key={s.slug} href={`/samples/${s.slug}`} className="premium-card rounded-2xl p-6 group">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-outline">{s.category}</p>
                  <h3 className="mt-2 font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                    View Sample <span>&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Want a sample for your scope?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Send over your drawings and we will match the right estimating approach for the trade and delivery style you need.
          </p>
          <Link href="/contact" className="mt-8 inline-flex bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary rounded-lg transition-colors hover:bg-secondary-container">
            Start a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
