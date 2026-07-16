import Link from 'next/link';
import FaqAccordion from '@/components/home/FaqAccordion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-cover bg-center" role="img" aria-label="Construction estimating services hero background" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop&q=80')"}}>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container-page relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="max-w-xl fade-up">
            <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
              Construction Estimating Services Delivered Fast & Accurate
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed">
              BluePeak Estimation delivers professional <strong>construction estimating services</strong> across the USA — detailed, CSI-formatted cost estimates in 24-48 hours so contractors can bid faster, cut preconstruction costs, and move with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/contact" className="bg-primary text-on-primary py-4 px-8 md:py-4 md:px-10 rounded font-label-md text-label-md hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center shadow-lg shadow-primary/10" aria-label="Request a free construction cost estimate">
                  Request an Estimate
              </Link>
              <Link href="/services" className="border-2 border-primary text-primary py-4 px-8 md:py-4 md:px-10 rounded font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center" aria-label="View our construction estimating services">
                  View Our Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-[500px] xl:h-[600px] float-slow">
            <div className="absolute inset-0 blueprint-pattern"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-container py-10 md:py-12 border-b border-outline-variant/20">
        <div className="container-page">
          <p className="text-center font-label-md text-label-md text-outline mb-6 md:mb-8 uppercase tracking-widest">Industry Standard Software & Workflows</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="font-headline-sm font-bold text-primary text-lg md:text-xl">Planswift</span>
            <span className="font-headline-sm font-bold text-primary text-lg md:text-xl">Bluebeam</span>
            <span className="font-headline-sm font-bold text-primary text-lg md:text-xl">OST</span>
            <span className="font-headline-sm font-bold text-primary text-lg md:text-xl">RSMeans</span>
            <span className="font-headline-sm font-bold text-primary text-lg md:text-xl">Procore</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
          <div className="premium-card p-6 md:p-8 text-center fade-up">
            <div className="font-display-lg text-display-lg text-secondary mb-2">1,200+</div>
            <div className="font-label-md text-label-md text-on-surface-variant">Projects Estimated</div>
          </div>
          <div className="premium-card p-6 md:p-8 text-center fade-up" style={{animationDelay: "0.1s"}}>
            <div className="font-display-lg text-display-lg text-secondary mb-2">15+</div>
            <div className="font-label-md text-label-md text-on-surface-variant">Years Experience</div>
          </div>
          <div className="premium-card p-6 md:p-8 text-center fade-up" style={{animationDelay: "0.2s"}}>
            <div className="font-display-lg text-display-lg text-secondary mb-2">99%</div>
            <div className="font-label-md text-label-md text-on-surface-variant">Estimate Accuracy</div>
          </div>
          <div className="premium-card p-6 md:p-8 text-center fade-up" style={{animationDelay: "0.3s"}}>
            <div className="font-display-lg text-display-lg text-secondary mb-2">48h</div>
            <div className="font-label-md text-label-md text-on-surface-variant">Avg. Turnaround</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-page">
          <div className="mb-10 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Professional Construction Estimating Services for Every Trade</h2>
            <div className="h-1 w-20 bg-secondary"></div>
            <p className="text-on-surface-variant mt-4 max-w-3xl text-sm md:text-base">From <strong>quantity takeoff services</strong> to complete <strong>construction cost estimation</strong>, we deliver bid-ready estimates serving clients across all 50 US states.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="premium-card group p-8 md:p-10">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 group-hover:scale-105">location_city</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 md:mb-4">Commercial <strong>Estimating</strong></h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8">We estimate office, retail, multifamily, industrial, and mixed-use projects with a practical bid-focused workflow. Our <Link href="/services/commercial-estimation" className="text-secondary underline underline-offset-2">commercial estimating services</Link> cover every CSI division.</p>
              <Link className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md transition-all duration-300 hover:gap-3 hover:underline underline-offset-4" href="/services">
                View Services <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="premium-card group p-8 md:p-10">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 group-hover:scale-105">factory</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 md:mb-4">Full Trade Coverage</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8">From concrete and masonry to <Link href="/services/mep-estimation" className="text-secondary underline underline-offset-2">MEP estimating</Link>, drywall, roofing, and framing, we support the trades contractors rely on most.</p>
              <Link className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md transition-all duration-300 hover:gap-3 hover:underline underline-offset-4" href="/trades">
                Browse Trades <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="premium-card group p-8 md:p-10">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 group-hover:scale-105">festival</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 md:mb-4">Detailed <strong>Quantity Takeoff Services</strong></h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8">Our deliverables include clear quantities, scope notes, and pricing structure that help you bid faster and smarter. See our <Link href="/services/material-takeoff" className="text-secondary underline underline-offset-2">material takeoff services</Link> for details.</p>
              <Link className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md transition-all duration-300 hover:gap-3 hover:underline underline-offset-4" href="/samples">
                View Samples <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="premium-card group p-8 md:p-10">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 group-hover:scale-105">home_work</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 md:mb-4">Trusted Estimating Process</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8">Every estimate is reviewed for clarity, consistency, and the kind of visibility teams need before bidding. Learn <Link href="/how-it-works" className="text-secondary underline underline-offset-2">how our estimating process works</Link>.</p>
              <Link className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md transition-all duration-300 hover:gap-3 hover:underline underline-offset-4" href="/faq">
                How It Works <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="premium-card group p-8 md:p-10">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 group-hover:scale-105">engineering</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 md:mb-4">Why Choose BluePeak</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8">We help contractors win bids with detailed estimating, responsive support, and a workflow built to keep projects moving on time. Discover our <Link href="/services" className="text-secondary underline underline-offset-2">construction estimating services</Link>.</p>
              <Link className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md transition-all duration-300 hover:gap-3 hover:underline underline-offset-4" href="/why-us">
                Why Us <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="premium-card group p-8 md:p-10">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-transform duration-300 group-hover:scale-105">foundation</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 md:mb-4">Project Support & <strong>Construction Bidding</strong></h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8">Fast turnaround and clear communication help keep your pipeline moving without surprises. Get <Link href="/contact" className="text-secondary underline underline-offset-2">bid-ready estimates</Link> delivered on time.</p>
              <Link className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md transition-all duration-300 hover:gap-3 hover:underline underline-offset-4" href="/contact">
                Request an Estimate <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center">
          <div className="relative float-slow w-full h-[300px] md:h-[600px] rounded-2xl bg-cover bg-center shadow-2xl" role="img" aria-label="Why choose BluePeak for construction estimating" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80')"}}>
            <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 bg-primary p-8 md:p-12 text-on-primary hidden md:block rounded-2xl shadow-xl">
              <div className="font-headline-lg text-headline-lg mb-2">15+</div>
              <div className="font-label-md text-label-md uppercase tracking-wider">Years of Precision</div>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 md:mb-8 leading-tight">Why Choose BluePeak for <strong>Construction Cost Estimation</strong></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-12">We do not just provide numbers; we provide strategic confidence. Our team of certified estimators brings field-hardened experience to every sheet, serving clients across all 50 US states.</p>
            <ul className="space-y-5 md:space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-1 rounded-full">check</span>
                <div>
                  <h3 className="font-label-md text-label-md text-primary mb-1">Fast 24-48 Hour Turnaround</h3>
                  <p className="text-on-surface-variant text-sm">Meeting tight bid deadlines without compromising on detail.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-1 rounded-full">check</span>
                <div>
                  <h3 className="font-label-md text-label-md text-primary mb-1">RSMeans Zip-Code Based Pricing</h3>
                  <p className="text-on-surface-variant text-sm">Localized material and labor costs for pinpoint accuracy.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-1 rounded-full">check</span>
                <div>
                  <h3 className="font-label-md text-label-md text-primary mb-1">Dedicated Project Manager</h3>
                  <p className="text-on-surface-variant text-sm">Direct line of communication for revisions and clarifications.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Construction Estimating Process",
            description: "Five simple steps from drawings to a completed estimate.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Upload", text: "Submit your plans via our secure portal." },
              { "@type": "HowToStep", position: 2, name: "Review", text: "Our team scopes the project and provides a quote." },
              { "@type": "HowToStep", position: 3, name: "Takeoff", text: "Meticulous measurement of every material and unit." },
              { "@type": "HowToStep", position: 4, name: "Estimate", text: "Application of local labor and material pricing." },
              { "@type": "HowToStep", position: 5, name: "Delivery", text: "Receive your comprehensive bid-ready estimate." },
            ],
          }),
        }}
      />
      <section className="section-padding bg-surface-container-lowest">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">How Our <strong>Construction Estimating</strong> Process Works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Five simple steps from drawings to a completed estimate. Serving clients across all 50 US states.</p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-outline-variant/30 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 relative z-10">
              <div className="text-center group premium-card p-5 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-background border-2 border-outline-variant group-hover:border-secondary flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 rounded-2xl">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary">upload_file</span>
                </div>
                <h3 className="font-label-md text-label-md text-primary mb-2">1. Upload</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">Submit your plans via our secure portal.</p>
              </div>
              <div className="text-center group premium-card p-5 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-background border-2 border-outline-variant group-hover:border-secondary flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 rounded-2xl">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary">fact_check</span>
                </div>
                <h3 className="font-label-md text-label-md text-primary mb-2">2. Review</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">Our team scopes the project and provides a quote.</p>
              </div>
              <div className="text-center group premium-card p-5 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-background border-2 border-outline-variant group-hover:border-secondary flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 rounded-2xl">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary">architecture</span>
                </div>
                <h3 className="font-label-md text-label-md text-primary mb-2">3. Takeoff</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">Meticulous measurement of every material and unit.</p>
              </div>
              <div className="text-center group premium-card p-5 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-background border-2 border-outline-variant group-hover:border-secondary flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 rounded-2xl">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary">calculate</span>
                </div>
                <h3 className="font-label-md text-label-md text-primary mb-2">4. Estimate</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">Application of local labor and material pricing.</p>
              </div>
              <div className="text-center group premium-card p-5 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-background border-2 border-outline-variant group-hover:border-secondary flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 rounded-2xl">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary">send</span>
                </div>
                <h3 className="font-label-md text-label-md text-primary mb-2">5. Delivery</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">Receive your comprehensive bid-ready estimate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Trusted by Contractors Nationwide for <strong>Quantity Takeoff Services</strong></h2>
              <p className="text-on-surface-variant text-sm md:text-base">Real feedback from contractors who needed faster quotes, cleaner takeoffs, and fewer bid surprises — serving clients across all 50 US states.</p>
            </div>
            <Link href="/samples" className="text-secondary font-label-md text-label-md border-b border-secondary pb-1 hover:opacity-80 transition-opacity hover:translate-x-1 flex-shrink-0">View Sample Workbooks</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-gutter">
            <div className="premium-card group overflow-hidden">
              <div className="h-56 md:h-80 w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" role="img" aria-label="Bid-ready construction estimate project showcase" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYRkT2ZJRAqDHZqXe2pr5Twf3e4WRBzFZegsKkgPNU5_lA1eNt3m3H8aYTSX1Ow-PRJD6VpW1GranL1YyUxgJsDKj_xU39PQ5Bh1YlammafaSUHGdUj7dHUg55ox5mnm2BvB7YxoaiD4vgKRGsoIV2rPFbMB1gHCdUgw676Sp-sh7elMRC41VV8Hw-skYRFRompRZD277v-8uh6B4T3VWf705vdzNAoUPN5QQ4s2xvmlfP_0aOPqaeYrx5-E2C9P0eVX9YsOcYaRmf')"}}></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Bid-ready estimates</h3>
                    <p className="text-outline text-sm">All 50 states</p>
                  </div>
                  <div className="bg-secondary/10 text-secondary px-3 md:px-4 py-1 font-label-md text-xs uppercase tracking-widest">Fast turnaround</div>
                </div>
                <div className="grid grid-cols-3 border-t border-outline-variant/30 pt-4 md:pt-6">
                  <div>
                    <p className="text-outline text-xs uppercase mb-1">Accuracy</p>
                    <p className="font-bold text-primary">97%</p>
                  </div>
                  <div>
                    <p className="text-outline text-xs uppercase mb-1">Turnaround</p>
                    <p className="font-bold text-primary">24-48h</p>
                  </div>
                  <div>
                    <p className="text-outline text-xs uppercase mb-1">Coverage</p>
                    <p className="font-bold text-primary">All trades</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="premium-card group overflow-hidden">
              <div className="h-56 md:h-80 w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" role="img" aria-label="Construction estimating sample workbook preview" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-nHTDiwb2ovnRGYRf2NepcmxIzT7ASOcEXFM9P8pLjZFeZMx4DMNQxPTifMWFqzlDo_UPoVgynNymex5phaZwfMV1t8QFAIAPqsMxJHIOpTnBIfumVzvZtqyebXu5mXXIRh7XtOXBNlEmadmLM27tmwEyqHGB9nFy1PMKFXTw_boPZx2LbCxmp1lPJjyZy2DtR8xUTeIAfC8tBY4iGALUGY1PoPNTPjhix0t9mb3nWC43gPeekEe7M4mtFP-v0U210nhSXGTEL5dT')"}}></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Sample workbooks</h3>
                    <p className="text-outline text-sm">Excel + PDF delivery</p>
                  </div>
                  <div className="bg-secondary/10 text-secondary px-3 md:px-4 py-1 font-label-md text-xs uppercase tracking-widest">Downloadable</div>
                </div>
                <div className="grid grid-cols-3 border-t border-outline-variant/30 pt-4 md:pt-6">
                  <div>
                    <p className="text-outline text-xs uppercase mb-1">Files</p>
                    <p className="font-bold text-primary">17</p>
                  </div>
                  <div>
                    <p className="text-outline text-xs uppercase mb-1">Format</p>
                    <p className="font-bold text-primary">XLSX</p>
                  </div>
                  <div>
                    <p className="text-outline text-xs uppercase mb-1">Use</p>
                    <p className="font-bold text-primary">Reference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding bg-surface-container-low overflow-hidden">
        <div className="container-page">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-10 md:mb-16">Trusted by Contractors Nationwide</h2>
          <div className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-gutter overflow-x-auto pb-6 md:pb-10 no-scrollbar snap-x snap-mandatory -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0">
            <div className="min-w-[85vw] md:min-w-[400px] premium-card p-8 md:p-12 snap-center flex-shrink-0">
              <div className="flex gap-1 text-secondary mb-4 md:mb-6">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="font-body-lg text-body-lg text-primary italic mb-6 md:mb-8">&quot;BluePeak&apos;s estimates have been instrumental in our bid success rate increasing by 25%. Their accuracy on complex HVAC takeoffs is unmatched in the industry.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cover" role="img" aria-label="Robert Chen testimonial avatar" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwm0wf4GgiU05m1T0pvyVFYR_no-rnMPQKrsQhKbRsoyuYd0lzMHMW1KvfxNSNx8nEY7w7pdKmb8XQHjluteiUGlXD5YZLkMUgn9T0Q991VuG2Vtg3DZrT0YXpOWtInUQ-_renhZBvwiF_lykuBpE-9dWFxh7hQMiWLmrunj9GCVzNpSO83_RB2Q6dNiACpXsqhCwgEU5UMq089us2o6jroOPus4J6auu3lXw4KK32KhXOzxStCGfzxEimwhT8uWn-xvuGDbzv0Y7U')"}}></div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Robert Chen</p>
                  <p className="text-xs text-outline">Principal, Landmark Mechanical</p>
                </div>
              </div>
            </div>
            <div className="min-w-[85vw] md:min-w-[400px] premium-card p-8 md:p-12 snap-center flex-shrink-0">
              <div className="flex gap-1 text-secondary mb-4 md:mb-6">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="font-body-lg text-body-lg text-primary italic mb-6 md:mb-8">&quot;The detail in their material takeoffs saved us over $100k in potential procurement errors on our last warehouse project. They are an essential partner for us.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cover" role="img" aria-label="Sarah Miller testimonial avatar" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYMC1TZP274eeza5tCAuni8KYznfZ0y6NS_MAkty_WJteekJBRnUE-6IDDVDNezxhVAETActUkZ1UHbJBSQ-pEFEVKd5i2K7Evxz5iFwG2SejcIGHJ5PfMgIw7WBjhBLRZeotxsSBbV2bJVbl603dVtzJDzRQbaecDYa0FIKv_zl6ACbnEBBZ2uDp7d2jYo7j3RNN6k4kAWrpD7Bg1oijwrxV7TpLHssjO7Gt4CmORa_b4V2fOAD5KrKQDRskNRPGDtdIFsxlcVWy8')"}}></div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Sarah Miller</p>
                  <p className="text-xs text-outline">Senior Project Manager, Apex Industrial</p>
                </div>
              </div>
            </div>
            <div className="min-w-[85vw] md:min-w-[400px] premium-card p-8 md:p-12 snap-center flex-shrink-0">
              <div className="flex gap-1 text-secondary mb-4 md:mb-6">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="font-body-lg text-body-lg text-primary italic mb-6 md:mb-8">&quot;Speed and reliability. When we have a deadline for a multi-family bid on Friday, BluePeak delivers by Wednesday every time. Highly recommended.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cover" role="img" aria-label="James Wilson testimonial avatar" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7X8Oo8zpNy0SvJ__8FkNoixQzxE9zScLv_mOchmowbf0j97-kDTOUv0L6lB6ngXKZ-n2X4bvGroJg_OHsnb0FMuWeIkxvnK9nN5tzDP8zJABs-l-V6WGeihCnM3MgA9jBVdz-JkqYGF3JK6THVUyW7GtOBCl65l3JFftmR0WgoS0311sW45QdztDNMB4K3kw9pahZVmhfNKqGQOXPy8LDmoVue3F37jxgVsa1WfY_mHs1IHfxiLr77RG2vK3bQPXZvpkpXjk3FmC')"}}></div>
                <div>
                  <p className="font-label-md text-label-md text-primary">James Wilson</p>
                  <p className="text-xs text-outline">Owner, Wilson Residential Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <FaqAccordion />
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-container text-on-primary">
        <div className="container-page text-center">
          <h2 className="font-display-lg text-display-lg mb-6 md:mb-8">Ready for Accurate Construction Estimating Services?</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-8 md:mb-12 max-w-2xl mx-auto">Send your drawings and we will match the right service to your scope, deadline, and trade requirements. Serving clients across all 50 US states with fast 24-48 hour turnaround.</p>
          <Link href="/contact" className="inline-flex bg-secondary text-white py-5 md:py-6 px-10 md:px-16 rounded-lg font-headline-sm hover:bg-secondary-container transition-all active:scale-95 duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5" aria-label="Request your free construction cost estimate from BluePeak Estimation">
              Request Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
