import { Star, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal direction="up">
            <SectionLabel centered>Client Testimonials</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-4">
              Trusted by Contractors Across America
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-[#6B7280] text-lg">
              Don't take our word for it. Here's what our clients say about working with
              BluePeak Estimation.
            </p>
          </Reveal>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} direction="up" delay={i * 80}>
              <div className="flex flex-col bg-[#F6F8FB] border border-[#E6EAF0] rounded-2xl p-7 hover:border-[#1565D8]/30 hover:shadow-md transition-all duration-300 h-full">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote size={28} className="text-[#1565D8]/20 mb-4" />

                {/* Quote */}
                <blockquote className="text-[#374151] text-sm leading-relaxed flex-1 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-[#E6EAF0]">
                  <div className="w-11 h-11 rounded-full bg-[#082B6B] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#1B1F24] text-sm">{testimonial.name}</div>
                    <div className="text-[#6B7280] text-xs">
                      {testimonial.title} · {testimonial.company}
                    </div>
                    <div className="text-[#9CA3AF] text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
