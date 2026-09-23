import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { MissionVision } from "../components/MissionVision";
import { Services } from "../components/Services";
import { Departments } from "../components/Departments";
import { WhyRadius } from "../components/WhyRadius";
import { AppointmentForm } from "../components/AppointmentForm";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { usePageMeta } from "../hooks/usePageMeta";
import { pageMeta } from "../data/content";

export function Home() {
  usePageMeta(pageMeta.home.title, pageMeta.home.description);

  return (
    <>
      <Hero />
      <Stats />

      <section id="about" className="py-24 sm:py-32 bg-paper">
        <div className="container-px">
          <About />
          <MissionVision />
        </div>
      </section>

      <Services />
      <Departments />
      <WhyRadius />
      <AppointmentForm />
      <Testimonials />
      <Contact />
    </>
  );
}
