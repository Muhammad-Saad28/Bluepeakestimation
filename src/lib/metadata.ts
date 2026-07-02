import { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  const desc = description ?? SITE.description;
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}/og-image.jpg`;

  const defaultKeywords = [
    "construction estimating services USA",
    "construction estimating company",
    "material takeoff services",
    "construction takeoff",
    "commercial estimating",
    "residential estimating",
    "bid estimates",
    "construction quantity survey",
    "MEP estimating",
    "cost estimating company",
    "construction estimator USA",
    "estimate outsourcing",
    "construction bids",
  ];

  return {
    title: fullTitle,
    description: desc,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    robots: noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}
