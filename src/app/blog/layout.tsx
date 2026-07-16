import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "The BluePeak Estimating Journal — expert construction estimating guides, cost data, industry analysis, and practical tips for contractors and construction professionals.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
