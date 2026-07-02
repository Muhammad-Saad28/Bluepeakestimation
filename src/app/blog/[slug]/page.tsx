import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: { images: [post.image], type: "article", publishedTime: post.date },
  };
}

// Sample article content (in production, use MDX or CMS)
const articleContent: Record<string, string> = {
  "how-to-win-more-construction-bids": `
## Why Most Contractors Lose Bids

The construction industry has a bid-win rate problem. The average general contractor wins fewer than 20% of the bids they submit. That's not just a numbers game — it's a precision problem.

Most lost bids fall into three categories: too high (inaccurate pricing), too low (missing scope), or not credible (poor presentation). Professional estimating solves all three.

## The Role of Accurate Estimating

An accurate estimate isn't just a number — it's a statement of competence. When a contractor submits a well-organized, detailed estimate, it signals to the owner or GC that they understand the project deeply.

Clients aren't always choosing the lowest number. They're choosing the contractor they trust to deliver. A professional estimate builds that trust before the project even starts.

## Key Strategies to Win More Bids

**1. Know your true costs.** Labor burden, overhead, equipment depreciation — these must be baked into your numbers. Estimating software like RSMeans ensures you're using current market data, not last year's prices.

**2. Scope the project correctly.** More bids are lost to missed scope than wrong unit prices. A thorough plan review, RFI process, and quantity takeoff prevents the costly mistakes that erode margins.

**3. Present professionally.** Bid format matters. A clean, clearly organized estimate with a cover letter, exclusions list, and unit price breakdown tells the owner you're serious.

**4. Turnaround speed.** Late bids get disqualified. Having a professional estimating partner means you can respond to bid invitations you might otherwise pass on.

## How BluePeak Helps You Win

Our estimating team provides everything needed to build a winning bid: accurate quantity takeoffs, current RSMeans pricing, professional Excel format, and delivery in 24–48 hours. Our clients report 3× improvement in bid win rates after working with us.

The math is simple: one won bid covers dozens of estimate fees. The ROI on professional estimating is undeniable.
  `,
};

const defaultContent = `
## Introduction

Professional construction estimating is the foundation of every successful project. Without accurate cost data, contractors risk overbidding and losing work — or underbidding and losing money.

This article covers the key principles, best practices, and tools that separate winning bids from losing ones.

## Understanding the Basics

Construction estimation involves quantifying all materials, labor, equipment, and overhead costs associated with a project. This process — known as a quantity takeoff — is performed from construction drawings and specifications.

The accuracy of your estimate depends on the quality of your takeoff process, the currency of your pricing data, and the experience of your estimating team.

## Best Practices

**Use current cost data.** RSMeans publishes annual cost data covering labor, materials, and equipment across all trades and regions. Using outdated data is one of the most common causes of estimate inaccuracy.

**Perform a complete scope review.** Before beginning the takeoff, read all drawings and specifications. Identify any conflicts, ambiguities, or items that may require RFIs.

**Organize by CSI division.** The Construction Specifications Institute (CSI) MasterFormat provides a standard framework for organizing estimates. Using CSI divisions ensures consistency and makes your estimate easier to review.

**Include all indirect costs.** General conditions, insurance, bonds, overhead, and profit must be calculated and included. A common mistake is building an accurate direct cost estimate but forgetting indirect costs.

## Working with BluePeak

Our estimating team handles the entire process — from plan review to final estimate delivery. We use PlanSwift for takeoffs, RSMeans for pricing, and deliver organized Excel spreadsheets ready for bid submission.

Contact us to learn more about how we can support your next project.
`;

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const content = articleContent[slug] ?? defaultContent;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "BluePeak Estimation" },
    publisher: {
      "@type": "Organization",
      name: "BluePeak Estimation",
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#082B6B] py-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>
          <div className="max-w-3xl">
            <Reveal direction="up">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A7FFF] mb-4">
                <Tag size={11} /> {post.category}
              </span>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                {post.title}
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <span className="flex items-center gap-1.5"><Calendar size={13} />{formatDate(post.date)}</span>
                <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Reveal direction="up">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="rounded-2xl object-cover w-full mb-10"
                />
              </Reveal>
              <Reveal direction="up" delay={100}>
                <p className="text-lg text-[#374151] leading-relaxed mb-8 font-medium border-l-4 border-[#1565D8] pl-6">
                  {post.excerpt}
                </p>
              </Reveal>
              <Reveal direction="up" delay={200}>
                <div
                  className="prose-custom space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: content
                      .split("\n")
                      .map((line) => {
                        if (line.startsWith("## ")) return `<h2>${line.replace("## ", "")}</h2>`;
                        if (line.startsWith("**") && line.endsWith("**"))
                          return `<p><strong>${line.replace(/\*\*/g, "")}</strong></p>`;
                        if (line.trim() && !line.startsWith("<"))
                          return `<p>${line}</p>`;
                        return line;
                      })
                      .join(""),
                  }}
                />
              </Reveal>

              {/* Back link */}
              <Reveal direction="up" delay={300}>
                <div className="mt-12 pt-8 border-t border-[#E6EAF0]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#1565D8] font-semibold hover:text-[#082B6B] transition-colors"
                  >
                    <ArrowLeft size={16} /> Back to Blog
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA card */}
              <Reveal direction="right">
                <div className="bg-[#082B6B] rounded-2xl p-6 text-white sticky top-24">
                  <h3 className="font-heading text-lg font-bold mb-3">
                    Need an Estimate?
                  </h3>
                  <p className="text-white/70 text-sm mb-5">
                    Get professional construction cost estimates delivered in 24–48 hours.
                  </p>
                  <a
                    href="/contact#quote"
                    className="flex items-center justify-center gap-2 py-3 bg-[#1565D8] hover:bg-[#2A7FFF] text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    Get Free Estimate <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>

              {/* Related posts */}
              <Reveal direction="right" delay={100}>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1B1F24] mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="flex gap-3 group"
                      >
                        <Image
                          src={r.image}
                          alt={r.title}
                          width={72}
                          height={56}
                          className="rounded-lg object-cover flex-shrink-0 w-18 h-14"
                        />
                        <div>
                          <p className="text-sm font-medium text-[#1B1F24] group-hover:text-[#1565D8] transition-colors leading-snug">
                            {r.title}
                          </p>
                          <p className="text-xs text-[#9CA3AF] mt-1">{r.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
