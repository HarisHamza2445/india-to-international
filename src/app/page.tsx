import { AboutAdvisory } from "@/components/AboutAdvisory";
import { AdmissionAuditReport } from "@/components/AdmissionAuditReport";
import { BookingSection } from "@/components/BookingSection";
import { CounsellingPathways } from "@/components/CounsellingPathways";
import { CounsellingUpdates } from "@/components/CounsellingUpdates";
import { FaqSection } from "@/components/FaqSection";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { MomentsOfExcellence } from "@/components/MomentsOfExcellence";
import { Navbar } from "@/components/Navbar";
import { NeetMdsSection } from "@/components/NeetMdsSection";
import { NeetPgSection } from "@/components/NeetPgSection";
import { NeetUgMatrix } from "@/components/NeetUgMatrix";
import { PredictorsHub } from "@/components/PredictorsHub";
import { StatsBar } from "@/components/StatsBar";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <NeetUgMatrix />
        <NeetPgSection />
        <NeetMdsSection />
        <PredictorsHub />
        <AdmissionAuditReport />
        <MomentsOfExcellence />
        <CounsellingPathways />
        <CounsellingUpdates />
        <AboutAdvisory />
        <GoogleReviews />
        <FaqSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}







