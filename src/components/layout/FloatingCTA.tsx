"use client";

import { useState, useEffect } from "react";
import { MessageCircle, FileText, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=Hi%20BluePeak%20Estimation!%20I%20would%20like%20to%20get%20a%20free%20estimate%20for%20my%20construction%20project.`;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Expanded options */}
      {expanded && (
        <div className="flex flex-col items-end gap-2 animate-fade-up">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white shadow-xl border border-[#E6EAF0] rounded-full pl-4 pr-5 py-3 hover:shadow-2xl transition-all group"
          >
            <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
              <MessageCircle size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#1B1F24] whitespace-nowrap group-hover:text-[#1565D8]">
              WhatsApp Us
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-3 bg-white shadow-xl border border-[#E6EAF0] rounded-full pl-4 pr-5 py-3 hover:shadow-2xl transition-all group"
          >
            <div className="w-8 h-8 bg-[#082B6B] rounded-full flex items-center justify-center">
              <Phone size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#1B1F24] whitespace-nowrap group-hover:text-[#1565D8]">
              Call Now
            </span>
          </a>

          {/* Get Quote */}
          <a
            href="/contact#quote"
            className="flex items-center gap-3 bg-white shadow-xl border border-[#E6EAF0] rounded-full pl-4 pr-5 py-3 hover:shadow-2xl transition-all group"
          >
            <div className="w-8 h-8 bg-[#1565D8] rounded-full flex items-center justify-center">
              <FileText size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#1B1F24] whitespace-nowrap group-hover:text-[#1565D8]">
              Get Free Estimate
            </span>
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Toggle contact options"
        className={cn(
          "w-14 h-14 rounded-full shadow-blue-lg flex items-center justify-center transition-all duration-300",
          expanded ? "bg-[#E6EAF0] rotate-0" : "bg-[#1565D8] hover:bg-[#0E4DB3] hover:scale-110"
        )}
      >
        {expanded ? (
          <X size={22} className="text-[#1B1F24]" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>
    </div>
  );
}
