"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock data – replace with CMS/API in production
const industries = [
  {
    name: 'Residential',
    icon: 'home',
    img: "https://images.unsplash.com/photo-1528744598421-b7c3e3754320?w=1200&auto=format",
    challenges: [
      'Tight budgets',
      'Varied design standards',
      'Rapid project timelines'
    ],
    solutions: 'Our detailed takeoffs align with local codes and optimize material usage, keeping projects on schedule and within budget.',
    benefits: [
      'Accurate cost forecasting',
      'Reduced change orders',
      'Faster bid submission'
    ],
    projects: [
      { title: 'Suburban Townhomes', value: '$4.2M', img: "https://images.unsplash.com/photo-1560185127-6b45e8655c1c?w=800" },
      { title: 'Luxury Villa', value: '$2.8M', img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800" }
    ],
    stats: [
      { label: 'Projects Completed', value: '312' },
      { label: 'Accuracy Rate', value: '99.6%' },
      { label: 'Turnaround', value: '36h' },
      { label: 'States Served', value: '12' }
    ]
  },
  {
    name: 'Commercial',
    icon: 'business',
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format",
    challenges: [
      'Complex coordination',
      'Large material volumes',
      'Stringent compliance'
    ],
    solutions: 'Our systematic approach breaks down massive projects into clear, actionable line items, ensuring compliance and cost control.',
    benefits: [
      'Streamlined procurement',
      'Enhanced stakeholder confidence',
      'Competitive bid advantage'
    ],
    projects: [
      { title: 'Downtown Office Tower', value: '$25M', img: "https://images.unsplash.com/photo-1549921296-3ab56c5a4fa9?w=800" },
      { title: 'Retail Plaza', value: '$9.5M', img: "https://images.unsplash.com/photo-1521790797524-b359a6632b56?w=800" }
    ],
    stats: [
      { label: 'Projects Completed', value: '587' },
      { label: 'Accuracy Rate', value: '99.4%' },
      { label: 'Turnaround', value: '48h' },
      { label: 'States Served', value: '15' }
    ]
  },
  // ... Add remaining industries similarly (Industrial, Healthcare, Education, Government, Hospitality, Retail, Infrastructure, Warehouses, Mixed Use, Manufacturing)
];

const faqItems = [
  { q: 'Do you handle BIM integration?', a: 'Yes – we can export takeoffs directly into Revit, Navisworks, or other BIM platforms.' },
  { q: 'What is your typical turnaround for large commercial projects?', a: 'Standard is 48‑72 hours; we also offer expedited 24‑hour service for urgent bids.' },
  { q: 'Can you provide cost‑benefit analysis?', a: 'Our estimates include detailed cost breakdowns and value‑engineering suggestions.' }
];

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // IntersectionObserver for animated counts (optional)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-count');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-count').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 w-full flex items-center bg-surface-container-low border-b border-outline-variant/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 blueprint-pattern"></div>
        </div>
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="font-display-lg text-display-lg text-primary mb-6">Industries We Serve</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                BluePeak partners with leaders across sectors to deliver precise, bid‑ready estimates that power successful construction outcomes.
              </p>
              <Link href="/estimate" className="bg-primary text-on-primary py-4 px-10 md:px-12 rounded font-label-md hover:bg-secondary transition-colors inline-block">
                Request an Estimate
              </Link>
            </div>
            <div className="hidden lg:block h-[400px] xl:h-[500px] w-full rounded custom-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <a key={i} href={`#${ind.name.toLowerCase().replace(/\s+/g, '-')}`} className="group bg-surface-container-lowest border border-outline-variant/30 p-6 rounded custom-shadow hover:border-primary transition-colors text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">{ind.icon}</span>
                <h3 className="font-headline-sm text-primary">{ind.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Industry Sections */}
      {industries.map((ind, idx) => (
        <section key={idx} id={ind.name.toLowerCase().replace(/\s+/g, '-')} className="section-padding">
          <div className="container-page">
            {/* Large Image */}
            <div className="w-full h-[250px] md:h-[500px] mb-8 md:mb-12 rounded custom-shadow bg-cover bg-center" style={{ backgroundImage: `url(${ind.img})` }}></div>

            {/* Challenges & Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="font-headline-lg text-primary mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-on-surface-variant">
                  {ind.challenges.map((c, i) => (<li key={i}>{c}</li>))}
                </ul>
              </div>
              <div>
                <h2 className="font-headline-lg text-primary mb-4">Our Solutions</h2>
                <p className="font-body-lg text-on-surface-variant">{ind.solutions}</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="font-headline-lg text-primary mb-4">Benefits</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-on-surface-variant">
                {ind.benefits.map((b, i) => (
                  <li key={i} className="flex items-center">
                    <span className="material-symbols-outlined text-primary mr-2">check_circle</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Carousel (simplified static grid) */}
            <div className="mb-12">
              <h2 className="font-headline-lg text-primary mb-4">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ind.projects.map((proj, i) => (
                  <div key={i} className="bg-surface-container-lowest border border-outline-variant/30 rounded custom-shadow overflow-hidden">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${proj.img})` }}></div>
                    <div className="p-4">
                      <h3 className="font-headline-sm text-primary mb-1">{proj.title}</h3>
                      <p className="text-outline">{proj.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Strip */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded p-8 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {ind.stats.map((s, i) => (
                  <div key={i}>
                    <div className="font-headline-lg text-primary mb-1 animate-count">{s.value}</div>
                    <div className="text-sm text-outline uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/estimate" className="bg-primary text-on-primary py-4 px-12 rounded font-label-md hover:bg-secondary transition-colors">
                Get a Precise Estimate for {ind.name}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-primary mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-secondary mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-outline-variant/30 rounded bg-surface-container-lowest overflow-hidden custom-shadow">
                  <h3>
                    <button
                      className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-surface-container/50 transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-ind-${i}`}
                      id={`faq-trigger-ind-${i}`}
                    >
                      <span className="font-label-md text-primary">{item.q}</span>
                      <span className="material-symbols-outlined text-secondary">{isOpen ? 'remove' : 'add'}</span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-ind-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-ind-${i}`}
                    className={`px-8 py-6 border-t border-outline-variant/20 text-on-surface-variant text-sm bg-surface-container-lowest transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 blueprint-pattern opacity-20"></div>
        </div>
        <div className="container-page text-center relative z-10">
          <h2 className="font-display-lg text-display-lg text-on-primary mb-8">Ready to Accelerate Your Projects?</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 mb-12 max-w-2xl mx-auto">
            Partner with BluePeak for industry‑specific estimating expertise that drives success.
          </p>
          <Link href="/estimate" className="bg-secondary text-on-primary py-5 px-12 rounded font-headline-sm hover:bg-secondary-container transition-all shadow-xl">
            Request Your Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
