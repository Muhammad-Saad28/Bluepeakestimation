import { MetadataRoute } from "next";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { SERVICE_CATALOG, TRADE_CATALOG, SAMPLE_CATALOG } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/about-us`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/trades`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/samples`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/how-it-works`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/pricing`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/why-us`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_CATALOG.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tradeRoutes: MetadataRoute.Sitemap = TRADE_CATALOG.map((trade) => ({
    url: `${SITE.url}/trades/${trade.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const sampleRoutes: MetadataRoute.Sitemap = SAMPLE_CATALOG.map((sample) => ({
    url: `${SITE.url}/samples/${sample.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...tradeRoutes, ...sampleRoutes, ...blogRoutes];
}
