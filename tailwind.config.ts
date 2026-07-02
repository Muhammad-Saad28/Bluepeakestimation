import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8eef8",
          100: "#c5d3ee",
          200: "#9fb6e2",
          300: "#7899d6",
          400: "#5b82ce",
          500: "#3d6bc5",
          600: "#3763bf",
          700: "#2f58b7",
          800: "#274eaf",
          900: "#1a3d9f",
          950: "#082B6B",
          DEFAULT: "#082B6B",
        },
        blue: {
          brand: "#1565D8",
          accent: "#2A7FFF",
          hover: "#0E4DB3",
          light: "#EBF2FF",
        },
        gray: {
          bg: "#F6F8FB",
          border: "#E6EAF0",
          text: "#1B1F24",
          muted: "#6B7280",
          subtle: "#9CA3AF",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "section": "6rem",
        "section-lg": "8rem",
      },
      boxShadow: {
        "xs": "0 1px 2px 0 rgba(0,0,0,0.05)",
        "sm": "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)",
        "md": "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.04)",
        "lg": "0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -4px rgba(0,0,0,0.04)",
        "xl": "0 20px 25px -5px rgba(0,0,0,0.07), 0 8px 10px -6px rgba(0,0,0,0.04)",
        "2xl": "0 25px 50px -12px rgba(0,0,0,0.15)",
        "blue-sm": "0 4px 14px rgba(21,101,216,0.2)",
        "blue-md": "0 8px 24px rgba(21,101,216,0.25)",
        "blue-lg": "0 16px 40px rgba(21,101,216,0.3)",
        "navy-sm": "0 4px 14px rgba(8,43,107,0.2)",
        "card": "0 2px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-down": "fadeDown 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "counter": "counter 2s ease-out",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "blueprint-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23E6EAF0' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
