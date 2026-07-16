"use client";
import React, { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: "mail",
    label: "Email",
    value: "bluepeakestimation@gmail.com",
    sub: "We reply within 2 business hours",
    href: "mailto:bluepeakestimation@gmail.com",
  },
  {
    icon: "call",
    label: "Phone",
    value: "+1 (800) 555-0192",
    sub: "Mon–Fri, 8 AM – 6 PM CST",
    href: "tel:+18005550192",
  },
  {
    icon: "chat",
    label: "WhatsApp",
    value: "+1 (800) 555-0193",
    sub: "Quick replies on WhatsApp",
    href: "https://wa.me/18005550193",
  },
  {
    icon: "location_on",
    label: "Office",
    value: "1200 Main St, Suite 800",
    sub: "Houston, TX 77002",
    href: "#map",
  },
];

const businessHours = [
  { day: "Monday", hours: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
  { day: "Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Emergency only" },
];

const serviceAreas = [
  "Texas", "California", "Florida", "New York", "Illinois",
  "Georgia", "North Carolina", "Arizona", "Washington",
  "Colorado", "Nevada", "Virginia", "Tennessee", "Ohio",
  "Pennsylvania", "Maryland", "New Jersey", "Massachusetts",
  "Minnesota", "Missouri",
];

const faqItems = [
  {
    q: "How quickly can I expect a response?",
    a: "We respond to all inquiries within 2 business hours during business days. Emergency bid support is available 7 days a week.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept PDF, DWG, DXF, RVT, Revit, Bluebeam, and most other standard construction drawing formats through our secure portal.",
  },
  {
    q: "Do you offer a free sample estimate?",
    a: "Yes — we offer a complimentary sample takeoff on a portion of your project so you can evaluate our quality before committing.",
  },
  {
    q: "Is my project information kept confidential?",
    a: "Absolutely. All submissions are protected by NDA. Your drawings, project details, and client data are never shared with third parties.",
  },
  {
    q: "Can you handle urgent bid deadlines?",
    a: "Yes. We offer expedited 12-hour and 24-hour turnaround options for time-critical bids. Contact us directly for rush pricing.",
  },
];

const services = [
  "Construction Estimating",
  "Material Takeoff",
  "MEP Estimating",
  "Civil / Sitework",
  "Quantity Surveying",
  "Bid Review",
  "Other",
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-outline-variant/30 rounded bg-surface-container-lowest overflow-hidden shadow-sm">
      <h3>
        <button
          className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-surface-container/40 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          id={`faq-trigger-${id}`}
        >
          <span className="font-label-md text-primary pr-4">{q}</span>
          <span className="material-symbols-outlined text-secondary flex-shrink-0 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
            add
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 pb-6 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/20 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", service: "", projectValue: "", customProjectValue: "", message: "", file: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        projectValue: form.projectValue === "Custom" ? form.customProjectValue : form.projectValue,
        message: form.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Error submitting form", await res.text());
        // Handle error (could show an alert, but proceeding to setSubmitted for now or we can just alert)
        alert("There was an error submitting your request. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-xl float-slow">
          <span className="material-symbols-outlined text-4xl text-on-primary">check_circle</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-3">Message Received!</h3>
        <p className="font-body-lg text-on-surface-variant max-w-md">
          Thank you for reaching out. A member of our estimating team will contact you within 2 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-secondary font-label-md hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-surface-container-low border border-outline-variant/50 rounded px-5 py-4 text-on-surface font-body-md placeholder-outline focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all";
  const labelClass = "block text-label-md text-primary mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>First Name <span className="text-error">*</span></label>
          <input required name="firstName" value={form.firstName} onChange={handleChange} placeholder="James" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last Name <span className="text-error">*</span></label>
          <input required name="lastName" value={form.lastName} onChange={handleChange} placeholder="Hartwell" className={inputClass} />
        </div>
      </div>
      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Email Address <span className="text-error">*</span></label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="james@contractor.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>
      </div>
      {/* Company */}
      <div>
        <label className={labelClass}>Company Name</label>
        <input name="company" value={form.company} onChange={handleChange} placeholder="Hartwell Construction LLC" className={inputClass} />
      </div>
      {/* Service + Value row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Service Needed <span className="text-error">*</span></label>
          <select required name="service" value={form.service} onChange={handleChange} className={inputClass}>
            <option value="" disabled>Select a service...</option>
            {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Estimated Project Value</label>
          <select name="projectValue" value={form.projectValue} onChange={handleChange} className={inputClass}>
            <option value="">Select range...</option>
            <option>Under $50K</option>
            <option>$50K – $100K</option>
            <option>$100K – $250K</option>
            <option>$250K – $500K</option>
            <option>$500K – $2M</option>
            <option>$2M – $10M</option>
            <option>$10M – $50M</option>
            <option>$50M+</option>
            <option value="Custom">Custom / Add my own</option>
          </select>
          {form.projectValue === "Custom" && (
            <input 
              name="customProjectValue" 
              value={form.customProjectValue} 
              onChange={handleChange} 
              placeholder="Enter project value..." 
              className={`${inputClass} mt-3 animate-in fade-in slide-in-from-top-2`} 
              required
            />
          )}
        </div>
      </div>
      {/* Message */}
      <div>
        <label className={labelClass}>Project Details <span className="text-error">*</span></label>
        <textarea required name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Describe your project scope, trade divisions needed, bid deadline, and any specific requirements..." className={`${inputClass} resize-none`} />
      </div>
      {/* File upload hint */}
      <div className="flex items-start gap-4 p-5 rounded border border-dashed border-outline-variant/50 bg-surface-container-low/50">
        <span className="material-symbols-outlined text-2xl text-outline flex-shrink-0 mt-0.5">upload_file</span>
        <div>
          <p className="font-label-md text-on-surface mb-1">Attach Drawings</p>
          <p className="text-sm text-on-surface-variant">Upload your plans through our <a href="#" className="text-secondary underline">secure client portal</a> after submission. We accept PDF, DWG, RVT, and most CAD formats.</p>
        </div>
      </div>
      {/* Trust line */}
      <div className="flex items-center gap-3 text-sm text-outline">
        <span className="material-symbols-outlined text-base">lock</span>
        <span>Your information is protected by NDA and never shared with third parties.</span>
      </div>
      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-on-primary py-5 rounded font-headline-sm hover:bg-primary-container transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-3"
      >
        {loading ? (
          <>
            <span className="material-symbols-outlined animate-spin">progress_activity</span>
            Sending...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined">send</span>
            Send My Message
          </>
        )}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="bg-background overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2???w=800&auto=format&fit=crop&q=60&q=60')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/96 via-primary/85 to-primary/50" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 container-page">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 md:mb-8 text-on-primary/50 text-xs md:text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-on-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
            <span className="text-on-primary">Contact</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-end">
            <div>
              <p className="text-label-md text-secondary-fixed uppercase tracking-widest mb-4">Get in Touch</p>
              <h1 className="font-display-lg text-display-lg text-on-primary mb-6" style={{ lineHeight: "1.05" }}>
                Let's Estimate<br />
                <span className="text-secondary-fixed">Your Project.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary/80 max-w-lg">
                Whether you have plans ready or just a concept, our team is standing by to deliver a precise estimate within 24–48 hours.
              </p>
            </div>

            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {[
                { icon: "call", label: "+1 (800) 555-0192", href: "tel:+18005550192" },
                { icon: "chat", label: "WhatsApp Us", href: "https://wa.me/18005550193" },
                { icon: "mail", label: "bluepeakestimation@gmail.com", href: "mailto:bluepeakestimation@gmail.com" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="inline-flex items-center gap-2 border border-on-primary/30 text-on-primary px-4 md:px-5 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-on-primary/10 transition-all backdrop-blur-sm">
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Sidebar */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 md:gap-12 items-start">

            {/* ── Large Contact Form ── */}
            <div className="premium-card rounded-2xl p-6 md:p-10 lg:p-14">
              <div className="mb-10">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-3">Request an Estimate</h2>
                <div className="h-1 w-12 bg-secondary mb-4" />
                <p className="font-body-md text-on-surface-variant">Fill out the form below and we'll have a senior estimator review your project within 2 hours.</p>
              </div>
              <ContactForm />
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6 lg:sticky lg:top-28">

              {/* Contact Info Cards */}
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} className="premium-card group flex items-start gap-5 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary-fixed rounded flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl text-primary group-hover:text-on-secondary transition-colors">{c.icon}</span>
                  </div>
                  <div>
                    <p className="text-label-md text-outline uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="font-label-md text-primary font-semibold">{c.value}</p>
                    <p className="text-sm text-on-surface-variant mt-0.5">{c.sub}</p>
                  </div>
                </a>
              ))}

              {/* Business Hours */}
              <div className="premium-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="material-symbols-outlined text-xl text-secondary">schedule</span>
                  <h3 className="font-headline-sm text-primary">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((h, i) => {
                    const isToday = h.day === today;
                    return (
                      <div key={i} className={`flex justify-between items-center py-2 border-b border-outline-variant/15 last:border-0 ${isToday ? "text-secondary font-semibold" : ""}`}>
                        <span className="text-sm">{h.day}{isToday && <span className="ml-2 text-xs bg-secondary text-on-secondary px-2 py-0.5 rounded-full">Today</span>}</span>
                        <span className="text-sm">{h.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/18005550193"
                className="flex items-center justify-center gap-3 w-full py-4 rounded font-label-md transition-all shadow-md"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-surface-container-low border-y border-outline-variant/20">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-label-md text-secondary uppercase tracking-widest mb-3">Coverage</p>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Service Areas</h2>
              <div className="h-1 w-12 bg-secondary mb-6" />
              <p className="font-body-lg text-on-surface-variant mb-8">
                We deliver precise estimates to contractors and developers across 38+ states. Remote-first means zero geographic limitations.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area, i) => (
                  <span key={i} className="text-sm font-semibold bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors">
                    {area}
                  </span>
                ))}
                <span className="text-sm font-semibold bg-primary text-on-primary px-4 py-2 rounded-full">+18 More</span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div id="map" className="relative rounded overflow-hidden shadow-xl" style={{ height: "420px" }}>
              {/* Stylized US map placeholder */}
              <div className="absolute inset-0 bg-primary-container flex flex-col items-center justify-center">
                <div className="absolute inset-0" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
                  backgroundSize: "40px 40px"
                }} />
                <span className="material-symbols-outlined text-6xl text-on-primary-container/30 mb-4">map</span>
                <p className="text-on-primary-container font-headline-sm mb-2">Nationwide Coverage</p>
                <p className="text-on-primary-container/60 text-sm">Houston, TX — serving 38 states</p>

                {/* Simulated map dots */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { top: "35%", left: "20%" }, { top: "55%", left: "25%" },
                    { top: "40%", left: "45%" }, { top: "30%", left: "65%" },
                    { top: "50%", left: "70%" }, { top: "65%", left: "55%" },
                    { top: "45%", left: "80%" }, { top: "35%", left: "35%" },
                    { top: "60%", left: "40%" }, { top: "25%", left: "50%" },
                  ].map((pos, i) => (
                    <div key={i} className="absolute w-3 h-3 bg-secondary rounded-full shadow-lg animate-pulse" style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.3}s` }} />
                  ))}
                  {/* Main office dot */}
                  <div className="absolute w-5 h-5 bg-primary border-2 border-on-primary rounded-full shadow-xl" style={{ top: "58%", left: "38%" }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs px-2 py-1 rounded whitespace-nowrap font-semibold">HQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <p className="text-label-md text-secondary uppercase tracking-widest mb-3">Have Questions?</p>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-16 bg-secondary mx-auto" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} id={`contact-faq-${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd???w=800&auto=format&fit=crop&q=60&q=60')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.07 }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 container-page text-center">
          <p className="text-label-md text-secondary-fixed uppercase tracking-widest mb-4">Your Deadline is Ours</p>
          <h2 className="font-display-lg text-on-primary mb-6" style={{ fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.1, fontWeight: 700 }}>
            Precise Estimates.<br />Fast Turnaround.
          </h2>
          <p className="font-body-lg text-on-primary/80 mb-12 max-w-2xl mx-auto">
            Submit your plans today and receive a bid-ready estimate in 24–48 hours. Emergency same-day service available.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/estimate" className="inline-flex items-center gap-2 bg-secondary text-on-secondary py-5 px-12 rounded font-headline-sm hover:opacity-90 transition-all shadow-xl">
              <span className="material-symbols-outlined">assignment</span>
              Start Your Estimate
            </Link>
            <a href="tel:+18005550192" className="inline-flex items-center gap-2 border border-on-primary/40 text-on-primary py-5 px-12 rounded font-headline-sm hover:bg-on-primary/10 transition-all">
              <span className="material-symbols-outlined">call</span>
              Call Us Now
            </a>
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[
              { icon: "verified", label: "CPE Certified" },
              { icon: "lock", label: "NDA Protected" },
              { icon: "schedule", label: "24-48h Delivery" },
              { icon: "star", label: "4.9 Star Rating" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-on-primary/70 text-sm">
                <span className="material-symbols-outlined text-secondary-fixed" style={{ fontSize: "20px" }}>{b.icon}</span>
                <span className="font-semibold">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
