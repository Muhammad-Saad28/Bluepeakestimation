'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SAMPLE_CATALOG } from '@/lib/catalog'
import {
  Building2, Zap, Droplets, Wind, Home, Layers, TreePine,
  Wrench, Paintbrush, Shovel, Hammer, FileSpreadsheet,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  foundation: Building2,
  layers: Layers,
  bolt: Zap,
  house: Home,
  grid_on: Layers,
  ac_unit: Wind,
  bedroom_child: TreePine,
  engineering: Wrench,
  domain: Building2,
  settings: Wrench,
  chair: Hammer,
  brush: Paintbrush,
  plumbing: Droplets,
  roofing: Home,
  terrain: Shovel,
}

const CATEGORIES = ['Structure', 'MEP', 'Finishes', 'Site'] as const

export default function SamplesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: SAMPLE_CATALOG.length }
    for (const cat of CATEGORIES) {
      counts[cat] = SAMPLE_CATALOG.filter(s => s.category === cat).length
    }
    return counts
  }, [])

  const filtered = activeCategory === 'All'
    ? SAMPLE_CATALOG
    : SAMPLE_CATALOG.filter(s => s.category === activeCategory)

  const categories = ['All', ...CATEGORIES]

  return (
    <div className="bg-background text-on-background min-h-screen">
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blueprint-pattern" />
        </div>
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop relative z-10">
          <p className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary-fixed/80">Free Downloads</p>
          <h1 className="mt-4 font-display-lg text-display-lg leading-tight text-on-primary">
            Free Sample Estimates
          </h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-primary/80">
            Download {SAMPLE_CATALOG.length} professional construction estimate samples. Excel spreadsheets with quantity takeoffs, material costs, and labor rates for every major trade.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-30 border-b border-outline-variant/20 bg-surface-container-lowest/95 backdrop-blur shadow-sm">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-4">
          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-label-md text-label-md transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-on-primary/20' : 'bg-surface-variant text-outline'
                }`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-headline-sm text-headline-sm text-on-surface-variant">No samples found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((sample) => {
                const Icon = iconMap[sample.icon] || FileSpreadsheet
                return (
                  <article key={sample.slug} className="premium-card rounded-2xl flex flex-col">
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                          {sample.category}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">{sample.title}</h3>
                      <p className="mt-2 text-sm text-on-surface-variant flex-1">{sample.summary}</p>
                      <div className="mt-6 space-y-2">
                        {sample.deliverables.slice(0, 3).map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="material-symbols-outlined text-secondary text-base">check</span>
                            {d}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center gap-4 text-xs text-outline">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">description</span>
                          Excel
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">download</span>
                          Free
                        </span>
                      </div>
                      <Link
                        href={`/samples/${sample.slug}`}
                        className="mt-6 w-full bg-primary text-on-primary text-center py-3.5 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
                      >
                        View Sample <span className="inline-block ml-1">&rarr;</span>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg">Need a custom estimate for your project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-primary/80">
            Upload your plans and get a professional, bid-ready estimate in 24-48 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="bg-secondary px-8 py-4 font-label-md text-label-md text-on-primary rounded-lg transition-colors hover:bg-secondary-container">
              Get a Free Quote
            </Link>
            <Link href="/services" className="border border-on-primary/30 px-8 py-4 font-label-md text-label-md text-on-primary rounded-lg transition-colors hover:bg-on-primary/10">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
