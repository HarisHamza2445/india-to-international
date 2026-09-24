"use client";

import Image from "next/image";
import { useState } from "react";
import { addLead, type Lead } from "@/lib/dataStore";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  ClockIcon,
  CompassIcon,
  ExternalLinkIcon,
  FileTextIcon,
  HospitalIcon,
  LandmarkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ScalpelIcon,
  ShieldCheckIcon,
  ShieldIcon,
  SquareChartIcon,
} from "./icons";

const WA_HREF =
  "https://wa.me/919359544396?text=Hello%20Navin%20Sir%2C%20I%20need%20medical%20admission%20guidance.";

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="border-b border-line bg-[#f4f7fb]">
      <div className="mx-auto max-w-[1424px] px-4 py-12 sm:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
              <CompassIcon className="h-3.5 w-3.5 shrink-0" />
              About India To International
            </div>
            <h1 className="mt-3 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[42px] lg:text-[48px]">
              Pune&apos;s Premier Ethical Medical
              <br className="hidden sm:block" />
              Admission Consultancy{" "}
              <span className="text-brand">Since 2005.</span>
            </h1>
            <p className="mt-4 max-w-[580px] text-[15px] leading-relaxed text-muted sm:text-[16px]">
              Guided by principal counsellor Navin Harjwani, delivering 19+
              years of transparent, data-driven medical admission guidance for
              NEET PG, UG, and MDS aspirants nationwide.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="inline-flex h-[48px] items-center gap-2 rounded-lg bg-ink px-5 text-[14px] font-semibold text-white hover:opacity-90"
              >
                Book Priority Chamber Visit
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#office"
                className="inline-flex h-[48px] items-center gap-2 rounded-lg border border-line bg-white px-5 text-[14px] font-semibold text-ink hover:bg-sky"
              >
                <BuildingOfficeIcon className="h-4 w-4 text-brand" />
                Visit Sadashiv Peth Office
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-line pt-6">
              <div>
                <p className="text-[28px] font-extrabold leading-none text-ink">19+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">Years of Practice</p>
              </div>
              <div>
                <p className="text-[28px] font-extrabold leading-none text-ink">6,400+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">Doctors Mentored</p>
              </div>
              <div>
                <p className="text-[28px] font-extrabold leading-none text-brand">100%</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">Zero Donation Code</p>
              </div>
            </div>
          </div>

          {/* Right — Photo card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(16,24,45,0.12)]">
              <div className="relative h-[380px] w-full sm:h-[440px]">
                <Image
                  src="/hero-consultation.jpg"
                  alt="Navin Harjwani — Principal Admission Counsellor"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-white/95 px-5 py-4 backdrop-blur-sm">
                <div>
                  <p className="text-[15px] font-bold text-ink">Navin Harjwani</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                    Principal Admission Counsellor
                  </p>
                </div>
                <BadgeCheckIcon className="h-7 w-7 text-brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Founder's Directive ───────────────────────────────────────────────────

const DOCTRINE_CARDS = [
  {
    Icon: ShieldIcon,
    title: "Zero Donation Traps",
    desc: "Absolute refusal of unverified capitation fees; every fee structure vetted directly with institutional audit reports.",
  },
  {
    Icon: SquareChartIcon,
    title: "Scientific Rank Matching",
    desc: "Custom probability matrices cross-referencing 5-year closing rank trends against seat additions and shift dynamics.",
  },
  {
    Icon: HospitalIcon,
    title: "Hospital Clinical Audits",
    desc: "Evaluation of daily OPD footfall, bed occupancy, ICU ventilator ratios, and clinical hands-on cutting cases before recommendation.",
  },
  {
    Icon: ScalpelIcon,
    title: "Service Bond Scrutiny",
    desc: "Detailed clause analysis of compulsory state rural tenure, bank guarantees, and seat resignation penalty implications.",
  },
];

function FounderDirective() {
  return (
    <section className="bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(16,24,45,0.05)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left — photo + credentials */}
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative h-[320px] w-full sm:h-[380px]">
                  <Image
                    src="/hero-consultation.jpg"
                    alt="Navin Harjwani — Founder & Chief Strategist"
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute left-3 top-3 rounded-lg bg-[#07111f]/80 px-3 py-1.5 backdrop-blur-sm">
                    <p className="text-[11px] font-bold text-white">
                      Founder &amp; Chief Strategist
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-line bg-[#f8fafc] p-4">
                <div className="flex items-center gap-2">
                  <BadgeCheckIcon className="h-4 w-4 shrink-0 text-brand" />
                  <p className="text-[13px] font-bold text-ink">Academic Credentials</p>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  Specialized in Directorate of Medical Education &amp; Research
                  (DMER Maharashtra), Medical Counselling Committee (MCC), and
                  Karnataka Examination Authority (KEA) institutional quotas since 2005.
                </p>
              </div>
            </div>

            {/* Right — quote + 4 cards */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                <CompassIcon className="h-3.5 w-3.5 shrink-0" />
                Founder&apos;s Directive
              </div>
              <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[26px]">
                &ldquo;Medical seats must be earned through clinical precision,
                not predatory middlemen.&rdquo;
              </h2>

              {/* Quote block */}
              <div className="relative mt-5 rounded-xl border border-line bg-[#f8fafc] p-5">
                <span className="absolute right-4 top-2 text-[52px] font-extrabold leading-none text-slate-200 select-none">
                  99
                </span>
                <p className="text-[13px] leading-relaxed text-muted">
                  &ldquo;Every year, parents and junior doctors fall prey to dubious
                  promises of &apos;backdoor management seats&apos; and opaque fee
                  structures. Over our 19-year journey at India To International, we
                  established a single, immovable doctrine: every rupee and rank point
                  must be legally accounted for through official counselling portals. If
                  an aspirant ranks at the margin, our role is not to offer illusions,
                  but to perform mathematical choice-filling, analyze bed-to-faculty
                  ratios, and execute flawless round-wise seat progression.&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-ink">Navin Harjwani</p>
                    <p className="mt-0.5 text-[11px] text-muted">
                      Principal Counsellor, India To International (neetadmission.in)
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Verified
                  </span>
                </div>
              </div>

              {/* 4 doctrine cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DOCTRINE_CARDS.map((card) => (
                  <div key={card.title} className="rounded-xl border border-line bg-[#f8fafc] p-4">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef4ff] text-brand">
                        <card.Icon className="h-4 w-4" />
                      </span>
                      <p className="text-[13px] font-bold text-ink">{card.title}</p>
                    </div>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Institutional Governance ─────────────────────────────────────────────

const GOVERNANCE_CARDS = [
  {
    Icon: ShieldCheckIcon,
    title: "100% Ethical Merit Compliance",
    desc: "We uphold zero tolerance for backdoor solicitation. Guidance aligns 100% with statutory notices from the National Medical Commission (NMC), MCC, and State CET Cells.",
    link: "NMC & MCC Mandate Adherent",
  },
  {
    Icon: SquareChartIcon,
    title: "Analytical Choice Modeling",
    desc: "We employ algorithmic choice list sequencing designed to maximize branch-to-hospital satisfaction while eliminating the risk of disqualification due to suboptimal tier ordering.",
    link: "Historical Cutoff Archives",
  },
  {
    Icon: ClipboardListIcon,
    title: "End-to-End Counselling Escort",
    desc: "From security deposit drafting and domicile validation to Round 1 through Stray Vacancy choice locking and physical reporting clearance at college gates.",
    link: "Round 1 to Mop-Up Escort",
  },
  {
    Icon: LandmarkIcon,
    title: "NRI & Management Quota Protocol",
    desc: "Deep expertise in Indian Embassy certificate legalization, First-Degree blood relation sponsorship affidavits, and swift NRI quota conversions under Supreme Court rulings.",
    link: "Embassy Affidavit Verification",
  },
];

const AUDIT_METRICS = [
  {
    label: "Clinical Load (OPD/IPD)",
    weight: "Weight 40%",
    desc: "Average verified daily outpatient attendance (>1,200/day for teaching hospitals) to ensure real surgical and diagnostic procedural hands-on training.",
    pct: "40%",
  },
  {
    label: "Faculty Seniority & Units",
    weight: "Weight 35%",
    desc: "Confirmation of full-time professors versus visiting faculty, NMC biometric attendance compliance, and ongoing departmental research publications.",
    pct: "35%",
  },
  {
    label: "Bond & Penalty Transparency",
    weight: "Weight 25%",
    desc: "Comprehensive breakdown of state service agreements (e.g. Maharashtra ₹50L bond, Karnataka rural service) and seat resignation penalties prior to lock-in.",
    pct: "25%",
  },
];

function InstitutionalGovernance() {
  return (
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Institutional Governance
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[30px]">
            Strict Adherence to Ethical Merit &amp; Regulatory Frameworks
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
            Navigating modern Indian medical admissions requires total
            transparency. We operate as certified advisory counsels, not
            commercial seat brokers.
          </p>
        </div>

        {/* 4 governance cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_4px_16px_rgba(16,24,45,0.04)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-brand">
                <card.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-ink">{card.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{card.desc}</p>
              <a
                href="#contact"
                className="mt-4 flex items-center gap-1.5 text-[12px] font-bold text-brand hover:underline"
              >
                {card.link}
                <CheckCircleIcon className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        {/* Audit metric strip */}
        <div className="mt-10 rounded-2xl border border-line bg-[#f4f7fb] p-6 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                Quality &amp; Safety Metric
              </p>
              <h3 className="mt-1 text-[20px] font-extrabold tracking-tight text-ink sm:text-[22px]">
                What We Audit Before Recommending Any Medical College
              </h3>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-semibold text-muted shadow-sm">
              <CheckCircleIcon className="h-3.5 w-3.5 text-accent" />
              2024-25 Inspection Norms Included
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {AUDIT_METRICS.map((m) => (
              <div key={m.label} className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[13px] font-bold text-ink">{m.label}</p>
                  <span className="text-[12px] font-bold text-brand">{m.weight}</span>
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{m.desc}</p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-[#e4e9f1]">
                  <div
                    className="h-1.5 rounded-full bg-brand"
                    style={{ width: m.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Office ────────────────────────────────────────────────────────────────

const FACILITY_CARDS = [
  {
    Icon: BuildingOfficeIcon,
    title: "Confidential Family Suites",
    desc: "Personalized, quiet consultation chambers where parents and candidates review financial outlays, personal constraints, and preferences in total privacy.",
  },
  {
    Icon: SquareChartIcon,
    title: "Live Seat Matrix Command Desk",
    desc: "Multi-screen monitoring arrays tracking ongoing MCC, KEA, and DMER portal choice fillings, server status alerts, and real-time vacant seat notifications.",
  },
  {
    Icon: FileTextIcon,
    title: "Document Validation Archive",
    desc: "Pre-submission audit stations verifying Non-Creamy Layer (NCL) certificates, EWS forms, caste validity stamps, and NRI sponsorship paper compliance.",
  },
];

function OfficeSection() {
  return (
    <section id="office" className="border-t border-line bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left info */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
              Central Counselling Infrastructure
            </p>
            <h2 className="mt-3 text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[30px] sm:leading-[1.2]">
              Sadashiv Peth &amp; Swargate Office:
              <br />
              Pune&apos;s Established Consultation Hub
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted">
              Located in the cultural and academic heart of Pune, our central
              practice headquarters spans dedicated private family chambers,
              computerized seat mapping displays, and an exhaustive historical
              archive of cutoff ledgers.
            </p>
            <div className="mt-5 space-y-3.5">
              <div className="flex items-start gap-2.5 text-[13.5px] text-muted">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <strong className="font-semibold text-ink">Address:</strong>{" "}
                  2088, Vijay Nagar Colony, Prasad Bunglow, Near N.S. Phadake
                  Chowk, Sadashiv Peth, Saras Baugh, Swargate, Landmark near
                  Nilayam Theatre, Pune, Maharashtra 411030
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[13.5px] text-muted">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <strong className="font-semibold text-ink">Helpline Desks:</strong>{" "}
                  +91-93595 44396 &bull; +91-97118 57351
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[13.5px] text-muted">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  <strong className="font-semibold text-ink">Counselling Hours:</strong>{" "}
                  Monday – Saturday: 10:00 AM – 7:00 PM IST (Prior appointment
                  advised during active counselling rounds)
                </span>
              </div>
            </div>
          </div>

          {/* Right — office image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(16,24,45,0.1)]">
              <div className="relative h-[300px] w-full sm:h-[360px]">
                <Image
                  src="/i12.png"
                  alt="Navin Harjwani presenting at Prasad Bunglow HQ"
                  fill
                  sizes="(min-width: 1024px) 660px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#07111f]/90 px-5 py-3.5 backdrop-blur-sm">
                <div>
                  <p className="text-[13px] font-bold text-white">Prasad Bunglow HQ</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    Swargate &bull; Sadashiv Peth &bull; Pune
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sadashiv+Peth+Swargate+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-[12px] font-semibold text-white hover:bg-brand-alt"
                >
                  View Directions
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 facility cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {FACILITY_CARDS.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-white p-5 shadow-[0_4px_16px_rgba(16,24,45,0.04)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef4ff] text-brand">
                <f.Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-3 text-[14px] font-bold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. FAQ ───────────────────────────────────────────────────────────────────

const FAQS: { n: string; q: string; a: React.ReactNode }[] = [
  {
    n: "01",
    q: "What are the exact NRI quota rules and embassy documentation required for Deemed / Private colleges?",
    a: (
      <div className="space-y-3 text-[13.5px] leading-relaxed text-muted">
        <p>
          As per the Supreme Court landmark order in{" "}
          <em>P.A. Inamdar &amp; Consortium of Deemed Universities</em>,
          candidates seeking admission under the NRI Quota must present:
        </p>
        <ul className="ml-2 space-y-1.5">
          {[
            "NRI Status Certificate issued by the relevant Indian Embassy or Consulate abroad.",
            "Valid Indian Passport copy and Visa/Green Card of the sponsor.",
            "Relationship Affidavit proving first-degree relationship (Father, Mother, Real Brother/Sister, or nearest real paternal/maternal aunt/uncle).",
            "Undertaking on stamped judicial paper confirming financial sponsorship of total tuition and living costs for the entire course duration.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Our desk verifies every document with institutional compliance
          standards before round entry to avoid round disqualification.
        </p>
      </div>
    ),
  },
  {
    n: "02",
    q: "How does your strategic choice-filling for NEET PG prevent branch and hospital compromise?",
    a: (
      <p className="text-[13.5px] leading-relaxed text-muted">
        Our algorithmic tiered locking sequences choices by clinical bed
        strength, OPD/IPD case load, faculty seniority, stipend regularity, and
        bond liabilities — never by cutoff rank alone. This prevents
        sub-optimal allotment when higher-tier options remain statistically
        viable across Round 1, Round 2, and Stray Vacancy rounds.
      </p>
    ),
  },
  {
    n: "03",
    q: "What is the difference between Maharashtra State Quota (85%) and Open Domicile States like Karnataka or UP?",
    a: (
      <p className="text-[13.5px] leading-relaxed text-muted">
        Maharashtra State Quota requires MH domicile and operates through DMER
        / CET Cell with caste-specific sub-quotas. Open Domicile States like
        Karnataka (KEA) and UP (UPDGME) allow all-India candidates to compete
        under merit-based open seats — offering significant backup opportunities
        for candidates with strong ranks regardless of state domicile.
      </p>
    ),
  },
  {
    n: "04",
    q: "How are compulsory service bond penalties calculated if a doctor resigns or seeks super-specialty?",
    a: (
      <p className="text-[13.5px] leading-relaxed text-muted">
        Bond penalties are state-legislated and vary from ₹10 Lakhs (B.J.
        Govt, Pune) to ₹50 Lakhs (KEM, Grant — Maharashtra). Penalty triggers
        include mid-tenure resignation, joining a private institution, or
        enrolling in DM/MCh without completing the bond tenure. We calculate
        net 3-year financial exposure before recommending any bond-heavy college.
      </p>
    ),
  },
];

function FaqAbout() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-line bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Clarity &amp; Verification
          </p>
          <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[30px]">
            Frequently Addressed Regulatory Inquiries
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
            Clear, definitive explanations of complex medical quota rules,
            choice-filling mechanics, and legal obligations.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_8px_rgba(16,24,45,0.03)]"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left hover:bg-sky/30"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 text-[12px] font-extrabold text-brand">
                    {faq.n}
                  </span>
                  <span className="text-[14px] font-bold text-ink">{faq.q}</span>
                </div>
                <ChevronDownIcon
                  className={`mt-0.5 h-5 w-5 shrink-0 text-brand transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-line px-6 pb-5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Booking CTA ───────────────────────────────────────────────────────────

const PROGRAMS: { label: string; domain: Lead["domain"] }[] = [
  { label: "NEET PG (MD / MS)", domain: "NEET PG" },
  { label: "NEET UG (MBBS / BDS)", domain: "NEET UG" },
  { label: "NEET MDS", domain: "NEET MDS" },
];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

function BookingCTA() {
  const [form, setForm] = useState({
    candidateName: "",
    mobile: "",
    stream: "NEET PG (MD / MS)",
    rank: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addLead({
      candidateName: form.candidateName,
      mobile: form.mobile,
      whatsapp: form.mobile,
      airRank: form.rank || "Not shared",
      targetStateBranch: form.stream,
      domain:
        PROGRAMS.find((p) => p.label === form.stream)?.domain ?? "NEET PG",
      mode: "In-Person (Swargate Desk)",
    });
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="border-t border-line bg-[#07111f] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-slate-300">
              <ClipboardListIcon className="h-3.5 w-3.5" />
              Advance Consultation Scheduling
            </div>
            <h2 className="mt-4 text-[26px] font-extrabold leading-[1.15] text-white sm:text-[30px]">
              Schedule a Confidential Counselling Session with Navin Harjwani
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-slate-400">
              Meet our senior academic advisors at our Swargate central office
              or schedule a high-bandwidth digital consultation. Gain complete
              clarity on your score viability, budget projections, and choice
              lists before official portal registration commences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919359544396"
                className="inline-flex h-[46px] items-center gap-2 rounded-lg bg-brand px-5 text-[14px] font-semibold text-white hover:bg-brand-alt"
              >
                <PhoneIcon className="h-4 w-4" />
                Call +91-93595 44396
              </a>
              <a
                href="mailto:info@indiatointernational.com"
                className="inline-flex h-[46px] items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 text-[14px] font-semibold text-white hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" />
                Email Document Dossier
              </a>
            </div>
          </div>

          {/* Right — form card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white p-6 shadow-[0_16px_48px_rgba(0,0,0,0.25)] sm:p-7">
              {/* Card header */}
              <div className="flex items-center gap-3 border-b border-line pb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef4ff] text-brand">
                  <BuildingOfficeIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[14px] font-bold text-ink">Request In-Person Slot</p>
                  <p className="text-[11px] text-muted">Pune Sadashiv Peth Headquarters</p>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircleIcon className="mx-auto h-10 w-10 text-accent" />
                  <p className="mt-3 text-[15px] font-bold text-ink">Request Received!</p>
                  <p className="mt-1 text-[13px] text-muted">
                    We&apos;ll confirm your slot via WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label className="text-[12.5px] font-semibold text-muted">
                      Aspirant / Candidate Name
                    </label>
                    <input
                      type="text"
                      name="candidateName"
                      required
                      value={form.candidateName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Aryan Deshmukh"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[12.5px] font-semibold text-muted">
                        WhatsApp Mobile
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="+91-98765 43210"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="text-[12.5px] font-semibold text-muted">
                        Target Stream
                      </label>
                      <select
                        name="stream"
                        value={form.stream}
                        onChange={handleChange}
                        className={fieldClass}
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.label} value={p.label}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[12.5px] font-semibold text-muted">
                      NEET Score / AIR Rank (or Expected)
                    </label>
                    <input
                      type="text"
                      name="rank"
                      value={form.rank}
                      onChange={handleChange}
                      placeholder="e.g. Rank 14,820 or Score 590/720"
                      className={fieldClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-ink text-[14px] font-semibold text-white hover:opacity-90"
                  >
                    <CheckCircleIcon className="h-4 w-4" />
                    Confirm Priority Chamber Consultation
                  </button>
                  <p className="text-center text-[11px] text-muted">
                    Protected by Client Confidentiality Protocol &bull; No Spam Policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <FounderDirective />
      <InstitutionalGovernance />
      <OfficeSection />
      <FaqAbout />
      <BookingCTA />
    </div>
  );
}
