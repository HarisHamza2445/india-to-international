import { MomentsOfExcellence } from "@/components/MomentsOfExcellence";
import { SiteFrame } from "@/components/SiteFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery – Visual Archive | India To International",
  description:
    "19+ years of verified clinical guidance milestones, student felicitations, live seminars, and campus audits across Pune, Mumbai, Bangalore and pan-India medical centers.",
};

export default function GalleryPage() {
  return (
    <SiteFrame>
      <MomentsOfExcellence />
    </SiteFrame>
  );
}
