import { BookingSection } from "@/components/BookingSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { InstitutionalFoundation } from "@/components/InstitutionalFoundation";
import { SiteFrame } from "@/components/SiteFrame";
import { SpecializedPortals } from "@/components/SpecializedPortals";
import { StatsBar } from "@/components/StatsBar";

export default function Home() {
  return (
    <SiteFrame>
      <Hero />
      <StatsBar />
      <InstitutionalFoundation />
      <SpecializedPortals />
      <GoogleReviews />
      <BookingSection />
    </SiteFrame>
  );
}
