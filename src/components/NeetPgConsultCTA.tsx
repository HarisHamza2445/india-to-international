"use client";

import { useRef } from "react";
import { addLead } from "@/lib/dataStore";
import { Reveal } from "./Reveal";
import { CheckCircleIcon, PhoneIcon, WhatsAppIcon } from "./icons";

function useSilentCapture(source: "NEET PG Page") {
  const fired = useRef(false);
  return () => {
    if (fired.current) return;
    fired.current = true;
    void addLead({
      candidateName: "WhatsApp / Call Enquiry",
      mobile: "–",
      whatsapp: "–",
      airRank: "–",
      targetStateBranch: "NEET PG Counselling",
      domain: "NEET PG",
      mode: "Live Video / Phone",
      source,
    });
  };
}

const ADVISOR_POINTS = [
  "Rank vs Hospital Patient Inflow Audit",
  "DNB vs MD Departmental Pass Rates",
  "State Rural Bond Legal Analysis",
  "MDS Micro-Endo & Surgery Labs Verification",
];

export function NeetPgConsultCTA() {
  const capture = useSilentCapture("NEET PG Page");

  const waMessage = encodeURIComponent(
    "Hello Navin Sir, I need guidance on NEET PG / MDS counselling. Please advise on MD/MS/DNB choice filling and merit rank strategy."
  );

  return (
    <section
      id="consult-pg"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: advisor info */}
          <Reveal variant="left">
            <div className="rounded-[20px] border border-line bg-[#f7f9fc] p-7 sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                1-on-1 Postgraduate Strategy Session
              </p>

              <h2 className="mt-5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.025em] text-ink sm:text-[30px] lg:text-[34px]">
                Consult with Principal Academic
                <br className="hidden sm:inline" /> Advisor Navin Harjwani
              </h2>

              <p className="mt-3.5 max-w-[500px] text-[14.5px] leading-[1.7] text-muted sm:text-[15px]">
                19+ years guiding doctors across India through high-stakes
                MD/MS choice filling, surgical logbook verification, and bond
                avoidance protocols. Each session yields an algorithmic seat
                matrix tailored to your exact merit rank and branch aspirations.
              </p>

              {/* Checklist */}
              <ul className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
                {ADVISOR_POINTS.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      aria-hidden="true"
                    >
                      <path d="m20 6-11 11-5-5" />
                    </svg>
                    <span className="text-[13.5px] font-medium text-ink/85">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Advisor badge */}
              <div className="mt-8 flex items-center justify-between rounded-[14px] border border-line bg-white px-5 py-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-[14px] font-extrabold text-brand">
                    NH
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-ink">
                      Navin Harjwani
                    </p>
                    <p className="text-[12px] text-muted">
                      Chief Medical Admissions Strategist
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircleIcon className="h-4 w-4 text-accent" />
                  <span className="text-[12px] font-semibold text-ink">
                    1,840+ PG MD/MS/MDS Doctors Placed
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: contact card */}
          <Reveal variant="right">
            <div className="flex h-full flex-col rounded-[20px] border border-line bg-white p-7 shadow-[0_4px_24px_rgba(16,24,45,0.07)] sm:p-8">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ef]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0aa66a"
                  strokeWidth={2}
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <h3 className="mt-5 text-[20px] font-extrabold text-ink">
                Direct WhatsApp Academic Desk
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-muted">
                Connect directly with Principal Academic Advisor Navin Harjwani
                and senior counsellors for instant MD/MS/DNB choice matrix
                assessment, merit rank audits, and fee/bond analyses.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={`https://wa.me/919359544396?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={capture}
                  className="btn-press inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#16a34a] text-[15px] font-semibold text-white transition-colors hover:bg-[#15803d]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp (+91-93595 44396)
                </a>

                <a
                  href="tel:+919359544396"
                  onClick={capture}
                  className="btn-press inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-xl border border-line bg-[#f7f9fc] text-[15px] font-semibold text-ink transition-colors hover:bg-sky"
                >
                  <PhoneIcon className="h-4.5 w-4.5" />
                  Direct Helpline: +91-93595 44396
                </a>
              </div>

              <p className="mt-5 text-center text-[12px] text-muted">
                Confidential clinical advisory under strict Indian Medical
                Council ethics code.
              </p>

              {/* Divider + trust markers */}
              <div className="mt-6 border-t border-line pt-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { val: "19+", label: "Years Experience" },
                    { val: "1,840+", label: "PG Placements" },
                    { val: "0", label: "Bond Forfeitures" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[20px] font-extrabold tracking-tight text-ink">
                        {item.val}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
