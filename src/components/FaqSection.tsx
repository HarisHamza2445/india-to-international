"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ChevronDownIcon } from "./icons";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "How do I secure an MBBS or MD/MS seat through the NRI Quota?",
    answer:
      "Securing an NRI Quota seat requires meticulous documentation, including valid Embassy sponsorship certificates, relationship affidavits verifying genuine familial ties (1st-degree or bona fide sponsor), sponsor's passport/visa copies, and bank statements. We manage the end-to-end scrutiny and conversion protocols across both MCC Deemed Universities and State CET Cell rounds to guarantee zero document rejection.",
  },
  {
    id: 2,
    question: "What is the best choice–filling strategy for NEET PG counselling?",
    answer:
      "The optimal choice-filling strategy relies on algorithmic tiered locking. Candidates must never order choices strictly by historical cutoff; instead, sequence them by hands-on surgical case volumes, resident bed-strength, stipend regularities, and service bond liabilities. This completely eliminates the catastrophic risk of security deposit forfeiture post Round 2.",
  },
  {
    id: 3,
    question: "Can you assist with Maharashtra State Quota and Open State counselling?",
    answer:
      "Yes, absolutely. We provide specialized, end-to-end guidance for the 85% Maharashtra State Quota through the State CET Cell portal, from online registration to physical document scrutiny at nodal centers. Concurrently, we strategize merit applications in high-yield Open States like Karnataka (KEA), Uttar Pradesh (UPDGME), and Bihar for maximum backup coverage.",
  },
  {
    id: 4,
    question: "What is the difference between DNB and MD/MS courses?",
    answer:
      "Under National Medical Commission (NMC) regulations, DNB and MD/MS qualifications are equivalent for clinical practice and teaching appointments. While MD/MS is hosted in university-affiliated medical colleges, DNB is conducted in premier super-specialty tertiary hospitals, often offering substantially higher hands-on case exposure, modern equipment, and NBE-mandated uniform monthly stipends.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* ── Section Header ── */}
        <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0062ff]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
            Everything You Need to Know
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Authoritative solutions to critical counselling and quota concerns.
          </p>
        </div>
        </Reveal>

        {/* ── Accordion List ── */}
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <Reveal
                key={item.id}
                delay={index === 0 ? undefined : index === 1 ? "100" : index === 2 ? "200" : "300"}
              >
              <div
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-[#fbfcfd] shadow-2xs transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-[#0062ff] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-white px-6 py-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
