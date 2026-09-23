import { Reveal } from "./Reveal";

const STATS = [
  { value: "15,080+", label: "Registered Candidates", highlight: false },
  { value: "4,540+", label: "Admissions Delivered", highlight: false },
  { value: "2,471+", label: "Colleges & Bed Matrices", highlight: false },
  { value: "19+", label: "Years in Pune Desk", highlight: true },
];

export function StatsBar() {
  return (
    <section className="w-full border-t border-line bg-stats">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            variant="fade"
            delay={index === 0 ? undefined : index === 1 ? "100" : index === 2 ? "200" : "300"}
            className="h-full"
          >
            <div
              className={[
                "flex h-full flex-col items-center justify-center px-4 py-10 text-center",
                index % 2 === 1 ? "border-l border-line" : "",
                index >= 2 ? "border-t border-line md:border-t-0" : "",
                index === 2 ? "md:border-l md:border-line" : "",
              ].join(" ")}
            >
              <span
                className={[
                  "text-[34px] font-extrabold leading-none tracking-[-0.02em] sm:text-[40px] md:text-[44px]",
                  stat.highlight ? "text-brand" : "text-ink",
                ].join(" ")}
              >
                {stat.value}
              </span>
              <span className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted sm:text-[12px]">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
