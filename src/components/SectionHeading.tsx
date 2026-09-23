import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

/** Consistent eyebrow + title + description block used to open each section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className ?? ""}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
              light
                ? "border-white/25 text-teal-100 bg-white/5"
                : "border-teal-200 bg-teal-50 text-teal-800"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] font-display font-bold ${
            light ? "text-white" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={`max-w-2xl text-base sm:text-lg leading-relaxed ${light ? "text-white/75" : "text-ink-500"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
