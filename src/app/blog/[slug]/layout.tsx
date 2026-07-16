import { Metadata } from "next";
import { BLOG_POSTS, SITE } from "@/lib/constants";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article | BluePeak Estimation",
      description: "Read expert construction estimating guides and industry insights from the BluePeak Estimation team.",
    };
  }
  return {
    title: `${post.title} | BluePeak Estimation`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | BluePeak Estimation`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 800, height: 450, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | BluePeak Estimation`,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
  };
}

export default async function BlogArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Person", name: post.author },
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        url: `${SITE.url}/blog/${slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${slug}` },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
