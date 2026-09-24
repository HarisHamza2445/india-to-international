import { Reveal } from "./Reveal";
import {
  AtSignIcon,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
} from "./icons";

const PILLARS = [
  {
    title: "100% Ethical Process",
    body: "Strictly merit-anchored guidance adhering to NMC, MCC, and State DMER regulations. We strictly oppose donations and black-market seat brokers.",
    foot: "Zero donation policy",
    Icon: AtSignIcon,
  },
  {
    title: "Fee Transparency",
    body: "Complete pre-admission audits on annual tuition, hostel fees, university deposits, and hidden miscellaneous charges across every choice listed.",
    foot: "Audit before choice locking",
    Icon: CheckCircleIcon,
  },
  {
    title: "Service Bond Scrutiny",
    body: "Detailed evaluations of compulsory rural service bonds, seat departure penalty clauses, and post-graduation service bonds across states.",
    foot: "State-by-state bond mapping",
    Icon: ClockIcon,
  },
  {
    title: "Clinical Quality Audit",
    body: "Real metrics on hospital OPD footfall, operational bed occupancy, ICU rotation quality, and surgical hands-on exposure for PG aspirants.",
    foot: "Ground hospital verification",
    Icon: FileTextIcon,
  },
];

export function InstitutionalFoundation() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Institutional Foundation
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.04em] text-ink sm:text-[36px] lg:text-[40px] lg:leading-[1.15]">
              Why Doctors &amp; Families Rely on Our Desk
            </h2>
          </div>
          <p className="max-w-[520px] text-[15px] leading-relaxed text-muted sm:text-[16px]">
            Medical admissions in India require clinical scrutiny, not marketing
            claims. Our process safeguards your score, financial outlay, and
            medical trajectory.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              variant="up"
              delay={index === 0 ? undefined : index === 1 ? "100" : index === 2 ? "200" : "300"}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(16,24,45,0.04)] sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-brand">
                  <pillar.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-ink">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">
                  {pillar.body}
                </p>
                <p className="mt-5 flex items-center gap-2 text-[13px] font-medium text-accent">
                  <CheckCircleIcon className="h-4 w-4 shrink-0" />
                  {pillar.foot}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
