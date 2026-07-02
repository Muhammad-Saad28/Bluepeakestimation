import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { SITE } from "@/lib/constants";

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
    default: `${SITE.name} | Accurate Construction Estimates That Help You Win More Bids`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords:
    "construction estimating services USA, construction estimating company, material takeoff services, construction takeoff, commercial estimating, residential estimating, bid estimates, construction quantity survey, MEP estimating, cost estimating company, construction estimator USA, estimate outsourcing, construction bids",
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
    title: `${SITE.name} | Accurate Construction Estimates That Help You Win More Bids`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Professional Construction Estimating`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Accurate Construction Estimates`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
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
    "https://www.linkedin.com/company/bluepeak-estimation",
    "https://www.facebook.com/bluepeakestimation",
  ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#082B6B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased font-body text-gray-text bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
