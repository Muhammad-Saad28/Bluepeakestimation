import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    initial: "M",
    name: "Marcus T.",
    role: "General Contractor - BuildRight LLC, Texas",
    text: "BluePeak saved our hide on a $4M commercial warehouse bid. Turnaround was under 36 hours, the numbers were dead-on, and the CSI format made it easy to present to the owner. We won the job.",
    color: "bg-blue-600"
  },
  {
    initial: "S",
    name: "Sarah K.",
    role: "Project Manager - Apex Construction, New York",
    text: "I was skeptical about outsourcing estimates at first. After the first takeoff came back at 97% of our actual cost, I was sold. We now use BluePeak for every bid. The free revision policy is a lifesaver.",
    color: "bg-[#3B82F6]"
  },
  {
    initial: "D",
    name: "Diego R.",
    role: "MEP Subcontractor - Precision MEP, California",
    text: "The MEP estimates are incredibly detailed. They break out labor hours by trade, which is exactly what I need for my subs. Pricing is fair and the 24-hour option is worth every penny when a bid is due tomorrow.",
    color: "bg-[#0EA5E9]"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 inset-x-0 h-64 bg-white rounded-b-[100px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]" />
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4">Client Reviews</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#050F1E] leading-tight mb-4">
            Trusted by Contractors <span className="text-[#2563EB]">Nationwide</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Real feedback from contractors who needed faster quotes, cleaner takeoffs, and fewer bid surprises.
          </p>
        </div>

        {/* Carousel Controls (Visual only for now) */}
        <div className="flex justify-end gap-2 mb-6 pr-4">
          <button className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full relative">
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 left-6" fill="currentColor" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050F1E] text-sm">{review.name}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex flex-col items-center justify-center gap-6">
          <button className="px-6 py-2.5 border-2 border-[#1E40AF] text-[#1E40AF] font-bold rounded-md hover:bg-blue-50 transition-colors text-sm">
            See More Reviews
          </button>
          
          <div className="bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm flex items-center gap-3">
             <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
             </div>
             <span className="text-sm font-bold text-[#050F1E]">4.9 / 5.0</span>
             <span className="text-sm text-slate-500">from 200+ verified reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}
