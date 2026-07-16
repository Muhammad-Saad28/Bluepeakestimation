import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Drywall Estimating Services",
    description: "Drywall takeoffs done right, every time. We handle the full Division 09 scope for busy contractors a..."
  },
  {
    title: "Flooring Estimating Services",
    description: "Wrong waste factors. Missed transitions. Subfloor prep nobody priced. That's how flooring jobs lose..."
  },
  {
    title: "Insulation Estimating Services That Actually Hold Up on Site",
    description: "Wrong insulation quantities don't show up until you're reordering mid-project. By then you've got de..."
  },
  {
    title: "Interior & Exterior Finishes Estimating Services",
    description: "BluePeak handles accurate interior and exterior finishes estimating services for flooring, painting, and ceiling scopes."
  },
  {
    title: "Professional Millwork Estimating Services for Contractors Across the USA",
    description: "A sloppy carpentry estimate costs you the job or the money once you're on site. Neither is acceptabl..."
  },
  {
    title: "Doors, Windows & Openings Estimating Services",
    description: "Missed items on an opening estimate don't show up until you're three weeks into the job. By then, yo..."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4">Our Trades</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#050F1E] leading-tight mb-4">
            Services Included Right Now
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A focused list of estimating, takeoff, and support services organized by trade and delivery type.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all group">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#050F1E] text-lg mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <Link href="/trades" className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:text-blue-800 transition-colors">
            View all trade details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
