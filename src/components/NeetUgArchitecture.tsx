"use client";

import { useRef } from "react";
import { addLead } from "@/lib/dataStore";
import Image from "next/image";
import { Reveal } from "./Reveal";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  CreditCardIcon,
  FileTextIcon,
  LandmarkIcon,
  ListIcon,
  PhoneIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "./icons";

const WA_HREF =
  "https://wa.me/919359544396?text=Hello%20Navin%20Sir%2C%20I%20need%20NEET%20UG%20counselling%20guidance.";

const MCC_ROWS = [
  ["100% AIIMS & JIPMER Institutions", "Open All India"],
  ["100% Deemed Medical Universities", "Institutional Fee Matrix"],
  ["15% Govt Medical College (GMC) Seats", "Pure Merit Rank"],
  ["ESIC Insured Person (IP) Quota", "IP Ward Certificate"],
];

const STATE_ROWS = [
  ["Maharashtra State Quota (85% GMC + Private)", "Strict Domicile Required"],
  ["Karnataka Open Seats (KEA Non-Karnataka)", "Open to All Indian Citizens"],
  ["Uttar Pradesh & Haryana Open Private", "Rank-Based Budget Quota"],
  ["NRI & Institutional Management Quotas", "Sponsorship Verification"],
];

const RISK_CARDS = [
  {
    title: "Rural Service Bond Audit",
    body: "MBBS graduates face mandatory state rural health tenure upon course completion. Penalty values vary starkly by state legislation.",
    Icon: ShieldIcon,
    color: "bg-[#eef4ff]",
    iconColor: "text-brand",
    items: [
      ["Maharashtra GMCs:", "1 Year • ₹10,00,000"],
      ["Karnataka Govt:", "1 Year • ₹15,00,000–30,00,000"],
      ["Madhya Pradesh:", "1–2 Years • ₹25,00,000"],
      ["Assam:", "5 Years • ₹30,00,000"],
    ],
  },
  {
    title: "Round-2 & Stray Pitfalls",
    body: "MCC guidelines enforce strict forfeiture criteria. Once an upgraded seat is assigned in Round 2 and not joined, security deposits (₹10,000 – ₹2,00,000) are forfeited.",
    Icon: AlertTriangleIcon,
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    notes: [
      { red: true, text: "Free Exit: Permitted in Round 1 only across MCC and state portals." },
      { red: true, text: "R3 Allotment: Failure to join debars candidate from NEET exams for 1 year." },
    ],
  },
  {
    title: "Bank Guarantees & Fees",
    body: "Private medical colleges in specific states (e.g., UP, Telangana, Deemed) mandate irrevocable Bank Guarantees (BG) for the remaining 3.5 to 4 years of tuition prior to issuance of joining orders.",
    Icon: CreditCardIcon,
    color: "bg-slate-100",
    iconColor: "text-slate-600",
    notes: [
      { red: false, text: "Auditing audited fee circulars ratified by State Fee Regulatory Authorities." },
      { red: false, text: "Advance preparation of nationalized bank solvency & BG certificates." },
    ],
  },
];

const STAGES = [
  {
    n: "01",
    title: "Score & AIR Analytics",
    body: "Granular mapping of NEET All India Rank, category reservation validity (EWS / OBC-NCL / SC / ST / PwD), and domicile-eligibility profiles against 5-year closing cutoffs.",
    deliverable: "Categorized Viability Assessment Dossier",
    Icon: ClipboardListIcon,
  },
  {
    n: "02",
    title: "Seat Matrix & Budgeting",
    body: "Evaluating published seats across AIQ, Deemed, and State quotas. Auditing full 5.5-year total financial outlay including tuition, hostel, mess, and recurring security guarantees.",
    deliverable: "Comprehensive Financial & College Matrix",
    Icon: CalendarIcon,
  },
  {
    n: "03",
    title: "Choice Preference Locking",
    body: "Formulation of prioritized college option-entry sequences. Precision ranking prevents allotment of inferior institutions when higher tier options remain statistically viable.",
    deliverable: "Locked Master Choice List for Round 1 & 2",
    Icon: ListIcon,
  },
  {
    n: "04",
    title: "Verification & Induction",
    body: "Audit of original credentials, 10th/12th passing, NEET admit & scorecard, Category validity, Non-Creamy Layer, Migration & Medical fitness. In-person joining verification support.",
    deliverable: "Verified Document Bundle & Joining Letter",
    Icon: FileTextIcon,
  },
];

const RESERVATION_ROWS = [
  {
    quota: "EWS (Economically Weaker Section)",
    mcc: "10% Central AIQ seats",
    state: "10% State Govt seats",
    docs: "Income & Asset Certificate (valid after April 1 of active cycle).",
  },
  {
    quota: "OBC-NCL (Non-Creamy Layer)",
    mcc: "27% in Central Inst/GMCs (Central List)",
    state: "OBC, VJ, NT-A, NT-B, NT-C, NT-D (State List)",
    docs: "Central OBC-NCL Cert / State NCL valid up to March 31 of cycle.",
  },
  {
    quota: "Scheduled Castes (SC)",
    mcc: "15% Across AIQ",
    state: "13% State Quota",
    docs: "Tribe Certificate & Mandatory Caste Validity Certificate.",
  },
  {
    quota: "Scheduled Tribes (ST)",
    mcc: "7.5% Across AIQ",
    state: "7% State Quota",
    docs: "Tribe Certificate & Mandatory Tribe Validity Certificate.",
  },
  {
    quota: "PwD (Persons with Disabilities)",
    mcc: "5% Horizontal Reservation",
    state: "5% Horizontal State Reservation",
    docs: "Disability Certificate Form 18 designated MCC medical centers.",
  },
];

const WA_POINTS = [
  "Personalized NEET UG Rank vs Seat Feasibility",
  "AIQ vs State Domicile Round-by-Round Mapping",
  "Bond Penalties & Bank Guarantee Verification",
];

export function NeetUgArchitecture() {
  const fired = useRef(false);
  const capture = () => {
    if (fired.current) return;
    fired.current = true;
    void addLead({
      candidateName: "WhatsApp / Call Enquiry",
      mobile: "–",
      whatsapp: "–",
      airRank: "–",
      targetStateBranch: "NEET UG Counselling",
      domain: "NEET UG",
      mode: "Live Video / Phone",
      source: "NEET UG Page",
    });
  };

  return (
    <div id="neet-ug" className="w-full bg-white">
      {/* Hero */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[1424px] px-4 py-10 sm:px-8 lg:py-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Regulatory Strategic Dossier &bull; Academic Cycle 2025–2026
          </p>
          <div className="mt-3 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[760px]">
              <h1 className="text-[28px] font-extrabold tracking-[-0.04em] text-ink sm:text-[36px] lg:text-[40px] lg:leading-[1.15]">
                NEET UG Admission Counselling Architecture
              </h1>
              <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-muted sm:text-[16px]">
                Clinical advisory, choice-filling matrix formulation, and bond
                obligation auditing for MBBS, BDS, BAMS, and BHMS admissions
                under 15% MCC All India Quota &amp; 85% State Authorities.
              </p>
            </div>
            <div className="flex shrink-0 gap-0 divide-x divide-line rounded-2xl border border-line bg-white shadow-[0_4px_16px_rgba(16,24,45,0.04)]">
              <div className="px-7 py-5">
                <p className="text-[28px] font-extrabold leading-none text-ink sm:text-[34px]">
                  108K<span className="text-brand">+</span>
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  MBBS Seats<br />Audited
                </p>
              </div>
              <div className="px-7 py-5">
                <p className="text-[28px] font-extrabold leading-none text-brand sm:text-[34px]">
                  100%
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Bond &amp; Penalty<br />Vetting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos + protocol */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1424px] px-4 py-10 sm:px-8 lg:py-12">
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              <figure className="relative">
                <div className="relative h-60 w-full overflow-hidden rounded-2xl sm:h-72">
                  <Image
                    src="/ug-campus-walk.jpg"
                    alt="Tier-1 teaching institution campus — AIIMS and top state govt medical colleges"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-8">
                    <p className="text-[13px] font-semibold text-white">Tier-1 Teaching Institutions</p>
                    <p className="text-[12px] text-white/80">AIIMS, Central Institutes &amp; Top State Govt Medical Colleges.</p>
                  </div>
                </div>
              </figure>
              <figure className="relative">
                <div className="relative h-60 w-full overflow-hidden rounded-2xl sm:h-72">
                  <Image
                    src="/ug-merit-scholars.jpg"
                    alt="Admissions and merit induction — stethoscope felicitation and confirmed allotment security"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-8">
                    <p className="text-[13px] font-semibold text-white">Admissions &amp; Merit Induction</p>
                    <p className="text-[12px] text-white/80">Stethoscope felicitation &amp; confirmed allotment security.</p>
                  </div>
                </div>
              </figure>
            </div>

            <Reveal variant="right" className="lg:col-span-5">
              <article className="h-full rounded-2xl border border-line bg-[#f8fafc] p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-brand">
                    <BuildingOfficeIcon className="h-5 w-5" />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                    Independent Advisory Protocol
                  </p>
                </div>
                <h2 className="mt-4 text-[22px] font-extrabold tracking-tight text-ink sm:text-[24px]">
                  Precision MBBS Allotment Engineering
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  Medical admissions in India are fraught with non-refundable
                  forfeitures, overlapping state schedules, multi-year fee
                  escalation clauses, and steep compulsory rural bond penalties.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Simultaneous dual-matrix mapping across AIQ & Multiple Domicile states.",
                    "Detailed analysis of State Security Deposit lock-in clauses (R2 & Mop-Up).",
                    "Hospital clinical exposure auditing: Patient bed occupancy & clinical OPD loads.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-muted">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#allotment-protocol"
                  className="mt-6 inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-navy px-4 text-[14px] font-semibold text-white transition-opacity hover:opacity-95"
                >
                  Explore 4-Stage Allotment Roadmap
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quota bifurcation */}
      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-[1424px] px-4 py-14 sm:px-8 lg:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Counselling Division Matrix
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
            Understanding Quota Bifurcation &amp; Eligibility
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
            Candidates must register and strategize distinctively for central
            medical counseling (MCC) and regional state directives (DMER, KEA,
            DME, UPDGME).
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-white bg-white p-6 shadow-[0_8px_24px_rgba(16,24,45,0.04)] sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#eef4ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-brand">
                  MCC • Central Directorate
                </span>
                <span className="rounded-full bg-[#f4f7fb] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                  15% All India Quota
                </span>
              </div>
              <h3 className="mt-4 text-[18px] font-bold text-ink">
                All India Quota, Deemed, Central &amp; AIIMS Seats
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Administered exclusively by the Medical Counselling Committee (MCC)
                under DGHS. Domicile-free access across every state government
                medical college, central university, and deemed medical faculty in
                India.
              </p>
              <div className="mt-5 divide-y divide-line border-y border-line">
                {MCC_ROWS.map(([left, right]) => (
                  <div key={left} className="flex items-start justify-between gap-4 py-3">
                    <p className="text-[13.5px] font-medium text-ink">{left}</p>
                    <p className="shrink-0 text-right text-[12px] text-muted">{right}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-start gap-2 text-[13px] text-amber-700">
                <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                Round-2 Seat Joining: Strict barrier prevents further state round appearances.
              </p>
            </article>

            <article className="rounded-2xl border border-white bg-white p-6 shadow-[0_8px_24px_rgba(16,24,45,0.04)] sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#eef4ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-brand">
                  State CET Cells • 85% Quota
                </span>
                <span className="rounded-full bg-[#f4f7fb] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                  State Domicile &amp; Open States
                </span>
              </div>
              <h3 className="mt-4 text-[18px] font-bold text-ink">
                State Government &amp; Private Institutional Seats
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Managed independently by state authorities (e.g., State CET Cell
                Maharashtra, KEA Karnataka, UPDGME Uttar Pradesh). Applies to 85%
                of state govt seats and 100% of state private &amp; minority medical
                colleges.
              </p>
              <div className="mt-5 divide-y divide-line border-y border-line">
                {STATE_ROWS.map(([left, right]) => (
                  <div key={left} className="flex items-start justify-between gap-4 py-3">
                    <p className="text-[13.5px] font-medium text-ink">{left}</p>
                    <p className="shrink-0 text-right text-[12px] text-muted">{right}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex items-start gap-2 text-[13px] text-muted">
                <LandmarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Institutional Domicile Rules: Domicile certificates &amp; SEC/NRI passing state validation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Risk mitigation */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1424px] px-4 py-14 sm:px-8 lg:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Risk Mitigation &amp; Strategy
          </p>
          <h2 className="mt-3 max-w-3xl text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
            Avoiding Forfeitures, Lockouts &amp; Rural Service Penalties
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
            A single ill-informed choice entry can commit a candidate to
            multi-year non-urban mandatory service or cause automatic
            disqualification across simultaneous counselling rounds.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {RISK_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[0_8px_24px_rgba(16,24,45,0.04)]"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.color} ${card.iconColor}`}>
                  <card.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-bold text-ink">{card.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{card.body}</p>
                {"items" in card && card.items ? (
                  <dl className="mt-4 space-y-2 text-[13px]">
                    {card.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3">
                        <dt className="text-muted">{k}</dt>
                        <dd className="font-semibold text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <ul className="mt-4 space-y-2.5">
                    {card.notes?.map((note) => (
                      <li key={note.text} className="flex items-start gap-2 text-[13px] text-muted">
                        {note.red ? (
                          <span className="mt-0.5 shrink-0 text-rose-500">✕</span>
                        ) : (
                          <span className="mt-0.5 shrink-0 text-accent">✓</span>
                        )}
                        <span>{note.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4-stage protocol */}
      <section id="allotment-protocol" className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-[1424px] px-4 py-14 sm:px-8 lg:py-16">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
              Structured Clinical Method
            </p>
            <h2 className="mt-3 text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
              The 4-Stage UG Allotment Protocol
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              From scorecard release to physical document submission at the
              assigned medical college, our consultative lifecycle eliminates
              speculative decisions.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((stage) => (
              <article key={stage.n} className="rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(16,24,45,0.04)] sm:p-6">
                <div className="flex items-start justify-between">
                  <span className="text-[22px] font-extrabold text-brand">{stage.n}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef4ff] text-brand">
                    <stage.Icon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-ink">{stage.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{stage.body}</p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
                  Deliverable
                </p>
                <p className="mt-1 text-[13px] font-semibold text-ink">{stage.deliverable}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation table */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1424px] px-4 py-14 sm:px-8 lg:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Statutory Compliance
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
            Central vs. State Reservation Protocols
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
            Candidates holding state-level caste certificates must verify whether
            their community is incorporated in the Central OBC list for MCC AIQ
            allotments.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-line shadow-[0_4px_16px_rgba(16,24,45,0.04)]">
            <table className="min-w-[760px] w-full text-left text-[13px]">
              <thead className="bg-[#f4f7fb] text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
                <tr>
                  <th className="px-5 py-3.5">Quota / Category</th>
                  <th className="px-5 py-3.5">Central MCC AIQ Reservation</th>
                  <th className="px-5 py-3.5">Maharashtra State Quota</th>
                  <th className="px-5 py-3.5">Mandatory Documentation</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {RESERVATION_ROWS.map((row, i) => (
                  <tr key={row.quota} className={i > 0 ? "border-t border-line" : ""}>
                    <td className="px-5 py-4 font-semibold text-ink">{row.quota}</td>
                    <td className="px-5 py-4 text-muted">{row.mcc}</td>
                    <td className="px-5 py-4 text-muted">{row.state}</td>
                    <td className="px-5 py-4 text-muted">{row.docs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#07111f] py-14 sm:py-16">
        <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-[#0c1a2e] p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
                Immediate Advisory Desk
              </p>
              <h2 className="mt-3 text-[26px] font-extrabold tracking-[-0.03em] text-white sm:text-[32px] sm:leading-[1.2]">
                Connect Directly with Senior NEET UG Advisor on WhatsApp
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                Avoid irrevocable choice-locking mistakes. Connect directly with our
                institutional medical admissions directors for real-time cut-off
                verification, bond penalty analysis, and state matrix advisory via
                instant WhatsApp messaging.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={capture}
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-5 text-[14px] font-semibold text-white hover:bg-[#15803d]"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  Chat on WhatsApp (+91-93595 44396)
                </a>
                <a
                  href="tel:+919359544396"
                  onClick={capture}
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg border border-white/15 px-5 text-[14px] font-semibold text-white hover:bg-white/5"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Direct Helpline: +91-93595 44396
                </a>
              </div>
            </div>

            <article className="rounded-2xl bg-white p-6 text-ink sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[17px] font-bold leading-snug">
                  Chat on WhatsApp with Navin Harjwani
                </h3>
                <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e9f8ef] px-2.5 py-1 text-[10px] font-bold text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Online Now
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                Connect immediately with Director Navin Harjwani for
                personalized AIQ &amp; State Rank Cutoff calculation, choice
                sequence audit, and fee clarity.
              </p>
              <ul className="mt-5 space-y-2.5">
                {WA_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13.5px] text-muted">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={capture}
                className="mt-6 inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#16a34a] text-[14px] font-semibold text-white hover:bg-[#15803d]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Open WhatsApp Consultation
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[12px] text-muted">
                <PhoneIcon className="h-3 w-3 shrink-0" />
                Or call directly at{" "}
                <a href="tel:+919359544396" onClick={capture} className="font-semibold text-ink">
                  +91-93595 44396
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
