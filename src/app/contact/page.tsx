import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact BluePeak Estimation | Get a Free Construction Estimate",
  description:
    "Contact BluePeak Estimation for a free construction cost estimate. Serving contractors across all 50 US states. Fast response within 2–4 hours.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const serviceAreas = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
  "Fort Worth", "Columbus", "Charlotte", "Seattle", "Denver", "Nashville",
  "Baltimore", "Louisville", "And All 50 States",
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    description: "Mon–Fri, 8AM–6PM EST",
    color: "#082B6B",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    description: "Response within 2–4 hours",
    color: "#1565D8",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat Now",
    href: `https://wa.me/${SITE.whatsapp}?text=Hi%20BluePeak!%20I%20need%20a%20construction%20estimate.`,
    description: "Instant messaging available",
    color: "#25D366",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Contact</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Get Your Free Estimate
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Fill out the form below and our team will review your project and respond
              within 2–4 business hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-10 bg-white border-b border-[#E6EAF0]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <Reveal key={method.title} direction="up" delay={i * 80}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("https") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-xl border border-[#E6EAF0] hover:border-[#1565D8]/30 hover:shadow-md transition-all bg-white"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${method.color}15` }}
                    >
                      <Icon size={22} style={{ color: method.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wide mb-0.5">{method.title}</div>
                      <div className="font-bold text-[#1B1F24] group-hover:text-[#1565D8] transition-colors">{method.value}</div>
                      <div className="text-xs text-[#9CA3AF]">{method.description}</div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section id="quote" className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left sidebar info */}
            <div className="lg:col-span-2 space-y-8">
              <Reveal direction="left">
                <div>
                  <SectionLabel>Estimate Request</SectionLabel>
                  <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1B1F24] mt-4 mb-4">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    Complete the form and we'll provide a professional estimate tailored
                    to your project. No commitment required.
                  </p>
                </div>
              </Reveal>

              {/* Business hours */}
              <Reveal direction="left" delay={100}>
                <div className="bg-white rounded-2xl p-6 border border-[#E6EAF0]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#EBF2FF] flex items-center justify-center">
                      <Clock size={16} className="text-[#1565D8]" />
                    </div>
                    <h3 className="font-bold text-[#1B1F24]">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm text-[#6B7280]">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-[#1B1F24]">8:00 AM – 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-[#1B1F24]">9:00 AM – 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-[#9CA3AF]">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E6EAF0]">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Rush delivery available 24/7
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Service areas */}
              <Reveal direction="left" delay={200}>
                <div className="bg-white rounded-2xl p-6 border border-[#E6EAF0]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#EBF2FF] flex items-center justify-center">
                      <MapPin size={16} className="text-[#1565D8]" />
                    </div>
                    <h3 className="font-bold text-[#1B1F24]">Service Areas</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceAreas.map((area) => (
                      <span
                        key={area}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          area.includes("All 50")
                            ? "bg-[#082B6B] text-white"
                            : "bg-[#F6F8FB] text-[#6B7280] border border-[#E6EAF0]"
                        }`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Map placeholder */}
              <Reveal direction="left" delay={300}>
                <div className="bg-[#EBF2FF] rounded-2xl overflow-hidden h-48 flex items-center justify-center border border-[#1565D8]/20">
                  <div className="text-center">
                    <MapPin size={32} className="text-[#1565D8] mx-auto mb-2" />
                    <p className="text-[#1565D8] font-semibold text-sm">Serving All 50 US States</p>
                    <p className="text-[#6B7280] text-xs mt-1">Remote estimating — no site visit needed</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal direction="right">
                <div className="bg-white rounded-2xl p-8 border border-[#E6EAF0] shadow-card">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
