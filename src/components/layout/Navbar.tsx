"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#082B6B] text-white/80 text-xs">
        <div className="container-custom flex items-center justify-between h-8">
          <span>Professional Construction Estimating — Serving All 50 States</span>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        ref={navRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-md border-b border-[#E6EAF0]"
            : "bg-white border-b border-[#E6EAF0]"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="BluePeak Estimation"
                width={180}
                height={60}
                className="h-10 lg:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.children ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#1B1F24] rounded-lg",
                        "hover:text-[#1565D8] hover:bg-[#EBF2FF] transition-all duration-200",
                        activeDropdown === link.label && "text-[#1565D8] bg-[#EBF2FF]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center px-4 py-2 text-sm font-medium text-[#1B1F24] rounded-lg hover:text-[#1565D8] hover:bg-[#EBF2FF] transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 pt-2 min-w-[280px]"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white rounded-xl shadow-2xl border border-[#E6EAF0] overflow-hidden">
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-[#EBF2FF] group transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <ArrowRight
                                size={14}
                                className="mt-1 text-[#1565D8] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                              />
                              <div>
                                <div className="text-sm font-semibold text-[#1B1F24] group-hover:text-[#1565D8] transition-colors">
                                  {child.label}
                                </div>
                                {"description" in child && (
                                  <div className="text-xs text-[#6B7280] mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-[#E6EAF0] px-4 py-3 bg-[#F6F8FB]">
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-[#1565D8] hover:text-[#082B6B] flex items-center gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All 18 Services
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button as="a" href="/contact" variant="outline" size="md">
                Schedule Call
              </Button>
              <Button as="a" href="/contact#quote" variant="primary" size="md">
                Get Free Estimate
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#EBF2FF] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <X size={22} className="text-[#1B1F24]" />
              ) : (
                <Menu size={22} className="text-[#1B1F24]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden border-t border-[#E6EAF0] bg-white overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0"
          )}
        >
          <div className="container-custom py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[#1B1F24] rounded-lg hover:bg-[#EBF2FF] transition-colors"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          mobileExpanded === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileExpanded === link.label ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <div className="ml-4 border-l-2 border-[#E6EAF0] pl-4 py-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-[#6B7280] hover:text-[#1565D8] rounded-lg hover:bg-[#EBF2FF] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex px-4 py-3 text-sm font-medium text-[#1B1F24] rounded-lg hover:bg-[#EBF2FF] hover:text-[#1565D8] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 space-y-3 border-t border-[#E6EAF0] mt-4">
              <Button
                as="a"
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full"
              >
                Schedule Consultation
              </Button>
              <Button
                as="a"
                href="/contact#quote"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
