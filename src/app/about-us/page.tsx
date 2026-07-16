import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About BluePeak Estimation — Our Team & Mission",
  description:
    "Founded in 2009, BluePeak Estimation delivers precise, bid-ready construction estimates to contractors across residential, commercial, and industrial work. Meet our team of certified estimators.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex-1">
      <div className="bg-[#050F1E] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto px-4">
          BluePeak Estimation builds precise, bid-ready estimates for contractors across residential, commercial, and industrial work.
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">
        <div className="premium-card rounded-2xl p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-[#050F1E] mb-4">About BluePeak Estimation</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            We help contractors win more bids with faster turnarounds, clear deliverables, and estimates built around real scope. Since 2009, we have delivered thousands of estimates across all 50 states.
          </p>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            Our certified estimators use industry-standard tools including Bluebeam, PlanSwift, RSMeans, and OST to deliver CSI-formatted cost estimates in 24-48 hours. We cover all trades — from concrete and steel to MEP systems, drywall, roofing, and finishes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-bold transition-colors">
              Learn More About Our Team
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-slate-200 text-[#050F1E] px-6 py-3 rounded-md font-bold transition-colors hover:bg-slate-50">
              Request an Estimate
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/faq" className="text-[#1E40AF] font-bold transition-colors hover:text-blue-600">FAQ</Link>
            <span className="text-slate-300">|</span>
            <Link href="/how-it-works" className="text-[#1E40AF] font-bold transition-colors hover:text-blue-600">How It Works</Link>
            <span className="text-slate-300">|</span>
            <Link href="/services" className="text-[#1E40AF] font-bold transition-colors hover:text-blue-600">Services</Link>
          </div>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 text-[#1E40AF] font-bold transition-colors hover:text-blue-600">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
