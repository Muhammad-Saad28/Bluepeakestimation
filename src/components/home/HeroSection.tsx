import Link from "next/link";
import { ShieldCheck, ArrowRight, Star, Clock, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#050F1E] text-white overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background visual effect */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-blue-900/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-blue-900/20 blur-[100px]" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-800/30 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Trusted by 1,000+ Contractors Nationwide
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-extrabold tracking-tight mb-6">
              Precision Construction <br className="hidden md:block" />
              <span className="text-[#3B82F6]">Estimates.</span> <br />
              Delivered Fast.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              We deliver detailed, CSI-formatted cost estimates in <strong className="text-white">24–48 hours</strong> so you win more bids, cut pre-construction costs, and never miss a deadline. All 50 states. All trades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact" className="bg-[#1E40AF] hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold transition-colors flex items-center justify-center gap-2 text-lg">
                Upload Plans <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/18005550193" target="_blank" rel="noopener noreferrer" className="border border-slate-600 hover:border-slate-400 bg-transparent text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-2 text-lg" aria-label="Chat with BluePeak Estimation on WhatsApp">
                <MessageCircle className="w-5 h-5 text-green-500" /> Chat on WhatsApp
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800/60">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md border border-slate-700 flex items-center justify-center bg-slate-800/50 flex-shrink-0">
                  <Star className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">3,200+ Projects</p>
                  <p className="text-slate-400 text-sm">Completed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md border border-slate-700 flex items-center justify-center bg-slate-800/50 flex-shrink-0">
                  <Clock className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">24-48 Hour</p>
                  <p className="text-slate-400 text-sm">Turnaround</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md border border-slate-700 flex items-center justify-center bg-slate-800/50 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">97% Accuracy</p>
                  <p className="text-slate-400 text-sm">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-[#0A1327] border border-slate-800 p-8 rounded-xl shadow-2xl backdrop-blur-md relative z-20">
              <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">Quick Contact</p>
              <h2 className="text-2xl font-bold text-white mb-2">Draft an Inquiry</h2>
              <p className="text-slate-400 text-sm mb-8">Share your details to draft an email to us.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Full Name *</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#050F1E] border border-slate-700 rounded-md px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Email *</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-[#050F1E] border border-slate-700 rounded-md px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#050F1E] border border-slate-700 rounded-md px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Message *</label>
                  <textarea placeholder="Tell us about your project or the estimate you need..." rows={4} className="w-full bg-[#050F1E] border border-slate-700 rounded-md px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#1E40AF] hover:bg-blue-600 text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2 mt-4">
                  Draft Email <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
