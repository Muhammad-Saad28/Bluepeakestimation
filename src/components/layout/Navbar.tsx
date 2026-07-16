"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useState } from "react";

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Trades", href: "/trades" },
  { label: "Samples", href: "/samples" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#050F1E] border-t-4 border-[#0ea5e9] sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-[64px] md:h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center h-full py-2">
          <div className="relative h-10 md:h-14 w-24 md:w-28 flex items-center justify-center bg-[#050F1E]">
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={120}
              height={60}
              className="object-contain max-h-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center h-full space-x-1 lg:space-x-4 xl:space-x-8 text-[15px] font-medium text-white/90">

          <Link href="/" className="h-full flex items-center relative group">
            <span className="hover:text-white transition-colors">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1565D8]"></span>
          </Link>

          {/* Services Mega Menu */}
          <div className="h-full flex items-center relative group cursor-pointer" role="navigation" aria-label="Services menu">
            <Link href="/services" className="flex items-center hover:text-white transition-colors" aria-expanded="false">
              Services <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
            </Link>
            <div className="absolute top-[80px] left-[-20px] w-max bg-[#050F1E] border border-white/10 rounded-xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex gap-12">
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">By method</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Construction Estimating", href: "/services/drywall-takeoff" },
                      { label: "Material Takeoff", href: "/services/flooring-estimating" },
                      { label: "Quantity Surveying", href: "/services/insulation-estimating" },
                      { label: "Bid Preparation", href: "/services/interior-and-exterior-finishes-estimating" },
                      { label: "Residential Estimation", href: "/services/millwork-estimating" },
                      { label: "Commercial Estimation", href: "/services/openings-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">By project type</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Commercial Estimating", href: "/services/openings-estimating" },
                      { label: "Industrial Estimating", href: "/services/duct-estimating" },
                      { label: "Green Building", href: "/services/insulation-estimating" },
                      { label: "Residential Estimating", href: "/services/millwork-estimating" },
                      { label: "Renovation Estimating", href: "/services/interior-and-exterior-finishes-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">Specialty</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Drywall Estimating", href: "/services/drywall-takeoff" },
                      { label: "Painting Estimating", href: "/services/painting-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trades Mega Menu */}
          <div className="h-full flex items-center relative group cursor-pointer" role="navigation" aria-label="Trades menu">
            <Link href="/trades" className="flex items-center hover:text-white transition-colors" aria-expanded="false">
              Trades <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1565D8]"></span>
            
            <div className="absolute top-[80px] left-[-20px] w-max bg-[#050F1E] border border-white/10 rounded-xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex gap-12">
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">MEP</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "MEP Estimating", href: "/trades/mep-estimating" },
                      { label: "Electrical Estimating", href: "/trades/electrical-estimating" },
                      { label: "Mechanical Estimating", href: "/trades/mechanical-estimating" },
                      { label: "Plumbing Estimating", href: "/trades/plumbing-estimating" },
                      { label: "HVAC Estimating", href: "/trades/hvac-estimating" },
                      { label: "Concrete Estimating", href: "/trades/concrete-estimating" },
                      { label: "Steel Estimating", href: "/trades/steel-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">Structure</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Rebar Estimating", href: "/trades/rebar-estimating" },
                      { label: "Roofing Estimating", href: "/trades/roofing-estimating" },
                      { label: "Lumber Estimating", href: "/trades/lumber-estimating" },
                      { label: "Masonry Estimating", href: "/trades/masonry-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">Finishes</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Drywall Takeoff", href: "/trades/drywall-takeoff" },
                      { label: "Flooring Estimating", href: "/trades/flooring-estimating" },
                      { label: "Painting Estimating", href: "/trades/painting-estimating" },
                      { label: "Millwork Estimating", href: "/trades/millwork-estimating" },
                      { label: "Openings Estimating", href: "/trades/openings-estimating" },
                      { label: "Interior & Exterior", href: "/trades/interior-and-exterior-finishes-estimating" },
                      { label: "Insulation Estimating", href: "/trades/insulation-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4 pb-2 border-b border-white/10">Site</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Sitework Estimating", href: "/trades/sitework-estimating" },
                      { label: "Landscaping Estimating", href: "/trades/landscaping-estimating" },
                      { label: "Gutter Estimating", href: "/trades/gutter-estimating" },
                      { label: "Fireproofing Estimating", href: "/trades/fireproofing-estimating" },
                      { label: "Thermal & Moisture Protection", href: "/trades/thermal-and-moisture-protection-estimating" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-start text-white/70 hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="max-w-[180px] leading-tight">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/samples" className="h-full flex items-center relative group">
            <span className="hover:text-white transition-colors">Samples</span>
          </Link>

          <Link href="/about" className="h-full flex items-center relative group">
            <span className="hover:text-white transition-colors">About Us</span>
          </Link>

          <Link href="/pricing" className="h-full flex items-center relative group">
            <span className="hover:text-white transition-colors">Pricing</span>
          </Link>

          <Link href="/blog" className="h-full flex items-center relative group">
            <span className="hover:text-white transition-colors">Blog</span>
          </Link>

          <Link href="/contact" className="h-full flex items-center relative group">
            <span className="hover:text-white transition-colors">Contact</span>
          </Link>

        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <Link
            href="/contact"
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:from-[#0284c7] hover:to-[#1d4ed8] text-white font-semibold text-sm px-5 md:px-6 py-2.5 rounded shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:-translate-y-0.5"
          >
            Get Estimate
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-[#050F1E] border-l border-white/10 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Menu</span>
              <button
                className="flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="py-4">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 transition-colors text-base font-medium border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-semibold text-sm px-6 py-3 rounded shadow-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
