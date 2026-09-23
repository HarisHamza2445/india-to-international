import { Logo } from "./Logo";
import { ShieldCheckIcon } from "./icons";

const NAV_LINKS = [
  { label: "NEET UG (MBBS/BDS) Guidance", href: "#neet-ug" },
  { label: "NEET PG (MD/MS/DNB) Matrix", href: "#neet-pg" },
  { label: "NEET MDS Dental Specializations", href: "#neet-mds" },
  { label: "NEET Rank & Cutoff Predictor", href: "#predictors" },
  {
    label: "Sample Predictor Report (vedikasample.pdf)",
    href: "#admission-audit",
    highlight: true,
  },
  { label: "Admissions Photo Gallery", href: "#moments" },
  { label: "MCC & State Choice Filling", href: "#pathways" },
  { label: "About Navin Harjwani", href: "#about" },
  { label: "Book Consultation Slot", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0b1329] pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-white lg:pb-0">
      <div className="mx-auto max-w-[1424px] px-4 py-16 sm:px-8 sm:py-20">
        {/* ── Top Area: 3 Columns ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Column 1: Brand & Credibility (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="text-base font-bold text-white sm:text-lg">
                  India To International
                </h3>
                <p className="text-xs text-slate-400">
                  Medical Admission & Counselling Desk
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-xs leading-relaxed text-slate-400 sm:text-[13px]">
              Certified Medical Admission Counsellors with over 19 years of verified clinical and academic advisory excellence. Authoritative guidance for NEET UG, NEET PG, and MDS across All India Quota, Deemed, and State institutional seats.
            </p>

            <div className="mt-8 flex items-center gap-2.5 text-xs font-semibold text-slate-300">
              <ShieldCheckIcon className="h-4 w-4 text-[#0062ff]" />
              <span>Institutional Accreditation & Certified Regulatory Framework</span>
            </div>
          </div>

          {/* Column 2: Navigation Hub (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              NAVIGATION HUB
            </h4>

            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-xs transition sm:text-[13px] ${
                      link.highlight
                        ? "font-semibold text-slate-200 hover:text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Central Counselling Office (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CENTRAL COUNSELLING OFFICE
            </h4>

            <p className="mt-5 text-xs font-semibold text-slate-200 sm:text-[13px]">
              Sadashiv Peth, Swargate, Pune, Maharashtra 411030
            </p>

            <div className="mt-5 space-y-2 text-xs text-slate-400">
              <p>
                Helpline 1:{" "}
                <a
                  href="tel:+919359544396"
                  className="text-slate-300 hover:text-white"
                >
                  +91-93595 44396
                </a>
              </p>
              <p>
                Helpline 2:{" "}
                <a
                  href="tel:+919711857351"
                  className="text-slate-300 hover:text-white"
                >
                  +91-97118 57351
                </a>
              </p>
              <p className="pt-2">
                Official Desk:{" "}
                <a
                  href="mailto:info@indiatointernational.com"
                  className="text-slate-300 hover:text-white"
                >
                  info@indiatointernational.com
                </a>
              </p>
              <p className="pt-2">
                Visiting Hours: Mon – Sat: 09:30 AM – 07:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 India To International. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="transition hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-slate-300">
              Terms of Service
            </a>
            <a href="#disclaimer" className="transition hover:text-slate-300">
              Regulatory Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
