"use client";

import { useState } from "react";
import { addLead, type Lead } from "@/lib/dataStore";
import { Reveal } from "./Reveal";
import { CheckCircleIcon, WhatsAppIcon } from "./icons";

const PROGRAMS: { label: string; domain: Lead["domain"] }[] = [
  { label: "NEET UG (MBBS / BDS)", domain: "NEET UG" },
  { label: "NEET PG (MD / MS / DNB)", domain: "NEET PG" },
  { label: "NEET MDS", domain: "NEET MDS" },
];

const OBJECTIVES = [
  "Choice filling & round strategy",
  "College shortlist vs AIR",
  "Fee, bond and stipend audit",
  "Deemed / State / AIQ comparison",
  "In-person counselling at Swargate desk",
];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none";

export function BookingSection() {
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [form, setForm] = useState({
    candidateName: "",
    mobile: "",
    airRank: "",
    domain: "NEET PG" as Lead["domain"],
    objective: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newLead = await addLead({
      candidateName: form.candidateName,
      mobile: form.mobile,
      whatsapp: form.mobile,
      airRank: form.airRank || "Not shared",
      targetStateBranch: form.objective || "WhatsApp consultation",
      domain: form.domain,
      mode: "Live Video / Phone",
    });
    setSubmittedLeadId(newLead.id);

    const waMessage = encodeURIComponent(
      `Hello Navin Sir, I am ${form.candidateName}. Program: ${form.domain}. AIR/Score: ${form.airRank || "N/A"}. Objective: ${form.objective || "Counselling guidance"}. Please advise on WhatsApp.`
    );
    window.open(`https://wa.me/919359544396?text=${waMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="w-full bg-[#f4f7fb] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[880px] px-4 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Direct Medical Advisory
            </p>
            <h2 className="mt-3 text-[26px] font-extrabold tracking-[-0.04em] text-ink sm:text-[34px] sm:leading-[1.2]">
              Chat Directly with Senior
              <br className="hidden sm:block" /> Admission Advisory on WhatsApp
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              Connect immediately with Principal Counsellor Navin Harjwani &amp;
              academic council. We analyze your NEET score, eligibility, and choice
              strategy directly on WhatsApp with zero obligation.
            </p>
          </div>
        </Reveal>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-white bg-white p-5 shadow-[0_10px_30px_rgba(16,24,45,0.05)] sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-[13px] font-semibold text-ink">
                Candidate Name *
              </label>
              <input
                type="text"
                name="candidateName"
                required
                value={form.candidateName}
                onChange={handleChange}
                placeholder="e.g. Dr. Aryan Joshi / Aryan Joshi"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-[13px] font-semibold text-ink">
                Mobile Number (WhatsApp) *
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={form.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-[13px] font-semibold text-ink">
                Expected NEET Score / AIR (Optional)
              </label>
              <input
                type="text"
                name="airRank"
                value={form.airRank}
                onChange={handleChange}
                placeholder="e.g. 585 Marks or AIR 24,500"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-[13px] font-semibold text-ink">
                Target Program *
              </label>
              <select
                name="domain"
                required
                value={form.domain}
                onChange={handleChange}
                className={fieldClass}
              >
                {PROGRAMS.map((p) => (
                  <option key={p.domain} value={p.domain}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-[13px] font-semibold text-ink">
                Select Counseling Objective
              </label>
              <select
                name="objective"
                value={form.objective}
                onChange={handleChange}
                className={`${fieldClass} text-muted`}
              >
                <option value="">Select Counseling Objective</option>
                {OBJECTIVES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="flex items-center gap-2 text-[13px] text-muted">
              <CheckCircleIcon className="h-4 w-4 text-accent" />
              Direct instant response via verified WhatsApp counselling desk.
            </p>
            <button
              type="submit"
              className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-5 text-[15px] font-semibold text-white transition hover:bg-[#15803d] sm:w-auto"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Start WhatsApp Consultation
            </button>
          </div>

          {submittedLeadId && (
            <p className="mt-4 text-center text-[13px] font-medium text-accent">
              Request logged (Ref: {submittedLeadId}). WhatsApp is opening with your details.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
