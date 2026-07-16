"use client";
import React, { useState, useEffect, useRef, type FormEvent } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { getArticleBySlug, type ContentBlock } from "@/lib/blog-content";
import { BLOG_POSTS } from "@/lib/constants";

type CalloutProps = {
  type: "warning" | "tip" | "key" | "info";
  icon: string;
  title: string;
  children: React.ReactNode;
};

function Callout({ type, icon, title, children }: CalloutProps) {
  const border =
    type === "warning"
      ? "border-error text-error bg-red-50"
      : type === "tip"
      ? "border-secondary text-secondary bg-blue-50"
      : type === "key"
      ? "border-primary text-primary bg-slate-50"
      : "border-primary text-primary bg-slate-50";
  return (
    <div className={`border-l-4 rounded-r p-6 my-8 ${border}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-xl">{icon}</span>
        <span className="font-label-md uppercase tracking-wider">{title}</span>
      </div>
      <div className="font-body-md text-on-surface-variant">{children}</div>
    </div>
  );
}

type FaqItemProps = {
  q: string;
  a: string;
  id: string;
};

function FaqItem({ q, a, id }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-outline-variant/30 rounded overflow-hidden">
      <h3>
        <button
          className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-surface-container/40 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          id={`faq-trigger-${id}`}
        >
          <span className="font-label-md text-primary pr-4">{q}</span>
          <span className="material-symbols-outlined text-secondary flex-shrink-0 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>add</span>
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-5 pt-3 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/20">{a}</div>
      </div>
    </div>
  );
}

function TOC({ toc, activeId }: { toc: { id: string; label: string }[]; activeId: string }) {
  return (
    <nav className="bg-surface-container-low border border-outline-variant/30 rounded p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-xl text-secondary">list</span>
        <h3 className="font-label-md text-primary uppercase tracking-widest">Contents</h3>
      </div>
      <ol className="space-y-1">
        {toc.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={`flex items-start gap-3 py-2 px-3 rounded text-sm transition-all ${activeId === item.id ? "bg-primary text-on-primary font-semibold" : "text-on-surface-variant hover:text-primary hover:bg-surface-container"}`}>
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
              <span className="leading-snug">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); if (email) setDone(true); };
  return (
    <section className="my-16 bg-primary rounded p-10 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10">
        <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-3 block">mail_outline</span>
        <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Get More Insights Like This</h3>
        <p className="text-on-primary/70 mb-8 max-w-md mx-auto">Expert estimating guides, cost data, and industry analysis delivered twice a month.</p>
        {done ? (
          <div className="flex items-center justify-center gap-2 text-secondary-fixed font-semibold text-lg">
            <span className="material-symbols-outlined">check_circle</span> You are subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 bg-on-primary/10 border border-on-primary/20 rounded px-5 py-3 text-on-primary placeholder-on-primary/40 focus:outline-none text-sm" />
            <button type="submit" className="bg-secondary text-on-secondary px-8 py-3 rounded font-label-md hover:opacity-90 flex-shrink-0">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}

function renderBlocks(blocks: ContentBlock[], sectionId?: string) {
  if (!blocks) return null;
  const isFaq = sectionId?.includes("faq");
  if (isFaq) {
    const faqItems = blocks
      .filter(b => b.type === "p" && b.text)
      .map(b => {
        const text = b.text!;
        const qIdx = text.indexOf("?");
        if (qIdx > 0) {
          return { q: text.substring(0, qIdx + 1), a: text.substring(qIdx + 1).trim() };
        }
        return { q: text, a: "" };
      });
    if (faqItems.length > 0) {
      return (
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} id={`faq-${sectionId}-${i}`} />
          ))}
        </div>
      );
    }
  }
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return <p key={i} className="font-body-lg text-on-surface-variant mb-5 leading-relaxed">{block.text}</p>;
      case "h2":
        return <h2 key={i} id={block.id} className="font-headline-md text-headline-md text-primary mb-5">{block.text}</h2>;
      case "h3":
        return <h3 key={i} id={block.id} className="font-headline-sm text-primary mb-3 mt-6">{block.text}</h3>;
      case "h4":
        return <h4 key={i} id={block.id} className="font-label-md text-primary uppercase tracking-wider mb-2">{block.text}</h4>;
      case "list":
        return (
          <ul key={i} className="list-disc list-inside font-body-md text-on-surface-variant space-y-2 mb-5 leading-relaxed">
            {block.items?.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        );
      case "numbered-list":
        return (
          <div key={i} className="space-y-6 mb-8">
            {block.items?.map((item, j) => {
              const sep = item.indexOf(": ");
              const title = sep > 0 ? item.substring(0, sep) : "";
              const body = sep > 0 ? item.substring(sep + 2) : item;
              return (
                <div key={j} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded flex items-center justify-center font-bold text-sm group-hover:bg-secondary transition-colors">
                    {String(j + 1).padStart(2, "0")}
                  </div>
                  <div>
                    {title && <h3 className="font-headline-sm text-primary mb-2">{title}</h3>}
                    <p className="font-body-md text-on-surface-variant leading-relaxed">{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "table":
        return (
          <div key={i} className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              {block.headers && (
                <thead>
                  <tr className="bg-surface-container-low">
                    {block.headers.map((h, j) => (
                      <th key={j} className="text-left text-sm font-semibold text-primary px-4 py-3 border-b border-outline-variant/20">{h}</th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {block.rows?.map((row, j) => (
                  <tr key={j} className="border-b border-outline-variant/10 hover:bg-surface-container-lowest/50">
                    {row.map((cell, k) => (
                      <td key={k} className="text-sm text-on-surface-variant px-4 py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "callout":
        return (
          <Callout key={i} type={block.calloutType || "info"} icon={block.calloutIcon || "info"} title={block.calloutTitle || ""}>
            {block.text}
          </Callout>
        );
      case "figure":
        return (
          <figure key={i} className="my-10">
            <div className="w-full h-72 rounded bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${block.figureImg})` }} />
            {block.figureCaption && <figcaption className="text-sm text-outline text-center mt-3 italic">{block.figureCaption}</figcaption>}
          </figure>
        );
      case "stat-grid":
        return (
          <div key={i} className="grid grid-cols-3 gap-4 my-10">
            {block.stats?.map((s, j) => (
              <div key={j} className="bg-surface-container-lowest border border-outline-variant/20 rounded p-6 text-center">
                <div className="font-headline-lg text-primary mb-1" style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 700 }}>{s.value}</div>
                <div className="text-xs text-outline uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        );
      case "tool-grid":
        return (
          <div key={i} className="grid sm:grid-cols-2 gap-4 mb-8">
            {block.tools?.map((tool, j) => (
              <div key={j} className="flex items-center gap-4 bg-surface-container-lowest border border-outline-variant/20 rounded p-4 hover:border-secondary transition-colors">
                <div className="w-10 h-10 bg-primary-fixed rounded flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl text-primary">{tool.icon}</span>
                </div>
                <div>
                  <p className="font-label-md text-primary">{tool.name}</p>
                  <p className="text-xs text-on-surface-variant">{tool.use}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  });
}

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const scrolled = Math.max(0, Math.min(1, (-top) / (height - winH)));
      setProgress(scrolled * 100);
      const headings = article.toc.map(t => document.getElementById(t.id)).filter((e): e is HTMLElement => e !== null);
      let current = "";
      headings.forEach(h => { if (h.getBoundingClientRect().top < 120) current = h.id; });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [article.toc]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-background overflow-x-hidden">
      <div className="fixed top-0 left-0 z-50 h-1 bg-secondary transition-all duration-100" style={{ width: `${progress}%` }} />

      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.img})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/92 via-primary/80 to-background" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-margin-desktop pb-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 text-on-primary/50 text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-on-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
            <Link href="/blog" className="hover:text-on-primary transition-colors">Blog</Link>
            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
            <span className="text-on-primary">{article.category}</span>
          </div>
          <span className="inline-block bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded mb-6">{article.category}</span>
          <h1 className="font-display-lg text-on-primary mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", lineHeight: 1.1, fontWeight: 700 }}>{article.title}</h1>
          {article.subtitle && <p className="font-body-lg text-on-primary/75 mb-10 max-w-2xl mx-auto">{article.subtitle}</p>}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-on-primary/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cover border-2 border-secondary" style={{ backgroundImage: `url(${article.author.img})` }} />
              <div className="text-left">
                <p className="font-semibold text-on-primary">{article.author.name}</p>
                <p className="text-xs text-on-primary/50">{article.author.role}</p>
              </div>
            </div>
            <span className="hidden sm:block w-px h-8 bg-on-primary/20" />
            <div className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>calendar_today</span>{article.date}</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>schedule</span>{article.readTime}</div>
            {article.updated && <div className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>update</span>Updated {article.updated}</div>}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {article.tags.map((tag, i) => (<span key={i} className="text-xs font-semibold border border-on-primary/30 text-on-primary/70 px-3 py-1 rounded-full">{tag}</span>))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-margin-desktop -mt-16 relative z-10 mb-0">
        <div className="w-full h-[480px] rounded shadow-2xl bg-cover bg-center border border-outline-variant/20" style={{ backgroundImage: `url(${article.img})` }} />
      </div>

      {/* Body + Sidebar */}
      <div className="max-w-container-max mx-auto px-margin-desktop py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <article ref={articleRef} className="max-w-3xl">
            {/* Share bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="text-sm text-outline font-semibold uppercase tracking-wider">Share</span>
                <button onClick={copyLink} className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary border border-outline-variant/30 rounded px-3 py-1.5 transition-all hover:border-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>link</span>{copied ? "Copied!" : "Copy Link"}
                </button>
                <button onClick={() => window.print()} className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary border border-outline-variant/30 rounded px-3 py-1.5 transition-all hover:border-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>print</span>Print
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-outline"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>visibility</span>3,847 views</div>
            </div>

            {/* Sections from data */}
            {article.sections.map(section => (
              <section key={section.id} id={section.id} className="mb-14 scroll-mt-24">
                {section.title && <h2 className="font-headline-md text-headline-md text-primary mb-5">{section.title}</h2>}
                {renderBlocks(section.blocks, section.id)}
              </section>
            ))}

            <Newsletter />

            {/* Author bio */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded p-8 flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-cover flex-shrink-0 border-2 border-secondary" style={{ backgroundImage: `url(${article.author.img})` }} />
              <div>
                <p className="text-label-md text-secondary uppercase tracking-wider mb-1">Written by</p>
                <h3 className="font-headline-sm text-primary mb-1">{article.author.name}</h3>
                <p className="text-xs text-outline mb-3">{article.author.role}</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">{article.author.bio}</p>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block sticky top-28 space-y-6">
            <TOC toc={article.toc} activeId={activeId} />
            <div className="bg-primary rounded overflow-hidden shadow-lg">
              <div className="h-28 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop')" }}>
                <div className="h-full bg-primary/70 p-5 flex items-end"><p className="text-on-primary font-headline-sm leading-tight">Need an estimate?</p></div>
              </div>
              <div className="p-6">
                <p className="text-on-primary/70 text-sm mb-5 leading-relaxed">Certified estimators. 24-48h delivery. Fixed-fee pricing.</p>
                <Link href="/estimate" className="block text-center bg-secondary text-on-secondary py-3 rounded font-label-md hover:opacity-90 mb-3">Request an Estimate</Link>
                <Link href="/contact" className="block text-center text-on-primary/60 text-sm hover:text-on-primary">Or speak to our team</Link>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded p-5">
              <p className="text-label-md text-primary uppercase tracking-wider mb-4">Share</p>
              <div className="flex flex-col gap-2">
                <button onClick={copyLink} className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary border border-outline-variant/20 rounded px-4 py-2.5 transition-all hover:border-primary"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>link</span>{copied ? "Copied!" : "Copy Link"}</button>
                <button onClick={() => window.print()} className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary border border-outline-variant/20 rounded px-4 py-2.5 transition-all hover:border-primary"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>print</span>Print Article</button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-label-md text-secondary uppercase tracking-widest mb-2">Keep Reading</p>
              <h2 className="font-headline-lg text-headline-lg text-primary">Related Articles</h2>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-secondary font-label-md hover:gap-3 transition-all">All Articles <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_forward</span></Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {relatedPosts.map((rel, i) => (
              <Link key={i} href={`/blog/${rel.slug}`} className="group bg-surface-container-lowest border border-outline-variant/20 rounded overflow-hidden hover:shadow-xl hover:border-secondary transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${rel.img})` }} />
                  <div className="absolute top-3 left-3"><span className="text-xs font-bold uppercase tracking-wider bg-primary text-on-primary px-3 py-1 rounded">{rel.category}</span></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-outline"><span>{rel.date}</span><span className="w-1 h-1 bg-outline rounded-full" /><span>{rel.readTime}</span></div>
                  <h3 className="font-headline-sm text-primary group-hover:text-secondary transition-colors mb-3 leading-snug">{rel.title}</h3>
                  {rel.author && <p className="text-xs text-outline">{rel.author}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center">
          <p className="text-label-md text-secondary-fixed uppercase tracking-widest mb-4">Apply What You Learned</p>
          <h2 className="font-display-lg text-on-primary mb-5" style={{ fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.1, fontWeight: 700 }}>Ready for a Precision Estimate?</h2>
          <p className="font-body-lg text-on-primary/75 mb-10 max-w-2xl mx-auto">Let our certified estimating team put these principles to work on your next project. Delivered in 24-48 hours, CSI-aligned, bid-ready.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/estimate" className="inline-flex items-center gap-2 bg-secondary text-on-secondary py-5 px-12 rounded font-headline-sm hover:opacity-90 shadow-xl"><span className="material-symbols-outlined">assignment</span>Request an Estimate</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 border border-on-primary/40 text-on-primary py-5 px-12 rounded font-headline-sm hover:bg-on-primary/10 transition-all"><span className="material-symbols-outlined">arrow_back</span>Back to Blog</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
