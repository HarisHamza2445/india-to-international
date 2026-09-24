import Image from "next/image";
import { Reveal } from "./Reveal";
import { ToothIcon } from "./icons";

const MDS_BRANCHES = [
  {
    tag: "Orthodontics & Dentofacial",
    title: "Orthodontics & Dentofacial",
    desc: "Clear aligner workflows, surgical orthodontics, and cleft palate management footfall across 3-year residency.",
    icon: "🦷",
  },
  {
    tag: "Oral & Maxillofacial Surgery",
    title: "Oral & Maxillofacial Surgery",
    desc: "Major OT trauma exposure, maxillofacial trauma, reconstructive flap surgery, and TMJ arthroscopy case volumes.",
    icon: "🏥",
  },
  {
    tag: "Conservative & Endodontics",
    title: "Conservative & Endodontics",
    desc: "Operating dental microscopes (DOM), rotary endo platforms, apex locators, and microsurgical apical procedures.",
    icon: "🔬",
  },
  {
    tag: "Prosthodontics & Implantology",
    title: "Prosthodontics & Implantology",
    desc: "Full-mouth rehabilitation, CAD-CAM zirconia milling, guided implant surgery protocols, and maxillofacial prosthesis.",
    icon: "⚙️",
  },
];

export function NeetPgMdsSection() {
  return (
    <section
      id="neet-mds"
      className="w-full border-t border-line bg-white py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: image */}
          <Reveal variant="left">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[22px] shadow-[0_12px_40px_rgba(16,24,45,0.13)] sm:h-[460px] lg:h-[520px]">
              <Image
                src="/i3.png"
                alt="Dental surgeons performing clinical procedure in specialised dental setup"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-semibold text-white/70">
                      MDS Clinical Chair Ratio
                    </p>
                    <p className="mt-0.5 text-[13px] text-white/60">
                      DCI Standards • Mandatory Pre-Clinical Phantom Labs
                    </p>
                  </div>
                  <span className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                    DCI Approved
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <Reveal variant="right">
            <div>
              <div className="flex items-center gap-2 font-bold uppercase tracking-[0.06em] text-brand">
                <ToothIcon className="h-4 w-4 shrink-0" />
                <span className="text-[12px] sm:text-[13px]">
                  Dental Postgraduation
                </span>
              </div>

              <h2 className="mt-3.5 text-[26px] font-extrabold leading-[1.18] tracking-[-0.025em] text-ink sm:text-[32px] lg:text-[36px]">
                Master of Dental Surgery (MDS)
                <br className="hidden sm:inline" /> Specialty Advisory
              </h2>

              <p className="mt-3 max-w-[520px] text-[14.5px] leading-[1.65] text-muted sm:text-[15px]">
                Dental PG counselling requires meticulous validation of patient
                chair-to-student ratios, CBCT 3D imaging infrastructure,
                micro-endodontic workstations, and craniofacial surgical bed access.
              </p>

              {/* Branch 2×2 grid */}
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {MDS_BRANCHES.map((branch) => (
                  <div
                    key={branch.title}
                    className="hover-lift rounded-[14px] border border-line bg-[#f7f9fc] p-4 transition-all hover:border-[#cbd7e8]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[18px]">{branch.icon}</span>
                      <h4 className="text-[14px] font-bold text-ink leading-snug">
                        {branch.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                      {branch.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
