"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type Tab = "clinical" | "surgical";

const CLINICAL_ROWS = [
  {
    icon: "📡",
    name: "MD Radio-Diagnosis",
    sub: "3T MRI, 128+ Slice CT, USG, DSA Exposure",
    footfall: "350+ Scans / Day",
    occupancy: "85% – 95% Tertiary",
    handson: "High (Interventions & Doppler)",
    handsOnColor: "bg-sky text-brand",
    emergency: "Shift-based / Night Rotations",
    cutoff: "Tier 1 (Rank 1 – 2,200)",
    cutoffColor: "text-accent font-bold",
  },
  {
    icon: "🏥",
    name: "MD General Medicine",
    sub: "MICU, ICCU, Dialysis, Tropical Disease Inflow",
    footfall: "800 – 1,400 Patients",
    occupancy: "92% – 100% Ward Full",
    handson: "Full Diagnostic & Critical Care",
    handsOnColor: "bg-sky text-brand",
    emergency: "Heavy (36-hr Emergency Posts)",
    cutoff: "Tier 1 (Rank 400 – 3,500)",
    cutoffColor: "text-accent font-bold",
  },
  {
    icon: "✖",
    name: "MD Dermatology, Venereology & Leprosy",
    sub: "Dermatosurgery, Lasers, Phototherapy",
    footfall: "250 – 450 Patients",
    occupancy: "40% – 60% Elective",
    handson: "High OPD & Aesthetic Skills",
    handsOnColor: "bg-sky text-brand",
    emergency: "Minimal Emergency Calls",
    cutoff: "Tier 1 (Rank 300 – 2,800)",
    cutoffColor: "text-accent font-bold",
  },
  {
    icon: "👶",
    name: "MD Paediatrics",
    sub: "NICU Level III, PICU, Congenital Anomalies",
    footfall: "500 – 900 Patients",
    occupancy: "88% – 96% Acute",
    handson: "Intubation, Central Lines, Neonatal Care",
    handsOnColor: "bg-sky text-brand",
    emergency: "Intense Neonatal ICU Duties",
    cutoff: "Tier 2 (Rank 2,500 – 5,800)",
    cutoffColor: "text-[#c47f00] font-bold",
  },
  {
    icon: "🤰",
    name: "MS Obstetrics & Gynaecology",
    sub: "High-Risk Deliveries, Laparoscopic OT, USG",
    footfall: "600 – 1,100 Patients",
    occupancy: "95% – 100% Ward Surge",
    handson: "Active Surgical Knife Time (LSCS/Hyst)",
    handsOnColor: "bg-sky text-brand",
    emergency: "High Unscheduled Labour Inflow",
    cutoff: "Tier 2 (Rank 3,000 – 7,200)",
    cutoffColor: "text-[#c47f00] font-bold",
  },
  {
    icon: "🦴",
    name: "MS Orthopaedics",
    sub: "Trauma Center, Arthroplasty, Spine Surgery",
    footfall: "400 – 800 Patients",
    occupancy: "85% – 95% Trauma Inflow",
    handson: "Extensive Closed/Open Fixations",
    handsOnColor: "bg-sky text-brand",
    emergency: "24/7 Polytrauma Triage",
    cutoff: "Tier 2 (Rank 3,200 – 7,900)",
    cutoffColor: "text-[#c47f00] font-bold",
  },
  {
    icon: "🔪",
    name: "MS General Surgery",
    sub: "Minimal Access (Laparoscopy), GI, Endoscopy",
    footfall: "600 – 1,200 Patients",
    occupancy: "80% – 90% Occupancy",
    handson: "Direct Major OT Case Logs",
    handsOnColor: "bg-sky text-brand",
    emergency: "Continuous Acute Abdomen Rota",
    cutoff: "Tier 2/3 (Rank 5,000 – 11,000)",
    cutoffColor: "text-[#c47f00] font-bold",
  },
];

const SURGICAL_ROWS = [
  {
    icon: "👁",
    name: "MS Ophthalmology",
    sub: "Phaco, Vitreoretinal, Cornea & LASIK Units",
    footfall: "300 – 600 Patients",
    occupancy: "70% – 85% Elective-Heavy",
    handson: "Microsurgical Cataract & Retina Ops",
    handsOnColor: "bg-sky text-brand",
    emergency: "Trauma & Chemical Burns On-Call",
    cutoff: "Tier 2 (Rank 2,800 – 6,500)",
    cutoffColor: "text-[#c47f00] font-bold",
  },
  {
    icon: "👂",
    name: "MS ENT",
    sub: "Endoscopic Sinus, Cochlear Implant, Skull Base",
    footfall: "250 – 500 Patients",
    occupancy: "72% – 88% Mixed",
    handson: "FESS, Tympanoplasty, Mastoidectomy",
    handsOnColor: "bg-sky text-brand",
    emergency: "Airway Emergency Cover",
    cutoff: "Tier 2 (Rank 3,500 – 8,000)",
    cutoffColor: "text-[#c47f00] font-bold",
  },
  {
    icon: "🧠",
    name: "MCh Neurosurgery",
    sub: "Neuro-ICU, Spine, Tumor & Vascular",
    footfall: "150 – 350 Patients",
    occupancy: "90% – 98% Critical",
    handson: "Craniotomy & Spinal Decompression",
    handsOnColor: "bg-sky text-brand",
    emergency: "24/7 Neuro-Emergency Cover",
    cutoff: "Tier 1 (Rank 1 – 800)",
    cutoffColor: "text-accent font-bold",
  },
  {
    icon: "🫀",
    name: "MCh Cardiothoracic Surgery",
    sub: "CABG, Valve Repair, LVAD, Heart Transplant",
    footfall: "100 – 250 Patients",
    occupancy: "88% – 96% Critical",
    handson: "On-Pump & Off-Pump Cardiac Ops",
    handsOnColor: "bg-sky text-brand",
    emergency: "Cardiac Arrest & IABP Cover",
    cutoff: "Tier 1 (Rank 1 – 600)",
    cutoffColor: "text-accent font-bold",
  },
  {
    icon: "🔬",
    name: "MD Pathology",
    sub: "Histopathology, Cytology, Molecular Diagnostics",
    footfall: "500 – 1,000 Samples / Day",
    occupancy: "Lab-Based / No Ward Beds",
    handson: "Frozen Sections, FNAC, Flow Cytometry",
    handsOnColor: "bg-sky text-brand",
    emergency: "On-Call Frozen Section Duty",
    cutoff: "Tier 3 (Rank 8,000 – 20,000)",
    cutoffColor: "text-muted font-semibold",
  },
];

const COLS = [
  "SPECIALIZATION / DEPARTMENT",
  "DAILY FOOTFALL (MIN OPD)",
  "BED OCCUPANCY INDEX",
  "RESIDENT HANDS-ON SCOPE",
  "EMERGENCY / ON-CALL LOAD",
  "ACADEMIC CUTOFF TIER",
];

export function NeetPgSpecialtyMatrix() {
  const [tab, setTab] = useState<Tab>("clinical");
  const rows = tab === "clinical" ? CLINICAL_ROWS : SURGICAL_ROWS;

  return (
    <section
      id="specialty-matrix"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-brand">
                Residency Decision Framework
              </p>
              <h2 className="mt-2.5 text-[26px] font-extrabold leading-[1.18] tracking-[-0.025em] text-ink sm:text-[32px] lg:text-[36px]">
                Clinical Specialty Trade-Off &amp; Hospital
                <br className="hidden sm:inline" /> Footfall Matrix
              </h2>
              <p className="mt-3 max-w-[560px] text-[14.5px] leading-[1.65] text-muted sm:text-[15px]">
                Postgraduate training value is dictated by bedside IPD cases, diagnostic
                modality access, and actual surgical knife time. Our clinical audit
                benchmarks key parameters across leading tertiary programs.
              </p>
            </div>

            {/* Tab toggle */}
            <div className="flex shrink-0 overflow-hidden rounded-lg border border-line bg-[#f7f9fc] p-1">
              <button
                onClick={() => setTab("clinical")}
                className={`rounded-md px-5 py-2 text-[13.5px] font-semibold transition-all ${
                  tab === "clinical"
                    ? "bg-ink text-white shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                Clinical Core
              </button>
              <button
                onClick={() => setTab("surgical")}
                className={`rounded-md px-5 py-2 text-[13.5px] font-semibold transition-all ${
                  tab === "surgical"
                    ? "bg-ink text-white shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                Surgical &amp; Interventional
              </button>
            </div>
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay="150">
          <div className="mt-8 overflow-x-auto rounded-[16px] border border-line shadow-[0_2px_16px_rgba(16,24,45,0.05)]">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-[#f7f9fc]">
                  {COLS.map((col) => (
                    <th
                      key={col}
                      className="px-5 py-3.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-muted"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-b border-line transition-colors hover:bg-sky/40 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#fafbfd]"
                    }`}
                  >
                    {/* Specialization */}
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-[18px] leading-none">{row.icon}</span>
                        <div>
                          <p className="text-[14px] font-bold text-ink">{row.name}</p>
                          <p className="mt-0.5 text-[12px] text-muted">{row.sub}</p>
                        </div>
                      </div>
                    </td>
                    {/* Footfall */}
                    <td className="px-5 py-4 text-[13.5px] text-ink">
                      {row.footfall}
                    </td>
                    {/* Occupancy */}
                    <td className="px-5 py-4 text-[13.5px] text-ink">
                      {row.occupancy}
                    </td>
                    {/* Hands-on */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-md px-2.5 py-1 text-[12.5px] font-semibold ${row.handsOnColor}`}
                      >
                        {row.handson}
                      </span>
                    </td>
                    {/* Emergency */}
                    <td className="px-5 py-4 text-[13.5px] text-ink">
                      {row.emergency}
                    </td>
                    {/* Cutoff */}
                    <td className={`px-5 py-4 text-[13.5px] ${row.cutoffColor}`}>
                      {row.cutoff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer note */}
            <div className="border-t border-line bg-[#f7f9fc] px-5 py-3.5">
              <p className="flex items-start gap-2 text-[11.5px] text-muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                </svg>
                Audit figures calculated from National Medical Commission (NMC) mandatory annual returns and resident logbook verifications (2023-2025).{" "}
                <strong>DNB Hospital equivalency evaluated separately on bed count (≥500 beds mandatory).</strong>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
