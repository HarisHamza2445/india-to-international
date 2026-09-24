import { NeetUgArchitecture } from "@/components/NeetUgArchitecture";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata = {
  title: "NEET UG Admission Counselling | India To International",
  description:
    "Clinical advisory, choice-filling matrix, and bond obligation auditing for MBBS, BDS, BAMS and BHMS under MCC AIQ and State quotas.",
};

export default function NeetUgPage() {
  return (
    <SiteFrame>
      <NeetUgArchitecture />
    </SiteFrame>
  );
}
