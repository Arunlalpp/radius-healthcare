import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { RadiusLogo } from "./RadiusLogo";
import { MobileMenu } from "./MobileMenu";
import { nav } from "../data/content";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = ["home", "about", "services", "departments", "contact"];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const pastThreshold = useScrolled(40);
  const scrolled = pastThreshold || !isHome;
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(isHome ? sectionIds : []);
  const activeHref = `/#${activeId}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(13,65,57,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-px safe-top flex h-18 sm:h-20 items-center justify-between">
          <a href="/" className="shrink-0">
            <RadiusLogo light={!scrolled} />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const isActive = isHome && activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? "text-brand-700"
                        : "text-ink-600 hover:text-ink-900"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${
                        scrolled ? "bg-brand-600" : "bg-white"
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+910494 2932664"
              className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-ink-600" : "text-white/85"}`}
            >
              <Phone className="h-4 w-4" />
              0494 293 2664
            </a>
            <a
              href="/#appointment"
              className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 active:scale-[0.98]"
            >
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
              scrolled ? "border-ink-200 text-ink-700" : "border-white/40 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeHref={activeHref} />
    </>
  );
}
