import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./InstagramIcon";
import { SectionHeading } from "./SectionHeading";
import { contact } from "../data/content";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Visit or Reach Radius Health Centre"
          description="We're here to help — reach out by phone, email, or drop by the clinic in Vengara."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Reveal direction="right" className="flex flex-col justify-between rounded-3xl border border-ink-100 bg-ink-50/60 p-8 sm:p-10">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{contact.name}</p>
                  {contact.addressLines.map((line) => (
                    <p key={line} className="text-sm text-ink-500">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone.label + phone.value}
                      href={`tel:+91${phone.value.replace(/\s/g, "")}`}
                      className="text-sm text-ink-600 hover:text-brand-600"
                    >
                      <span className="text-ink-400">{phone.label}:</span> {phone.value}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-soft">
                  <Mail className="h-5 w-5" />
                </span>
                <a href={`mailto:${contact.email}`} className="text-sm text-ink-600 hover:text-brand-600">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#appointment"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                Book Appointment
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Radius Health Centre on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition hover:border-brand-400 hover:text-brand-600"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" className="overflow-hidden rounded-3xl border border-ink-100 shadow-card min-h-[22rem]">
            <iframe
              title="Radius Health Centre location"
              src={contact.mapEmbedUrl}
              className="h-full w-full min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
