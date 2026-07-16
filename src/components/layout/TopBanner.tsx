import Link from "next/link";
import { Zap } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-[#1E40AF] text-white py-2 px-4 text-sm font-medium flex items-center justify-center gap-2 text-center w-full">
      <Zap className="w-4 h-4 fill-white flex-shrink-0" />
      <span>Limited Time: Get 30% Off Your First Estimate.</span>
      <Link href="/contact" className="underline hover:text-blue-200 font-bold ml-1">
        Send Your Plans Now to Claim It
      </Link>
    </div>
  );
}
