import { Users, Stethoscope, Building2 } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { Reveal } from "./Reveal";
import { stats } from "../data/content";

const icons = [Users, Stethoscope, Building2];

export function Stats() {
  return (
    <section className="relative -mt-14 sm:-mt-20 z-20">
      <div className="container-px">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink-100 rounded-3xl border border-ink-100 bg-white shadow-lift">
            {stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <div key={stat.label} className="flex items-center gap-4 px-8 py-8 sm:py-10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-ink-900">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-sm font-medium text-ink-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
