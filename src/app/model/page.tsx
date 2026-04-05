import type { Metadata } from "next";
import { ModelContent } from "@/components/pages/ModelContent";

export const metadata: Metadata = {
  title: "Model",
  description:
    "EfficientNet-B0 Core ML classifier for Han Nôm character recognition. Architecture, training, calibration, and performance.",
};

export default function ModelPage() {
  return <ModelContent />;
}
