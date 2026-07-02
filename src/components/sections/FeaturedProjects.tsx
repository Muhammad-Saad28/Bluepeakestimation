import Image from "next/image";
import { MapPin, DollarSign, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/constants";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-[#F6F8FB]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Reveal direction="up">
              <SectionLabel>Featured Projects</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1B1F24] mt-4 mb-3">
                Estimates Behind Real Projects
              </h2>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="text-[#6B7280] text-lg">
                A sample of the projects our estimating team has supported across the USA.
              </p>
            </Reveal>
          </div>
          <Reveal direction="up" delay={200}>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-[#1565D8] font-semibold hover:text-[#082B6B] transition-colors whitespace-nowrap"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} direction="up" delay={i * 80}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-[#E6EAF0] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Trade badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#082B6B]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {project.trade}
                    </span>
                  </div>
                  {/* Value badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#1565D8] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {project.value}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-[#1B1F24] mb-2 group-hover:text-[#1565D8] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#6B7280] text-sm mb-3">
                    <MapPin size={13} />
                    {project.location}
                    <span className="mx-1">·</span>
                    {project.sqft}
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
