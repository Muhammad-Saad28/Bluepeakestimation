import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Request a construction estimate from BluePeak. Upload your plans and receive a bid-ready cost estimate in 24–48 hours. Contact our estimating team today.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
