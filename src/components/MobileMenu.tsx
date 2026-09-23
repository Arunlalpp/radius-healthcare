import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { RadiusLogo } from "./RadiusLogo";
import { nav } from "../data/content";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeHref: string;
};

/** Full-screen mobile navigation overlay with a smooth slide + fade transition. */
export function MobileMenu({ open, onClose, activeHref }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-paper safe-top safe-bottom lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-px flex h-20 items-center justify-between border-b border-ink-100">
            <RadiusLogo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 active:scale-95 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="container-px flex flex-1 flex-col justify-center gap-1">
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                className={`border-b border-ink-100 py-5 text-2xl font-display font-semibold ${
                  activeHref === item.href ? "text-brand-600" : "text-ink-900"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="container-px pb-10 pt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.35, ease: "easeOut" }}
          >
            <a
              href="/#appointment"
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-soft active:scale-[0.98] transition"
            >
              Book Appointment
            </a>
            <p className="mt-5 text-center text-sm text-ink-400">
              Call the clinic:{" "}
              <a href="tel:+917558852664" className="font-medium text-ink-700">
                75588 52664
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
