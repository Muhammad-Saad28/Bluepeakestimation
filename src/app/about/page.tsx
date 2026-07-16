"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";


const stats = [
  { value: "1,200+", label: "Projects Delivered" },
  { value: "99.4%", label: "Estimate Accuracy" },
  { value: "24-48h", label: "Avg. Turnaround" },
  { value: "38", label: "States Served" },
];

const values = [
  { icon: "verified", title: "Precision First", body: "Every estimate we deliver is built on verified quantities, validated against industry benchmarks, and reviewed before it leaves our desk." },
  { icon: "handshake", title: "Client Partnership", body: "We embed ourselves in your workflow—your deadlines, your software, your reporting format. We adapt so you don't have to." },
  { icon: "speed", title: "Rapid Delivery", body: "Bid windows don't wait. Our 24-48 hour standard turnaround keeps your pipeline moving without sacrificing depth." },
  { icon: "workspace_premium", title: "Uncompromising Quality", body: "Triple-check protocols and CSI-aligned deliverables ensure every package is submission-ready, every time." },
  { icon: "diversity_3", title: "Diverse Expertise", body: "From concrete to MEP to civil sitework, our team covers every trade and division across all project types." },
  { icon: "trending_up", title: "Continuous Improvement", body: "We benchmark every estimate against actual project costs to sharpen our models and improve accuracy with each engagement." },
];

const leadership = [
  { name: "James Hartwell", role: "Founder & CEO", bio: "25 years in construction estimating across commercial, industrial, and infrastructure sectors. Former Chief Estimator at a top-50 ENR contractor.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop", linkedin: "#" },
  { name: "Sarah Montoya", role: "Director of Estimating", bio: "Certified Professional Estimator with 15 years leading takeoff teams on projects exceeding $500M in construction value.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop", linkedin: "#" },
  { name: "David Okafor", role: "Head of MEP & Specialty Trades", bio: "Licensed mechanical engineer and seasoned estimator specializing in MEP coordination and design-build procurement.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop", linkedin: "#" },
  { name: "Emily Chen", role: "Client Success Lead", bio: "Dedicated to seamless client onboarding and delivery coordination. Former project manager with a background in architectural design.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop", linkedin: "#" },
];

const trustReasons = [
  "CSI MasterFormat-aligned deliverables on every project",
  "Certified Professional Estimators on every account",
  "NDA-protected - your drawings stay confidential",
  "Proprietary quality-check protocol before delivery",
  "Revisions included until you are 100% satisfied",
  "Available 7 days a week including bid emergencies",
  "Compatible with all major estimating and BIM platforms",
  "Transparent, fixed-fee pricing - no surprise charges",
];

const timeline = [
  { year: "2009", title: "Founded", desc: "BluePeak Estimation was established in Houston, TX with a focus on commercial takeoffs for regional GCs." },
  { year: "2012", title: "MEP Division Launched", desc: "Expanded into mechanical, electrical, and plumbing estimating to serve design-build clients." },
  { year: "2015", title: "National Reach", desc: "Crossed 20 states served, onboarding first Fortune 500 construction management clients." },
  { year: "2018", title: "BIM Integration", desc: "Launched 3D quantity takeoff services integrated with Revit and Navisworks workflows." },
  { year: "2020", title: "1,000 Projects Milestone", desc: "Delivered our 1,000th project - a $180M healthcare campus in Dallas." },
  { year: "2023", title: "Enterprise Platform", desc: "Introduced a client portal for real-time estimate status tracking and secure file exchange." },
  { year: "2025", title: "Today", desc: "Serving contractors and developers across 38 states with a team of 40+ certified estimators." },
];

const software = [
  { name: "Bluebeam Revu", icon: "edit_document" },
  { name: "PlanSwift", icon: "architecture" },
  { name: "RSMeans", icon: "database" },
  { name: "On-Screen Takeoff", icon: "monitor" },
  { name: "Revit", icon: "view_in_ar" },
  { name: "Navisworks", icon: "precision_manufacturing" },
  { name: "ProEst", icon: "calculate" },
  { name: "Excel", icon: "table_view" },
];

const certifications = [
  { title: "ASPE Certified Professional Estimator (CPE)", icon: "workspace_premium" },
  { title: "AACE International Certified Cost Estimator", icon: "verified" },
  { title: "OSHA 10 & 30 Certified Team", icon: "health_and_safety" },
  { title: "CSI MasterFormat Compliance", icon: "fact_check" },
  { title: "BBB Accredited Business", icon: "business_center" },
  { title: "ISO 9001-Aligned QA Process", icon: "gpp_good" },
];

const processSteps = [
  { step: "01", icon: "upload_file", title: "Submit Plans", desc: "Upload your drawings securely through our client portal - any format accepted." },
  { step: "02", icon: "fact_check", title: "Scope Review", desc: "Our senior estimator reviews the scope and confirms deliverables within 2 hours." },
  { step: "03", icon: "architecture", title: "Precision Takeoff", desc: "Certified estimators extract every quantity using industry-standard tools." },
  { step: "04", icon: "rate_review", title: "QA Review", desc: "A second estimator independently verifies all quantities before packaging." },
  { step: "05", icon: "send", title: "Delivery", desc: "You receive a bid-ready package in PDF, Excel, or your preferred format." },
];

function useCountUp(target: string, duration: number = 1800, inView: boolean): string {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.,]/g, "").trim();
    if (isNaN(numeric)) { setDisplay(target); return; }
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numeric);
      setDisplay(target.includes(",") ? current.toLocaleString() + suffix : current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return display;
}

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const displayed = useCountUp(value, 1800, inView);
  return (
    <div ref={ref} className="text-center p-6 md:p-8">
      <div className="font-display-lg text-primary mb-2" style={{ fontSize: "clamp(32px,6vw,64px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.02em" }}>
        {displayed}
      </div>
      <div className="text-label-md text-outline uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background overflow-x-hidden">

      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd???w=800&auto=format&fit=crop&q=60&q=60')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-40 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6 md:mb-8 text-on-primary/60 text-xs md:text-sm tracking-widest uppercase">
              <Link href="/" className="hover:text-on-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
              <span className="text-on-primary">About</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-6" style={{ lineHeight: "1.05" }}>
              Built on Precision.<br />
              <span className="text-secondary-fixed">Driven by Trust.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8 md:mb-10 max-w-lg">
              Since 2009, BluePeak Estimation has delivered institutional-grade cost estimating to contractors, developers, and owners across the United States.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-on-secondary py-4 px-8 md:px-10 rounded font-label-md hover:opacity-90 transition-all shadow-lg">
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>assignment</span>
                Request an Estimate
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-on-primary/40 text-on-primary py-4 px-8 md:px-10 rounded font-label-md hover:bg-on-primary/10 transition-all">
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>call</span>
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <div key={i} className="border border-on-primary/20 rounded p-4 md:p-8 text-center" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
                <div className="font-headline-lg text-headline-lg text-on-primary mb-1">{s.value}</div>
                <div className="text-label-md text-on-primary/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-primary/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-outline-variant/20">
            {stats.map((s, i) => <StatCard key={i} value={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-page grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative">
            <div className="w-full h-[300px] md:h-[560px] rounded bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&auto=format&fit=crop')" }} />
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-primary text-on-primary p-5 md:p-6 rounded shadow-xl" style={{ maxWidth: "200px" }}>
              <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-1">15+</div>
              <div className="text-xs md:text-sm text-on-primary/70 uppercase tracking-wider">Years of Excellence</div>
            </div>
          </div>
          <div>
            <p className="text-label-md text-secondary uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">From a Single Office to a National Estimating Firm</h2>
            <div className="h-1 w-16 bg-secondary mb-8" />
            <p className="font-body-lg text-on-surface-variant mb-6">BluePeak was born out of a simple frustration: contractors were losing bids not because they lacked skill, but because their estimates were imprecise, slow, or misaligned with actual market costs.</p>
            <p className="font-body-lg text-on-surface-variant mb-6">Our founder, James Hartwell, spent 25 years on the contractor side watching good teams lose profitable work to better-prepared competitors. In 2009, he launched BluePeak with a mission to level the playing field.</p>
            <p className="font-body-lg text-on-surface-variant">Today, we have grown to a team of 40+ certified estimators serving 38 states, with a portfolio spanning healthcare, education, commercial high-rise, industrial, and infrastructure sectors.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 container-page grid md:grid-cols-2 gap-8 md:gap-12">
          {[
            { icon: "my_location", title: "Our Mission", body: "To provide the construction industry most precise, reliable, and timely cost estimating services - empowering our clients to bid confidently, win profitably, and build successfully." },
            { icon: "visibility", title: "Our Vision", body: "To be the most trusted estimating partner in the United States - the firm that every contractor, developer, and owner-operator calls first when precision and speed are non-negotiable." },
          ].map((item, i) => (
            <div key={i} className="border border-on-primary/15 rounded p-8 md:p-12" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded flex items-center justify-center mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
                <span className="material-symbols-outlined text-2xl md:text-3xl text-secondary-fixed">{item.icon}</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-primary mb-4">{item.title}</h2>
              <div className="h-1 w-12 bg-secondary mb-6" />
              <p className="font-body-lg text-on-primary/80">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Core Values</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="group bg-surface-container-lowest border border-outline-variant/30 rounded p-8 md:p-10 hover:border-secondary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-fixed rounded flex items-center justify-center mb-4 md:mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl md:text-2xl text-primary group-hover:text-on-secondary transition-colors duration-300">{v.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{v.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-page">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">The People Behind BluePeak</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Leadership</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadership.map((person, i) => (
              <div key={i} className="group bg-surface-container-lowest border border-outline-variant/20 rounded overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-56 md:h-72 bg-cover bg-top" style={{ backgroundImage: `url(${person.img})` }} />
                <div className="p-5 md:p-6">
                  <h3 className="font-headline-sm text-primary mb-1">{person.name}</h3>
                  <p className="text-label-md text-secondary mb-3">{person.role}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{person.bio}</p>
                  <a href={person.linkedin} className="inline-flex items-center gap-2 text-sm text-secondary font-semibold hover:underline">
                    <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>open_in_new</span>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="section-padding bg-background">
        <div className="container-page grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">Client Confidence</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Why Clients Trust BluePeak</h2>
            <div className="h-1 w-16 bg-secondary mb-8" />
            <ul className="space-y-3 md:space-y-4">
              {trustReasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary" style={{ fontSize: "12px" }}>check</span>
                  </div>
                  <span className="font-body-md text-on-surface-variant text-sm md:text-base">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-[300px] md:h-[600px] rounded bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop')" }} />
        </div>
      </section>

      {/* Statistics Deep Dive */}
      <section className="section-padding bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 container-page">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-label-md text-on-primary-container/60 uppercase tracking-widest mb-3">By the Numbers</p>
            <h2 className="font-headline-lg text-headline-lg text-on-primary-container mb-4">Performance That Speaks</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { display: "1,200+", label: "Projects Delivered", icon: "assignment_turned_in" },
              { display: "99.4%", label: "Accuracy Rate", icon: "gpp_good" },
              { display: "38", label: "States Served", icon: "map" },
              { display: "40+", label: "Certified Estimators", icon: "groups" },
            ].map((s, i) => (
              <div key={i} className="border border-on-primary-container/20 rounded p-6 md:p-8 text-center" style={{ background: "rgba(0,0,0,0.08)" }}>
                <span className="material-symbols-outlined text-secondary-fixed mb-3 block" style={{ fontSize: "32px" }}>{s.icon}</span>
                <div className="text-on-primary-container mb-2" style={{ fontSize: "clamp(28px,4vw,56px)", lineHeight: 1.1, fontWeight: 700 }}>{s.display}</div>
                <div className="text-label-md text-on-primary-container/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">15 Years of Growth</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-outline-variant/40" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 md:gap-0 pb-12 md:pb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary border-4 border-background rounded-full items-center justify-center shadow-lg z-10">
                    <span className="text-on-primary text-xs font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className={`pl-10 md:pl-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded p-6 md:p-8 shadow-md hover:shadow-xl hover:border-secondary transition-all duration-300">
                      <span className="text-label-md text-secondary uppercase tracking-widest block mb-2">{item.year}</span>
                      <h3 className="font-headline-sm text-primary mb-2">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="container-page">
          <p className="text-center text-label-md text-outline uppercase tracking-widest mb-8 md:mb-12">Industry-Standard Tools We Use</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {software.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 md:p-5 border border-outline-variant/20 rounded hover:border-primary hover:shadow-md transition-all group">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-outline group-hover:text-primary transition-colors">{s.icon}</span>
                <span className="text-xs text-center font-semibold text-on-surface-variant group-hover:text-primary transition-colors leading-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Estimating Process</h2>
            <div className="h-1 w-16 bg-secondary mx-auto mb-6" />
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">A rigorous five-step process that ensures every deliverable is accurate, complete, and submission-ready.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-outline-variant/30" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {processSteps.map((p, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg relative z-10">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-on-primary">{p.icon}</span>
                  </div>
                  <span className="text-label-md text-secondary uppercase tracking-widest mb-1">{p.step}</span>
                  <h3 className="font-headline-sm text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-page">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">Credentials & Standards</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Certifications</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-5 bg-surface-container-lowest border border-outline-variant/20 rounded p-5 md:p-6 hover:border-secondary hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl md:text-2xl text-primary">{c.icon}</span>
                </div>
                <span className="font-label-md text-on-surface text-sm md:text-base">{c.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e???w=800&auto=format&fit=crop&q=60&q=60')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 container-page text-center">
          <p className="text-label-md text-secondary-fixed uppercase tracking-widest mb-4">Work With Us</p>
          <h2 className="font-display-lg text-on-primary mb-6" style={{ fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1, fontWeight: 700 }}>Ready to Win Your Next Bid?</h2>
          <p className="font-body-lg text-on-primary/80 mb-8 md:mb-12 max-w-2xl mx-auto">Partner with BluePeak and get a precision estimate delivered in 24-48 hours. No guesswork. No inflated numbers. Just accurate, bid-ready data.</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-on-secondary py-4 md:py-5 px-8 md:px-12 rounded font-headline-sm hover:opacity-90 transition-all shadow-xl">
              <span className="material-symbols-outlined">assignment</span>
              Request an Estimate
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-on-primary/40 text-on-primary py-4 md:py-5 px-8 md:px-12 rounded font-headline-sm hover:bg-on-primary/10 transition-all">
              <span className="material-symbols-outlined">call</span>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
