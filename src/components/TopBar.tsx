import { LockIcon, PhoneIcon } from "./icons";

export function TopBar() {
  return (
    <div className="h-[30px] w-full bg-topbar text-[11px] text-[#D7DEE8] sm:text-[12px]">
      <div className="mx-auto flex h-full max-w-[1424px] items-center justify-between gap-2 overflow-hidden px-3 sm:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#12B76A]" />
            <span className="hidden sm:inline">NEET 2025-26 Counselling Advisory Open</span>
            <span className="sm:hidden">NEET Counselling Open</span>
          </span>
          <span className="hidden h-[13px] w-px shrink-0 bg-white/20 sm:block" />
          <span className="hidden whitespace-nowrap md:inline">
            MCC AIQ 50% &amp; State Quota (85%) Compliance Desk
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="/admin"
            title="Counsellor Portal"
            className="flex h-full items-center gap-1.5 whitespace-nowrap text-[#9FB0C4] transition-colors hover:text-white"
          >
            <LockIcon className="h-3 w-3" />
            <span className="hidden sm:inline">Counsellor Portal</span>
          </a>
          <span className="h-[13px] w-px shrink-0 bg-white/20" />
          <a
            href="tel:+919359544396"
            className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
          >
            <PhoneIcon className="h-3 w-3" />
            <span>+91-93595 44396</span>
          </a>
          <a
            href="tel:+919711857351"
            className="hidden items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white sm:flex"
          >
            <PhoneIcon className="h-3 w-3" />
            <span>+91-97118 57351</span>
          </a>
          <span className="hidden whitespace-nowrap text-[#9FB0C4] lg:inline">
            Swargate, Pune
          </span>
        </div>
      </div>
    </div>
  );
}
