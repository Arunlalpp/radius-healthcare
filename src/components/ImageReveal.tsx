import { useRef, useEffect, type ImgHTMLAttributes } from "react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";

type ImageRevealProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  /** Enables a slow, GPU-friendly parallax drift while scrolling. */
  parallax?: boolean;
  delay?: number;
};

/**
 * Reveals an image with a soft clip-path wipe + gentle scale settle the
 * first time it scrolls into view, with an optional subtle parallax drift.
 */
export function ImageReveal({
  wrapperClassName,
  className,
  parallax = false,
  delay = 0,
  alt,
  ...imgProps
}: ImageRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !wrapperRef.current || !imgRef.current) return;
    ensureGsapRegistered();
    const wrapper = wrapperRef.current;
    const img = imgRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapper,
        { clipPath: "inset(0 0 100% 0 round 1.5rem)" },
        {
          clipPath: "inset(0 0 0% 0 round 1.5rem)",
          duration: 1.1,
          delay,
          ease: "power4.out",
          scrollTrigger: { trigger: wrapper, start: "top 82%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.4,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: wrapper, start: "top 82%", toggleActions: "play none none none" },
        }
      );

      if (parallax) {
        gsap.to(img, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, wrapper);

    return () => ctx.revert();
  }, [reducedMotion, parallax, delay]);

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden rounded-3xl ${wrapperClassName ?? ""}`}
      style={reducedMotion ? undefined : { willChange: "clip-path" }}
    >
      <img
        ref={imgRef}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className ?? ""}`}
        style={reducedMotion ? undefined : { willChange: "transform" }}
        {...imgProps}
      />
    </div>
  );
}
