import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE } from '@/lib/constants';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/18fo4fV7jJ/', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/blue_peakestimation', icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bluepeak-estimation-babb4441b', icon: LinkedinIcon },
];

const OFFICES = [
  {
    city: 'New York',
    address: '1178 Broadway, 3rd Floor',
    region: 'New York, NY 10001',
    country: 'USA',
  },
  {
    city: 'Irving, TX',
    address: '5000 Riverside Dr, Suite 100',
    region: 'Irving, TX 75039',
    country: 'USA',
  },
  {
    city: 'Sydney',
    address: '123 Pitt St, Level 5',
    region: 'Sydney NSW 2000',
    country: 'Australia',
  },
];

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Estimating Fees', to: '/pricing' },
  { label: 'How It Works', to: '/faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Samples', to: '/samples' },
  { label: 'Get Estimate', to: '/contact' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneNumber = SITE.phone ? String(SITE.phone) : null;
  const hasPhone = phoneNumber != null && phoneNumber.length > 0;

  return (
    <footer className="bg-[#050F1E] text-gray-400" role="contentinfo" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressCountry" content="US" />
            <Link href="/" aria-label={`${SITE.name} home`}>
              <div className="relative h-12 w-auto mb-4 flex items-center justify-start">
                <Image 
                  src="/logo.png" 
                  alt={SITE.name} 
                  width={120} 
                  height={48} 
                  className="object-contain"
                  itemProp="image"
                />
              </div>
            </Link>
            <meta itemProp="name" content={SITE.name} />
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              Precision construction cost estimates delivered in 24–48 hours.
              Serving contractors across all 50 US states.
            </p>
            <div className="space-y-2 text-sm">
              {hasPhone && phoneNumber && (
                <>
                  <a
                    href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                    itemProp="telephone"
                  >
                    {phoneNumber}
                  </a>
                  <a
                    href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#4ade80] hover:text-[#86efac] transition-colors duration-200"
                  >
                    <MessageCircle className="h-4 w-4 flex-shrink-0" />
                    {phoneNumber} (WhatsApp)
                  </a>
                </>
              )}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                itemProp="email"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {SITE.email}
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Follow Us</p>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2.5 space-x-5 w-fit">
                <a href={`https://wa.me/${SITE.whatsapp}`} className="text-emerald-400 hover:text-emerald-300 transition-colors" aria-label="Contact BluePeak Estimation on WhatsApp" rel="noopener noreferrer">
                  <MessageCircle className="w-[18px] h-[18px]" />
                </a>
                <a href="https://www.facebook.com/bluepeakestimation" className="text-white/70 hover:text-white transition-colors" aria-label="Follow BluePeak Estimation on Facebook" rel="noopener noreferrer" target="_blank">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="https://www.instagram.com/blue_peakestimation" className="text-white/70 hover:text-white transition-colors" aria-label="Follow BluePeak Estimation on Instagram" rel="noopener noreferrer" target="_blank">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="https://x.com/bluepeakest" className="text-white/70 hover:text-white transition-colors" aria-label="Follow BluePeak Estimation on X (Twitter)" rel="noopener noreferrer" target="_blank">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/bluepeak-estimation" className="text-sky-400 hover:text-sky-300 transition-colors" aria-label="Follow BluePeak Estimation on LinkedIn" rel="noopener noreferrer" target="_blank">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['AACE Certified', 'ASPE Member', '97% Accuracy'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 bg-[#131E2D] border border-[#243346] text-gray-400 text-xs px-2.5 py-1 rounded-full"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#5D93F2]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Trades
            </h3>
            <ul className="space-y-2.5" role="list">
              {[
                { title: 'Drywall Estimating Services', slug: 'drywall-takeoff' },
                { title: 'Flooring Estimating Services', slug: 'flooring-estimating' },
                { title: 'Insulation Estimating Services That Actually Hold Up on Site', slug: 'insulation-estimating' },
                { title: 'Interior & Exterior Finishes Estimating Services', slug: 'interior-and-exterior-finishes-estimating' },
                { title: 'Professional Millwork Estimating Services for Contractors Across the USA', slug: 'millwork-estimating' },
                { title: 'Doors, Windows & Openings Estimating Services', slug: 'openings-estimating' },
                { title: 'Painting Estimating Services', slug: 'painting-estimating' },
                { title: 'Duct Estimating Services', slug: 'duct-estimating' }
              ].map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/trades/${service.slug}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#1048A0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
              <ul className="space-y-2.5" role="list">
                {QUICK_LINKS.filter((l) => l.label !== 'Get Estimate').map(({ label, to }) => (
                  <li key={label}>
                    <Link href={to} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4 mt-8">
              Why Us
            </h3>
            <ul className="space-y-2 text-sm" role="list">
              {['24-48hr Turnaround', '97% Accuracy', 'All 50 States', 'Free Revisions', 'No Retainers'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#5D93F2] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Our Offices
            </h3>
            <div className="space-y-5">
              {OFFICES.map((office) => (
                <address key={office.city} className="not-italic">
                  <p className="font-medium text-white text-sm mb-0.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#5D93F2] flex-shrink-0" />
                    <span itemProp="name">{office.city}</span>
                  </p>
                  <p className="text-xs text-gray-500 pl-5" itemProp="streetAddress">{office.address}</p>
                  <p className="text-xs text-gray-500 pl-5" itemProp="addressLocality">{office.region}</p>
                  <p className="text-xs text-gray-600 pl-5" itemProp="addressCountry">{office.country}</p>
                </address>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1A2635]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors duration-200">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gray-400 transition-colors duration-200">Cookie Policy</Link>
          </div>
          <p className="text-gray-700">
            3,200+ Projects &bull; 97% Accuracy &bull; All 50 States
          </p>
        </div>
      </div>
    </footer>
  );
}
