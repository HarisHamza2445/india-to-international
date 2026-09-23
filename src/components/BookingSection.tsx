"use client";

import { useState } from "react";
import { addLead } from "@/lib/dataStore";
import { Reveal } from "./Reveal";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from "./icons";

type AdmissionDomain = "pg" | "ug" | "mds";
type ConsultationMode = "in-person" | "video";

export function BookingSection() {
  const [domain, setDomain] = useState<AdmissionDomain>("pg");
  const [mode, setMode] = useState<ConsultationMode>("in-person");
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  const [form, setForm] = useState({
    candidateName: "",
    parentName: "",
    mobile: "",
    whatsapp: "",
    airRank: "",
    targetStateBranch: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const domainLabel =
    domain === "pg" ? "NEET PG" : domain === "ug" ? "NEET UG" : "NEET MDS";
  const modeLabel =
    mode === "in-person"
      ? "In-Person (Swargate Desk)"
      : "Live Video / Phone";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newLead = await addLead({
      candidateName: form.candidateName,
      parentName: form.parentName || undefined,
      mobile: form.mobile,
      whatsapp: form.whatsapp,
      airRank: form.airRank,
      targetStateBranch: form.targetStateBranch || "General Clinical Seats",
      domain: domainLabel,
      mode: modeLabel,
    });
    setSubmittedLeadId(newLead.id);
  };

  const waMessage = encodeURIComponent(
    `Hello Navin Sir, I have booked a priority counselling session for ${form.candidateName || "Candidate"} (AIR: ${form.airRank || "N/A"}, Domain: ${domainLabel}). Booking Ref: ${submittedLeadId || "NEW"}. Looking forward to discussing admission seat options.`
  );

  return (
    <section
      id="contact"
      className="w-full border-t border-line bg-[#f8fafc] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* ── Section Header ── */}
        <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-md bg-[#eaf2ff] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0062ff]">
            <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
            <span>PRIORITY DESK RESERVATION</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
            Book Your Personalized Counselling Session
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Lock in a 1-on-1 merit, budget, and choice-filling strategy session with Principal Medical Counsellor Navin Harjwani. Protect your admission journey from critical round forfeiture mistakes.
          </p>

          {/* Trust Guarantees */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
              <span>100% Confidential & Portal Compliant</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon className="h-4 w-4 text-[#0062ff]" />
              <span>Zero Donation Verification</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-slate-800" />
              <span>Direct Principal Counsellor Evaluation</span>
            </div>
          </div>
        </div>
        </Reveal>

        {/* ── Main Two-Column Layout ── */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* ── Left Column: 3-Step Interactive Booking Form (8 cols) ── */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-8 lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* STEP 1: Select Admission Domain */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0062ff] text-xs font-bold text-white">
                      1
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      Select Admission Domain
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    STEP 1 OF 3
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Option 1: NEET PG */}
                  <button
                    type="button"
                    onClick={() => setDomain("pg")}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      domain === "pg"
                        ? "border-2 border-[#0062ff] bg-blue-50/30 shadow-2xs"
                        : "border border-slate-200 bg-slate-50/50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 sm:text-[13px]">
                        NEET PG (MD/MS)
                      </span>
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          domain === "pg"
                            ? "border-[#0062ff] bg-[#0062ff] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {domain === "pg" && (
                          <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 12 12">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                      DNB, MD, MS, CPS clinical specialty counselling
                    </p>
                  </button>

                  {/* Option 2: NEET UG */}
                  <button
                    type="button"
                    onClick={() => setDomain("ug")}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      domain === "ug"
                        ? "border-2 border-[#0062ff] bg-blue-50/30 shadow-2xs"
                        : "border border-slate-200 bg-slate-50/50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 sm:text-[13px]">
                        NEET UG (MBBS/BDS)
                      </span>
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          domain === "ug"
                            ? "border-[#0062ff] bg-[#0062ff] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {domain === "ug" && (
                          <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 12 12">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                      15% AIQ, 85% State Quota, Deemed Medical Seats
                    </p>
                  </button>

                  {/* Option 3: NEET MDS */}
                  <button
                    type="button"
                    onClick={() => setDomain("mds")}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      domain === "mds"
                        ? "border-2 border-[#0062ff] bg-blue-50/30 shadow-2xs"
                        : "border border-slate-200 bg-slate-50/50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 sm:text-[13px]">
                        NEET MDS (Dental)
                      </span>
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          domain === "mds"
                            ? "border-[#0062ff] bg-[#0062ff] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {domain === "mds" && (
                          <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 12 12">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                      Master of Dental Surgery institutional allotment
                    </p>
                  </button>
                </div>
              </div>

              {/* STEP 2: Choose Consultation Mode & Timing */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0062ff] text-xs font-bold text-white">
                      2
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      Choose Consultation Mode & Timing
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    STEP 2 OF 3
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Mode 1: In-Person */}
                  <button
                    type="button"
                    onClick={() => setMode("in-person")}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      mode === "in-person"
                        ? "border-2 border-[#0062ff] bg-blue-50/30 shadow-2xs"
                        : "border border-slate-200 bg-slate-50/50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                          mode === "in-person"
                            ? "border-[#0062ff] bg-[#0062ff]"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {mode === "in-person" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <span className="text-xs font-bold text-slate-900 sm:text-[13px]">
                        In-Person at Pune Head Desk
                      </span>
                    </div>
                    <p className="mt-2 pl-7 text-[11px] leading-relaxed text-slate-500">
                      Sadashiv Peth, Swargate, Pune office with document scrutiny and live projector seat matrices.
                    </p>
                  </button>

                  {/* Mode 2: Live Video */}
                  <button
                    type="button"
                    onClick={() => setMode("video")}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      mode === "video"
                        ? "border-2 border-[#0062ff] bg-blue-50/30 shadow-2xs"
                        : "border border-slate-200 bg-slate-50/50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                          mode === "video"
                            ? "border-[#0062ff] bg-[#0062ff]"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {mode === "video" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <span className="text-xs font-bold text-slate-900 sm:text-[13px]">
                        Live Video / Phone Consultation
                      </span>
                    </div>
                    <p className="mt-2 pl-7 text-[11px] leading-relaxed text-slate-500">
                      For outstation candidates across Maharashtra, Karnataka, Gujarat, Delhi NCR and NRI sponsors.
                    </p>
                  </button>
                </div>
              </div>

              {/* STEP 3: Candidate & Score Intelligence */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0062ff] text-xs font-bold text-white">
                      3
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      Candidate & Score Intelligence
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    STEP 3 OF 3
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      CANDIDATE / DOCTOR NAME *
                    </label>
                    <input
                      type="text"
                      name="candidateName"
                      required
                      value={form.candidateName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Vedika Kulkarni"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0062ff] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      PARENT / GUARDIAN NAME
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Sudhir Kulkarni"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0062ff] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      MOBILE / CALLING NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="+91 93595 XXXXX"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0062ff] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      WHATSAPP MOBILE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="For Choice PDF & Schedule"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0062ff] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      NEET AIR / ROLL NUMBER *
                    </label>
                    <input
                      type="text"
                      name="airRank"
                      required
                      value={form.airRank}
                      onChange={handleChange}
                      placeholder="e.g. AIR 14,250 or Roll No."
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0062ff] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      TARGET STATE / CLINICAL BRANCH
                    </label>
                    <input
                      type="text"
                      name="targetStateBranch"
                      value={form.targetStateBranch}
                      onChange={handleChange}
                      placeholder="e.g. Maharashtra, General Medicine"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0062ff] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Form Submission Footer */}
              <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircleIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Zero upfront commitment. Includes sample diagnostic preview.</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0062ff] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0051d4] sm:w-auto"
                >
                  <span>Confirm & Book Priority Consultation Slot</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>

              {submittedLeadId && (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50/90 p-5 shadow-xs">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-800">
                        <CheckCircleIcon className="h-5 w-5 shrink-0 text-emerald-600" />
                        <h4 className="text-sm font-bold">
                          Priority Reservation Confirmed! (Ref: {submittedLeadId})
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs text-emerald-700">
                        We have logged your request in Navin Harjwani&apos;s Swargate Advisory Queue. A principal counsellor is reviewing your merit rank ({form.airRank || "AIR"}).
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-emerald-200 pt-3">
                    <a
                      href={`https://wa.me/919359544396?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#00a859] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#00924d]"
                    >
                      <WhatsAppIcon className="h-4 w-4 fill-current" />
                      <span>Connect with Navin Sir on WhatsApp Directly</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedLeadId(null);
                        setForm({
                          candidateName: "",
                          parentName: "",
                          mobile: "",
                          whatsapp: "",
                          airRank: "",
                          targetStateBranch: "",
                        });
                      }}
                      className="rounded-lg border border-emerald-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* ── Right Column: Information & Hotlines (4 cols) ── */}
          <div className="space-y-6 lg:col-span-4">
            {/* Card 1: Pune Headquarters */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062ff]">
                CENTRAL COUNSELLING DESK
              </span>

              <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                Pune Headquarters
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Conveniently situated in Swargate, Pune with active parent consultation desks.
              </p>

              <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0062ff]" />
                  <div>
                    <span className="font-bold text-slate-900">Office Address:</span>
                    <p className="mt-0.5 leading-relaxed text-slate-600">
                      Sadashiv Peth, Swargate, Pune, Maharashtra 411030
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0062ff]" />
                  <div>
                    <span className="font-bold text-slate-900">Consultation Hours:</span>
                    <p className="mt-0.5 text-slate-600">
                      Monday – Saturday: 09:30 AM – 07:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0062ff]" />
                  <div>
                    <span className="font-bold text-slate-900">Official Email:</span>
                    <a
                      href="mailto:info@indiatointernational.com"
                      className="mt-0.5 block text-slate-600 hover:text-[#0062ff]"
                    >
                      info@indiatointernational.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Direct Counsellor Hotlines (Dark Card) */}
            <div className="rounded-2xl bg-[#0d1b2a] p-6 text-white shadow-sm">
              <h3 className="text-base font-bold text-white sm:text-lg">
                Direct Counsellor Hotlines
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Need immediate clarification on choice-filling deadline or Stray Vacancy?
              </p>

              {/* WhatsApp Action Button */}
              <div className="mt-5">
                <a
                  href="https://wa.me/919359544396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-[#00a859] px-4 py-3 text-xs font-bold text-white shadow-2xs transition hover:bg-[#00924d] sm:text-sm"
                >
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="h-5 w-5 fill-current" />
                    <span>WhatsApp Navin Sir Directly</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>

              {/* Hotline Phone 1 */}
              <div className="mt-4 space-y-2.5">
                <a
                  href="tel:+919359544396"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="h-4 w-4 text-slate-400" />
                    <span>Call: +91-93595 44396</span>
                  </div>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    Desk 1
                  </span>
                </a>

                {/* Hotline Phone 2 */}
                <a
                  href="tel:+919711857351"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="h-4 w-4 text-slate-400" />
                    <span>Call: +91-97118 57351</span>
                  </div>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    Desk 2
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
