import { InstagramIcon } from "./InstagramIcon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { StaggerReveal } from "./StaggerReveal";
import { contact, instagramPosts } from "../data/content";

export function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 sm:py-32 bg-ink-50/60">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Follow Us"
          title="Health Tips & Updates on Instagram"
          description="Awareness posts, doctor schedules and news from Radius Health Centre, straight from our page."
          className="mx-auto"
        />

        <StaggerReveal
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          stagger={0.07}
        >
          {instagramPosts.map((post) => (
            <a
              key={post.image}
              href={post.href ?? contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.alt} — view on Instagram`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink-100 shadow-card"
            >
              <img
                src={post.image}
                alt={post.alt}
                width={512}
                height={640}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-brand-700/0 opacity-0 transition duration-300 group-hover:bg-brand-700/40 group-hover:opacity-100 group-focus-visible:bg-brand-700/40 group-focus-visible:opacity-100">
                <InstagramIcon className="h-9 w-9 text-white" />
              </span>
            </a>
          ))}
        </StaggerReveal>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 active:scale-95"
          >
            <InstagramIcon className="h-5 w-5" />
            Follow @radius_health_centre_
          </a>
        </Reveal>
      </div>
    </section>
  );
}
