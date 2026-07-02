import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Clock,
  Award,
} from "lucide-react";

// Social media SVG icons (Lucide removed brand icons in v0.400+)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
import { SITE, SERVICES, INDUSTRIES, SOCIAL } from "@/lib/constants";
import { NewsletterForm } from "./NewsletterForm";

const footerServices = SERVICES.slice(0, 9);
const footerIndustries = INDUSTRIES.slice(0, 6);

const quickLinks = [
  { label: "About BluePeak", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Industries Served", href: "/industries" },
  { label: "Featured Projects", href: "/projects" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Blog & Resources", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const trustBadges = [
  { icon: Shield, text: "NDA Protected" },
  { icon: Clock, text: "24-48hr Delivery" },
  { icon: Award, text: "98% Accuracy" },
];

export function Footer() {
  return (
    <footer className="bg-[#082B6B] text-white">
      {/* Trust strip */}
      <div className="border-b border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80">
                <Icon size={16} className="text-[#2A7FFF]" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-white/80">
              <MapPin size={16} className="text-[#2A7FFF]" />
              <span className="text-sm font-medium">Serving All 50 US States</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="BluePeak Estimation"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert mb-6"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Professional construction cost estimating for contractors and developers across all
              50 states. Accurate estimates. Fast delivery. Winning results.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#1565D8] transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm">{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#1565D8] transition-colors">
                  <Mail size={14} />
                </div>
                <span className="text-sm">{SITE.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-sm">United States of America</span>
              </div>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: LinkedInIcon, href: SOCIAL.linkedin, label: "LinkedIn" },
                { Icon: FacebookIcon, href: SOCIAL.facebook, label: "Facebook" },
                { Icon: InstagramIcon, href: SOCIAL.instagram, label: "Instagram" },
                { Icon: XIcon, href: SOCIAL.twitter, label: "X (Twitter)" },
                { Icon: YouTubeIcon, href: SOCIAL.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1565D8] transition-colors text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2A7FFF]"
                    />
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[#2A7FFF] hover:text-white transition-colors font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries + Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {footerIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries`}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2A7FFF]"
                    />
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white group transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2A7FFF]"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="font-bold text-lg mb-1">Stay ahead with construction insights</h3>
              <p className="text-white/60 text-sm">
                Industry tips, cost updates, and estimating best practices — straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
