import { Building2, Briefcase, Paperclip, ShieldCheck } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd???w=800&auto=format&fit=crop&q=60&q=60')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Content - Image */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02]">
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Overlapping Card */}
            <div className="absolute -bottom-8 -right-4 max-w-sm rounded-2xl border border-white/10 bg-[#111111]/80 p-8 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl md:-right-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">Who We Are</p>
              <p className="text-[15px] font-medium leading-relaxed text-gray-200">
                A construction estimating partner built for contractors who need speed, clarity, and dependable bid support.
              </p>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-xl bg-blue-500/20 blur-2xl" />
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-16 lg:mt-0 lg:pl-12">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">About Us</span>
            </div>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Precision built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">contractors.</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-400">
              We provide construction estimating and takeoff services for contractors, developers, and project teams that want dependable numbers without slowing down the bid process. Our work covers a wide range of trades, with a focus on clear scope, practical pricing, and fast turnaround.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-blue-500/30 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-white">Commercial scope</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  We estimate office, retail, multifamily, industrial, and mixed-use projects with a practical bid-focused workflow.
                </p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-purple-500/30 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-white">Trade coverage</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  From concrete and masonry to MEP, drywall, roofing, and framing, we support the trades contractors rely on most.
                </p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-blue-500/30 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <Paperclip className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-white">Detailed takeoffs</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Our deliverables include clear quantities, scope notes, and pricing structure that help you bid faster and smarter.
                </p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-purple-500/30 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-white">Trusted process</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Every estimate is reviewed for clarity, consistency, and the kind of visibility teams need before bidding.
                </p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
