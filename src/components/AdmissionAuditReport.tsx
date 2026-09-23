"use client";

import { generateAndDownloadDossierPDF } from "@/lib/pdfGenerator";
import { Reveal } from "./Reveal";
import {
  ArrowDownToLineIcon,
  CheckCircleIcon,
  DossierIcon,
  FileTextIcon,
  LandmarkIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
} from "./icons";


interface CollegeItem {
  name: string;
  quota: string;
  cutoff: string;
  status: "HIGH" | "MODERATE" | "BORDERLINE";
  scoreText: string;
}

const COLLEGES: CollegeItem[] = [
  {
    name: "B.J. Govt Medical College, Pune",
    quota: "85% State Merit",
    cutoff: "~13,100",
    status: "HIGH",
    scoreText: "HIGH (94%)",
  },
  {
    name: "Grant Govt Medical College, Mumbai",
    quota: "50% AIQ Central",
    cutoff: "~11,800",
    status: "MODERATE",
    scoreText: "MODERATE",
  },
  {
    name: "Kasturba Medical College, Manipal",
    quota: "Deemed Management",
    cutoff: "~14,800",
    status: "HIGH",
    scoreText: "HIGH (98%)",
  },
  {
    name: "KEM Hospital & Seth GS Medical College",
    quota: "50% AIQ",
    cutoff: "~9,200",
    status: "BORDERLINE",
    scoreText: "BORDERLINE",
  },
];

interface BranchItem {
  branch: string;
  analyzedSeats: number;
  status: string;
  statusColor: string;
  quotaType: string;
}

const BRANCHES: BranchItem[] = [
  {
    branch: "General Medicine",
    analyzedSeats: 42,
    status: "Confirmed R2",
    statusColor: "text-emerald-600",
    quotaType: "State Quota",
  },
  {
    branch: "Radio-Diagnosis",
    analyzedSeats: 18,
    status: "Target Deemed",
    statusColor: "text-amber-600",
    quotaType: "Institutional Seat",
  },
  {
    branch: "Paediatrics",
    analyzedSeats: 31,
    status: "Likely R1",
    statusColor: "text-emerald-600",
    quotaType: "Govt + DNB",
  },
  {
    branch: "Orthopaedics",
    analyzedSeats: 26,
    status: "High Probability",
    statusColor: "text-emerald-600",
    quotaType: "Govt Medical",
  },
];

export function AdmissionAuditReport() {
  return (
    <section
      id="admission-audit"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* ── Section Header ── */}
        <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[760px]">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-md bg-[#eaf2ff] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0062ff]">
              <FileTextIcon className="h-3.5 w-3.5 shrink-0" />
              <span>SAMPLE COUNSELLING & ADMISSION REPORT</span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
              Inside the Comprehensive Admission & Seat Matrix Audit
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Proprietary 14-point allotment diagnostic report (vedikasample.pdf) prepared individually for every registered candidate before round-by-round choice submission.
            </p>
          </div>

          {/* Header Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => generateAndDownloadDossierPDF()}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0062ff] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0051d4] hover:shadow-md cursor-pointer"
            >
              <ArrowDownToLineIcon className="h-4 w-4 shrink-0" />
              <span>Download Full Sample Report (PDF)</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
            >
              <FileTextIcon className="h-4 w-4 shrink-0 text-slate-600" />
              <span>Request Personalized Report</span>
            </a>
          </div>

        </div>
        </Reveal>

        {/* ── Audit Canvas Container ── */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 sm:p-6 lg:p-7 shadow-xs">
          {/* Top Dossier Card */}
          <div className="flex flex-col justify-between gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-xs lg:flex-row lg:items-center">
            {/* Left Dossier Info */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d1b2a] text-white shadow-sm">
                <DossierIcon className="h-6 w-6 text-white" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Candidate Admission Matrix Dossier
                  </h3>
                  <span className="rounded bg-[#eaf2ff] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0062ff]">
                    FILE: VEDIKASAMPLE.PDF
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                    NEET PG 2025–26 CYCLE
                  </span>
                </div>

                <p className="mt-1.5 text-xs text-slate-500">
                  Authorized Evaluation Desk • Prepared under supervision of Principal Counsellor Navin Harjwani
                </p>
              </div>
            </div>

            {/* Right Stats Summary Box */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg border border-slate-200/80 bg-slate-50/90 px-4 py-3 sm:flex-nowrap sm:gap-x-7 sm:px-6">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  ALL INDIA RANK
                </span>
                <span className="text-sm font-bold text-slate-900 sm:text-base">
                  AIR 12,450
                </span>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  NEET PERCENTILE
                </span>
                <span className="text-sm font-bold text-[#0062ff] sm:text-base">
                  98.42 %ile
                </span>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  DOMICILE / CATEGORY
                </span>
                <span className="text-sm font-bold text-slate-900 sm:text-base">
                  MH / General
                </span>
              </div>
            </div>
          </div>

          {/* Three Column Grid Below Dossier Card */}
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* ── Column 1: Eligible Medical Colleges & Probability (5 cols) ── */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs lg:col-span-5">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <LandmarkIcon className="h-4 w-4 text-[#0062ff]" />
                    <h4 className="text-sm font-bold text-slate-900">
                      Eligible Medical Colleges & Probability
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    ROUND 1 & 2
                  </span>
                </div>

                {/* College Cards */}
                <div className="mt-4 space-y-2.5">
                  {COLLEGES.map((col, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 p-3 transition hover:border-slate-200 hover:bg-slate-50"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900 sm:text-[13px]">
                          {col.name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          Quota: {col.quota} | Closing Rank: {col.cutoff}
                        </p>
                      </div>

                      <div className="shrink-0 pl-3">
                        <span
                          className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            col.status === "HIGH"
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                              : col.status === "MODERATE"
                              ? "border border-amber-200 bg-amber-50 text-amber-700"
                              : "border border-slate-200 bg-slate-100 text-slate-600"
                          }`}
                        >
                          {col.scoreText}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <span>Algorithm updated against 2024-25 MCC seat matrices</span>
                <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
              </div>
            </div>

            {/* ── Column 2: Branch-Wise Seat Matrix (4 cols) ── */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs lg:col-span-4">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <StethoscopeIcon className="h-4 w-4 text-[#0062ff]" />
                    <h4 className="text-sm font-bold text-slate-900">
                      Branch-Wise Seat Matrix
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    PREFERENCES
                  </span>
                </div>

                {/* Branch Rows */}
                <div className="mt-4 space-y-2.5">
                  {BRANCHES.map((br, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 p-3 transition hover:border-slate-200 hover:bg-slate-50"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900 sm:text-[13px]">
                          {br.branch}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          Total {br.analyzedSeats} Analyzed Seats
                        </p>
                      </div>

                      <div className="text-right shrink-0 pl-3">
                        <span className={`block text-xs font-bold ${br.statusColor}`}>
                          {br.status}
                        </span>
                        <span className="block text-[10px] text-slate-400">
                          {br.quotaType}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer link */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <a
                  href="#case-loads"
                  className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0062ff] hover:underline"
                >
                  <span>Audit includes hands-on surgical case loads</span>
                  <CheckCircleIcon className="h-3.5 w-3.5 text-[#0062ff]" />
                </a>
              </div>
            </div>

            {/* ── Column 3: Bond Liabilities & Rules (3 cols) ── */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs lg:col-span-3">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <ShieldCheckIcon className="h-4 w-4 text-[#0062ff]" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Bond Liabilities & Rules
                  </h4>
                </div>

                {/* Liability Cards */}
                <div className="mt-4 space-y-3">
                  {/* Card 1: Service Bond */}
                  <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        MH SERVICE BOND
                      </span>
                      <span className="text-xs font-bold text-rose-600">
                        ₹50 Lakhs
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                      1-year compulsory government service obligation. No seat exit post Round 2 without forfeiture.
                    </p>
                  </div>

                  {/* Card 2: DNB Stipend */}
                  <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        DNB STIPEND MATRIX
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        ₹65,000/mo
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                      NBE mandated regular stipend disbursement audited with hospital resident feedback.
                    </p>
                  </div>

                  {/* Card 3: Choice Strategy */}
                  <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        CHOICE STRATEGY
                      </span>
                      <span className="text-xs font-bold text-[#0062ff]">
                        Tiered Locking
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                      68 vetted options ordered to eliminate stray forfeiture risk completely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer CTA Button */}
              <div className="mt-4 pt-2">
                <a
                  href="#contact"
                  className="block w-full rounded-lg bg-[#0d1527] py-2.5 text-center text-xs font-semibold text-white shadow-xs transition hover:bg-slate-800"
                >
                  Unlock Your College Matrix
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
