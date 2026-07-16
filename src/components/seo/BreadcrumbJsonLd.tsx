"use client";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

const routeMap: Record<string, { name: string; parent?: string }> = {
  "/": { name: "Home" },
  "/about": { name: "About" },
  "/about-us": { name: "About Us" },
  "/services": { name: "Services" },
  "/trades": { name: "Trades" },
  "/samples": { name: "Samples" },
  "/industries": { name: "Industries" },
  "/how-it-works": { name: "How It Works" },
  "/pricing": { name: "Pricing" },
  "/faq": { name: "FAQ" },
  "/blog": { name: "Blog" },
  "/contact": { name: "Contact" },
  "/projects": { name: "Projects" },
  "/why-us": { name: "Why Us" },
};

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();

  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const items: { position: number; name: string; item: string }[] = [
    { position: 1, name: "Home", item: SITE.url },
  ];

  let accumulated = "";
  for (let i = 0; i < parts.length; i++) {
    accumulated += `/${parts[i]}`;
    const route = routeMap[accumulated];
    if (route) {
      items.push({
        position: i + 2,
        name: route.name,
        item: `${SITE.url}${accumulated}`,
      });
    } else {
      items.push({
        position: i + 2,
        name: parts[i].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE.url}${accumulated}`,
      });
    }
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
