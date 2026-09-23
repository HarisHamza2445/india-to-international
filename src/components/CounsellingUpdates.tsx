"use client";

import { useEffect, useState } from "react";
import { getBulletins, type Bulletin } from "@/lib/dataStore";
import { Reveal } from "./Reveal";
import { BellIcon, ClipboardCheckIcon, FileTextIcon, WhatsAppIcon, XIcon } from "./icons";

function getIcon(badge: string) {
  if (badge.toLowerCase().includes("mcc") || badge.toLowerCase().includes("neet pg"))
    return BellIcon;
  if (badge.toLowerCase().includes("maharashtra") || badge.toLowerCase().includes("state"))
    return ClipboardCheckIcon;
  return FileTextIcon;
}

function AdvisoryModal({
  bulletin,
  onClose,
}: {
  bulletin: Bulletin;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white px-6 py-5">
          <div>
            <span className="rounded bg-[#eaf2ff] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0062ff]">
              {bulletin.badge}
            </span>
            <h3 className="mt-2 text-sm font-bold text-slate-900 sm:text-[15px] leading-snug">
              {bulletin.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-4 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-5">
          <p className="text-[13.5px] leading-[1.75] text-slate-600">
            {bulletin.fullContent || bulletin.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0062ff] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0051d4]"
            >
              Book Counselling Now
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CounsellingUpdates() {
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [activeBulletin, setActiveBulletin] = useState<Bulletin | null>(null);
  const [showAlertsModal, setShowAlertsModal] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const list = await getBulletins();
      if (!cancelled) setBulletins(list.filter((b) => b.active));
    };
    void load();
    const handler = () => {
      void load();
    };
    window.addEventListener("itoi_bulletins_updated", handler);
    return () => {
      cancelled = true;
      window.removeEventListener("itoi_bulletins_updated", handler);
    };
  }, []);

  return (
    <>
      {activeBulletin && (
        <AdvisoryModal
          bulletin={activeBulletin}
          onClose={() => setActiveBulletin(null)}
        />
      )}

      <section
        id="updates"
        className="w-full border-t border-line bg-[#f8fafc] py-14 sm:py-18 lg:py-20"
      >
        <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
          {/* ── Section Header ── */}
          <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0062ff]">
                REAL-TIME BULLETIN
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
                Latest Counselling Updates &amp; Notifications
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowAlertsModal(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0062ff] transition hover:text-[#0051d4] hover:underline shrink-0"
            >
              <span>Subscribe to WhatsApp Alerts</span>
              <BellIcon className="h-4 w-4" />
            </button>
          </div>
          </Reveal>

          {showAlertsModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
              onClick={() => setShowAlertsModal(false)}
            >
              <div
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="WhatsApp alerts subscription"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded bg-[#eaf2ff] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0062ff]">
                      WhatsApp Alerts
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      Get Counselling Updates Instantly
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setShowAlertsModal(false)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Message our desk directly to opt in for seat-matrix drops, round deadline alerts, and document-verification reminders.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="https://wa.me/919359544396?text=Hello%20Navin%20Sir%2C%20please%20add%20me%20to%20the%20WhatsApp%20counselling%20alerts%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 transition hover:bg-emerald-100"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                      <WhatsAppIcon className="h-5 w-5" />
                      +91-93595 44396
                    </span>
                    <span className="text-xs font-semibold text-emerald-600">Chat →</span>
                  </a>
                  <a
                    href="https://wa.me/919711857351?text=Hello%20Navin%20Sir%2C%20please%20add%20me%20to%20the%20WhatsApp%20counselling%20alerts%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 transition hover:bg-emerald-100"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                      <WhatsAppIcon className="h-5 w-5" />
                      +91-97118 57351
                    </span>
                    <span className="text-xs font-semibold text-emerald-600">Chat →</span>
                  </a>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Or call the desk:{" "}
                  <a href="tel:+919359544396" className="font-semibold text-[#0062ff] hover:underline">
                    +91-93595 44396
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* ── Notification List Container ── */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-xs divide-y divide-slate-100">
            {bulletins.length === 0 && (
              <p className="py-10 text-center text-sm text-slate-400">No active bulletins at this time.</p>
            )}
            {bulletins.map((item) => {
              const Icon = getIcon(item.badge);
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 transition hover:bg-slate-50/70"
                >
                  {/* Left side details */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#0062ff]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded bg-[#eaf2ff] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0062ff]">
                          {item.badge}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="mt-1.5 text-sm font-bold text-slate-900 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-600 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right side action */}
                  <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:justify-end sm:gap-4">
                    <span className="text-xs font-medium text-slate-400">
                      {item.timestamp}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveBulletin(item)}
                      className="min-h-[40px] rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      View Advisory
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
