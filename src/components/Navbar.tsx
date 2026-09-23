"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CalendarIcon, CloseIcon, LockIcon, MenuIcon } from "./icons";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "NEET UG", href: "#neet-ug" },
  { label: "NEET PG", href: "#neet-pg" },
  { label: "NEET MDS", href: "#neet-mds" },
  { label: "Predictors", href: "#predictors" },
  { label: "Counselling", href: "#pathways" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-white shadow-[0_1px_2px_rgba(16,24,45,0.04)]">
      <div className="mx-auto flex h-[72px] max-w-[1424px] items-center justify-between gap-3 px-4 sm:h-[88px] sm:gap-6 sm:px-8">
        <a href="#home" className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
          <Logo className="h-11 w-11 shrink-0 sm:h-[54px] sm:w-[54px]" />
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[16px] font-bold leading-tight text-ink sm:text-[20px]">
              India To International
            </span>
            <span className="mt-0.5 line-clamp-2 max-w-[160px] text-[11px] font-bold uppercase leading-[1.3] tracking-[0.01em] text-brand sm:max-w-[186px] sm:text-[12.5px]">
              NEET Medical Admissions &amp; Advisory
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-[38px] lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15.5px] font-semibold text-navlink transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden h-[44px] shrink-0 items-center gap-2 rounded-md bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-alt lg:flex"
        >
          <CalendarIcon className="h-[17px] w-[17px]" />
          Book Consultation
        </a>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white lg:hidden sm:max-h-[calc(100dvh-88px)]">
          <nav className="mx-auto flex max-w-[1424px] flex-col px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-1 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-line/70 py-3.5 text-[15.5px] font-semibold text-navlink transition-colors last:border-b-0 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="my-3 flex h-[48px] items-center justify-center gap-2 rounded-md bg-brand px-5 text-[15px] font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <CalendarIcon className="h-[17px] w-[17px]" />
              Book Consultation
            </a>
            <a
              href="/admin"
              className="mb-2 flex min-h-[44px] items-center justify-center gap-2 py-2 text-[13px] font-semibold text-muted transition-colors hover:text-brand"
              onClick={() => setOpen(false)}
            >
              <LockIcon className="h-3.5 w-3.5" />
              Counsellor Portal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
