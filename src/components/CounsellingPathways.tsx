import { Reveal } from "./Reveal";
import {
  BuildingOfficeIcon,
  GlobeIcon,
  HandshakeIcon,
  NetworkIcon,
} from "./icons";

interface PathwayCard {
  id: string;
  icon: typeof NetworkIcon;
  title: string;
  description: string;
  tag: string;
}

const PATHWAYS: PathwayCard[] = [
  {
    id: "mcc-aiq",
    icon: NetworkIcon,
    title: "MCC AIQ Counselling",
    description:
      "Round-by-round guidance across 50% AIQ, Central Institutes, Deemed Universities and DNB hospitals with strict forfeiture prevention.",
    tag: "CENTRALIZED ALL INDIA",
  },
  {
    id: "state-cet",
    icon: BuildingOfficeIcon,
    title: "Maharashtra & Open States",
    description:
      "Specialized mastery over Maharashtra State CET Cell scrutiny, alongside high-yield Open States like Karnataka, UP, and Bihar.",
    tag: "85% DOMICILE & OPEN MERIT",
  },
  {
    id: "nri-quota",
    icon: GlobeIcon,
    title: "NRI Quota Admissions",
    description:
      "Complete management of Embassy documentation, relationship affidavits, sponsor compliance, and conversion protocols for premium seats.",
    tag: "GLOBAL WARD & NRI SEATS",
  },
  {
    id: "management-quota",
    icon: HandshakeIcon,
    title: "Management Quota Guidance",
    description:
      "Ethical, 100% transparent fee structure validation for direct institutional allotment rounds without unverified middle-men or cash donations.",
    tag: "TRANSPARENT & COMPLIANT",
  },
];

export function CounsellingPathways() {
  return (
    <section
      id="pathways"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* ── Section Header ── */}
        <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0062ff]">
            INSTITUTIONAL REGULATORY FRAMEWORKS
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
            Comprehensive Counselling Pathways
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Precision choice-filling architectures built to eliminate seat surrender penalties and maximize merit outcomes across every round of counselling.
          </p>
        </div>
        </Reveal>

        {/* ── 4 Pathway Cards ── */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PATHWAYS.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <Reveal
                key={pathway.id}
                delay={index === 0 ? undefined : index === 1 ? "100" : index === 2 ? "200" : "300"}
                className="h-full"
              >
                <div
                  className="hover-lift flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0d1b2a] text-white shadow-xs">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                      {pathway.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                      {pathway.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062ff]">
                      {pathway.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
