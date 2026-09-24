"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CloseIcon, LockIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const WA_HREF =
  "https://wa.me/919359544396?text=Hello%2C%20I%20want%20to%20enquire%20about%20NEET%20counselling%20services.";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "NEET UG", href: "/neet-ug" },
  { label: "NEET PG", href: "/neet-pg" },
  { label: "Predictors", href: "/predictors" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-white/95 shadow-[0_1px_2px_rgba(16,24,45,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1424px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:gap-6 sm:px-8">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
          <Logo className="h-10 w-10 shrink-0 sm:h-[46px] sm:w-[46px]" />
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[15px] font-bold leading-tight text-ink sm:text-[18px]">
              India To International
            </span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-brand sm:text-[11px]">
              NEET Counselling Desk
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14.5px] font-semibold transition-colors hover:text-brand ${
                  active ? "text-brand" : "text-navlink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919359544396"
            className="flex items-center gap-2 text-[14px] font-semibold text-ink transition-colors hover:text-brand"
          >
            <PhoneIcon className="h-4 w-4 text-brand" />
            +91-93595 44396
          </a>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[42px] shrink-0 items-center gap-2 rounded-lg bg-brand px-4 text-[14px] font-semibold text-white transition-colors hover:bg-brand-alt"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Advisory
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line text-ink xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-line bg-white xl:hidden sm:max-h-[calc(100dvh-76px)]">
          <nav className="mx-auto flex max-w-[1424px] flex-col px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-1 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-line/70 py-3.5 text-[15.5px] font-semibold text-navlink transition-colors last:border-b-0 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919359544396"
              className="mt-3 flex h-[48px] items-center justify-center gap-2 rounded-md border border-line text-[15px] font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4 text-brand" />
              +91-93595 44396
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 flex h-[48px] items-center justify-center gap-2 rounded-md bg-brand px-5 text-[15px] font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              WhatsApp Advisory
            </a>
            <Link
              href="/admin"
              className="mb-2 flex min-h-[44px] items-center justify-center gap-2 py-2 text-[13px] font-semibold text-muted transition-colors hover:text-brand"
              onClick={() => setOpen(false)}
            >
              <LockIcon className="h-3.5 w-3.5" />
              Counsellor Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
