"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CloseIcon, ShieldCheckIcon } from "./icons";

type Category = "all" | "felicitations" | "seminars" | "counselling" | "campus";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  tag: string;
  title: string;
  /** span 2 rows for visual variety in the masonry-style grid */
  tall?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [

  {
    id: 2,
    src: "/i6.png",
    alt: "Counsellor handing certificate to student at advisory desk",
    category: "counselling",
    tag: "Counselling Session",
    title: "Principal Advisor Dr. Priya Sharma – 1-on-1 Merit Certificate Handover",
  },
  {
    id: 3,
    src: "/i7.png",
    alt: "MBBS graduate at Tamil Nadu MGR Medical University 34th Convocation",
    category: "felicitations",
    tag: "Convocation",
    title: "Tamil Nadu Dr. M.G.R. Medical University – 34th Convocation Ceremony",
  },
  {
    id: 4,
    src: "/i8.png",
    alt: "Group of medical residents celebrating outside teaching hospital",
    category: "campus",
    tag: "Campus Audit",
    title: "Resident Doctors & Interns – Teaching Hospital Campus Walk",
  },
  {
    id: 5,
    src: "/i9.png",
    alt: "Large auditorium NEET counselling seminar",
    category: "seminars",
    tag: "Live Seminar",
    title: "NEET Counselling Study – College Seat Matrix Seminar",
    tall: true,
  },
  {
    id: 6,
    src: "/i10.png",
    alt: "Medical entrance counselling workshop with parents and students",
    category: "seminars",
    tag: "Parent Workshop",
    title: "Medical Intrance Counselling Workshop – Navigating NRAS/NEET",
  },
  {
    id: 7,
    src: "/i11.png",
    alt: "Students taking notes in intensive counselling session",
    category: "counselling",
    tag: "Counselling Session",
    title: "Intensive Choice-Filling Strategy Session – AIQ & State Quota",
    tall: true,
  },
  {
    id: 8,
    src: "/i12.png",
    alt: "National Medical Scholarship Awards – students receiving awards",
    category: "felicitations",
    tag: "Awards Ceremony",
    title: "National Medical Scholarship Awards – Merit Felicitation Ceremony",
  },
  {
    id: 9,
    src: "/i2.png",
    alt: "1-on-1 family consultation session with senior advisor",
    category: "counselling",
    tag: "Advisory Desk",
    title: "Senior Academic Advisor – Student-Parent 1-on-1 Strategy Review",
  },
  {
    id: 10,
    src: "/ug-campus-walk.jpg",
    alt: "Medical students walking on modern hospital campus",
    category: "campus",
    tag: "Campus Audit",
    title: "Clinical Infrastructure Campus Audit – Teaching Hospital Walkthrough",
  },
  {
    id: 11,
    src: "/i3.png",
    alt: "Dental surgery resident in clinical dental setup",
    category: "campus",
    tag: "Clinical Audit",
    title: "MDS Clinical Chair Infrastructure Audit – DCI Accredited Setup",
  },
  {
    id: 12,
    src: "/hero-consultation.jpg",
    alt: "Advisor analytics dashboard during merit rank session",
    category: "counselling",
    tag: "Rank Analytics",
    title: "NEET Rank Predictor & Merit Admission Analytics Dashboard Session",
  },
];

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All Photos (11)" },
  { id: "felicitations", label: "Student Felicitations" },
  { id: "seminars", label: "Live Seminars & Parent Workshops" },
  { id: "counselling", label: "Counselling Sessions & Awards" },
  { id: "campus", label: "Campus & Clinical Audits" },
];

export function MomentsOfExcellence() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const filteredItems =
    activeTab === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const lightboxIndex =
    lightboxId === null ? -1 : filteredItems.findIndex((i) => i.id === lightboxId);
  const lightboxItem = lightboxIndex >= 0 ? filteredItems[lightboxIndex] : null;

  const goPrev = useCallback(() => {
    if (lightboxIndex < 0 || filteredItems.length === 0) return;
    setLightboxId(filteredItems[(lightboxIndex - 1 + filteredItems.length) % filteredItems.length].id);
  }, [lightboxIndex, filteredItems]);

  const goNext = useCallback(() => {
    if (lightboxIndex < 0 || filteredItems.length === 0) return;
    setLightboxId(filteredItems[(lightboxIndex + 1) % filteredItems.length].id);
  }, [lightboxIndex, filteredItems]);

  useEffect(() => {
    if (lightboxId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxId(null);
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxId, goPrev, goNext]);

  return (
    <>
      {/* ── Lightbox ── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.alt}
          onClick={() => setLightboxId(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxId(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
          <figure
            className="relative max-h-[88vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-white">
              <div>
                <span className="inline-block rounded-full bg-brand/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                  {lightboxItem.tag}
                </span>
                <p className="mt-1.5 text-sm font-medium text-slate-200">{lightboxItem.title}</p>
              </div>
              <span className="text-xs text-slate-400">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}

      {/* ── Gallery Page ── */}
      <div className="w-full bg-white">

        {/* ── Hero Header ── */}
        <section className="border-b border-line bg-white py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[680px]">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-md border border-line bg-sky px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand">
                  <ShieldCheckIcon className="h-3.5 w-3.5 shrink-0" />
                  Verified Clinical &amp; Admission Archive • 2005 – 2025
                </div>

                <h1 className="mt-4 text-[28px] font-extrabold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[36px] lg:text-[42px]">
                  Visual Archive: 19+ Years of Clinical Guidance
                  <br className="hidden sm:inline" /> &amp; Milestone Allotments
                </h1>

                <p className="mt-3.5 max-w-[580px] text-[15px] leading-[1.7] text-muted sm:text-[15.5px]">
                  Authentic documentation of live MCC choice-filling conventions,
                  convocation honors, merit felicitations, and student-parent
                  advisory conclaves across Pune, Maharashtra, and pan-India
                  academic medical centers.
                </p>
              </div>

              {/* Documented records card */}
              <div className="flex shrink-0 items-center gap-4 rounded-[14px] border border-line bg-[#f7f9fc] px-6 py-5">
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-muted">
                    Documented Records
                  </p>
                  <p className="mt-0.5 text-[28px] font-extrabold tracking-[-0.03em] text-ink sm:text-[32px]">
                    14,200+ Doctors
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-brand" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── Filter Tabs ── */}
            <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-2.5 sm:overflow-visible sm:px-0">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-all ${
                      isActive
                        ? "bg-ink text-white shadow-sm"
                        : "border border-line bg-white text-muted hover:border-[#c0cad8] hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Photo Grid ── */}
        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`View: ${item.alt}`}
                  onClick={() => setLightboxId(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxId(item.id);
                    }
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-[16px] bg-slate-100 shadow-[0_2px_8px_rgba(16,24,45,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(16,24,45,0.14)] ${
                    item.tall ? "sm:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      item.tall ? "aspect-[3/4] sm:h-full sm:min-h-[480px]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-brand/90 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <p className="mt-1.5 line-clamp-2 text-[13px] font-semibold leading-snug text-white/90">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Archival Verification Banner ── */}
        <section className="bg-[#f7f9fc] py-10 sm:py-12">
          <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
            <div className="flex flex-col gap-6 rounded-[18px] border border-line bg-white p-7 shadow-[0_2px_16px_rgba(16,24,45,0.05)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky">
                  <ShieldCheckIcon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-[16px] font-extrabold text-ink sm:text-[17px]">
                    Institutional Archival Verification
                  </h3>
                  <p className="mt-1.5 max-w-[540px] text-[13.5px] leading-[1.65] text-muted">
                    Every photograph published in this archive documents real students,
                    verifiable university allotment ceremonies, on-ground medical workshops,
                    and physical hospital audits conducted by the academic council of India
                    To International between 2005 and 2025 across Pune, Mumbai, Bangalore,
                    and New Delhi.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="btn-press inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-ink px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Attend Next Seminar
                </a>
                <a
                  href="/predictors"
                  className="btn-press inline-flex h-[48px] items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 text-[14px] font-semibold text-ink transition-colors hover:bg-sky"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                    <path d="M14.5 4.5c.5.5.5 1.5 0 2L7 14l-3 3 1-4 7.5-7.5c.5-.5 1.5-.5 2 0z" />
                    <path d="M8 14l-1.5 1.5" />
                  </svg>
                  Check NEET Rank Predictor
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
