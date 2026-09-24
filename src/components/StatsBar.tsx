import { Reveal } from "./Reveal";
import {
  CheckCircleIcon,
  ClockIcon,
  GridIcon,
  UsersIcon,
} from "./icons";

const STATS = [
  {
    value: "15,080+",
    label: "Registered Candidates",
    detail: "Guided across UG, PG, and MDS cycles",
    valueClass: "text-ink",
    Icon: UsersIcon,
    iconWrap: "bg-[#eef4ff] text-brand",
  },
  {
    value: "4,540+",
    label: "Successful Admissions",
    detail: "Government, Deemed, and Trust institutes",
    valueClass: "text-accent",
    Icon: CheckCircleIcon,
    iconWrap: "bg-[#e9f8ef] text-accent",
  },
  {
    value: "2,471+",
    label: "Hospital & College Profiles",
    detail: "Bed-occupancy, patient influx, fee audits",
    valueClass: "text-ink",
    Icon: GridIcon,
    iconWrap: "bg-[#eef4ff] text-brand",
  },
  {
    value: "19+",
    label: "Years of Proven Advisory",
    detail: "Continuous authority in medical counseling",
    valueClass: "text-ink",
    Icon: ClockIcon,
    iconWrap: "bg-[#eef4ff] text-brand",
  },
];

export function StatsBar() {
  return (
    <section className="w-full bg-[#f4f7fb] pb-10 sm:pb-14">
      <div className="mx-auto grid max-w-[1424px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-5">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            variant="fade"
            delay={index === 0 ? undefined : index === 1 ? "100" : index === 2 ? "200" : "300"}
            className="h-full"
          >
            <div className="relative h-full rounded-2xl border border-white bg-white p-5 shadow-[0_8px_24px_rgba(16,24,45,0.05)] sm:p-6">
              <span
                className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg ${stat.iconWrap}`}
              >
                <stat.Icon className="h-[18px] w-[18px]" />
              </span>
              <span
                className={`block text-[30px] font-extrabold leading-none tracking-[-0.03em] sm:text-[34px] ${stat.valueClass}`}
              >
                {stat.value}
              </span>
              <span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
                {stat.label}
              </span>
              <p className="mt-1.5 text-[13px] leading-snug text-muted">{stat.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
