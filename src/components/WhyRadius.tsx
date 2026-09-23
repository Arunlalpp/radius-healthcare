import { SectionHeading } from "./SectionHeading";
import { StaggerReveal } from "./StaggerReveal";
import { whyRadius, whyRadiusPoints } from "../data/content";

export function WhyRadius() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="container-px">
        <SectionHeading eyebrow={whyRadius.eyebrow} title={whyRadius.title} description={whyRadius.description} />

        <StaggerReveal className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyRadiusPoints.map((point) => (
            <div
              key={point.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <img
                src={point.image}
                alt={point.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-display font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{point.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
