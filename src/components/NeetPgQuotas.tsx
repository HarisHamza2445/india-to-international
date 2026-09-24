import { Reveal } from "./Reveal";
import { CheckCircleIcon, BankIcon, MapPinIcon, ClipboardCheckIcon, BuildingOfficeIcon } from "./icons";

const QUOTA_CARDS = [
  {
    Icon: BankIcon,
    tag: "MCC Central Portal",
    title: "50% All India Quota (AIQ)",
    description:
      "Open to candidates across all states without domicile restrictions. Governs seats in State GMCs, AIIMS, PGIMER, JIPMER, VMMC & Safdarjung, RML Hospital, BHU, and AMU.",
    bullets: [
      "100% merit transparency",
      "Central stipend standardization",
      "Upgradation allowed up to R2",
    ],
    footer: "Security Deposit:",
    footerValue: "₹25,000 (Govt/Central AIQ)",
    footerColor: "text-brand",
  },
  {
    Icon: MapPinIcon,
    tag: "State DME Portals",
    title: "50% State Quota & In-Service",
    description:
      "Restricted to MBBS graduates of the parent state or state domicile holders. Features in-service reservations (up to 20–30% in select states) and local institutional quotas.",
    bullets: [
      "State-specific reservation sub-categories",
      "In-service incentive marks addition",
      "Local GMC high retention probability",
    ],
    footer: "Authority Example:",
    footerValue: "State CET Cell Maharashtra, KEA, DME",
    footerColor: "text-brand",
  },
  {
    Icon: ClipboardCheckIcon,
    tag: "NBE / MCC Central Pool",
    title: "DNB & NBE Diploma Seats",
    description:
      "Awarded by National Board of Examinations. Offered at large corporate, trust, and multi-specialty regional hospitals with standard central tuition fee capped at ₹1.25 Lakh/year.",
    bullets: [
      "Full 1:1 parity with MD/MS by NMC",
      "Cutting-edge private tertiary equipment",
      "Strictly non-negotiable exit exam quality",
    ],
    footer: "Annual Tuition Ceiling:",
    footerValue: "₹1,25,000 Uniform Pan-India",
    footerColor: "text-brand",
  },
  {
    Icon: BuildingOfficeIcon,
    tag: "MCC Deemed Registry",
    title: "Deemed & Management Quota",
    description:
      "100% open nationally via MCC portal without state reservation restrictions. Provides alternate access for moderate ranks seeking top-tier clinical branches like Radio, Derm, and Med.",
    bullets: [
      "Transparent online MCC allotments",
      "Stray round seat conversion audits",
      "NRI quota sponsorship vetting",
    ],
    footer: "Security Deposit:",
    footerValue: "₹2,05,000 (Mandatory MCC)",
    footerColor: "text-brand",
  },
];

export function NeetPgQuotas() {
  return (
    <section
      id="quotas"
      className="w-full border-t border-line bg-[#f7f9fc] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-[760px]">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-brand">
              Counselling Jurisdictions
            </p>
            <h2 className="mt-2.5 text-[26px] font-extrabold leading-[1.18] tracking-[-0.025em] text-ink sm:text-[32px] lg:text-[36px]">
              Understanding Quotas, DNB Tracks &amp;
              <br className="hidden sm:inline" /> Conversion Trajectories
            </h2>
            <p className="mt-3 max-w-[660px] text-[14.5px] leading-[1.65] text-muted sm:text-[15px]">
              Postgraduate seats are distributed across strict jurisdictional silos.
              One incorrect choice code can cause an involuntary seat block or
              disqualify you from subsequent rounds.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTA_CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={
                i === 0 ? undefined : i === 1 ? "100" : i === 2 ? "200" : "300"
              }
            >
              <div className="flex h-full flex-col rounded-[18px] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(16,24,45,0.04)] transition-all hover:border-[#cbd7e8] hover:shadow-[0_6px_24px_rgba(16,24,45,0.08)] sm:p-6">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky">
                  <card.Icon className="h-5 w-5 text-brand" />
                </div>

                {/* Tag + title */}
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
                  {card.tag}
                </p>
                <h3 className="mt-1.5 text-[17px] font-extrabold leading-snug text-ink">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-muted">
                  {card.description}
                </p>

                {/* Bullets */}
                <ul className="mt-4 flex-1 space-y-2.5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-[12.5px] text-ink/80">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-[12px] font-semibold text-ink">
                    {card.footer}
                  </p>
                  <p className={`mt-0.5 text-[12.5px] font-bold ${card.footerColor}`}>
                    {card.footerValue}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
