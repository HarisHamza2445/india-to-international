import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowRightIcon, CheckCircleIcon, ToothIcon } from "./icons";

const MDS_CHECKLIST = [
  "50% All India Quota Dental seat matrix counselling via MCC portal.",
  "Management and NRI Quota seat optimization in premier dental institutes.",
  "State CET Cell dental quota choice preference ordering.",
];

export function NeetMdsSection() {
  return (
    <section id="neet-mds" className="w-full border-t border-line bg-stats py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Guidance, Branches & Quotas */}
          <Reveal variant="left">
          <div>
            <div className="flex items-center gap-2 font-bold uppercase tracking-[0.06em] text-brand">
              <ToothIcon className="h-4 w-4 shrink-0" />
              <span className="text-[12px] sm:text-[13px]">
                Dental Postgraduate Admissions
              </span>
            </div>

            <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px]">
              NEET MDS Dental Postgraduate
              <br className="hidden sm:inline" /> Counselling
            </h2>

            <p className="mt-3.5 max-w-[560px] text-[15px] font-normal leading-[1.65] text-muted sm:text-[16px]">
              Specialized admission pathways for Master of Dental Surgery (MDS) across Government Dental Colleges, Deemed Dental Universities, and State Institutional seats nationwide.
            </p>

            {/* 2 Side-by-Side Branch Cards */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="rounded-[14px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(16,24,45,0.02)] transition-all hover:border-[#cbd7e8] hover:shadow-[0_4px_16px_rgba(16,24,45,0.05)]">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-brand">
                  Top Clinical Branches
                </span>
                <h4 className="mt-2 text-[15.5px] font-bold text-ink sm:text-[16px]">
                  Orthodontics &amp; Oral Surgery
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted sm:text-[13.5px]">
                  High-demand branches with verified clinical patient flow and machine availability.
                </p>
              </div>

              <div className="rounded-[14px] border border-line bg-white p-5 shadow-[0_2px_8px_rgba(16,24,45,0.02)] transition-all hover:border-[#cbd7e8] hover:shadow-[0_4px_16px_rgba(16,24,45,0.05)]">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-brand">
                  Restorative Fields
                </span>
                <h4 className="mt-2 text-[15.5px] font-bold text-ink sm:text-[16px]">
                  Endodontics &amp; Prostho
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted sm:text-[13.5px]">
                  Seat allocation dynamics and private hospital stipend analysis across states.
                </p>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="mt-7 space-y-3.5">
              {MDS_CHECKLIST.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[14px] font-medium text-ink/90 sm:text-[14.5px]"
                >
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex h-[48px] items-center gap-2 rounded-lg bg-brand px-6 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-alt"
              >
                <span>Consult MDS Advisory Desk</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          </Reveal>

          {/* Right Column: Clinical Benchmark Photo Card */}
          <Reveal variant="right">
          <div className="relative h-[440px] w-full overflow-hidden rounded-[22px] shadow-[0_12px_36px_rgba(16,24,45,0.12)] sm:h-[500px] lg:h-[560px]">
            <Image
              src="/i3.png"
              alt="Dental surgeons and residents operating in specialized clinical dental setup"
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              priority
              className="object-cover"
            />

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <span className="inline-block rounded-[4px] bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                MDS DENTAL HOSPITAL BENCHMARK
              </span>
              <h3 className="mt-3 text-[20px] font-bold leading-snug text-white sm:text-[23px]">
                Verified Clinical Infrastructure
              </h3>
              <p className="mt-2 max-w-[480px] text-[13.5px] leading-relaxed text-white/85 sm:text-[14px]">
                Auditing dental chair ratios, CBCT technology access, and advanced prosthodontic labs.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
