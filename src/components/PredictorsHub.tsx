"use client";

import Image from "next/image";
import { useState } from "react";
import { calculateAdmissionProbability, type PredictorResult } from "@/lib/dataStore";
import { Reveal } from "./Reveal";
import {
  ArrowDownToLineIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  CpuIcon,
  EyeIcon,
  ZapIcon,
} from "./icons";

type Domain = "NEET PG" | "NEET UG" | "NEET MDS";

function ResultModal({
  results,
  rank,
  onClose,
}: {
  results: PredictorResult[];
  rank: string;
  onClose: () => void;
}) {
  const high = results.filter((r) => r.probability === "HIGH");
  const moderate = results.filter((r) => r.probability === "MODERATE");
  const borderline = results.filter((r) => r.probability === "BORDERLINE");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Admission Probability Results
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Based on NEET AIR: <strong>{rank}</strong> • 2025–26 Seat Matrices
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {high.length > 0 && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                High Probability ({high.length} Colleges)
              </h4>
              <div className="space-y-2">
                {high.map((r) => (
                  <div key={r.college.id} className="flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                    <div>
                      <p className="text-xs font-bold text-slate-900 sm:text-[13px]">{r.college.collegeName}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{r.college.quota} • Closing Rank ~{r.college.closingRank.toLocaleString()}</p>
                    </div>
                    <span className="ml-3 shrink-0 rounded-md border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                      {r.probabilityScore}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {moderate.length > 0 && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Moderate Probability ({moderate.length} Colleges)
              </h4>
              <div className="space-y-2">
                {moderate.map((r) => (
                  <div key={r.college.id} className="flex items-center justify-between rounded-lg border border-amber-100 bg-amber-50/60 px-4 py-3">
                    <div>
                      <p className="text-xs font-bold text-slate-900 sm:text-[13px]">{r.college.collegeName}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{r.college.quota} • Closing Rank ~{r.college.closingRank.toLocaleString()}</p>
                    </div>
                    <span className="ml-3 shrink-0 rounded-md border border-amber-200 bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700">
                      {r.probabilityScore}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {borderline.length > 0 && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                Borderline ({borderline.length} Colleges)
              </h4>
              <div className="space-y-2">
                {borderline.map((r) => (
                  <div key={r.college.id} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                    <div>
                      <p className="text-xs font-bold text-slate-900 sm:text-[13px]">{r.college.collegeName}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{r.college.quota} • Closing Rank ~{r.college.closingRank.toLocaleString()}</p>
                    </div>
                    <span className="ml-3 shrink-0 rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                      {r.probabilityScore}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-500">No matching colleges found for this rank range and domain.</p>
          )}

          <div className="border-t border-slate-100 pt-4">
            <a
              href="#contact"
              onClick={onClose}
              className="block w-full rounded-xl bg-[#0062ff] py-3 text-center text-sm font-bold text-white transition hover:bg-[#0051d4]"
            >
              Book Personal Counselling Session for Detailed Analysis →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PredictorsHub() {
  const [aiqRank, setAiqRank] = useState("");
  const [aiqDomain, setAiqDomain] = useState<Domain>("NEET PG");
  const [stateRank, setStateRank] = useState("");

  const [aiqResults, setAiqResults] = useState<PredictorResult[] | null>(null);
  const [stateResults, setStateResults] = useState<PredictorResult[] | null>(null);
  const [activeModal, setActiveModal] = useState<"aiq" | "state" | null>(null);

  const runAIQ = async () => {
    const rank = parseInt(aiqRank.replace(/,/g, ""), 10);
    if (isNaN(rank) || rank < 1) return;
    const results = await calculateAdmissionProbability(rank, aiqDomain);
    setAiqResults(results);
    setActiveModal("aiq");
  };

  const runState = async () => {
    const rank = parseInt(stateRank.replace(/,/g, ""), 10);
    if (isNaN(rank) || rank < 1) return;
    const results = await calculateAdmissionProbability(rank, "NEET PG");
    setStateResults(results);
    setActiveModal("state");
  };

  return (
    <>
      {activeModal === "aiq" && aiqResults && (
        <ResultModal results={aiqResults} rank={aiqRank} onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "state" && stateResults && (
        <ResultModal results={stateResults} rank={stateRank} onClose={() => setActiveModal(null)} />
      )}

      <section
        id="predictors"
        className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
      >
        <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
          {/* ── Section Header ── */}
          <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-[680px]">
              <div className="flex items-center gap-2 font-bold uppercase tracking-[0.06em] text-brand">
                <CpuIcon className="h-4 w-4 shrink-0" />
                <span className="text-[12px] sm:text-[13px]">
                  Data-Driven Admission Algorithms
                </span>
              </div>
              <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px]">
                NEET College Admission Predictors Hub
              </h2>
              <p className="mt-3 text-[15px] leading-[1.65] text-muted sm:text-[16px]">
                Calculate your admission probability across 50% All India Quota
                and 85% State Quota using proprietary closing-rank algorithms
                updated for the 2025–2026 academic cycle.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex h-[44px] shrink-0 items-center gap-2 self-start rounded-lg border border-[#DCE3EC] bg-white px-5 text-[14px] font-semibold text-ink shadow-[0_1px_2px_rgba(16,24,45,0.04)] transition-colors hover:bg-sky md:self-auto"
            >
              <EyeIcon className="h-[16px] w-[16px] text-brand" />
              <span>View Sample Report (vedikasample.pdf)</span>
              <ArrowDownToLineIcon className="h-[15px] w-[15px] text-muted" />
            </a>
          </div>
          </Reveal>

          {/* ── Full-Width Hero Image Card ── */}
          <Reveal delay="150" className="mt-8 lg:mt-10">
          <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] shadow-[0_12px_36px_rgba(16,24,45,0.13)] sm:h-[380px] lg:h-[420px]">
            <Image
              src="/i4.png"
              alt="Medical analytics dashboard on tablet with stethoscope — NEET admission rank prediction platform"
              fill
              sizes="(min-width: 1424px) 1424px, 100vw"
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-transparent" />

            {/* Overlay Text – bottom-left */}
            <div className="absolute inset-x-6 bottom-6 max-w-[560px] sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
              <span className="inline-block rounded-[4px] bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                Multi-Variable Prediction Engine
              </span>
              <h3 className="mt-3 text-[20px] font-bold leading-snug text-white sm:text-[24px]">
                Precision Rank &amp; Quota Cut-Off Matrices
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/85 sm:text-[14px]">
                Simulating candidate All India Rank (AIR), domicile category,
                clinical bed-to-patient ratio, and round-by-round seat vacancy
              vectors.
            </p>
          </div>
          </div>
          </Reveal>

          {/* ── Two Predictor Cards ── */}
          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-8 lg:gap-8">
            {/* Card 1 – MCC / AIQ */}
            <Reveal delay="200" className="h-full">
            <div className="hover-lift flex h-full flex-col rounded-[18px] border border-line bg-white p-6 shadow-[0_2px_10px_rgba(16,24,45,0.04)] sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full border border-brand/25 bg-sky px-3 py-1 text-[12px] font-bold text-brand">
                  Centralized • 50% AIQ
                </span>
                <span className="text-[13px] font-semibold text-muted">
                  MD / MS / DNB / MBBS
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-bold leading-snug text-ink sm:text-[22px]">
                MCC Counselling Admission Predictor
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted sm:text-[14px]">
                Evaluate your exact admission probability across Government Medical
                Colleges, Central Universities (AIIMS, JIPMER, AMU, BHU), and
                Deemed Universities.
              </p>

              <div className="mt-5 rounded-[12px] border border-line p-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-[0.06em] text-muted">
                      Enter NEET AIR Rank
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={aiqRank}
                      onChange={(e) => setAiqRank(e.target.value)}
                      placeholder="e.g. 14250"
                      className="mt-2 w-full rounded-[6px] border border-line bg-white px-3 py-2.5 text-[14px] text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 sm:text-[16px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-[0.06em] text-muted">
                      Target Course
                    </label>
                    <div className="relative mt-2">
                      <select
                        value={aiqDomain}
                        onChange={(e) => setAiqDomain(e.target.value as Domain)}
                        className="w-full appearance-none rounded-[6px] border border-line bg-white px-3 py-2.5 pr-8 text-[14px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 sm:text-[16px]"
                      >
                        <option value="NEET PG">NEET PG (MD / MS)</option>
                        <option value="NEET UG">NEET UG (MBBS)</option>
                        <option value="NEET MDS">NEET MDS (Dental)</option>
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[12.5px] text-muted">
                  <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent" />
                  Evaluates against Round 1 to Mop-Up closing ranks
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={runAIQ}
                  disabled={!aiqRank}
                  className="inline-flex h-[46px] w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 text-[14px] font-semibold text-white transition-colors hover:bg-brand-alt disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  <ZapIcon className="h-4 w-4" />
                  Run MCC Predictor
                </button>
                <a
                  href="#contact"
                  className="inline-flex h-[46px] w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#DCE3EC] bg-white px-5 text-[14px] font-semibold text-ink shadow-[0_1px_2px_rgba(16,24,45,0.04)] transition-colors hover:bg-sky sm:w-auto"
                >
                  Request Detailed Report
                </a>
              </div>
            </div>
            </Reveal>

            {/* Card 2 – State / 85% */}
            <Reveal delay="300" className="h-full">
            <div className="hover-lift flex h-full flex-col rounded-[18px] border border-line bg-white p-6 shadow-[0_2px_10px_rgba(16,24,45,0.04)] sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full border border-brand/25 bg-sky px-3 py-1 text-[12px] font-bold text-brand">
                  State Merit • 85% Quota
                </span>
                <span className="text-[13px] font-semibold text-muted">
                  Includes NRI &amp; Management
                </span>
              </div>

              <h3 className="mt-4 text-[20px] font-bold leading-snug text-ink sm:text-[22px]">
                State-wise College Admission Predictor
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted sm:text-[14px]">
                Simulate seat chances under State-level counselling (85% State
                Quota, Private Merit, Institutional, Management and NRI seats)
                across key states.
              </p>

              <div className="mt-5 rounded-[12px] border border-line p-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-[0.06em] text-muted">
                      Enter NEET AIR Rank
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={stateRank}
                      onChange={(e) => setStateRank(e.target.value)}
                      placeholder="e.g. 34200"
                      className="mt-2 w-full rounded-[6px] border border-line bg-white px-3 py-2.5 text-[14px] text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 sm:text-[16px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-[0.06em] text-muted">
                      Select Domicile State
                    </label>
                    <div className="relative mt-2">
                      <select className="w-full appearance-none rounded-[6px] border border-line bg-white px-3 py-2.5 pr-8 text-[14px] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15 sm:text-[16px]">
                        <option>Maharashtra (DMER / CET)</option>
                        <option>Karnataka (KEA)</option>
                        <option>UP (DGME)</option>
                        <option>Bihar (BCECE)</option>
                        <option>Delhi (DGHS)</option>
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[12.5px] text-muted">
                  <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent" />
                  Calculates domicile priority and category fee concessions
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={runState}
                  disabled={!stateRank}
                  className="inline-flex h-[46px] w-auto max-w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  <ZapIcon className="h-4 w-4" />
                  Run State Predictor
                </button>
                <a
                  href="#contact"
                  className="inline-flex h-[46px] w-auto max-w-full items-center justify-center gap-2 rounded-lg border border-[#DCE3EC] bg-white px-5 text-[14px] font-semibold text-ink shadow-[0_1px_2px_rgba(16,24,45,0.04)] transition-colors hover:bg-sky sm:w-auto"
                >
                  Request Detailed Report
                </a>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
