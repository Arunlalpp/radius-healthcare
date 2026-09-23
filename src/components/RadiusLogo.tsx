type RadiusLogoProps = {
  light?: boolean;
  className?: string;
};

const PETAL = "M43,8 Q45.5,25.5 38,41 Q23,48 8,43";

/** Just the four-petal pinwheel mark, redrawn from the logo on radiushealth.in — reused wherever a standalone icon is needed (preloader, favicon). */
export function RadiusMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="#67B7C5" d={PETAL} />
        <path stroke="#BD3983" d={PETAL} transform="rotate(90 50 50)" />
        <path stroke="#BD3983" d={PETAL} transform="rotate(180 50 50)" />
        <path stroke="#BD3983" d={PETAL} transform="rotate(270 50 50)" />
      </g>
    </svg>
  );
}

/** Radius Health Centre wordmark, redrawn from the four-petal mark on radiushealth.in. */
export function RadiusLogo({ light = false, className }: RadiusLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <RadiusMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-brand-600"}`}>
          Radius
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-white/70" : "text-ink-500"
          }`}
        >
          Health Centre
        </span>
      </span>
    </span>
  );
}
