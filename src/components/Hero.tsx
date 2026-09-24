import Image from "next/image";
import heroConsultationImg from "../../public/hero-consultation.jpg";
import { ShieldCheckIcon, SparklesIcon, WhatsAppIcon } from "./icons";

const WA_HREF =
  "https://wa.me/919359544396?text=Hello%2C%20I%20want%20to%20enquire%20about%20NEET%20counselling%20services.";

export function Hero() {
  return (
    <section id="home" className="w-full bg-[#f4f7fb]">
      <div className="mx-auto max-w-[1424px] px-4 py-12 sm:px-8 lg:pb-[88px] lg:pt-[64px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-[54px]">
          <div className="w-full">
            <span className="hero-rise inline-flex items-center gap-2 rounded-full border border-[#d7e6d8] bg-[#eef8ef] px-3 py-[6px] text-[12px] font-semibold leading-[14px] text-[#1f7a3a] sm:gap-2.5 sm:px-3.5 sm:py-[7px] sm:text-[13px]">
              <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#22c55e]" />
              <span>Admissions Cycle 2025–26 Counseling Desk Active</span>
            </span>

            <h1 className="hero-rise hero-d1 mt-6 text-[32px] font-extrabold leading-[1.12] tracking-[-1.2px] text-ink sm:mt-7 sm:text-[46px] sm:tracking-[-1.6px] lg:text-[56px]">
              Simplifying Your Medical
              <br />
              Admission Journey
            </h1>

            <p className="hero-rise hero-d2 mt-5 max-w-[620px] text-[15px] font-normal leading-[1.7] text-muted sm:mt-6 sm:text-[17px]">
              Authoritative, ethical, and data-backed guidance for NEET UG
              (MBBS/BDS), NEET PG (MD/MS/DNB), and MDS aspirants across AIQ,
              Deemed, and State quotas nationwide.
            </p>

            <div className="hero-rise hero-d3 mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href="/predictors"
                className="btn-press flex h-[50px] w-auto items-center justify-center gap-2.5 rounded-lg bg-brand px-5 text-[15px] font-semibold text-white transition-opacity hover:opacity-95 sm:h-[52px]"
              >
                <SparklesIcon className="h-[18px] w-[18px] shrink-0" />
                Check Admission Predictor
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex h-[50px] w-auto items-center justify-center gap-2.5 rounded-lg border border-[#DCE3EC] bg-white px-5 text-[15px] font-semibold text-navy shadow-[0_1px_2px_rgba(16,24,45,0.05)] transition-colors hover:bg-sky sm:h-[52px]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[#25D366]" />
                WhatsApp Consultation
              </a>
            </div>

            <div className="hero-rise hero-d4 mt-8 flex flex-wrap items-center gap-2.5 sm:mt-9">
              <span className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-muted">
                AICDM
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-muted">
                KEA
              </span>
              <span className="text-[13px] text-muted">
                Covering MCC All-India 15% &amp; 85% State Quota choice matrices
              </span>
            </div>
          </div>

          <div className="relative w-full">
            <div className="hero-pop hero-d3 overflow-hidden rounded-[16px] bg-white p-1.5 shadow-[0_16px_40px_rgba(16,24,45,0.12)]">
              <div className="relative h-[300px] w-full overflow-hidden rounded-[12px] sm:h-[400px] lg:h-[430px]">
                <Image
                  src={heroConsultationImg}
                  alt="Navin Harjwani - Principal Counsellor offering in-person and remote NEET admission consultations"
                  fill
                  sizes="(min-width: 1024px) 650px, 100vw"
                  priority
                  className="object-cover object-[center_18%]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted sm:text-[14px]">
                  <ShieldCheckIcon className="h-4 w-4 shrink-0 text-brand" />
                  Institutional Ethics Certified
                </span>
                <span className="text-right text-[13px] font-semibold text-muted sm:text-[14px]">
                  Pune Central Advisory
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
