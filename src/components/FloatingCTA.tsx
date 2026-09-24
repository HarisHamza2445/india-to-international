"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const t = setTimeout(() => setPulse(false), 5000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {/* Mobile: sticky action bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200/70 bg-white/95 shadow-[0_-8px_30px_rgba(16,24,45,0.1)] backdrop-blur-md transition-all duration-300 lg:hidden ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
        role="region"
        aria-label="Quick contact actions"
      >
        <div className="mx-auto flex w-full max-w-lg items-stretch gap-2.5 px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))] pt-2.5">
          <a
            href="https://wa.me/919359544396?text=Hello%2C%20I%20want%20to%20enquire%20about%20NEET%20counselling%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="btn-press flex h-[52px] min-w-0 flex-1 items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-3 text-[15px] font-bold tracking-tight text-white shadow-lg shadow-[#25D366]/35 outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
              <WhatsAppIcon className="h-[17px] w-[17px] text-[#25D366]" />
            </span>
            <span className="truncate">WhatsApp</span>
          </a>
          <a
            href="tel:+919359544396"
            aria-label="Call now"
            className="btn-press flex h-[52px] min-w-0 flex-1 items-center justify-center gap-2.5 rounded-2xl bg-[#0062ff] px-3 text-[15px] font-bold tracking-tight text-white shadow-lg shadow-blue-600/30 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
              <PhoneIcon className="h-[17px] w-[17px] text-[#0062ff]" />
            </span>
            <span className="truncate">Call Now</span>
          </a>
        </div>
      </div>

      {/* Desktop: floating stack */}
      <div
        className={`fixed bottom-8 right-6 z-[60] hidden flex-col items-end gap-3 transition-all duration-500 lg:flex ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
        }`}
      >
        <a
          href="https://wa.me/919359544396?text=Hello%2C%20I%20want%20to%20enquire%20about%20NEET%20counselling%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45),0_2px_8px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          {pulse && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
          )}
          <WhatsAppIcon className="relative z-10 h-[34px] w-[34px]" />
          <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            WhatsApp Us
          </span>
        </a>

        <a
          href="tel:+919359544396"
          aria-label="Call now"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0062ff] text-white shadow-[0_8px_20px_rgba(0,98,255,0.4),0_2px_6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Call Now
          </span>
        </a>
      </div>
    </>
  );
}
