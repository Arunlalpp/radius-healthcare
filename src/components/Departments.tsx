import { useMemo, useState } from "react";
import {
  Ambulance,
  Baby,
  Bone,
  Brain,
  Droplet,
  Droplets,
  Ear,
  HeartPulse,
  Salad,
  Scissors,
  Search,
  Sparkles,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerReveal } from "./StaggerReveal";
import { DepartmentCard } from "./DepartmentCard";
import { departments } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

const departmentIcons: Record<string, LucideIcon> = {
  "General OPD & Casualty": Ambulance,
  "General Medicine": Stethoscope,
  "General Surgery": Scissors,
  Orthopaedics: Bone,
  Paediatrics: Baby,
  Nephrology: Droplets,
  Gastroenterolgy: Salad,
  Cardiology: HeartPulse,
  Neurology: Brain,
  Urology: Droplet,
  "Dermatology & Cosmetology": Sparkles,
  "Child Psychology": UserRound,
  ENT: Ear,
};

const withIcons = departments.map((dept) => ({
  ...dept,
  icon: departmentIcons[dept.name] ?? Stethoscope,
}));

const midpoint = Math.ceil(withIcons.length / 2);
const row1 = withIcons.slice(0, midpoint);
const row2 = withIcons.slice(midpoint);

type GalleryTileData = (typeof withIcons)[number];

/** Photo tile used in the moving collage — real clinic photography, icon-badged and labelled. */
function GalleryTile({ name, image, icon: Icon }: GalleryTileData) {
  return (
    <div className="group relative h-52 w-64 sm:h-56 sm:w-72 shrink-0 overflow-hidden rounded-2xl shadow-card">
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
      <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-soft">
        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
      </span>
      <p className="absolute inset-x-0 bottom-0 p-4 text-[15px] font-semibold text-white">{name}</p>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: GalleryTileData[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[...items, ...items].map((dept, i) => (
          <GalleryTile key={`${dept.name}-${i}`} {...dept} />
        ))}
      </div>
    </div>
  );
}

export function Departments() {
  const [query, setQuery] = useState("");
  const reducedMotion = useReducedMotion();
  const searching = query.trim().length > 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return withIcons;
    return withIcons.filter((dept) => dept.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="departments" className="py-24 sm:py-32 bg-brand-950 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-700/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Departments"
            title="Our Departments"
            description="Explore our range of specialities, crafted to bring you the best medical care in a patient-friendly environment."
            light
          />

          <label className="relative w-full lg:w-72 shrink-0">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search departments…"
              aria-label="Search departments"
              className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-300 focus:bg-white/10"
            />
          </label>
        </div>
      </div>

      {searching ? (
        <div className="container-px relative">
          {filtered.length > 0 ? (
            <StaggerReveal className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((dept) => (
                <DepartmentCard key={dept.name} {...dept} />
              ))}
            </StaggerReveal>
          ) : (
            <p className="mt-12 text-sm text-white/50">No departments match "{query}".</p>
          )}
        </div>
      ) : reducedMotion ? (
        <div className="container-px relative">
          <StaggerReveal className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {withIcons.map((dept) => (
              <DepartmentCard key={dept.name} {...dept} />
            ))}
          </StaggerReveal>
        </div>
      ) : (
        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-brand-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-brand-950 to-transparent" />
          <div className="flex flex-col gap-4">
            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
          </div>
        </div>
      )}
    </section>
  );
}
