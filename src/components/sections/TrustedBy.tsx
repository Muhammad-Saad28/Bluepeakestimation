import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  "Turner Construction",
  "Gilbane Building",
  "Clark Construction",
  "Whiting-Turner",
  "McCarthy Holdings",
  "Hensel Phelps",
  "DPR Construction",
  "Mortenson",
  "Webcor Builders",
  "Skanska USA",
  "JE Dunn",
  "Barton Malow",
];

export function TrustedBy() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 border-y border-[#E6EAF0] bg-white overflow-hidden">
      <div className="container-custom mb-8">
        <Reveal direction="up">
          <p className="text-center text-sm font-semibold text-[#9CA3AF] tracking-widest uppercase">
            Trusted by leading contractors &amp; builders across the USA
          </p>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden select-none" aria-hidden>
        <ul className="flex items-center gap-0 animate-marquee flex-shrink-0">
          {doubled.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex items-center"
            >
              <span className="px-8 text-sm font-semibold text-[#6B7280] hover:text-[#082B6B] transition-colors whitespace-nowrap">
                {name}
              </span>
              <span className="w-px h-5 bg-[#E6EAF0]" />
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-0 animate-marquee flex-shrink-0" aria-hidden>
          {doubled.map((name, i) => (
            <li key={`dup-${name}-${i}`} className="flex items-center">
              <span className="px-8 text-sm font-semibold text-[#6B7280] whitespace-nowrap">
                {name}
              </span>
              <span className="w-px h-5 bg-[#E6EAF0]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
