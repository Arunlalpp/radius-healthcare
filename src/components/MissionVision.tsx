import { Target, Eye } from "lucide-react";
import { Reveal } from "./Reveal";
import { mission, vision } from "../data/content";

const cards = [
  { ...mission, icon: Target },
  { ...vision, icon: Eye },
];

export function MissionVision() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.12} direction="up">
          <div className="h-full rounded-3xl bg-teal-100 p-8 sm:p-9 shadow-card transition hover:shadow-lift hover:-translate-y-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-teal-800">
              <card.icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-xl font-display font-bold text-ink-900">{card.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{card.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
