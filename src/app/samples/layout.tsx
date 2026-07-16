import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Free Sample Construction Estimates — Download Excel",
  description:
    "Download 20+ free professional construction estimate samples. Excel spreadsheets with quantity takeoffs, material costs, and labor rates for every major trade.",
  path: "/samples",
});

export default function SamplesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
