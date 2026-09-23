import { Reveal } from "./Reveal";
import { CheckCircleIcon, MapPinIcon, PhoneIcon } from "./icons";

export function AboutAdvisory() {
  return (
    <section
      id="about"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── Left Column: Story & Metrics (7 cols) ── */}
          <Reveal variant="left" className="lg:col-span-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0062ff]">
              ABOUT INDIA TO INTERNATIONAL
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
              Pune’s Most Respected Medical Admission Advisory
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Led by principal counsellor Navin Harjwani, India To International has spent over 19 years delivering honest, data-driven medical guidance in Pune. We protect medical aspirants and their families from chaotic counselling mistakes, hidden college bonds, and fraudulent agents.
            </p>

            {/* Metrics side-by-side */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-xl border border-slate-100 bg-[#f8fafc] p-5">
                <span className="text-2xl font-extrabold text-[#0062ff] sm:text-3xl">
                  19+
                </span>
                <h4 className="mt-1 text-xs font-bold text-slate-900 sm:text-sm">
                  Years of Pure Medical Focus
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  Unmatched experience across AIQ, Deemed, and State quotas.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-[#f8fafc] p-5">
                <span className="text-2xl font-extrabold text-emerald-600 sm:text-3xl">
                  100%
                </span>
                <h4 className="mt-1 text-xs font-bold text-slate-900 sm:text-sm">
                  Regulatory Transparency
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  Direct allotments mapped strictly through official portals.
                </p>
              </div>
            </div>

            {/* Bottom Action & Location */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="rounded-lg bg-[#0d1527] px-5 py-3 text-xs font-semibold text-white shadow-xs transition hover:bg-slate-800 sm:text-sm"
              >
                Schedule a Visit at Swargate Desk
              </a>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 sm:text-sm">
                <MapPinIcon className="h-4 w-4 text-[#0062ff]" />
                <span>Sadashiv Peth, Swargate, Pune</span>
              </div>
            </div>
          </div>
          </Reveal>

          {/* ── Right Column: Academic Lead Profile Card (5 cols) ── */}
          <Reveal variant="right" delay="150" className="lg:col-span-5">
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7">
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf2ff] text-base font-extrabold text-[#0062ff]">
                  NH
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062ff]">
                    ACADEMIC LEAD
                  </span>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Navin Harjwani
                  </h3>
                  <p className="text-xs text-slate-500">
                    Principal Medical Counsellor
                  </p>
                </div>
              </div>

              {/* Verified Checklist */}
              <div className="mt-6 space-y-3.5 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    Personalized 1-on-1 merit and budget evaluation sessions.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    Direct phone & WhatsApp access during Round 1, 2, 3, and Stray Vacancy.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    Rigorous review of rural service bonds and penalty clauses.
                  </p>
                </div>
              </div>

              {/* Pune Office Helpline Box */}
              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    PUNE OFFICE HELPLINE
                  </span>
                  <a
                    href="tel:+919359544396"
                    className="text-base font-bold text-slate-900 transition hover:text-[#0062ff] sm:text-lg"
                  >
                    +91-93595 44396
                  </a>
                </div>

                <a
                  href="tel:+919359544396"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0062ff] text-white shadow-xs transition hover:bg-[#0051d4]"
                  aria-label="Call Helpline"
                >
                  <PhoneIcon className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
