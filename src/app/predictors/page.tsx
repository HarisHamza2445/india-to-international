import { PredictorsPage } from "@/components/PredictorsPage";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata = {
  title: "NEET Admission Predictors & Seat Matrix Analytics | India To International",
  description:
    "Evaluate your exact admission probability across 50% AIQ, State Quotas, Deemed Universities, and DNB hospitals based on 19+ years of verified closing rank data.",
};

export default function PredictorsRoute() {
  return (
    <SiteFrame>
      <PredictorsPage />
    </SiteFrame>
  );
}
