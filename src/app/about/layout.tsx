import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "BluePeak Estimation: since 2009, delivering institutional-grade cost estimating to contractors, developers, and owners across the United States with certified estimators serving 38 states.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
