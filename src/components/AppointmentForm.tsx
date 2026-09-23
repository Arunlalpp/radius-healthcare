import { useState, type FormEvent } from "react";
import { CalendarCheck, Clock, Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { appointmentDepartments, contact } from "../data/content";

const fieldClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-400 outline-none transition-all duration-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/12 disabled:opacity-60";

type FormState = {
  name: string;
  phone: string;
  department: string;
  date: string;
  time: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = { name: "", phone: "", department: "", date: "", time: "", message: "" };

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      // Form delivery isn't configured yet — see .env.example for setup.
      console.error(
        "Appointment form: VITE_WEB3FORMS_KEY is not set. Get a free key at https://web3forms.com and add it to .env"
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New appointment request — ${form.name}`,
          from_name: "Radius Health Centre website",
          name: form.name,
          phone: form.phone,
          department: form.department,
          preferred_date: form.date,
          preferred_time: form.time,
          message: form.message || "—",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message ?? "Submission failed");

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("Appointment form submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="appointment" className="py-24 sm:py-32 bg-ink-50">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] rounded-[2rem] overflow-hidden shadow-lift">
          {/* Context panel */}
          <Reveal direction="right" className="relative bg-brand-700 p-10 sm:p-12 flex flex-col justify-between">
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-100">
                Book Appointment
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-display font-bold leading-[1.15] text-white">
                Your health journey starts with one visit.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-100/85">
                Share a few details and our team will get in touch to confirm your appointment at Radius Health
                Centre, Vengara.
              </p>
            </div>

            <div className="relative mt-10 space-y-4">
              <a href={`tel:+91${contact.phones[1].value.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-white/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                {contact.phones[1].value}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-white/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                {contact.email}
              </a>
            </div>
          </Reveal>

          {/* Form panel */}
          <Reveal direction="left" className="bg-white p-8 sm:p-12">
            {status === "success" ? (
              <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-display font-bold text-ink-900">Request received</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                  Thank you — we've noted your preferred details. Our team will call you shortly to confirm your
                  appointment.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {status === "error" && (
                  <div className="sm:col-span-2 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>
                      Something went wrong sending your request. Please try again, or call us directly at{" "}
                      <a href={`tel:+91${contact.phones[1].value.replace(/\s/g, "")}`} className="font-semibold underline">
                        {contact.phones[1].value}
                      </a>
                      .
                    </span>
                  </div>
                )}
                <fieldset disabled={status === "submitting"} className="contents">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink-700">
                    Full name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldClasses}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    inputMode="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldClasses}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="department" className="mb-2 block text-sm font-semibold text-ink-700">
                    Department
                  </label>
                  <select
                    id="department"
                    required
                    value={form.department}
                    onChange={(e) => update("department", e.target.value)}
                    className={`${fieldClasses} appearance-none`}
                  >
                    <option value="" disabled>
                      Select department
                    </option>
                    {appointmentDepartments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="date" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-ink-700">
                    <CalendarCheck className="h-3.5 w-3.5 text-brand-600" />
                    Preferred date
                  </label>
                  <input
                    id="date"
                    required
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={fieldClasses}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="time" className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-ink-700">
                    <Clock className="h-3.5 w-3.5 text-brand-600" />
                    Preferred time
                  </label>
                  <input
                    id="time"
                    required
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={fieldClasses}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink-700">
                    Message / requirement <span className="font-normal text-ink-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us briefly what you need help with"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-brand-600 px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === "submitting" ? "Sending…" : "Book Appointment"}
                  </button>
                </div>
                </fieldset>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
