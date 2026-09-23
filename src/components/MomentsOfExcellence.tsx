"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { CalendarIcon, CloseIcon, PhotoIcon } from "./icons";

type Category = "all" | "achievements" | "seminars" | "advisory";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  tag: string;
  title: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/i5.png",
    alt: "National Media Address on NEET Admissions",
    category: "achievements",
    tag: "National Media",
    title: "National Media Briefing on Medical Counselling & Admission Reforms",
  },
  {
    id: 2,
    src: "/i6.png",
    alt: "NEET PG Guidance Workshop",
    category: "seminars",
    tag: "Live Workshop",
    title: "NEET PG Guidance Workshop with Resident Doctors & Aspirants",
  },
  {
    id: 3,
    src: "/i7.png",
    alt: "CEO India Magazine Feature",
    category: "achievements",
    tag: "Media Feature",
    title: "CEO India Magazine — India's Most Trusted Name in Medical Admissions",
  },
  {
    id: 4,
    src: "/i8.png",
    alt: "Swargate Desk In-Person Consultation",
    category: "advisory",
    tag: "Advisory Desk",
    title: "1-on-1 Personalized Medical Seat Strategy & Merits Evaluation",
  },
  {
    id: 5,
    src: "/i9.png",
    alt: "19+ Years Experience Milestone",
    category: "achievements",
    tag: "Milestone",
    title: "19+ Years of Trusted Medical Guidance & 500+ Doctor Families Guided",
  },
  {
    id: 6,
    src: "/i10.png",
    alt: "Live Seminar and Seat Matrix Presentation",
    category: "seminars",
    tag: "Auditorium Session",
    title: "State & AIQ Institutional Seat Matrix Seminar & Cutoff Analytics",
  },
  {
    id: 7,
    src: "/i11.png",
    alt: "NEET UG Rank Predictor Presentation",
    category: "seminars",
    tag: "Digital Platform",
    title: "Proprietary Rank Predictor & AIQ Algorithm Presentation",
  },
  {
    id: 8,
    src: "/i12.png",
    alt: "Interactive Guidance and Counselling",
    category: "advisory",
    tag: "Interactive Desk",
    title: "Hands-on Campus Audits & Strategic Choice-Filling Guidance",
  },
];

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All Moments" },
  { id: "achievements", label: "Achievements & Felicitations" },
  { id: "seminars", label: "Live Seminars & Guidance" },
  { id: "advisory", label: "Advisory Sessions" },
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
    const prev = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxId(filteredItems[prev].id);
  }, [lightboxIndex, filteredItems]);

  const goNext = useCallback(() => {
    if (lightboxIndex < 0 || filteredItems.length === 0) return;
    const next = (lightboxIndex + 1) % filteredItems.length;
    setLightboxId(filteredItems[next].id);
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
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <figure
            className="relative max-h-[88vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-slate-900">
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
                <span className="inline-block rounded-full bg-blue-600/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
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

    <section
      id="moments"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* ── Section Header ── */}
        <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[760px]">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-md bg-[#eaf2ff] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0062ff]">
              <PhotoIcon className="h-3.5 w-3.5 shrink-0" />
              <span>VISUAL ARCHIVE & ACHIEVEMENTS</span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
              Moments of Excellence & Student Felicitations
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Celebrating over 19 years of verified medical admissions, felicitation ceremonies, live guidance seminars, and institutional campus audits across India.
            </p>
          </div>

          {/* Book In-Person CTA */}
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0062ff] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0051d4] hover:shadow-md"
            >
              <CalendarIcon className="h-4 w-4 shrink-0 text-white" />
              <span>Book In-Person Session at Swargate Desk</span>
            </a>
          </div>
        </div>
        </Reveal>

        {/* ── Filter Tabs ── */}
        <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-150 sm:text-sm ${
                  isActive
                    ? "bg-[#0d1527] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Photo Gallery Grid (8 Items) ── */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.alt}`}
              onClick={() => setLightboxId(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxId(item.id);
                }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-[14px] border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Subtle hover gradient and overlay title */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-blue-600/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {item.tag}
                </span>
                <p className="mt-1 line-clamp-2 text-xs font-medium leading-snug text-slate-100">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
