import { LegalHero } from "../components/LegalHero";
import { contact } from "../data/content";

const h2 = "mt-10 text-xl font-display font-bold text-ink-900 first:mt-0";
const p = "mt-3 text-[15px] leading-relaxed text-ink-600";
const ul = "mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-600";

export function PrivacyPolicy() {
  return (
    <>
      <LegalHero eyebrow="Legal" title="Privacy Policy" updated="23 September 2026" />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <p className={`${p} mt-0`}>
              Radius Health Centre ("we", "us", "our") operates this website to share information about our
              clinic and let you request an appointment. This policy explains what information we collect
              through the site, why, and how it's handled.
            </p>

            <h2 className={h2}>Information we collect</h2>
            <p className={p}>
              The only personal information this website collects is what you choose to submit through the
              "Book Appointment" form:
            </p>
            <ul className={ul}>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Department you'd like to visit</li>
              <li>Preferred appointment date and time</li>
              <li>Any optional message or requirement you add</li>
            </ul>
            <p className={p}>
              We do not require you to create an account, and we do not collect payment details on this
              website — appointments are confirmed and paid for at the clinic.
            </p>

            <h2 className={h2}>How we use it</h2>
            <p className={p}>
              Appointment request details are used solely to contact you and confirm your visit to Radius
              Health Centre. We do not sell, rent, or use your information for marketing by unrelated third
              parties.
            </p>

            <h2 className={h2}>Third-party services</h2>
            <p className={p}>This site relies on a small number of third-party services to function:</p>
            <ul className={ul}>
              <li>
                <strong className="text-ink-800">Form delivery (Web3Forms):</strong> when you submit the
                appointment form, its contents are transmitted via Web3Forms to our clinic email so our team
                can reach you. Web3Forms processes this only to deliver the message.
              </li>
              <li>
                <strong className="text-ink-800">Google Maps:</strong> the map on our Contact section is
                embedded from Google Maps, which may set its own cookies per Google's policies.
              </li>
              <li>
                <strong className="text-ink-800">Google Fonts:</strong> typefaces used on this site are
                loaded from Google's font servers.
              </li>
            </ul>

            <h2 className={h2}>Testimonials &amp; public reviews</h2>
            <p className={p}>
              Patient testimonials shown on this site are sourced from reviews our patients have already
              posted publicly on Google, including the name and photo attached to that public review. If
              you'd like your review removed from our site, contact us and we'll take it down.
            </p>

            <h2 className={h2}>Cookies &amp; tracking</h2>
            <p className={p}>
              This website does not use analytics, advertising, or tracking cookies of its own. Any cookies
              you encounter come from the third-party embeds above (Google Maps).
            </p>

            <h2 className={h2}>Data retention</h2>
            <p className={p}>
              Appointment request details are kept only as long as needed to schedule and follow up on your
              visit, and are not retained for any other purpose.
            </p>

            <h2 className={h2}>Your rights</h2>
            <p className={p}>
              You can ask us what information we hold about you, or ask us to correct or delete it, at any
              time by emailing{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-brand-600 hover:text-brand-700">
                {contact.email}
              </a>
              .
            </p>

            <h2 className={h2}>Children's privacy</h2>
            <p className={p}>
              This website is not directed at children, and the appointment form is intended to be used by
              adults booking on behalf of themselves, a family member, or a child in their care.
            </p>

            <h2 className={h2}>Changes to this policy</h2>
            <p className={p}>
              We may update this policy from time to time. The date at the top of this page reflects the
              most recent revision.
            </p>

            <h2 className={h2}>Contact us</h2>
            <p className={p}>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-brand-600 hover:text-brand-700">
                {contact.email}
              </a>{" "}
              or {contact.phones[0].value}.
            </p>

            <p className="mt-12 rounded-2xl bg-ink-50 p-5 text-xs leading-relaxed text-ink-500">
              This page is a plain-language template describing how this website currently works. It is not
              a substitute for legal advice — please have it reviewed by qualified counsel before relying on
              it for compliance purposes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
