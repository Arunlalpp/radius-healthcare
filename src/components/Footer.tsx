import { Mail, MapPin, Phone } from "lucide-react";
import { RadiusLogo } from "./RadiusLogo";
import { InstagramIcon } from "./InstagramIcon";
import { nav, departments, contact, footer } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-px py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 lg:gap-8">
          <div>
            <RadiusLogo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">{footer.description}</p>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Radius Health Centre on Instagram"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-300 transition hover:border-brand-400 hover:text-brand-300"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-400 transition hover:text-brand-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-5 space-y-3">
              {footer.servicesLinks.map((label) => (
                <li key={label}>
                  <a href="/#services" className="text-sm text-ink-400 transition hover:text-brand-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-5 space-y-3.5 text-sm text-ink-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-400" />
                <span>
                  {contact.name}, {contact.addressLines.join(", ")}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:+91${contact.phones[1].value.replace(/\s/g, "")}`} className="hover:text-brand-300">
                  {contact.phones[1].value}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-brand-300">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-ink-500 mb-3">Departments</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {departments.map((dept) => (
              <a key={dept.name} href="/#departments" className="text-xs text-ink-500 transition hover:text-brand-300">
                {dept.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-ink-500">
            © {year} Radius Healthcare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-xs text-ink-500 hover:text-brand-300">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="text-xs text-ink-500 hover:text-brand-300">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
