import { LegalHero } from "../components/LegalHero";
import { contact, pageMeta } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

const h2 = "mt-10 text-xl font-display font-bold text-ink-900 first:mt-0";
const p = "mt-3 text-[15px] leading-relaxed text-ink-600";

export function TermsConditions() {
  usePageMeta(pageMeta.termsConditions.title, pageMeta.termsConditions.description);

  return (
    <>
      <LegalHero eyebrow="Legal" title="Terms & Conditions" updated="23 September 2026" />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <p className={`${p} mt-0`}>
              These terms govern your use of the Radius Health Centre website. By browsing this site or
              submitting the appointment form, you agree to the points below.
            </p>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-[15px] font-semibold text-amber-900">Medical emergency? Don't use this website.</p>
              <p className="mt-1.5 text-sm leading-relaxed text-amber-800">
                If you or someone with you is experiencing a medical emergency, call your local emergency
                number or go directly to the nearest emergency room. Do not wait for a response to an
                appointment request submitted here.
              </p>
            </div>

            <h2 className={h2}>Appointment requests</h2>
            <p className={p}>
              Submitting the "Book Appointment" form sends a request to our team — it is not a confirmed
              booking. Our staff will contact you by phone to confirm the date, time, and doctor's
              availability. Please arrive at the clinic only after your appointment has been confirmed.
            </p>

            <h2 className={h2}>Not medical advice</h2>
            <p className={p}>
              Content on this website — including descriptions of our departments and services — is provided
              for general information only and does not constitute medical advice. It does not create a
              doctor-patient relationship. Always consult a qualified physician for diagnosis or treatment.
            </p>

            <h2 className={h2}>Services &amp; pricing</h2>
            <p className={p}>
              Departments, services, and doctor availability described on this site are indicative and may
              change without notice. Please confirm current availability and pricing directly with the
              clinic before your visit.
            </p>

            <h2 className={h2}>Acceptable use</h2>
            <p className={p}>
              You agree not to misuse this website — including attempting to disrupt it, submit false
              information through the appointment form, or scrape/reproduce its content without permission.
            </p>

            <h2 className={h2}>Intellectual property</h2>
            <p className={p}>
              The Radius Health Centre name, logo, and original content on this site belong to Radius Health
              Centre. Photography used for illustrative purposes remains the property of its respective
              source.
            </p>

            <h2 className={h2}>Third-party links</h2>
            <p className={p}>
              This site links to third-party destinations such as our Instagram page and an embedded Google
              Maps location. We aren't responsible for the content or practices of those external services.
            </p>

            <h2 className={h2}>Limitation of liability</h2>
            <p className={p}>
              This website and its content are provided "as is." To the extent permitted by law, Radius
              Health Centre is not liable for any indirect or incidental loss arising from your use of this
              site, including reliance on unconfirmed appointment requests.
            </p>

            <h2 className={h2}>Governing law</h2>
            <p className={p}>
              These terms are governed by the laws of India, and any disputes are subject to the jurisdiction
              of the courts in Kerala.
            </p>

            <h2 className={h2}>Changes to these terms</h2>
            <p className={p}>
              We may update these terms from time to time. The date at the top of this page reflects the
              most recent revision.
            </p>

            <h2 className={h2}>Contact us</h2>
            <p className={p}>
              Questions about these terms can be sent to{" "}
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
