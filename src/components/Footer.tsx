import { Logo } from "./Logo";
import { MapPinIcon, ShieldCheckIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home Portal", href: "/" },
  { label: "NEET UG Guidance", href: "/neet-ug" },
  { label: "NEET PG Desk Listing", href: "/neet-pg" },
  { label: "NEET Rank Predictor", href: "/predictors" },
  { label: "Campus & Success Gallery", href: "/gallery" },
  { label: "About Academic Desk", href: "/about" },
];

const AREAS = [
  "Medical Admission Consultant in Wakad",
  "Medical Admission Consultant in Hinjewadi",
  "Medical Admission Consultant in Pimpri Chinchwad",
  "Medical Admission Consultant in Viman Nagar",
  "Medical Admission Consultant in Kharadi",
  "Medical Admission Consultant in Baner",
  "Sadashiv Peth & Swargate Central Office",
];

export function Footer() {
  return (
    <footer className="w-full bg-[#07111f] pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-white lg:pb-0">
      <div className="mx-auto max-w-[1424px] px-4 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="text-base font-bold text-white sm:text-[17px]">
                  India To International
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  NEET Counselling Desk
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-slate-400">
              Providing authoritative, clinically precise medical education guidance
              for over 19+ years. Trusted by thousands of aspiring medical doctors
              across NEET UG &amp; NEET PG counselling frameworks in Maharashtra
              and nationwide.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-slate-300">
              <ShieldCheckIcon className="h-4 w-4 text-brand" />
              Institutional ISO Certified Counselling Partner
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Quick Navigation
            </h4>
            <ul className="mt-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block py-1.5 text-[13px] text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Areas We Serve in Pune &amp; PCMC
            </h4>
            <ul className="mt-5 space-y-2.5">
              {AREAS.map((area) => (
                <li key={area} className="flex items-start gap-2 text-[13px] text-slate-400">
                  <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Direct Contact &amp; Office
            </h4>
            <div className="mt-5 space-y-1 text-[13px] text-slate-400">
              <p className="flex items-start gap-2 py-1">
                <MapPinIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-brand" />
                <span>Sadashiv Peth, Near Swargate Junction, Pune, Maharashtra 411030</span>
              </p>
              <p>
                <a href="tel:+919359544396" className="inline-block py-1.5 hover:text-white">
                  +91-93595 44396
                </a>
              </p>
              <p>
                <a href="tel:+919711857351" className="inline-block py-1.5 hover:text-white">
                  +91-97118 57351
                </a>
              </p>
              <p>
                <a href="mailto:info@indiatointernational.com" className="inline-block py-1.5 hover:text-white">
                  info@indiatointernational.com
                </a>
              </p>
              <p className="pt-2">
                Counselling Desk Hours:
                <br />
                Mon – Sat: 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-slate-500 sm:flex-row sm:items-center">
          <p>
            © 2026 India To International (IndiaToInt.com). All rights reserved. Not
            affiliated with NTA or MCC directly; independent admissions and
            regulatory guidance consultancy.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#disclaimer" className="hover:text-slate-300">
              Regulatory Disclaimer
            </a>
            <a href="#privacy" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300">
              Terms of Guidance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
