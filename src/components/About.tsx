import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { ImageReveal } from "./ImageReveal";
import { StaggerReveal } from "./StaggerReveal";
import { about, values } from "../data/content";

export function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <Reveal direction="right" className="relative order-2 lg:order-1">
        <ImageReveal
          src={about.image.src}
          alt={about.image.alt}
          wrapperClassName="aspect-[4/5] w-full"
          parallax
        />
        <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-white px-6 py-5 shadow-lift border border-ink-100 max-w-[13rem]">
          <p className="text-2xl font-display font-extrabold text-brand-700">Jan 2025</p>
          <p className="mt-0.5 text-xs font-medium text-ink-500">
            Operations began at Vengara, Malappuram
          </p>
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          {about.eyebrow}
        </span>

        <Reveal delay={0.08}>
          <h2 className="mt-5 text-3xl sm:text-4xl font-display font-bold leading-[1.15] text-ink-900">
            {about.title}
          </h2>
        </Reveal>

        <div className="mt-6 space-y-4">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.12 + i * 0.06}>
              <p className="text-base leading-relaxed text-ink-500">{p}</p>
            </Reveal>
          ))}
        </div>

        <StaggerReveal className="mt-8 flex flex-wrap gap-3" itemSelector=":scope > span">
          {values.map((value, i) => (
            <span
              key={value.title}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                i % 2 === 0 ? "bg-brand-50 text-brand-800" : "bg-teal-100 text-teal-800"
              }`}
            >
              <CheckCircle2 className={`h-4 w-4 ${i % 2 === 0 ? "text-brand-600" : "text-teal-700"}`} strokeWidth={2} />
              {value.title}
            </span>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
}
