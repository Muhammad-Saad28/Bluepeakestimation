import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Industries",
  description:
    "BluePeak serves contractors and developers across residential, commercial, industrial, healthcare, education, government, and infrastructure sectors with precision cost estimating.",
  path: "/industries",
});

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
