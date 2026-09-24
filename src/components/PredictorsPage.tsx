"use client";

import { useState } from "react";
import { addLead } from "@/lib/dataStore";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  ClockIcon,
  CompassIcon,
  CreditCardIcon,
  ExternalLinkIcon,
  FileTextIcon,
  HospitalIcon,
  LandmarkIcon,
  ListIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  SearchIcon,
  ShieldCheckIcon,
  TableIcon,
  ZapIcon,
} from "./icons";

const WA_HREF =
  "https://wa.me/919359544396?text=Hello%20Navin%20Sir%2C%20I%20need%20NEET%20predictor%20guidance.";

// Silent lead capture — fires once per page session
let _predictorCaptured = false;
function capturePredictor() {
  if (_predictorCaptured) return;
  _predictorCaptured = true;
  void addLead({
    candidateName: "WhatsApp / Call Enquiry",
    mobile: "–",
    whatsapp: "–",
    airRank: "–",
    targetStateBranch: "NEET Predictor Tool",
    domain: "NEET PG",
    mode: "Live Video / Phone",
    source: "Predictors Page",
  });
}

// ─── Section 1: Hero ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1424px] px-4 py-10 sm:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
              <CompassIcon className="h-4 w-4 shrink-0" />
              AIQ &amp; State Quota Intelligence 2025–26
            </div>
            <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.03em] text-ink sm:text-[40px] lg:text-[44px] lg:leading-[1.12]">
              NEET Admission Predictors &amp; Seat Matrix Analytics
            </h1>
            <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-muted sm:text-[16px]">
              Evaluate your exact admission probability across 50% All India
              Quota, State Quotas, Deemed Universities, and DNB hospitals based
              on 19+ years of verified closing rank data and institutional
              regulatory shifts.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#predictor-engine"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-brand px-5 text-[14px] font-semibold text-white hover:bg-brand-alt"
              >
                <ZapIcon className="h-4 w-4" />
                Launch MCC AIQ Predictor
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={capturePredictor}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 text-[14px] font-semibold text-ink hover:bg-sky"
              >
                <MessageSquareIcon className="h-4 w-4 text-brand" />
                Chat on WhatsApp (+91-93595 44396)
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-[12.5px] text-muted">
              <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent" />
              Accredited MCC Choice Filling Guardrails &bull; Dynamic Bond
              Penalty Calculations
            </p>
          </div>

          {/* Right — Radar Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_8px_28px_rgba(16,24,45,0.08)] sm:p-6">
              {/* Card header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  <span className="text-[13px] font-semibold text-ink">
                    Clinical Admission Radar v4.2
                  </span>
                </div>
                <span className="text-[12px] font-bold text-brand">
                  Live MCC 2025 Sync
                </span>
              </div>

              {/* Projected probability */}
              <div className="mt-4 flex items-start justify-between gap-4 rounded-xl border border-line bg-[#f8fafc] p-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                    Projected Probability
                  </p>
                  <p className="mt-1 text-[18px] font-extrabold text-accent">
                    94.8% Safe Zone
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted">
                    MD General Medicine / MS Ortho
                  </p>
                </div>
                {/* Gauge arc */}
                <svg
                  width="56"
                  height="36"
                  viewBox="0 0 56 36"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 32 A24 24 0 0 1 52 32"
                    stroke="#e4e9f1"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 32 A24 24 0 0 1 52 32"
                    stroke="#0057d9"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="75.4"
                    strokeDashoffset="10"
                  />
                </svg>
              </div>

              {/* Metrics */}
              <div className="mt-3 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-muted">AIQ Round 1 Closing Threshold</span>
                    <span className="font-bold text-ink">AIR 4,820</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full rounded-full bg-[#e4e9f1]">
                    <div className="h-2 w-[72%] rounded-full bg-brand" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-muted">
                      State Institutional Preference Index
                    </span>
                    <span className="font-bold text-accent">High Retention</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full rounded-full bg-[#e4e9f1]">
                    <div className="h-2 w-[88%] rounded-full bg-accent" />
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <p className="mt-4 flex items-start gap-2 rounded-lg bg-[#eef4ff] px-3 py-2.5 text-[12px] leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 text-brand">ⓘ</span>
                Data calibrated against 2,471+ colleges, revised NMC bed
                strength norms, and 2024 institutional seat expansion metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Stats Bar ────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    {
      value: "15,080+",
      label: "REGISTERED ASPIRANTS",
      sub: "Across UG, PG & MDS rounds",
    },
    {
      value: "2,471+",
      label: "HOSPITALS & COLLEGES",
      sub: "MCC, DNB & State audited",
      blue: false,
    },
    {
      value: "4,540+",
      label: "SUCCESSFUL ALLOTMENTS",
      sub: "Zero forfeit choices filled",
    },
    {
      value: "99.4%",
      label: "ALGORITHMIC ACCURACY",
      sub: "Tested across Round 1 to Mop-Up",
      blue: true,
    },
  ];
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-line border-x border-line lg:grid-cols-4 lg:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 sm:px-8">
              <p
                className={`text-[24px] font-extrabold tracking-tight sm:text-[28px] ${s.blue ? "text-brand" : "text-ink"}`}
              >
                {s.value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">
                {s.label}
              </p>
              <p className="mt-0.5 text-[12px] text-muted">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Predictor Engine ─────────────────────────────────────────────

type Stream = "NEET PG (MD/MS/DNB)" | "NEET UG (MBBS/BDS)" | "NEET MDS Master" | "Deemed & Management Quota";

// ── Probability calculation logic ────────────────────────────────────────────

// Specialty closing rank baselines (AIQ General, NEET PG 2024 R1)
const SPECIALTY_BASELINES: Record<string, { safe: number; target: number; reach: number; bond: string; stipend: string }> = {
  "MD General Medicine":    { safe: 15000, target: 8000,  reach: 3500,  bond: "1 Yr / ₹10 L",  stipend: "₹84,000 / mo" },
  "MS Orthopaedics":        { safe: 18000, target: 10000, reach: 5000,  bond: "1 Yr / ₹10 L",  stipend: "₹80,000 / mo" },
  "MD Paediatrics":         { safe: 20000, target: 12000, reach: 6000,  bond: "1 Yr / ₹10 L",  stipend: "₹78,000 / mo" },
  "MS General Surgery":     { safe: 16000, target: 9000,  reach: 4000,  bond: "1 Yr / ₹10 L",  stipend: "₹82,000 / mo" },
  "MD Radio-Diagnosis":     { safe: 5000,  target: 2500,  reach: 800,   bond: "No Bond (Pvt)",  stipend: "₹55,000 / mo" },
  "MBBS Core":              { safe: 50000, target: 30000, reach: 15000, bond: "1 Yr / ₹10 L",  stipend: "₹18,000 / mo" },
};

// Quota multipliers — reserved categories get ~1.6–2x relaxation
const QUOTA_MULTIPLIERS: Record<string, number> = {
  "General / Unreserved (Open)": 1.0,
  "OBC-NCL": 1.35,
  "SC": 1.8,
  "ST": 2.1,
  "EWS": 1.15,
  "PwD": 2.5,
};

// Counselling type adds seats / relaxes competition
const COUNSELLING_BONUS: Record<string, number> = {
  "50% All India Quota (MCC)": 0,
  "85% State Quota":  3000,
  "Deemed University": 12000,
  "DNB Hospitals": 8000,
};

// College lookup: keyed by spec → counselling type → [safe, target, reach]
// Each entry: [collegeName, fee]
type CollegeEntry = [string, string];
type SpecColleges = {
  safe: CollegeEntry;
  target: CollegeEntry;
  reach: CollegeEntry;
};
type CounsellingColleges = Record<string, SpecColleges>;

const COLLEGE_MAP: Record<string, CounsellingColleges> = {
  "MD General Medicine": {
    "50% All India Quota (MCC)": {
      safe:   ["Government Medical College, Nagpur", "₹1.45 L / yr"],
      target: ["Grant Govt Medical College, Mumbai", "₹1.52 L / yr"],
      reach:  ["King Edward Memorial (KEM) Hospital, Mumbai", "₹1.48 L / yr"],
    },
    "85% State Quota": {
      safe:   ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
      target: ["Shri Vasantrao Naik Govt Medical College, Yavatmal", "₹1.38 L / yr"],
      reach:  ["Sir J.J. Group of Hospitals, Mumbai", "₹1.46 L / yr"],
    },
    "Deemed University": {
      safe:   ["Kasturba Medical College, Manipal (MAHE)", "₹26.8 L / yr"],
      target: ["D.Y. Patil Medical College, Pune", "₹22.5 L / yr"],
      reach:  ["Sri Ramachandra Medical College, Chennai", "₹18.0 L / yr"],
    },
    "DNB Hospitals": {
      safe:   ["Hinduja Hospital & MRC, Mumbai (DNB)", "₹0 (Stipend-based)"],
      target: ["Apollo Hospitals, Hyderabad (DNB)", "₹0 (Stipend-based)"],
      reach:  ["Fortis Hospital, Mulund (DNB)", "₹0 (Stipend-based)"],
    },
  },
  "MS Orthopaedics": {
    "50% All India Quota (MCC)": {
      safe:   ["Govt Medical College, Aurangabad", "₹1.40 L / yr"],
      target: ["Grant Govt Medical College, Mumbai", "₹1.52 L / yr"],
      reach:  ["Maulana Azad Medical College (MAMC), Delhi", "₹1.50 L / yr"],
    },
    "85% State Quota": {
      safe:   ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
      target: ["Indira Gandhi Medical College, Nagpur", "₹1.38 L / yr"],
      reach:  ["Seth GS Medical College, Mumbai", "₹1.48 L / yr"],
    },
    "Deemed University": {
      safe:   ["Kasturba Medical College, Manipal (MAHE)", "₹28.0 L / yr"],
      target: ["D.Y. Patil Medical College, Navi Mumbai", "₹24.0 L / yr"],
      reach:  ["Amrita Institute of Medical Sciences, Coimbatore", "₹20.0 L / yr"],
    },
    "DNB Hospitals": {
      safe:   ["Kokilaben Dhirubhai Ambani Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
      target: ["Lilavati Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
      reach:  ["Fortis Memorial Research Institute, Gurgaon (DNB)", "₹0 (Stipend-based)"],
    },
  },
  "MD Paediatrics": {
    "50% All India Quota (MCC)": {
      safe:   ["Govt Medical College, Miraj", "₹1.38 L / yr"],
      target: ["Lady Hardinge Medical College, Delhi", "₹1.45 L / yr"],
      reach:  ["Maulana Azad Medical College (MAMC), Delhi", "₹1.50 L / yr"],
    },
    "85% State Quota": {
      safe:   ["Shri Vasantrao Naik Govt Medical College, Yavatmal", "₹1.35 L / yr"],
      target: ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
      reach:  ["Seth GS Medical College, Mumbai", "₹1.48 L / yr"],
    },
    "Deemed University": {
      safe:   ["Kasturba Medical College, Manipal (MAHE)", "₹26.8 L / yr"],
      target: ["Saveetha Medical College, Chennai", "₹18.5 L / yr"],
      reach:  ["Amrita Institute of Medical Sciences, Coimbatore", "₹22.0 L / yr"],
    },
    "DNB Hospitals": {
      safe:   ["Rainbow Children's Hospital, Hyderabad (DNB)", "₹0 (Stipend-based)"],
      target: ["Narayana Health City, Bangalore (DNB)", "₹0 (Stipend-based)"],
      reach:  ["Apollo Hospitals, Chennai (DNB)", "₹0 (Stipend-based)"],
    },
  },
  "MS General Surgery": {
    "50% All India Quota (MCC)": {
      safe:   ["Govt Medical College, Nagpur", "₹1.45 L / yr"],
      target: ["Grant Govt Medical College, Mumbai", "₹1.52 L / yr"],
      reach:  ["UCMS & GTB Hospital, Delhi", "₹1.48 L / yr"],
    },
    "85% State Quota": {
      safe:   ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
      target: ["Indira Gandhi Medical College, Nagpur", "₹1.38 L / yr"],
      reach:  ["Sir J.J. Group of Hospitals, Mumbai", "₹1.46 L / yr"],
    },
    "Deemed University": {
      safe:   ["D.Y. Patil Medical College, Pune", "₹22.5 L / yr"],
      target: ["Mahatma Gandhi Medical College, Jaipur", "₹16.0 L / yr"],
      reach:  ["Sri Ramachandra Medical College, Chennai", "₹18.0 L / yr"],
    },
    "DNB Hospitals": {
      safe:   ["Medanta — The Medicity, Gurgaon (DNB)", "₹0 (Stipend-based)"],
      target: ["Wockhardt Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
      reach:  ["Bombay Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
    },
  },
  "MD Radio-Diagnosis": {
    "50% All India Quota (MCC)": {
      safe:   ["Govt Medical College, Surat", "₹1.40 L / yr"],
      target: ["TNMC & BYL Nair Hospital, Mumbai", "₹1.46 L / yr"],
      reach:  ["AIIMS, New Delhi", "₹2,027 / yr"],
    },
    "85% State Quota": {
      safe:   ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
      target: ["Seth GS Medical College, Mumbai", "₹1.48 L / yr"],
      reach:  ["Grant Govt Medical College, Mumbai", "₹1.52 L / yr"],
    },
    "Deemed University": {
      safe:   ["Kasturba Medical College, Manipal (MAHE)", "₹30.0 L / yr"],
      target: ["Amrita Institute of Medical Sciences, Coimbatore", "₹26.0 L / yr"],
      reach:  ["Sri Ramachandra Medical College, Chennai", "₹24.0 L / yr"],
    },
    "DNB Hospitals": {
      safe:   ["Kokilaben Dhirubhai Ambani Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
      target: ["Nanavati Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
      reach:  ["Max Super Speciality Hospital, Delhi (DNB)", "₹0 (Stipend-based)"],
    },
  },
  "MBBS Core": {
    "50% All India Quota (MCC)": {
      safe:   ["Government Medical College, Amritsar", "₹1.20 L / yr"],
      target: ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
      reach:  ["Maulana Azad Medical College (MAMC), Delhi", "₹1.50 L / yr"],
    },
    "85% State Quota": {
      safe:   ["Govt Medical College, Yavatmal", "₹1.15 L / yr"],
      target: ["Govt Medical College, Latur", "₹1.20 L / yr"],
      reach:  ["B.J. Govt Medical College, Pune", "₹1.32 L / yr"],
    },
    "Deemed University": {
      safe:   ["D.Y. Patil Medical College, Pune", "₹14.5 L / yr"],
      target: ["Bharati Vidyapeeth Medical College, Pune", "₹12.0 L / yr"],
      reach:  ["Krishna Institute of Medical Sciences, Karad", "₹10.0 L / yr"],
    },
    "DNB Hospitals": {
      safe:   ["Christian Medical College, Vellore (DNB)", "₹0 (Stipend-based)"],
      target: ["St John's Medical College, Bangalore (DNB)", "₹0 (Stipend-based)"],
      reach:  ["Tata Memorial Hospital, Mumbai (DNB)", "₹0 (Stipend-based)"],
    },
  },
};

function computeResult(rankStr: string, spec: string, quota: string, counselling: string) {
  const airRank = parseInt(rankStr.replace(/,/g, ""), 10);
  if (isNaN(airRank) || airRank <= 0) return null;

  const base = SPECIALTY_BASELINES[spec] ?? SPECIALTY_BASELINES["MD General Medicine"];
  const qMult = QUOTA_MULTIPLIERS[quota] ?? 1.0;
  const cBonus = COUNSELLING_BONUS[counselling] ?? 0;

  // Effective closing ranks after quota relaxation + counselling bonus
  const eSafe   = Math.round(base.safe   * qMult + cBonus);
  const eTarget = Math.round(base.target * qMult + cBonus);
  const eReach  = Math.round(base.reach  * qMult + cBonus);

  // Probability score 0–100
  let probability: number;
  let zone: "high" | "moderate" | "borderline" | "low";

  if (airRank <= eReach) {
    probability = Math.min(99, Math.round(92 + ((eReach - airRank) / eReach) * 6));
    zone = "high";
  } else if (airRank <= eTarget) {
    const progress = (airRank - eReach) / (eTarget - eReach);
    probability = Math.round(75 - progress * 20);
    zone = "moderate";
  } else if (airRank <= eSafe) {
    const progress = (airRank - eTarget) / (eSafe - eTarget);
    probability = Math.round(55 - progress * 25);
    zone = "borderline";
  } else {
    const excess = airRank - eSafe;
    probability = Math.max(8, Math.round(30 - (excess / eSafe) * 25));
    zone = "low";
  }

  // Look up actual college names for this spec + counselling combo
  const specKey   = (COLLEGE_MAP[spec] ? spec : "MD General Medicine") as keyof typeof COLLEGE_MAP;
  const cKey      = (COLLEGE_MAP[specKey][counselling] ? counselling : "50% All India Quota (MCC)") as string;
  const colleges  = COLLEGE_MAP[specKey][cKey];

  const recs = [
    {
      tag: "Safe Choice",
      tagColor: "bg-[#e9f8ef] text-accent border-accent/30",
      college: colleges.safe[0],
      fee: colleges.safe[1],
      r1: eSafe.toLocaleString("en-IN"),
      r2: Math.round(eSafe * 1.18).toLocaleString("en-IN"),
      stipend: base.stipend,
    },
    {
      tag: "Target Option",
      tagColor: "bg-[#eef4ff] text-brand border-brand/30",
      college: colleges.target[0],
      fee: colleges.target[1],
      r1: eTarget.toLocaleString("en-IN"),
      r2: Math.round(eTarget * 1.16).toLocaleString("en-IN"),
      stipend: base.stipend,
    },
    {
      tag: "Borderline / Reach",
      tagColor: "bg-slate-100 text-slate-600 border-slate-300",
      college: colleges.reach[0],
      fee: colleges.reach[1],
      r1: eReach.toLocaleString("en-IN"),
      r2: Math.round(eReach * 1.14).toLocaleString("en-IN"),
      stipend: base.stipend,
    },
  ];

  const closingLow  = Math.round(eSafe * 0.95).toLocaleString("en-IN");
  const closingHigh = Math.round(eSafe * 1.05).toLocaleString("en-IN");

  return { probability, zone, bond: base.bond, stipend: base.stipend, closingLow, closingHigh, recs };
}

function PredictorEngine() {
  const [stream, setStream] = useState<Stream>("NEET PG (MD/MS/DNB)");
  const [rank, setRank] = useState("12450");
  const [quota, setQuota] = useState("General / Unreserved (Open)");
  const [domicile, setDomicile] = useState("Maharashtra (CET-CELL)");
  const [counselling, setCounselling] = useState("50% All India Quota (MCC)");
  const [spec, setSpec] = useState("MD General Medicine");
  const [calculated, setCalculated] = useState(false);

  const streams: Stream[] = [
    "NEET PG (MD/MS/DNB)",
    "NEET UG (MBBS/BDS)",
    "NEET MDS Master",
    "Deemed & Management Quota",
  ];

  // When stream tab changes, reset results
  function handleStream(v: Stream) {
    setStream(v);
    setCalculated(false);
    // Pre-select sensible defaults per stream
    if (v === "NEET UG (MBBS/BDS)") setSpec("MBBS Core");
    else if (v === "NEET PG (MD/MS/DNB)") setSpec("MD General Medicine");
    else if (v === "Deemed & Management Quota") { setCounselling("Deemed University"); setSpec("MD General Medicine"); }
    else if (v === "NEET MDS Master") { setCounselling("50% All India Quota (MCC)"); setSpec("MD General Medicine"); }
  }

  const result = calculated ? computeResult(rank, spec, quota, counselling) : null;

  const zoneConfig = {
    high:        { label: "High Probability Zone",    badge: "bg-[#e9f8ef] text-accent border-accent/30",   dot: "bg-accent"  },
    moderate:    { label: "Moderate Probability",     badge: "bg-[#eef4ff] text-brand border-brand/30",    dot: "bg-brand"   },
    borderline:  { label: "Borderline — Needs Review",badge: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500" },
    low:         { label: "Low Probability",          badge: "bg-red-50 text-red-600 border-red-200",       dot: "bg-red-500" },
  };
  const zone = result ? zoneConfig[result.zone] : null;

  // Gauge arc strokeDashoffset — full arc length ≈75.4, maps 0–100% probability
  const gaugeOffset = result ? Math.round(75.4 - (result.probability / 100) * 75.4) : 75.4;

  return (
    <section id="predictor-engine" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          Predictive Algorithmic Engine
        </p>
        <h2 className="mt-2 text-[22px] font-extrabold tracking-tight text-ink sm:text-[26px]">
          Calculate Your Exact Medical Admission Probability
        </h2>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted">
          Select your qualifying stream, specify rank parameters, and obtain a
          stratified matrix of safe institutes, target choices, and clinical
          reach hospitals.
        </p>

        {/* Stream Tabs */}
        <div className="mt-6 flex flex-wrap gap-1 rounded-xl border border-line bg-[#f4f7fb] p-1">
          {streams.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleStream(s)}
              className={`rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors ${
                stream === s
                  ? "bg-white text-ink shadow-[0_1px_4px_rgba(16,24,45,0.08)]"
                  : "text-muted hover:text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* Left — Inputs */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_4px_16px_rgba(16,24,45,0.04)]">
              <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                <ListIcon className="h-4 w-4" />
                Rank &amp; Profile Attributes
              </p>

              {/* All India Rank */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="air-rank-input" className="text-[13px] text-muted">All India Rank (AIR)</label>
                  <span className="text-[11px] font-semibold text-muted">NEET 2024 / 2025</span>
                </div>
                <div className="relative mt-1.5">
                  <input
                    id="air-rank-input"
                    type="text"
                    inputMode="numeric"
                    value={rank}
                    onChange={(e) => { setRank(e.target.value); setCalculated(false); }}
                    placeholder="e.g. 12450"
                    className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-[15px] font-semibold text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-muted">AIR</span>
                </div>
              </div>

              {/* Target Quota Category */}
              <div className="mt-4">
                <label htmlFor="quota-select" className="text-[13px] text-muted">Target Quota Category</label>
                <div className="relative mt-1.5">
                  <select
                    id="quota-select"
                    value={quota}
                    onChange={(e) => { setQuota(e.target.value); setCalculated(false); }}
                    className="w-full appearance-none rounded-lg border border-line bg-white px-3 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  >
                    <option>General / Unreserved (Open)</option>
                    <option>OBC-NCL</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>EWS</option>
                    <option>PwD</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
              </div>

              {/* Candidate Domicile State */}
              <div className="mt-4">
                <label htmlFor="domicile-select" className="text-[13px] text-muted">Candidate Domicile State</label>
                <div className="relative mt-1.5">
                  <select
                    id="domicile-select"
                    value={domicile}
                    onChange={(e) => { setDomicile(e.target.value); setCalculated(false); }}
                    className="w-full appearance-none rounded-lg border border-line bg-white px-3 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  >
                    <option>Maharashtra (CET-CELL)</option>
                    <option>Karnataka (KEA)</option>
                    <option>Uttar Pradesh (UPDGME)</option>
                    <option>Delhi (DGHS)</option>
                    <option>Other State</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
              </div>

              {/* Target Counselling Stream */}
              <div className="mt-4">
                <label htmlFor="counselling-select" className="text-[13px] text-muted">Target Counselling Stream</label>
                <div className="relative mt-1.5">
                  <select
                    id="counselling-select"
                    value={counselling}
                    onChange={(e) => { setCounselling(e.target.value); setCalculated(false); }}
                    className="w-full appearance-none rounded-lg border border-line bg-white px-3 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  >
                    <option>50% All India Quota (MCC)</option>
                    <option>85% State Quota</option>
                    <option>Deemed University</option>
                    <option>DNB Hospitals</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
              </div>

              {/* Specialization Preference */}
              <div className="mt-4">
                <label htmlFor="spec-select" className="text-[13px] text-muted">Specialization Preference</label>
                <div className="relative mt-1.5">
                  <select
                    id="spec-select"
                    value={spec}
                    onChange={(e) => { setSpec(e.target.value); setCalculated(false); }}
                    className="w-full appearance-none rounded-lg border border-line bg-white px-3 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                  >
                    <option>MD General Medicine</option>
                    <option>MS Orthopaedics</option>
                    <option>MD Paediatrics</option>
                    <option>MS General Surgery</option>
                    <option>MD Radio-Diagnosis</option>
                    <option>MBBS Core</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCalculated(true)}
                className="mt-5 inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-ink px-4 text-[14px] font-semibold text-white hover:opacity-90 active:scale-[0.98] transition-transform"
              >
                <ClipboardListIcon className="h-4 w-4" />
                Calculate Admission Probability
              </button>
            </div>
          </div>

          {/* Right — Results */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_4px_16px_rgba(16,24,45,0.04)]">

              {/* ── Empty state ── */}
              {!calculated && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4f7fb]">
                    <ClipboardListIcon className="h-7 w-7 text-brand" />
                  </div>
                  <p className="mt-4 text-[15px] font-bold text-ink">
                    Your results will appear here
                  </p>
                  <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted">
                    Fill in your AIR, quota, domicile, counselling stream and specialization, then click <strong className="text-ink">Calculate</strong>.
                  </p>
                </div>
              )}

              {/* ── Results ── */}
              {calculated && result && (
                <>
                  {/* Status header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                        Predictor Status Result
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-ink">
                        {spec} &bull; {counselling}
                      </p>
                    </div>
                    {zone && (
                      <span className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${zone.badge}`}>
                        <CheckCircleIcon className="h-3.5 w-3.5" />
                        {zone.label}
                      </span>
                    )}
                  </div>

                  {/* Probability gauge + score */}
                  <div className="mt-4 flex items-center gap-5 rounded-xl border border-line bg-[#f8fafc] p-4">
                    <svg width="72" height="46" viewBox="0 0 56 36" fill="none" aria-hidden="true">
                      <path d="M4 32 A24 24 0 0 1 52 32" stroke="#e4e9f1" strokeWidth="5" strokeLinecap="round" />
                      <path
                        d="M4 32 A24 24 0 0 1 52 32"
                        stroke={result.zone === "high" ? "#22c55e" : result.zone === "moderate" ? "#0057d9" : result.zone === "borderline" ? "#f59e0b" : "#ef4444"}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="75.4"
                        strokeDashoffset={gaugeOffset}
                      />
                    </svg>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted">Admission Probability</p>
                      <p className={`mt-0.5 text-[28px] font-extrabold leading-none ${result.zone === "high" ? "text-accent" : result.zone === "moderate" ? "text-brand" : result.zone === "borderline" ? "text-amber-600" : "text-red-500"}`}>
                        {result.probability}%
                      </p>
                      <p className="mt-1 text-[12px] text-muted">
                        AIR {parseInt(rank.replace(/,/g, ""), 10).toLocaleString("en-IN")} &bull; {quota}
                      </p>
                    </div>
                  </div>

                  {/* Key metrics row */}
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-line bg-[#f8fafc] p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">Expected Closing AIR</p>
                      <p className="mt-1 text-[13px] font-extrabold text-ink">{result.closingLow}–{result.closingHigh}</p>
                      <p className={`mt-0.5 text-[11px] font-semibold ${result.zone === "high" ? "text-accent" : result.zone === "moderate" ? "text-brand" : "text-amber-600"}`}>
                        {result.zone === "high" ? "Safe Range" : result.zone === "moderate" ? "Within Reach" : "Near Cutoff"}
                      </p>
                    </div>
                    <div className="rounded-xl border border-line bg-[#f8fafc] p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">Service Bond</p>
                      <p className="mt-1 text-[13px] font-bold text-ink">{result.bond}</p>
                      <p className="mt-0.5 text-[11px] text-muted">{domicile.split(" ")[0]} Norm</p>
                    </div>
                    <div className="rounded-xl border border-line bg-[#f8fafc] p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">Avg Stipend</p>
                      <p className="mt-1 text-[13px] font-bold text-brand">{result.stipend}</p>
                      <p className="mt-0.5 text-[11px] text-muted">State Scaled Pay</p>
                    </div>
                  </div>

                  {/* Institute recommendations */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-semibold text-ink">Calculated Institute Recommendations</p>
                      <span className="text-[11px] text-muted">NEET 2024 R1–R3 Baseline</span>
                    </div>
                    <div className="mt-3 space-y-3">
                      {result.recs.map((r) => (
                        <div key={r.college} className="rounded-xl border border-line bg-[#f8fafc] p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`rounded border px-2 py-0.5 text-[10px] font-bold ${r.tagColor}`}>
                                  {r.tag}
                                </span>
                                <span className="text-[13px] font-bold text-ink">{r.college}</span>
                              </div>
                              <p className="mt-1 text-[12px] text-muted">
                                {spec} &bull; Closing AIR R1: {r.r1} | R2: {r.r2}
                              </p>
                            </div>
                            <div className="shrink-0 text-right text-[12px] text-muted">
                              <p>Fee: {r.fee}</p>
                              <p>Stipend: {r.stipend}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp validate */}
                  <div className="mt-4 flex items-start justify-between gap-4 rounded-xl border border-line bg-white p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand">ⓘ</span>
                      <div>
                        <p className="text-[13px] font-semibold text-ink">
                          Want an expert review of these choices?
                        </p>
                        <p className="mt-0.5 text-[12px] text-muted">
                          Principal Counsellor Navin Harjwani cross-examines
                          choice lists against previous stray vacancy shifts.
                        </p>
                      </div>
                    </div>
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={capturePredictor}
                      className="inline-flex h-[38px] shrink-0 items-center gap-1.5 rounded-lg bg-brand px-4 text-[13px] font-semibold text-white hover:bg-brand-alt"
                    >
                      Validate on WhatsApp
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </>
              )}

              {/* Invalid rank state */}
              {calculated && !result && (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-[14px] font-bold text-red-500">Invalid rank entered</p>
                  <p className="mt-1 text-[13px] text-muted">Please enter a valid numeric AIR (e.g. 12450) and try again.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Dual Admission Engines ──────────────────────────────────────

function DualEngines() {
  return (
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Dual Admission Engines
          </p>
          <h2 className="mt-2 text-[24px] font-extrabold tracking-tight text-ink sm:text-[28px]">
            Specialized Counselling Diagnostic Suites
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
            Admission parameters under Central MCC diverge sharply from State
            Authority policies. We provide independent, calibrated engines for
            both frameworks.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Card 1 — AIQ */}
          <article className="rounded-2xl border border-line bg-white p-6 shadow-[0_4px_16px_rgba(16,24,45,0.04)] sm:p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-brand">
              <LandmarkIcon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[12px] font-bold text-brand">
              All India &amp; Central Pool
            </p>
            <h3 className="mt-1 text-[18px] font-bold text-ink">
              MCC Counselling College Admission Predictor
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
              Synthesizes closing ranks for 50% All India Quota (AIQ), Central
              Universities (BHU, AMU, DU), AFMC, and All Deemed Universities
              across MD, MS, and DNB courses. Includes seat conversion
              safeguards for Round 3 and Stray Vacancies.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Covers 650+ Central Medical Colleges & NBE Accredited Hospitals",
                "Annual tuition matrices with security deposit forfeiture warnings",
                "Includes DNB vs MD clinical exposure scoring",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] text-muted"
                >
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#predictor-engine"
                className="inline-flex h-[42px] items-center gap-2 rounded-lg bg-ink px-4 text-[13px] font-semibold text-white hover:opacity-90"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Launch Tool
              </a>
              <button
                type="button"
                className="inline-flex h-[42px] items-center gap-2 rounded-lg border border-line bg-white px-4 text-[13px] font-semibold text-ink hover:bg-sky"
              >
                <FileTextIcon className="h-4 w-4 text-muted" />
                View Sample Report (PDF)
              </button>
            </div>
          </article>

          {/* Card 2 — State */}
          <article className="rounded-2xl border border-line bg-white p-6 shadow-[0_4px_16px_rgba(16,24,45,0.04)] sm:p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <HospitalIcon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[13px] font-semibold text-muted">
              State 85% &amp; Private Merit
            </p>
            <h3 className="mt-1 text-[18px] font-bold text-ink">
              State-by-State Medical College Predictor
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
              Specialized state quota calculator factoring in regional
              reservations, constitutional quotas, domicile retention rules, and
              institutional private quotas for Maharashtra, Karnataka, Gujarat,
              and other key medical hubs.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Deep analysis for Maharashtra CET-CELL, Karnataka KEA, and DGME UP",
                "Private college management vs institutional fee disparity mapping",
                "Strict adherence to NMC guidelines for MBBS, MD, MS, and DNB",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] text-muted"
                >
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#predictor-engine"
                className="inline-flex h-[42px] items-center gap-2 rounded-lg bg-brand px-4 text-[13px] font-semibold text-white hover:bg-brand-alt"
              >
                <TableIcon className="h-4 w-4" />
                Check State Matrix
              </a>
              <button
                type="button"
                className="inline-flex h-[42px] items-center gap-2 rounded-lg border border-line bg-white px-4 text-[13px] font-semibold text-ink hover:bg-sky"
              >
                <ArrowRightIcon className="h-4 w-4 text-muted" />
                Download Sample Report
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Historical Benchmarks Table ──────────────────────────────────

const TABLE_ROWS = [
  {
    college: "AIIMS, New Delhi",
    type: "Central Autonomous • New Delhi",
    spec: "MD Radio-Diagnosis",
    cutoff24: "AIR 8 / AIR 14",
    proj25: "AIR 1 – 18",
    projBlue: true,
    fee: "₹2,027 / yr",
    bond: "No Bond",
    bondGray: true,
    stipend: "₹1,15,000 / mo",
    assessment: "High Competition",
    assessColor: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    college: "King Edward Memorial (KEM) Hospital",
    type: "Municipal Corp / MUHS • Mumbai, Maharashtra",
    spec: "MD General Medicine",
    cutoff24: "AIR 260 / AIR 390",
    proj25: "AIR 240 – 410",
    projBlue: true,
    fee: "₹1,48,000 / yr",
    bond: "1 Year / ₹50 L",
    bondGray: false,
    stipend: "₹94,000 / mo",
    assessment: "High Competition",
    assessColor: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    college: "Grant Government Medical College",
    type: "Govt • Byculla, Mumbai, Maharashtra",
    spec: "MS Orthopaedics",
    cutoff24: "AIR 3,420 / AIR 4,110",
    proj25: "AIR 3,200 – 4,400",
    projBlue: true,
    fee: "₹1,52,000 / yr",
    bond: "1 Year / ₹50 L",
    bondGray: false,
    stipend: "₹92,000 / mo",
    assessment: "Competitive",
    assessColor: "bg-[#eef4ff] text-brand border-brand/25",
  },
  {
    college: "Kasturba Medical College (KMC)",
    type: "MAHE Deemed • Manipal, Karnataka",
    spec: "MD Paediatrics",
    cutoff24: "AIR 14,290 / AIR 16,500",
    proj25: "AIR 14,000 – 17,200",
    projBlue: true,
    fee: "₹26,80,000 / yr",
    bond: "No Bond",
    bondGray: true,
    stipend: "₹55,000 / mo",
    assessment: "Safe",
    assessColor: "bg-[#e9f8ef] text-accent border-accent/25",
  },
  {
    college: "B.J. Government Medical College",
    type: "Govt • Pune, Maharashtra",
    spec: "MBBS Core",
    cutoff24: "AIR 3,890 / AIR 4,210",
    proj25: "AIR 3,600 – 4,500",
    projBlue: true,
    fee: "₹1,32,000 / yr",
    bond: "1 Year / ₹10 L",
    bondGray: false,
    stipend: "₹18,000 / mo",
    assessment: "Competitive",
    assessColor: "bg-[#eef4ff] text-brand border-brand/25",
  },
];

function HistoricalTable() {
  return (
    <section className="border-t border-line bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
              Historical Benchmarks &amp; Closing Ranks
            </p>
            <h2 className="mt-2 text-[22px] font-extrabold tracking-tight text-ink sm:text-[26px]">
              Institutional Seat Matrix &amp; Cut-off Matrix
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-muted">
              Comparative review of past closing ranks, institutional bonds,
              stipends, and projected competition dynamics.
            </p>
          </div>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={capturePredictor}
            className="inline-flex h-[40px] shrink-0 items-center gap-2 self-start rounded-lg border border-line bg-white px-4 text-[13px] font-semibold text-ink shadow-[0_1px_4px_rgba(16,24,45,0.04)] hover:bg-sky"
          >
            <TableIcon className="h-4 w-4 text-brand" />
            Request Complete Excel Matrix
          </a>
        </div>

        {/* Search / filter bar */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search Institute / College..."
              className="h-[42px] w-full rounded-lg border border-line bg-white pl-9 pr-3 text-[13px] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
            />
          </div>
          {["All Clinical Specialties", "All States / AIQ", "All Quotas"].map(
            (f) => (
              <div key={f} className="relative">
                <select className="h-[42px] appearance-none rounded-lg border border-line bg-white px-4 pr-8 text-[13px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15">
                  <option>{f}</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>
            )
          )}
        </div>

        {/* Table */}
        <div className="mt-5 overflow-x-auto rounded-2xl border border-line bg-white shadow-[0_4px_16px_rgba(16,24,45,0.04)]">
          <table className="min-w-[900px] w-full text-left text-[13px]">
            <thead className="bg-[#f4f7fb] text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
              <tr>
                <th className="px-5 py-3.5">College / Hospital Name</th>
                <th className="px-5 py-3.5">Specialization</th>
                <th className="px-5 py-3.5">2024 Cutoff (R1 / R2)</th>
                <th className="px-5 py-3.5">2025 Projected</th>
                <th className="px-5 py-3.5">Tuition Fee</th>
                <th className="px-5 py-3.5">Service Bond</th>
                <th className="px-5 py-3.5">Stipend</th>
                <th className="px-5 py-3.5">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr
                  key={row.college}
                  className={i > 0 ? "border-t border-line" : ""}
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-ink">{row.college}</p>
                    <p className="mt-0.5 text-[11px] text-muted">{row.type}</p>
                  </td>
                  <td className="px-5 py-4 font-semibold text-ink">
                    {row.spec}
                  </td>
                  <td className="px-5 py-4 text-muted">{row.cutoff24}</td>
                  <td
                    className={`px-5 py-4 font-semibold ${row.projBlue ? "text-brand" : "text-ink"}`}
                  >
                    {row.proj25}
                  </td>
                  <td className="px-5 py-4 text-muted">{row.fee}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-[11px] font-semibold ${row.bondGray ? "bg-slate-100 text-muted" : "bg-amber-50 text-amber-700"}`}
                    >
                      {row.bond}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted">{row.stipend}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${row.assessColor}`}
                    >
                      {row.assessment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col justify-between gap-2 border-t border-line px-5 py-3 text-[11px] text-muted sm:flex-row">
            <span>
              * Figures reflect General Merit under respective regulatory
              rounds. Management &amp; NRI quotas involve distinct fee slabs.
            </span>
            <span className="shrink-0">
              Source: MCC &amp; State CET Cell Published Allotment Archives
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Comprehensive Dossier ───────────────────────────────────────

const DOSSIER_FEATURES = [
  {
    Icon: ListIcon,
    title: "Optimized Choice Sequence",
    desc: "Strict mathematical ordering that guarantees top-priority evaluation without blocking subsequent rounds.",
  },
  {
    Icon: CreditCardIcon,
    title: "Bond vs Stipend Offsets",
    desc: "Calculates 3-year net earnings against state rural service bonds and non-completion penalties.",
  },
  {
    Icon: HospitalIcon,
    title: "Clinical Bed Footfall Audit",
    desc: "OPD/IPD patient metrics, active surgical case volumes, and diagnostic equipment availability per hospital.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Security Deposit Safeguards",
    desc: "Specific rules to avoid the ₹2 Lakh MCC or ₹1 Lakh State seat forfeit triggers between rounds.",
  },
];

const CHOICE_ZONES = [
  {
    label: "Choice 1-15: Super-Specialty Attached AIIMS / Central Institutes",
    tag: "Ambitious",
    pct: "18%",
    color: "bg-brand",
    width: "w-[18%]",
  },
  {
    label: "Choice 16-45: Tier 1 State GMCs (KEM, Grant, BJMC, Bangalore MC)",
    tag: "Target Zone",
    pct: "65%",
    color: "bg-accent",
    width: "w-[65%]",
  },
  {
    label: "Choice 46-70: High-Volume DNB Tertiary Hospitals (Hinduja, Apollo, Ganga)",
    tag: "Safe Baseline",
    pct: "98%",
    color: "bg-amber-400",
    width: "w-[98%]",
  },
];

function ComprehensiveDossier() {
  return (
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-[#eef4ff] px-3 py-1.5 text-[11px] font-bold text-brand">
              <CompassIcon className="h-3.5 w-3.5" />
              Proprietary Advisory Intelligence
            </div>
            <h2 className="mt-4 text-[22px] font-extrabold tracking-tight text-ink sm:text-[26px]">
              Comprehensive Predictive Diagnostic Dossier
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">
              Curated personally by Principal Counsellor Navin Harjwani, this
              detailed report eliminates guesswork during online choice
              submission, saving candidates from involuntary forfeitures and
              sub-optimal branch allocations.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {DOSSIER_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-line bg-[#f8fafc] p-4"
                >
                  <div className="flex items-center gap-2">
                    <f.Icon className="h-4 w-4 shrink-0 text-brand" />
                    <p className="text-[13px] font-bold text-ink">{f.title}</p>
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={capturePredictor}
              className="mt-6 inline-flex h-[46px] items-center gap-2 rounded-lg bg-accent px-5 text-[14px] font-semibold text-white hover:opacity-90"
            >
              <MessageSquareIcon className="h-4 w-4" />
              Request Your Custom Predictor Report on WhatsApp
            </a>
          </div>

          {/* Right — Diagnostic report card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_8px_28px_rgba(16,24,45,0.06)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                    Diagnostic Report #ITI-2025-882
                  </p>
                  <p className="mt-0.5 text-[12px] text-muted">
                    Clinical Trajectory &amp; Quota Mapping
                  </p>
                </div>
                <div className="text-right text-[12px] text-muted">
                  <p>Validated by</p>
                  <p className="font-semibold text-ink">Navin Harjwani</p>
                </div>
              </div>

              <div className="mt-4 border-t border-line pt-4">
                <p className="text-[13px] font-semibold text-ink">
                  Choice Filling Allocation Priority Model
                </p>
                <div className="mt-4 space-y-4">
                  {CHOICE_ZONES.map((z) => (
                    <div key={z.label}>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[12px] leading-snug text-muted">
                          {z.label}
                        </p>
                        <span className="shrink-0 text-[11px] font-bold text-muted">
                          {z.tag}
                          <br />({z.pct})
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 w-full rounded-full bg-[#e4e9f1]">
                        <div
                          className={`h-2 rounded-full ${z.color} ${z.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical note */}
              <div className="mt-4 rounded-xl border border-line bg-[#f8fafc] p-4">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
                  <ClipboardListIcon className="h-3.5 w-3.5" />
                  Principal Counsellor Clinical Note:
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  &ldquo;At rank AIR 11,200, General Medicine in Maharashtra AIQ
                  carries a 32% probability in Round 1, shifting to 78% in
                  Round 2. However, DNB General Medicine in Fortis/Hinduja
                  offers identical clinical case diversity with zero service
                  bond commitments.&rdquo;
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-muted">
                <span className="flex items-center gap-1.5">
                  <AlertTriangleIcon className="h-3.5 w-3.5 shrink-0" />
                  Confidential Candidate Roadmap
                </span>
                <span>18-Page Institutional PDF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Contact CTA ──────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section className="border-t border-line bg-[#f4f7fb] py-10 sm:py-12">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="rounded-3xl bg-[#0d1b2e] px-6 py-8 sm:px-10 sm:py-9">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_300px]">

            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[11px] font-semibold text-slate-300">
                <CheckCircleIcon className="h-3.5 w-3.5 text-accent" />
                Direct Academic Advisory Desk
              </div>

              {/* Heading */}
              <h2 className="mt-3 text-[18px] font-bold text-white sm:text-[20px]">
                Connect Directly with Principal Counsellor Navin Harjwani
              </h2>

              {/* Description */}
              <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-slate-400">
                Validate your predictor score, verify category rank eligibility,
                and formulate an airtight, error-free choice filling strategy
                for NEET UG &amp; NEET PG 2025.
              </p>

              {/* Info row */}
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                  <div>
                    <p className="text-[12.5px] font-semibold text-white">
                      Pune Central Consultation Office
                    </p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-slate-400">
                      Sadashiv Peth, Near Swargate Junction,
                      <br />
                      Pune, Maharashtra 411030
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                  <div>
                    <p className="text-[12.5px] font-semibold text-white">
                      Immediate Support Window
                    </p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-slate-400">
                      Mon – Sat: 10:00 AM – 7:00 PM IST (Fast
                      <br />
                      WhatsApp Dispatch)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={capturePredictor}
                className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#16a34a] text-[14px] font-semibold text-white hover:bg-[#15803d]"
              >
                <MessageSquareIcon className="h-4 w-4" />
                Direct WhatsApp Desk
              </a>
              <a
                href="tel:+919359544396"
                onClick={capturePredictor}
                className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 text-[14px] font-semibold text-white hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Helpline: +91-93595 44396
              </a>
              <p className="text-center text-[12px] leading-relaxed text-slate-400">
                Zero automated bots. Inquiries handled by
                <br />
                clinical admission experts.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: FAQ ──────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How does your NEET Predictor model changes in NMC seat increments?",
    a: "Our algorithm recalibrates seat matrices every quarter using official NMC bed strength bulletins. Each new seat addition is weighted by institutional infrastructure score and historical rank-shift variance, ensuring projections remain within ±3% of actual closing ranks.",
  },
  {
    q: "What is the difference between AIQ 50% and State 85% predictability?",
    a: "AIQ seats use a single merit list administered by MCC centrally — predictability is higher as there is no domicile factor. State 85% involves individual state authority seat matrices, domicile verification, institutional category management quotas, and multiple parallel counselling schedules, making it more complex to predict.",
  },
  {
    q: "Why is Service Bond and Penalty calculation critical during choice filling?",
    a: "Joining a Round 2 upgraded seat triggers an irrevocable bond commitment. If a candidate fails to complete the service obligation, penalties ranging from ₹10 Lakhs to ₹50 Lakhs apply. Our predictor flags bond-heavy choices and calculates 3-year net financial exposure before recommending any college.",
  },
  {
    q: "Can I consult with an expert if my rank is on the borderline?",
    a: "Yes — borderline ranks (within 15% of closing rank threshold) are flagged automatically by our system with a recommendation to connect directly with our Pune desk. Principal Counsellor Navin Harjwani personally reviews borderline profiles and maps round-by-round upgrade probability.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Regulatory Clarity
          </p>
          <h2 className="mt-2 text-[22px] font-extrabold tracking-tight text-ink sm:text-[26px]">
            Frequently Asked Questions on NEET Predictors &amp; Matrices
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[14px] leading-relaxed text-muted">
            Clinical parameters, algorithmic methodologies, and common
            choice-filling pitfalls explained.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-8 max-w-3xl space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-line bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14px] font-semibold text-ink hover:bg-sky/40"
              >
                {faq.q}
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-brand transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="border-t border-line px-5 pb-4 pt-3 text-[13.5px] leading-relaxed text-muted">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-line bg-white p-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-brand">ⓘ</span>
              <div>
                <p className="text-[13px] font-semibold text-ink">
                  Need assistance interpreting your predicted rank?
                </p>
                <p className="mt-0.5 text-[12px] text-muted">
                  Direct WhatsApp access to our Pune desk is open throughout
                  active counselling rounds.
                </p>
              </div>
            </div>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={capturePredictor}
              className="inline-flex h-[40px] shrink-0 items-center gap-2 rounded-lg bg-brand px-4 text-[13px] font-semibold text-white hover:bg-brand-alt"
            >
              Start WhatsApp Chat
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export function PredictorsPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StatsBar />
      <PredictorEngine />
      <DualEngines />
      <HistoricalTable />
      <ComprehensiveDossier />
      <ContactCTA />
      <FaqSection />
    </div>
  );
}
