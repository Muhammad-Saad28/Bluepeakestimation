"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  { label: "All", slug: "all" },
  { label: "Estimating Tips", slug: "estimating-tips" },
  { label: "Industry News", slug: "industry-news" },
  { label: "Cost Data", slug: "cost-data" },
  { label: "Project Management", slug: "project-management" },
  { label: "MEP", slug: "mep" },
  { label: "Case Studies", slug: "case-studies" },
  { label: "Technology", slug: "technology" },
  { label: "Estimating Guide", slug: "estimating-guide" },
  { label: "Industry Trends", slug: "industry-trends" },
  { label: "Bidding Strategy", slug: "bidding-strategy" },
];

const categorySlugMap: Record<string, string> = {
  "Bidding Strategy": "bidding-strategy",
  "Estimating Guide": "estimating-guide",
  "MEP Estimating": "mep",
  "Cost Data": "cost-data",
  "Technology": "technology",
  "Industry Trends": "industry-trends",
};

const articles = BLOG_POSTS.map(p => ({
  slug: p.slug,
  category: categorySlugMap[p.category] || "estimating-tips",
  featured: p.featured,
  title: p.title,
  excerpt: p.excerpt,
  img: p.img,
  author: p.author,
  authorImg: p.authorImg,
  date: p.date,
  readTime: p.readTime,
  tags: p.tags,
}));

const popularPosts = articles.slice(0, 4);

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article, size = "normal" }: { article: typeof articles[0]; size?: "normal" | "small" }) {
  if (size === "small") {
    return (
      <Link href={`/blog/${article.slug}`} className="group flex gap-4 items-start py-4 border-b border-outline-variant/20 last:border-0 hover:opacity-80 transition-opacity">
        <div className="flex-shrink-0 w-20 h-20 rounded bg-cover bg-center" style={{ backgroundImage: `url(${article.img})` }} />
        <div className="flex-1 min-w-0">
          <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{article.date}</span>
          <h4 className="text-sm font-semibold text-primary leading-snug mt-1 line-clamp-2 group-hover:text-secondary transition-colors">{article.title}</h4>
          <span className="text-xs text-outline mt-1 block">{article.readTime}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${article.slug}`} className="group bg-surface-container-lowest border border-outline-variant/20 rounded overflow-hidden hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden h-52">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${article.img})` }} />
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold uppercase tracking-wider bg-primary text-on-primary px-3 py-1.5 rounded">
            {categories.find(c => c.slug === article.category)?.label}
          </span>
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4 text-xs text-outline">
          <span>{article.date}</span>
          <span className="w-1 h-1 bg-outline rounded-full" />
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-headline-sm text-primary mb-3 leading-snug group-hover:text-secondary transition-colors line-clamp-2">{article.title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${article.authorImg})` }} />
            <span className="text-xs font-semibold text-on-surface-variant">{article.author}</span>
          </div>
          <span className="text-secondary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <div className="bg-primary rounded p-8 text-center">
      <span className="material-symbols-outlined text-3xl text-secondary-fixed mb-3 block">mail_outline</span>
      <h3 className="font-headline-sm text-on-primary mb-2">Estimating Insights</h3>
      <p className="text-sm text-on-primary/70 mb-5">Industry tips, cost data, and expert guides — delivered twice a month.</p>
      {done ? (
        <div className="flex items-center justify-center gap-2 text-secondary-fixed font-semibold">
          <span className="material-symbols-outlined">check_circle</span>
          You are subscribed!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-on-primary/10 border border-on-primary/20 rounded px-4 py-3 text-on-primary placeholder-on-primary/40 focus:outline-none focus:border-secondary-fixed text-sm"
          />
          <button type="submit" className="w-full bg-secondary text-on-secondary py-3 rounded font-label-md hover:opacity-90 transition-all">
            Subscribe Free
          </button>
          <p className="text-xs text-on-primary/40">No spam. Unsubscribe anytime.</p>
        </form>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const featured = articles.find(a => a.featured)!;
  const nonFeatured = articles.filter(a => !a.featured);

  const filtered = useMemo(() => {
    return nonFeatured.filter(a => {
      const matchCat = activeCategory === "all" || a.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="bg-background overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca???w=800&auto=format&fit=crop&q=60&q=60')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-on-primary/50 text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-on-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>chevron_right</span>
            <span className="text-on-primary">Blog</span>
          </div>
          <p className="text-label-md text-secondary-fixed uppercase tracking-widest mb-4">Insights & Resources</p>
          <h1 className="font-display-lg text-display-lg text-on-primary mb-5" style={{ lineHeight: "1.05" }}>
            The BluePeak<br />
            <span className="text-secondary-fixed">Estimating Journal</span>
          </h1>
          <p className="font-body-lg text-on-primary/75 max-w-2xl mx-auto mb-10">
            Expert guides, cost data, industry analysis, and practical tips for contractors, developers, and construction professionals.
          </p>

          {/* ── Search Bar ── */}
          <div className="max-w-xl mx-auto relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline" style={{ fontSize: "22px" }}>search</span>
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles, topics, trades..."
              className="w-full bg-surface-container-lowest/95 backdrop-blur border border-outline-variant/30 rounded pl-14 pr-6 py-4 text-on-surface font-body-md placeholder-outline focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 shadow-xl transition-all"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-5 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────────────────── */}
      <div className="bg-surface-container-lowest border-b border-outline-variant/20 sticky top-0 z-30 shadow-sm">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.slug
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container border border-outline-variant/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Article ──────────────────────────────────────────── */}
      {!search && activeCategory === "all" && (
        <section className="py-16 bg-background">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-0.5 w-8 bg-secondary" />
              <p className="text-label-md text-secondary uppercase tracking-widest">Featured Article</p>
            </div>
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-[1fr_480px] gap-0 bg-surface-container-lowest border border-outline-variant/20 rounded overflow-hidden hover:shadow-2xl hover:border-secondary transition-all duration-400">
              {/* Image */}
              <div className="relative overflow-hidden h-80 lg:h-auto min-h-[400px]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${featured.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="text-xs font-bold uppercase tracking-wider bg-secondary text-on-secondary px-3 py-1.5 rounded">
                    Featured
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-label-md text-secondary uppercase tracking-widest mb-4">
                  {categories.find(c => c.slug === featured.category)?.label}
                </span>
                <h2 className="font-headline-lg text-primary mb-4 leading-snug group-hover:text-secondary transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">{featured.excerpt}</p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: `url(${featured.authorImg})` }} />
                  <div>
                    <p className="text-sm font-semibold text-primary">{featured.author}</p>
                    <p className="text-xs text-outline">{featured.date} · {featured.readTime}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold border border-outline-variant/50 text-on-surface-variant px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-secondary font-label-md group-hover:gap-3 transition-all">
                  Read Full Article
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_forward</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Main Content: Article Grid + Sidebar ─────────────────────── */}
      <section className="py-12 pb-32 bg-background">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* Article Grid */}
            <div>
              {/* Results header */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-outline">
                  {filtered.length === 0 ? "No articles found" : `${filtered.length} article${filtered.length !== 1 ? "s" : ""}`}
                  {search && <span> matching &quot;<strong className="text-primary">{search}</strong>&quot;</span>}
                </p>
                {(search || activeCategory !== "all") && (
                  <button
                    onClick={() => { setSearch(""); setActiveCategory("all"); }}
                    className="text-sm text-secondary hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>close</span>
                    Clear filters
                  </button>
                )}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-24 border border-dashed border-outline-variant/40 rounded">
                  <span className="material-symbols-outlined text-5xl text-outline mb-4 block">search_off</span>
                  <p className="font-headline-sm text-primary mb-2">No articles found</p>
                  <p className="text-on-surface-variant text-sm">Try a different search term or category.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-8">
                  {filtered.map((article, i) => (
                    <ArticleCard key={i} article={article} />
                  ))}
                </div>
              )}

              {/* Load more (decorative) */}
              {filtered.length >= 4 && (
                <div className="text-center mt-14">
                  <button className="inline-flex items-center gap-2 border border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary px-10 py-4 rounded font-label-md transition-all">
                    <span className="material-symbols-outlined">refresh</span>
                    Load More Articles
                  </button>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-8 lg:sticky lg:top-28">

              {/* Newsletter */}
              <Newsletter />

              {/* Popular Posts */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="material-symbols-outlined text-xl text-secondary">trending_up</span>
                  <h3 className="font-headline-sm text-primary">Popular Posts</h3>
                </div>
                <div>
                  {popularPosts.map((post, i) => (
                    <ArticleCard key={i} article={post} size="small" />
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="material-symbols-outlined text-xl text-secondary">category</span>
                  <h3 className="font-headline-sm text-primary">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.filter(c => c.slug !== "all").map((cat, i) => {
                    const count = articles.filter(a => a.category === cat.slug).length;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded text-sm transition-all ${
                          activeCategory === cat.slug
                            ? "bg-primary text-on-primary font-semibold"
                            : "hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${activeCategory === cat.slug ? "bg-on-primary/20 text-on-primary" : "bg-surface-container text-outline"}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA Card */}
              <div className="rounded overflow-hidden shadow-md">
                <div className="bg-cover bg-center h-32" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop')" }}>
                  <div className="h-full bg-primary/80 flex items-end p-5">
                    <p className="text-on-primary font-headline-sm leading-tight">Need a precise estimate?</p>
                  </div>
                </div>
                <div className="bg-primary p-6">
                  <p className="text-on-primary/75 text-sm mb-5 leading-relaxed">
                    Our certified estimators deliver bid-ready packages in 24–48 hours for any trade or division.
                  </p>
                  <Link href="/estimate" className="block text-center bg-secondary text-on-secondary py-3 rounded font-label-md hover:opacity-90 transition-all">
                    Request an Estimate
                  </Link>
                  <Link href="/contact" className="block text-center text-on-primary/70 text-sm mt-3 hover:text-on-primary transition-colors">
                    Or contact our team →
                  </Link>
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-xl text-secondary">sell</span>
                  <h3 className="font-headline-sm text-primary">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(articles.flatMap(a => a.tags))).map((tag, i) => (
                    <button
                      key={i}
                      onClick={() => setSearch(tag)}
                      className="text-xs font-semibold border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary px-3 py-1.5 rounded-full transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-label-md text-secondary-fixed uppercase tracking-widest mb-4">Put It Into Practice</p>
            <h2 className="font-display-lg text-on-primary mb-4" style={{ fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.1, fontWeight: 700 }}>
              Ready to Put These Insights to Work?
            </h2>
            <p className="font-body-lg text-on-primary/80">
              Get a precision estimate from a certified team — delivered in 24 to 48 hours, CSI-aligned, and ready to submit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
            <Link href="/estimate" className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary py-5 px-10 rounded font-headline-sm hover:opacity-90 transition-all shadow-xl">
              <span className="material-symbols-outlined">assignment</span>
              Request an Estimate
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 border border-on-primary/40 text-on-primary py-5 px-10 rounded font-headline-sm hover:bg-on-primary/10 transition-all">
              <span className="material-symbols-outlined">apps</span>
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
