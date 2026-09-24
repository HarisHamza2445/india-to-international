import { Reveal } from "./Reveal";
import { AlertShieldIcon } from "./icons";

const BOND_ROWS = [
  {
    state: "Maharashtra (State GMCs)",
    duration: "1 Year Mandatory",
    penalty: "₹50,00,000 (₹50 Lakhs)",
    penaltyColor: "text-red-600 font-semibold",
    seatLeaving: "₹20 Lakhs + Stipend Refund",
  },
  {
    state: "Karnataka (KMC / KEA)",
    duration: "1 Year Mandatory",
    penalty: "₹50,00,000 (₹50 Lakhs)",
    penaltyColor: "text-red-600 font-semibold",
    seatLeaving: "Entire 3-Year Course Fee Refund",
  },
  {
    state: "Gujarat",
    duration: "1 Year (or 2 Yrs for DNB)",
    penalty: "₹40,00,000 (₹40 Lakhs)",
    penaltyColor: "text-red-600 font-semibold",
    seatLeaving: "₹5 Lakhs Bank Guarantee Loss",
  },
  {
    state: "Madhya Pradesh (MP DME)",
    duration: "1 Year (Govt Colleges)",
    penalty: "₹30,00,000 (₹30 Lakhs)",
    penaltyColor: "text-red-600 font-semibold",
    seatLeaving: "₹30 Lakhs + 3 Yrs Debarment",
  },
  {
    state: "Central Institutes (AIIMS/VMMC)",
    duration: "—",
    penalty: "No Compulsory Service Bond",
    penaltyColor: "text-accent font-semibold",
    seatLeaving: "₹3 Lakhs – ₹5 Lakhs (Internal)",
  },
];

const FORFEITURE_ROUNDS = [
  {
    round: "Round 1 (Free Exit):",
    desc: "You can decline an allotted seat without loss of security deposit.",
  },
  {
    round: "Round 2 (Exit with Forfeiture):",
    desc: "If allotted and not joined, deposit is forfeited. You must re-register for Round 3.",
  },
  {
    round: "Round 3 & Stray Vacancy (Lock-in):",
    desc: "Non-joining results in 1 to 2-year NBE/MCC debarment and complete fee forfeiture.",
  },
];

export function NeetPgBonds() {
  return (
    <section
      id="bonds"
      className="w-full border-t border-line bg-[#f7f9fc] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-[700px]">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-brand">
              Regulatory Risk Management
            </p>
            <h2 className="mt-2.5 text-[26px] font-extrabold leading-[1.18] tracking-[-0.025em] text-ink sm:text-[32px] lg:text-[36px]">
              Service Bonds, Resignation Clauses &amp;
              <br className="hidden sm:inline" /> Forfeiture Guardrails
            </h2>
            <p className="mt-3 max-w-[620px] text-[14.5px] leading-[1.65] text-muted sm:text-[15px]">
              Postgraduate seats in India carry stringent legal indemnity bonds.
              Misinterpreting resignation cutoff dates can lead to multi-lakh
              penalties or a multi-year debarment from NEET PG.
            </p>
          </div>
        </Reveal>

        {/* Two-column layout: table + forfeiture card */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* Bond matrix table */}
          <Reveal delay="100">
            <div className="overflow-hidden rounded-[16px] border border-line bg-white shadow-[0_2px_16px_rgba(16,24,45,0.05)]">
              {/* Table header label */}
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <h3 className="text-[15px] font-bold text-ink">
                  Compulsory Rural / State Service Bond Matrix (2025 Updates)
                </h3>
                <span className="hidden text-[12px] font-medium text-muted sm:block">
                  Official State Gazettes
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-line bg-[#f7f9fc]">
                      {["STATE / JURISDICTION", "SERVICE DURATION", "NON-COMPLIANCE PENALTY", "SEAT LEAVING PENALTY (MID-TERM)"].map((col) => (
                        <th
                          key={col}
                          className="px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-muted"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {BOND_ROWS.map((row, i) => (
                      <tr
                        key={row.state}
                        className={`border-b border-line last:border-0 transition-colors hover:bg-sky/40 ${
                          i % 2 === 0 ? "bg-white" : "bg-[#fafbfd]"
                        }`}
                      >
                        <td className="px-5 py-4 text-[13.5px] font-semibold text-ink">
                          {row.state}
                        </td>
                        <td className="px-5 py-4 text-[13.5px] text-ink">
                          {row.duration}
                        </td>
                        <td className={`px-5 py-4 text-[13.5px] ${row.penaltyColor}`}>
                          {row.penalty}
                        </td>
                        <td className="px-5 py-4 text-[13.5px] text-ink">
                          {row.seatLeaving}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* MCC Forfeiture card */}
          <Reveal variant="right" delay="150">
            <div className="flex h-full flex-col rounded-[16px] bg-navy p-6 shadow-[0_4px_24px_rgba(13,34,56,0.18)]">
              <div className="flex items-center gap-2.5">
                <AlertShieldIcon className="h-5 w-5 shrink-0 text-white/70" />
                <h3 className="text-[15px] font-bold text-white">
                  MCC Forfeiture Rules
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-[1.6] text-white/65">
                MCC&apos;s strict exit clauses penalize casual choice-filling.
                Understanding when security deposits are retained or surrendered
                is critical:
              </p>

              <div className="mt-5 flex-1 space-y-3">
                {FORFEITURE_ROUNDS.map((item) => (
                  <div
                    key={item.round}
                    className="rounded-[10px] bg-white/[0.08] p-4 ring-1 ring-white/10"
                  >
                    <p className="text-[13px] font-bold text-white">
                      {item.round}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-[1.55] text-white/65">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-[10px] bg-white/[0.06] p-3.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <p className="text-[12px] leading-relaxed text-white/65">
                  We prepare custom refusal maps to eliminate unvetted seat
                  traps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
