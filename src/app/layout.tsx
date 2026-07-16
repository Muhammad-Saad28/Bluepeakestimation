import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SITE, SOCIAL, TESTIMONIALS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Construction Estimating Services USA | BluePeak Estimation",
    template: `%s | ${SITE.name}`,
  },
  description: "Get accurate construction estimates in 24-48 hours. Professional construction estimating services for contractors across all 50 US states. Request a quote today.",
  keywords: "construction estimating services, construction cost estimation, quantity takeoff services, material takeoff, construction bidding, MEP estimating, residential estimating, commercial estimating, construction takeoff, bid preparation, construction estimator USA",
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Construction Estimating Services USA | BluePeak Estimation",
    description: "Get accurate construction estimates in 24-48 hours. Professional construction estimating services for contractors across all 50 US states. Request a quote today.",
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Construction Estimating Services | BluePeak Estimation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bluepeakest",
    creator: "@bluepeakest",
    title: "Construction Estimating Services USA | BluePeak Estimation",
    description: "Get accurate construction estimates in 24-48 hours. Professional construction estimating services for contractors across all 50 US states. Request a quote today.",
    images: [{
      url: `${SITE.url}/og-image.jpg`,
      alt: "Construction Estimating Services | BluePeak Estimation",
    }],
  },
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    google: "bVfAeBemm9olz9SD3zivbHZaVe2r5QpjjdIe5Q8SWrY",
  },
  icons: {
    icon: { url: '/favicon-64.png', type: 'image/png', sizes: '64x64' },
    apple: { url: '/favicon-64.png' },
    shortcut: '/favicon-64.png',
  },
  category: "Construction Estimating Services",
  classification: "Construction Cost Estimating & Quantity Takeoff Services",
  referrer: "origin-when-cross-origin",
  other: {
    "author": "BluePeak Estimation",
    "geo.region": "US",
    "geo.placename": "United States",
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "color-scheme": "light",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050F1E",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/logo.png`,
  },
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1178 Broadway, 3rd Floor",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "US",
  },
  sameAs: [
    SOCIAL.linkedin,
    SOCIAL.facebook,
    SOCIAL.instagram,
    SOCIAL.twitter,
    SOCIAL.youtube,
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Construction Estimating Services",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  description: SITE.description,
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Construction cost estimating",
    "Material takeoff services",
    "MEP estimating",
    "Quantity surveying",
    "Bid preparation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/logo.png`,
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1178 Broadway, 3rd Floor",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [
    SOCIAL.linkedin,
    SOCIAL.facebook,
    SOCIAL.instagram,
    SOCIAL.twitter,
    SOCIAL.youtube,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "50",
    reviewCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/png" href="/favicon-64.png" />
        <link rel="apple-touch-icon" href="/favicon-64.png" />
        <meta name="author" content="BluePeak Estimation" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script async dangerouslySetInnerHTML={{ __html: "var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';document.head.appendChild(l)" }} />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" /></noscript>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* SEO FIX: Added FAQPage schema for rich snippet eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of construction projects do you estimate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BluePeak Estimation covers all construction types including residential, commercial, industrial, healthcare, education, government, and infrastructure projects. We estimate all trades from concrete and steel to MEP systems, drywall, roofing, and finishes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can I receive my estimate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our standard turnaround is 24-48 hours for most projects. For larger complex projects we provide a timeline after reviewing your plans. Rush delivery within 12 hours is available for an additional fee."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate are your estimates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our estimates carry a 98% accuracy rate based on client feedback and project close-out data. We use RSMeans cost data, local market pricing, and current material costs to ensure every estimate reflects real-world conditions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which trades do you cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide comprehensive takeoffs for all CSI divisions including Civil, Concrete, Masonry, Metals, Wood, Thermal/Moisture Protection, Openings, Finishes, Specialties, Equipment, MEP, and more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What states do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve contractors and developers across all 50 US states. Our team is familiar with regional labor rates, material costs, and local market conditions in major markets including New York, Los Angeles, Chicago, Houston, Phoenix, and beyond."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I get started?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply contact us via our Get Free Estimate form, email, or phone. Upload your plans, describe your project, and we will send you a proposal within a few hours. No commitment required for the initial review."
                  }
                }
              ]
            })
          }}
        />
        {/* SEO FIX: Added Review schema from testimonials data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": TESTIMONIALS.map((t, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": t.name },
                  "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": "5" },
                  "reviewBody": t.quote,
                  "itemReviewed": { "@type": "LocalBusiness", "name": SITE.name }
                }
              }))
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#F5F8FF] text-[#0F172A] overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded focus:outline-2 focus:outline-offset-2 focus:outline-secondary">
          Skip to main content
        </a>
        <Navbar />
        <BreadcrumbJsonLd />
        <main id="main" className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
