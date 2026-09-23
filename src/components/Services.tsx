import { SectionHeading } from "./SectionHeading";
import { StaggerReveal } from "./StaggerReveal";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/content";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-paper">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Healthcare Solutions Available"
          description="From consultation to diagnostics and pharmacy — every service you need for your health, under one roof."
        />

        <StaggerReveal className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
