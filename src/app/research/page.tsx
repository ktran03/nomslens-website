import type { Metadata } from "next";
import { ResearchContent } from "@/components/pages/ResearchContent";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Academic background on Han Nôm OCR, competitive landscape, dataset sources, and partnership opportunities.",
};

export default function ResearchPage() {
  return <ResearchContent />;
}
