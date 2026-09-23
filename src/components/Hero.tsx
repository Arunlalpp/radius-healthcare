import { useLayoutEffect, useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { hero } from "../data/content";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(["[data-hero-item]", imgRef.current], { opacity: 1, y: 0, x: 0, scale: 1, clipPath: "inset(0 0 0% 0)" });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(imgRef.current, { scale: 1.12, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" }, 0)
        .fromTo(
          "[data-hero-item]",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
          0.25
        )
        .fromTo(
          "[data-hero-decor]",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, stagger: 0.15 },
          0.6
        );

      // Slow ambient float on decorative blobs — very subtle, continuous.
      gsap.to("[data-hero-decor]", {
        y: "+=14",
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.6,
      });

      // Gentle parallax drift on the hero image while scrolling past it.
      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="home" ref={rootRef} className="relative isolate min-h-[92vh] sm:min-h-screen overflow-hidden bg-ink-950">
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src={hero.image.src}
          alt={hero.image.alt}
          className="h-full w-full object-cover"
          style={{ willChange: "transform" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/35 to-transparent" />
      </div>

      {/* Decorative ambient elements — subtle, low-contrast */}
      <div
        data-hero-decor
        className="pointer-events-none absolute -top-10 right-[8%] h-48 w-48 rounded-full bg-brand-300/15 blur-3xl"
      />
      <div
        data-hero-decor
        className="pointer-events-none absolute bottom-24 right-[20%] h-32 w-32 rounded-full bg-teal-400/15 blur-2xl"
      />
      <div
        data-hero-decor
        className="pointer-events-none absolute top-1/3 left-[6%] hidden sm:block h-20 w-20 rounded-full border border-white/15"
      />

      <div className="relative z-10 flex min-h-[92vh] sm:min-h-screen items-center">
        <div className="container-px w-full pt-28 pb-20 sm:pt-32">
          <div className="max-w-2xl">
            <span
              data-hero-item
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-teal-100 backdrop-blur-sm"
            >
              {hero.eyebrow}
            </span>

            <h1 data-hero-item className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] text-white">
              {hero.title}
            </h1>

            <p data-hero-item className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
              {hero.description}
            </p>

            <div data-hero-item className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-lift transition hover:bg-brand-50 active:scale-[0.98]"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98]"
              >
                <PlayCircle className="h-4 w-4" />
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        data-hero-item
        className="absolute inset-x-0 bottom-8 hidden sm:flex justify-center"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-1.5 w-1 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
