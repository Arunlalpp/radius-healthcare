import { useRef, useEffect, useState } from "react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";

type AnimatedCounterProps = {
  /** Final numeric value to count up to. */
  value: number;
  /** Text appended after the number, e.g. "+". */
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

/** Counts up from 0 to `value` once the element enters the viewport. */
export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 1.6, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    ensureGsapRegistered();
    const el = ref.current;
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: () => setDisplay(Math.round(counter.val)),
      });
    }, el);

    return () => ctx.revert();
  }, [reducedMotion, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
