import { SiteFrame } from "@/components/SiteFrame";
import { NeetPgHero } from "@/components/NeetPgHero";
import { NeetPgSpecialtyMatrix } from "@/components/NeetPgSpecialtyMatrix";
import { NeetPgQuotas } from "@/components/NeetPgQuotas";
import { NeetPgMdsSection } from "@/components/NeetPgMdsSection";
import { NeetPgBonds } from "@/components/NeetPgBonds";
import { NeetPgConsultCTA } from "@/components/NeetPgConsultCTA";

export const metadata = {
  title: "NEET PG & MDS Counselling 2025-26 | India To International",
  description:
    "Expert NEET PG counselling for MD, MS, DNB, Post-MBBS Diploma & MDS. Clinical specialty matrix, quota analysis, rural bond guidance and 1-on-1 strategy sessions with Navin Harjwani.",
};

export default function NeetPgPage() {
  return (
    <SiteFrame>
      <NeetPgHero />
      <NeetPgSpecialtyMatrix />
      <NeetPgQuotas />
      <NeetPgMdsSection />
      <NeetPgBonds />
      <NeetPgConsultCTA />
    </SiteFrame>
  );
}
