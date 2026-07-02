"use client";

import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        centered && "justify-center w-full",
        className
      )}
    >
      <span className="w-6 h-px bg-[#1565D8]" />
      <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#1565D8]">
        {children}
      </span>
      <span className="w-6 h-px bg-[#1565D8]" />
    </div>
  );
}
