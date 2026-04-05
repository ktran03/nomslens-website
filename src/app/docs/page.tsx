import type { Metadata } from "next";
import { DocsContent } from "@/components/pages/DocsContent";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Developer documentation for the NomLens OTA model delivery system, iOS components, and manifest specification.",
};

export default function DocsPage() {
  return <DocsContent />;
}
