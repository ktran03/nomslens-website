import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
  title: "NomLens — Han Nôm Decoder",
  description:
    "NomLens decodes Han Nôm script from photos of stone steles, temple inscriptions, and ancient Vietnamese manuscripts — on your iPhone, offline.",
};

export default function HomePage() {
  return <HomePageContent />;
}
