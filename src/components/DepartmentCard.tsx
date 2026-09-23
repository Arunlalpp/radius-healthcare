import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type DepartmentCardProps = {
  name: string;
  image: string;
  icon: LucideIcon;
};

/** Compact card used for departments — icon-badged thumbnail, name, and a scan-friendly arrow. */
export function DepartmentCard({ name, image, icon: Icon }: DepartmentCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-3 pr-5 shadow-card transition hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.99]">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
        <img src={image} alt={name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white ring-2 ring-white">
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </div>
      <p className="flex-1 text-[15px] font-semibold text-ink-900">{name}</p>
      <ArrowRight className="h-4 w-4 shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" />
    </div>
  );
}
