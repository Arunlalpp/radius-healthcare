import { useRef, useEffect, type ReactNode, type ElementType } from "react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  /** Direction the element travels in from. "none" only fades. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Distance in px travelled during the reveal. */
  distance?: number;
  /** Duration in seconds. */
  duration?: number;
  className?: string;
  as?: ElementType;
  /** Play once when scrolled into view (default) or every time. */
  once?: boolean;
  /** Trigger point start, forwarded to ScrollTrigger. */
  start?: string;
};

/**
 * Fades and gently slides a single element into view once it enters the
 * viewport. Respects prefers-reduced-motion by rendering statically.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 28,
  duration = 0.8,
  className,
  as: Tag = "div",
  once = true,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    ensureGsapRegistered();

    const el = ref.current;
    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    if (direction === "down") from.y = -distance;
    if (direction === "left") from.x = distance;
    if (direction === "right") from.x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [reducedMotion, direction, delay, distance, duration, once, start]);

  return (
    <Tag ref={ref} className={className} style={reducedMotion ? undefined : { willChange: "transform, opacity" }}>
      {children}
    </Tag>
  );
}
