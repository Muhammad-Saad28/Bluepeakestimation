"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  as?: "button" | "a";
  href?: string;
  target?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1565D8] text-white shadow-blue-sm hover:bg-[#0E4DB3] hover:shadow-blue-md active:bg-[#082B6B] focus-visible:ring-2 focus-visible:ring-[#1565D8]/40",
  secondary:
    "bg-[#082B6B] text-white shadow-navy-sm hover:bg-[#0E4DB3] active:bg-[#061e4d] focus-visible:ring-2 focus-visible:ring-[#082B6B]/40",
  outline:
    "border-2 border-[#1565D8] text-[#1565D8] bg-transparent hover:bg-[#1565D8] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1565D8]/40",
  ghost:
    "bg-transparent text-[#1565D8] hover:bg-[#EBF2FF] focus-visible:ring-2 focus-visible:ring-[#1565D8]/40",
  white:
    "bg-white text-[#082B6B] shadow-md hover:shadow-lg hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-white/40",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-12 px-8 text-base gap-2",
  xl: "h-14 px-10 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      className,
      children,
      disabled,
      as,
      href,
      target,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none relative overflow-hidden",
      "disabled:opacity-60 disabled:cursor-not-allowed",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (as === "a" || href) {
      return (
        <a href={href} target={target} className={baseClasses}>
          {loading && <Loader2 className="animate-spin" size={16} />}
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={baseClasses}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" size={16} />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
