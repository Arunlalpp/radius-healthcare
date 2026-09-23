import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="text-lg font-display font-bold text-ink-900">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-500">{description}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-semibold text-brand-600">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
}
