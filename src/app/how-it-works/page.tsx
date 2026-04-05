import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/pages/HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A full walkthrough of the NomLens pipeline — from raw photo to structured Han Nôm decode.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
