import Image from "next/image";
import { Reveal } from "./Reveal";
import {
  BondAuditIcon,
  SquareChartIcon,
  SquarePlusIcon,
  StethoscopeIcon,
} from "./icons";

const PG_CARDS = [
  {
    Icon: SquareChartIcon,
    title: "Clinical vs Non-Clinical Tradeoff Analysis",
    description:
      "Guidance for Radio-diagnosis, Dermatology, General Medicine, Pediatrics, Orthopedics, and OBGYN vs emerging diagnostic super-specialties.",
  },
  {
    Icon: SquarePlusIcon,
    title: "DNB Bed Occupancy & Surgical Hands-On Audit",
    description:
      "Empirical data on teaching hospital OPD loads, patient footfall, operative autonomy, and passing percentage across NBE accredited institutions.",
  },
  {
    Icon: BondAuditIcon,
    title: "Rural Bond Liabilities & Security Guarantees",
    description:
      "Comprehensive pre-submission audit of mandatory state service penalties (up to ₹50 Lakhs), seat resignation clauses, and forfeiture rules.",
  },
];

export function NeetPgSection() {
  return (
    <section id="neet-pg" className="w-full border-t border-line bg-sky py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Hospital & Clinical Exposure Image */}
          <Reveal variant="left">
          <div className="relative h-[440px] w-full overflow-hidden rounded-[22px] shadow-[0_12px_36px_rgba(16,24,45,0.12)] sm:h-[520px] lg:h-[620px]">
            <Image
              src="/i2.png"
              alt="Medical residents and doctors walking outside multi-speciality teaching hospital campus"
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              priority
              className="object-cover"
            />

            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent" />

            {/* Bottom Overlay Content */}
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <span className="inline-block rounded-[4px] bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                NEET PG CLINICAL MATRIX
              </span>
              <h3 className="mt-3 text-[20px] font-bold leading-snug text-white sm:text-[23px]">
                MD / MS / DNB / Diploma Hospital Audits
              </h3>
              <p className="mt-2 max-w-[480px] text-[13.5px] leading-relaxed text-white/85 sm:text-[14px]">
                Inspecting OPD bed loads, operative case exposures, and resident stipend regularity nationwide.
              </p>
            </div>
          </div>
          </Reveal>

          {/* Right Column: Guidance Information & Tradeoff Audits */}
          <Reveal variant="right">
          <div>
            <div className="flex items-center gap-2 font-bold uppercase tracking-[0.06em] text-brand">
              <StethoscopeIcon className="h-4 w-4 shrink-0" />
              <span className="text-[12px] sm:text-[13px]">
                Postgraduate Medical Specialisation
              </span>
            </div>

            <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[38px]">
              NEET PG Counselling &amp; Branch Selection (MD / MS / DNB)
            </h2>

            <p className="mt-3 text-[14.5px] font-normal leading-[1.65] text-muted sm:text-[15.5px]">
              Navigating 50% All India Quota MCC, 50% State Quota, Central Institutes (BHU, AMU, IP University), DNB Hospitals (NBE), and CPS/FCPS diplomas with zero margin for seat surrender penalties.
            </p>

            <div className="mt-7 space-y-3.5 sm:space-y-4">
              {PG_CARDS.map((card, index) => (
                <Reveal
                  key={card.title}
                  delay={index === 0 ? undefined : index === 1 ? "150" : "300"}
                >
                  <div className="hover-lift flex items-start gap-4 rounded-[14px] border border-line bg-white p-4.5 shadow-[0_2px_8px_rgba(16,24,45,0.02)] sm:p-5">
                    <card.Icon className="mt-0.5 h-[22px] w-[22px] shrink-0 text-brand" />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[15.5px] font-bold text-ink sm:text-[16px]">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted sm:text-[13.5px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#contact"
                className="btn-press inline-flex h-[48px] items-center justify-center rounded-lg bg-navy px-6 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-95"
              >
                Book NEET PG Strategy Session
              </a>
              <a
                href="#predictors"
                className="btn-press inline-flex h-[48px] items-center justify-center rounded-lg border border-[#DCE3EC] bg-white px-6 text-[14.5px] font-semibold text-ink shadow-[0_1px_2px_rgba(16,24,45,0.04)] transition-colors hover:bg-sky"
              >
                Run PG Predictor
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
