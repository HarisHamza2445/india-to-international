import Link from "next/link";
import { Reveal } from "./Reveal";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  PhotoIcon,
  SparklesIcon,
} from "./icons";

const PORTALS = [
  {
    href: "/neet-ug",
    badge: "Undergraduate",
    title: "NEET UG Guidance (MBBS / BDS)",
    body: "Complete AIQ 15%, 85% State Quota, and Deemed University counselling strategy. Includes round-by-round strategy, choice filling priority sequences, and domicile optimizations.",
    meta: "Govt Medical Colleges • Private • Deemed",
    cta: "View NEET UG Page",
    Icon: AcademicCapIcon,
  },
  {
    href: "/neet-pg",
    badge: "MD / MS / DNB • Post-MBBS Clinical Diploma",
    title: "NEET PG & DNB Specialization",
    body: "Clinical branch prioritization (Radio, Med, Derma, Peds, Ortho, Surgery), DNB vs MD seat evaluations, hospital stipend reviews, and hands-on case exposure comparisons.",
    meta: "MD / MS / DNB • Post-MBBS Clinical Diploma",
    cta: "View NEET PG Page",
    Icon: BuildingOfficeIcon,
  },
  {
    href: "/predictors",
    badge: "Interactive Suite",
    title: "NEET College Predictors & Seat Matrices",
    body: "Input your All India Rank, category, and preferred states to evaluate historical closing ranks, cutoffs, and probability indicators across AIQ and state counselling rounds.",
    meta: "Rank & Matrix Predictor • Bond Probability",
    cta: "Open Predictors Suite",
    Icon: SparklesIcon,
  },
  {
    href: "/gallery",
    badge: "Visual Archive",
    title: "Achievements & Visual Archive",
    body: "Browse our curated photographic gallery documenting felicitations, seminar counselling sessions across Maharashtra, allotment celebrations, and institutional milestones.",
    meta: "Doctor Awards • Parent Seminars • Felicitations",
    cta: "Browse Photo Gallery",
    Icon: PhotoIcon,
  },
];

export function SpecializedPortals() {
  return (
    <section id="resources" className="w-full bg-[#f4f7fb] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Specialized Portals
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.04em] text-ink sm:text-[36px]">
              Dedicated Admission Resources
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              Detailed cutoffs, seat allotment rules, predictive matrices, and archive
              galleries have moved to dedicated hubs. Access them below.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PORTALS.map((portal, index) => (
            <Reveal
              key={portal.href}
              delay={index % 2 === 0 ? undefined : "150"}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-2xl border border-white bg-white p-6 shadow-[0_8px_24px_rgba(16,24,45,0.04)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef4ff] text-brand">
                    <portal.Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-[#f4f7fb] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                    {portal.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-ink sm:text-[20px]">
                  {portal.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {portal.body}
                </p>
                <div className="mt-6 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12px] text-muted">{portal.meta}</p>
                  <Link
                    href={portal.href}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:text-brand-alt"
                  >
                    {portal.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
