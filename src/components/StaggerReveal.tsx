import { useRef, useEffect, Children, type ReactNode } from "react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  /** Selector (relative to the container) for the items to stagger. Defaults to direct children. */
  itemSelector?: string;
  stagger?: number;
  distance?: number;
  duration?: number;
  start?: string;
};

/**
 * Staggers a fade + slide-up reveal across a group of child elements
 * (cards, list items) as the container scrolls into view.
 */
export function StaggerReveal({
  children,
  className,
  itemSelector = ":scope > *",
  stagger = 0.1,
  distance = 24,
  duration = 0.7,
  start = "top 82%",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const count = Children.count(children);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    ensureGsapRegistered();
    const el = ref.current;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(itemSelector);
      if (!items.length) return;
      gsap.fromTo(
        items,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, itemSelector, stagger, distance, duration, start, count]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
