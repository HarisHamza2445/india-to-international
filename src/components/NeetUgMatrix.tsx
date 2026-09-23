import { Reveal } from "./Reveal";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  BuildingOfficeIcon,
  LandmarkIcon,
  LightbulbIcon,
  ShieldCheckIcon,
} from "./icons";

const CARDS = [
  {
    Icon: LandmarkIcon,
    title: "15% AIQ (MCC Counselling)",
    description:
      "All India seat matrix across central universities (AIIMS, JIPMER, AMU, BHU) and government medical colleges nationwide with zero domicile restrictions.",
    bullets: [
      "Round 1 free-exit optimization",
      "Deemed University fee negotiation & verification",
    ],
    tag: "R1 / R2 / STRAY ADVISORY",
  },
  {
    Icon: BuildingOfficeIcon,
    title: "85% State Quota (DMER / CET Cell)",
    description:
      "Deep specialization in Maharashtra State CET Cell, Karnataka KEA, UP DGME, and Bihar state counselling for domicile seat allotments.",
    bullets: [
      "Domicile & non-creamy layer audit",
      "Parallel Open State application tactics",
    ],
    tag: "STATE MERIT OPTIMIZATION",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Cutoff Predictor & Category Audit",
    description:
      "Evaluate prospective MBBS/BDS closing marks against General, OBC, EWS, SC, ST, and Defence/PWD reservation categories based on 5-year trends.",
    bullets: [
      "Multi-year percentile-to-rank matrix",
      "Institutional rural service bond liabilities",
    ],
    tag: "PREDICTIVE INTELLIGENCE",
  },
];

export function NeetUgMatrix() {
  return (
    <section id="neet-ug" className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Section Header */}
        <Reveal>
          <div>
          <div className="flex items-center gap-2 font-bold uppercase tracking-[0.06em] text-brand">
            <AcademicCapIcon className="h-4 w-4 shrink-0" />
            <span className="text-[12px] sm:text-[13px]">
              Undergraduate Medical Guidance
            </span>
          </div>

          <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px]">
            NEET UG Counselling &amp; Admission Matrix
          </h2>

          <div className="mt-3.5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <p className="max-w-[640px] text-[15px] font-normal leading-[1.65] text-muted sm:text-[16px]">
              Strategic guidance for MBBS, BDS, and BAMS admissions covering MCC 15% All India Quota, 85% State Quota counselling, category benefits, and private/deemed universities.
            </p>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14.5px] font-semibold text-brand transition-colors hover:text-brand-alt sm:text-[15px]"
            >
              <span>Request UG Choice-Filling List</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          </div>
        </Reveal>

        {/* 3 Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-10 lg:gap-7">
          {CARDS.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index === 0 ? undefined : index === 1 ? "150" : "300"}
              className="h-full"
            >
              <div
                className="hover-lift flex h-full flex-col justify-between rounded-[18px] border border-line bg-white p-6 shadow-[0_2px_8px_rgba(16,24,45,0.03)] sm:p-7 lg:p-8"
              >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-sky text-brand">
                  <card.Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-[19px] font-bold leading-snug text-ink sm:text-[20px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.65] text-muted">
                  {card.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[13.5px] font-medium text-ink/90 sm:text-[14px]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between pt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-brand sm:text-[11.5px]">
                  {card.tag}
                </span>
                <BadgeCheckIcon className="h-[18px] w-[18px] text-brand" />
              </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Aspirant Tip Banner */}
        <Reveal delay="400" className="mt-8 lg:mt-10">
        <div className="flex flex-col gap-4 rounded-[14px] border border-[#d6e5fb] bg-sky px-5 py-4 shadow-[0_2px_6px_rgba(0,87,217,0.04)] sm:px-6 sm:py-4.5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3.5">
            <LightbulbIcon className="h-5 w-5 shrink-0 text-brand sm:h-[22px] sm:w-[22px]" />
            <p className="text-[13.5px] leading-snug text-ink sm:text-[14px]">
              <strong className="font-extrabold text-ink">
                NEET UG Aspirant Tip:{" "}
              </strong>
              <span className="font-medium text-ink/90">
                Never lock choices before auditing college bank guarantees, compulsory service bonds, and stipend deductions.
              </span>
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-[40px] shrink-0 items-center justify-center self-start rounded-lg bg-navy px-5 text-[13.5px] font-semibold text-white transition-opacity hover:opacity-95 md:self-auto"
          >
            Audit Your College List
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
