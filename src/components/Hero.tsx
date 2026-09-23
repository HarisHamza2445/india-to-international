import Image from "next/image";
import heroConsultationImg from "../../public/hero-consultation.jpg";
import {
  ArrowDownIcon,
  BadgeCheckIcon,
  LandmarkIcon,
  ShieldIcon,
  SparklesIcon,
} from "./icons";

const TRUST_ITEMS = [
  {
    label: "MCC & State Compliant",
    Icon: BadgeCheckIcon,
    className: "text-accent",
  },
  {
    label: "50% AIQ & 85% State",
    Icon: LandmarkIcon,
    className: "text-brand",
  },
  {
    label: "Zero-Donation Policy",
    Icon: ShieldIcon,
    className: "text-brand",
  },
];

export function Hero() {
  return (
    <section id="home" className="w-full bg-white">
      <div className="mx-auto max-w-[1424px] px-4 py-14 sm:px-8 lg:pb-[104px] lg:pt-[72px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-[54px]">
          <div className="w-full">
            <span className="hero-rise inline-flex items-center gap-2 rounded-full bg-sky px-3 py-[6px] font-mono text-[10px] font-semibold uppercase leading-[14px] tracking-[0.35px] text-brand sm:gap-2.5 sm:px-3.5 sm:py-[6.5px] sm:text-[12px] sm:tracking-[0.5px]">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand" />
              <span className="text-left">
                Pune&apos;s 19+ Years Legacy Medical Admission Consultancy
              </span>
            </span>

            <h1 className="hero-rise hero-d1 mt-6 text-[30px] font-extrabold leading-[1.14] tracking-[-1.2px] text-ink sm:mt-7 sm:text-[42px] sm:tracking-[-1.5px] lg:text-[50px]">
              Simplifying Your Medical
              <br className="hidden sm:block" /> Admission Journey
            </h1>

            <p className="hero-rise hero-d2 mt-5 text-[15px] font-normal leading-[1.7] text-muted sm:mt-7 sm:max-w-[580px] sm:text-[17.5px]">
              Authoritative, ethical, and data-backed counselling guidance for
              NEET UG (MBBS/BDS), NEET PG (MD/MS/DNB) and MDS aspirants across
              AIQ, Deemed, and State quotas nationwide.
            </p>

            <div className="hero-rise hero-d3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-5">
              <a
                href="#pathways"
                className="btn-press flex h-[52px] w-full items-center justify-between rounded-md bg-navy px-5 text-[15px] font-semibold text-white transition-opacity hover:opacity-95 sm:h-[54px] sm:w-[305px] sm:text-[15.5px]"
              >
                Explore Counselling Pathways
                <ArrowDownIcon className="h-[17px] w-[17px]" />
              </a>
              <a
                href="#predictors"
                className="btn-press flex h-[52px] w-full items-center justify-center gap-2.5 rounded-md border border-[#DCE3EC] bg-white px-5 text-[15px] font-semibold text-navy shadow-[0_1px_2px_rgba(16,24,45,0.05)] transition-colors hover:bg-sky sm:h-[54px] sm:w-[230px] sm:text-[15.5px]"
              >
                <SparklesIcon className="h-[18px] w-[18px] text-brand" />
                Use Rank Predictor
              </a>
            </div>

            <div className="hero-rise hero-d4 mt-8 border-t border-line pt-6 sm:mt-9 sm:pt-7">
              <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
                {TRUST_ITEMS.map(({ label, Icon, className }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-[13.5px] font-semibold text-muted sm:text-[14px]"
                  >
                    <Icon className={`h-[18px] w-[18px] shrink-0 ${className}`} />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative w-full">
            <div className="hero-pop hero-d3 relative h-[320px] w-full overflow-hidden rounded-[17px] shadow-[0_12px_34px_rgba(16,24,45,0.12)] sm:h-[420px] lg:h-[495px]">
              <Image
                src={heroConsultationImg}
                alt="Navin Harjwani - Principal Counsellor offering in-person and remote NEET admission consultations"
                fill
                sizes="(min-width: 1024px) 650px, 100vw"
                priority
                className="object-cover object-[center_15%]"
              />

              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-[7px] text-[11px] font-semibold text-navy shadow-[0_2px_8px_rgba(16,24,45,0.10)] backdrop-blur-sm sm:left-6 sm:top-[22px] sm:text-[13px]">
                <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-accent" />
                Direct In-Person &amp; Remote Consultations
              </span>

              <div className="absolute inset-x-3 bottom-3 flex min-h-[88px] items-center gap-3 rounded-[10px] bg-white px-3.5 py-3 shadow-[0_10px_28px_rgba(16,24,45,0.16)] sm:inset-x-6 sm:bottom-4 sm:h-[95px] sm:min-h-0 sm:gap-3.5 sm:px-[18px] sm:py-0">
                <div className="hidden h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] border border-[#C9DCFA] bg-sky text-[17px] font-bold text-brand sm:flex">
                  NH
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-3">
                    <span className="text-[15px] font-bold leading-tight text-ink sm:text-[17px]">
                      Navin Harjwani
                    </span>
                    <span className="hidden rounded bg-sky px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.03em] text-brand sm:inline">
                      Principal Counsellor
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-snug text-muted sm:truncate sm:text-[13px]">
                    19+ Years of Trusted Medical Admissions Advisory in Pune
                  </p>
                </div>

                <a
                  href="#contact"
                  className="btn-press flex h-[40px] shrink-0 items-center justify-center rounded-[5px] bg-navy px-3.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-95 sm:w-[90px] sm:px-0 sm:text-[14px]"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
