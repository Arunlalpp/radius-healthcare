type LegalHeroProps = {
  eyebrow: string;
  title: string;
  updated: string;
};

/** Compact banner used atop legal/info pages, matching the site's dark brand section styling. */
export function LegalHero({ eyebrow, title, updated }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-700/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-100">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.12] text-white">
          {title}
        </h1>
        <p className="mt-4 text-sm text-white/60">Last updated: {updated}</p>
      </div>
    </section>
  );
}
