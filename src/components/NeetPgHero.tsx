"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquareIcon, TableIcon } from "./icons";

const STATS = [
  {
    value: "50%",
    label: "AIQ CENTRAL MCC POOL",
    sub: "Govt, Central & Deemed",
  },
  {
    value: "680+",
    label: "TEACHING HOSPITALS AUDITED",
    sub: "Hands-on Surgical Index",
  },
  {
    value: "28 States",
    label: "RURAL BOND POLICIES",
    sub: "Penalty Clause Analytics",
  },
  {
    value: "100%",
    label: "NBE & NMC REGULATORY MATCH",
    sub: "DNB vs MD Equivalence",
  },
];

export function NeetPgHero() {
  return (
    <div className="w-full bg-white">
      {/* ── Breadcrumb bar ── */}
      <div className="border-b border-line bg-[#f7f9fc]">
        <div className="mx-auto flex max-w-[1424px] items-center justify-between px-4 py-2.5 sm:px-8">
              <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12.5px] text-muted">
                <Link href="/" className="transition-colors hover:text-brand shrink-0">
                  Portal
                </Link>
                <span className="text-line shrink-0">/</span>
                <a href="/neet-pg" className="transition-colors hover:text-brand truncate max-w-[140px] sm:max-w-none">
                  Postgraduate Admissions Desk
                </a>
                <span className="text-line shrink-0">/</span>
                <span className="font-semibold text-ink truncate max-w-[120px] sm:max-w-none">
                  NEET PG &amp; MDS Academic Council
                </span>
              </div>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="flex items-center gap-1.5 text-[12px] font-medium text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              MCC 2025-26 Information Bulletin Synced
            </span>
            <span className="text-line">|</span>
            <span className="text-[12px] text-muted">
              ISO 9001:2015 Verified Advisory
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero content ── */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: text */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-sky px-3 py-1.5 text-[12px] font-semibold text-brand">
                <span className="h-3.5 w-3.5">
                  {/* small stethoscope dot */}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
                    <circle cx="10" cy="11" r="2" />
                    <path d="M3 2.5a1 1 0 1 0 .01 0M5.5 2.5a1 1 0 1 0 .01 0M3.5 3.5V7a4 4 0 0 0 4 4h.5" />
                  </svg>
                </span>
                Clinical Residency Advisory Cell • MCC &amp; State Quota Directives
              </p>

              <h1 className="mt-5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[40px] lg:text-[46px]">
                NEET PG &amp; MDS Postgraduate
                <br className="hidden sm:inline" /> Counselling 2025–26
              </h1>

              <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-muted sm:text-[16px]">
                Authoritative, evidence-backed strategy for MD, MS, DNB, Post-MBBS
                Diploma, and MDS specializations. From complex bond legalities to
                IPD/OPD footfall audits, we align merit rank with optimal clinical
                hands-on residency training.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="https://wa.me/919359544396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex h-[48px] w-fit items-center justify-center gap-2 rounded-lg bg-ink px-6 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <MessageSquareIcon className="h-4 w-4" />
                  Connect on WhatsApp
                </a>
                <a
                  href="#specialty-matrix"
                  className="btn-press inline-flex h-[48px] w-fit items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 text-[14.5px] font-semibold text-ink shadow-[0_1px_3px_rgba(16,24,45,0.06)] transition-colors hover:bg-sky"
                >
                  <TableIcon className="h-4 w-4" />
                  Explore Specialty Matrix
                </a>
              </div>
            </div>

            {/* Right: image card */}
            <div className="relative h-[260px] w-full overflow-hidden rounded-[22px] shadow-[0_16px_48px_rgba(16,24,45,0.13)] sm:h-[400px] lg:h-[480px]">
              <Image
                src="/ug-merit-scholars.jpg"
                alt="Medical postgraduates celebrating at AIIMS campus"
                fill
                sizes="(min-width: 1024px) 680px, 100vw"
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <p className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-white/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  All India Institute of Medical Sciences &amp; Central Teaching Hospitals
                </p>
                <h3 className="mt-2 text-[22px] font-bold leading-snug text-white sm:text-[25px]">
                  1,840+ Postgraduates Mentored into
                  <br className="hidden sm:inline" /> Core Clinical Branches
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/80">
                  Zero security deposit forfeiture track record across 4 counselling rounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="border-t border-line bg-[#f7f9fc]">
        <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-4 py-5 sm:px-8 sm:py-7">
                <p className="text-[26px] font-extrabold tracking-[-0.03em] text-ink sm:text-[36px]">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.07em] text-muted sm:text-[10.5px]">
                  {stat.label}
                </p>
                <a
                  href="#specialty-matrix"
                  className="mt-1 block text-[12.5px] font-semibold text-brand hover:underline"
                >
                  {stat.sub}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
