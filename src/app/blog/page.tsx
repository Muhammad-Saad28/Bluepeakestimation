import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Construction Estimating Blog | Tips, Guides & Industry News",
  description:
    "Expert articles on construction estimating, material takeoffs, bid strategy, MEP estimating, cost data, and industry trends. Resources for US contractors and builders.",
  alternates: { canonical: `${SITE.url}/blog` },
};

const categories = ["All", "Estimating Guide", "Bidding Strategy", "MEP Estimating", "Technology", "Cost Data", "Industry Trends"];

const featured = BLOG_POSTS.find((p) => p.featured);
const rest = BLOG_POSTS.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#082B6B] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.8'/%3E%3C/svg%3E\")" }} />
        <div className="container-custom relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2A7FFF]" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#2A7FFF]">Blog & Resources</span>
              <span className="w-6 h-px bg-[#2A7FFF]" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Construction Estimating Insights
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Expert guides, industry trends, and actionable tips to help contractors
              estimate smarter and win more bids.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-[#F6F8FB]">
        <div className="container-custom">
          {/* Category filters */}
          <Reveal direction="up">
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    cat === "All"
                      ? "bg-[#082B6B] text-white"
                      : "bg-white border border-[#E6EAF0] text-[#6B7280] hover:border-[#1565D8] hover:text-[#1565D8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Featured post */}
          {featured && (
            <Reveal direction="up" delay={100}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-[#E6EAF0] shadow-card hover:shadow-card-hover transition-all mb-10"
              >
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1565D8] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1565D8] mb-3">
                    <Tag size={11} /> {featured.category}
                  </span>
                  <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1B1F24] mb-3 group-hover:text-[#1565D8] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-[#9CA3AF] mb-6">
                    <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(featured.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                  </div>
                  <span className="flex items-center gap-2 text-[#1565D8] font-semibold text-sm">
                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} direction="up" delay={i * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E6EAF0] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1565D8] mb-3">
                      <Tag size={11} /> {post.category}
                    </span>
                    <h2 className="font-heading text-base font-bold text-[#1B1F24] mb-2 group-hover:text-[#1565D8] transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#9CA3AF] pt-4 border-t border-[#E6EAF0]">
                      <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
