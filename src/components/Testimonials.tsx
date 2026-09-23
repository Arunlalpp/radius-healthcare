import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();

  function go(next: number) {
    setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => go((index + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reducedMotion]);

  const active = testimonials[index];

  return (
    <section className="py-24 sm:py-32 bg-paper overflow-hidden">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="Real words from people who've visited Radius Health Centre."
          className="mx-auto"
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <Quote className="mx-auto h-9 w-9 text-brand-200" strokeWidth={1.5} />

          <div className="relative mt-6 min-h-[11rem] sm:min-h-[9rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reducedMotion ? 0 : -direction * 24 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <p className="text-lg sm:text-xl leading-relaxed text-ink-800">"{active.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  {active.avatar ? (
                    <img
                      src={active.avatar}
                      alt=""
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-card"
                    />
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                      {initials(active.name)}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-ink-900">{active.name}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition hover:border-brand-400 hover:text-brand-600 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="group relative h-1.5 w-8 overflow-hidden rounded-full bg-ink-200"
                >
                  {i === index && (
                    <motion.span
                      layoutId="testimonial-progress"
                      className="absolute inset-0 rounded-full bg-brand-600"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition hover:border-brand-400 hover:text-brand-600 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
