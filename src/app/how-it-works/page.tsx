import type { Metadata } from "next";
import Link from "next/link";
import { PIPELINE_STEPS, CONFIDENCE_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A full walkthrough of the NomLens pipeline — from raw photo to structured Han Nôm decode.",
};

export default function HowItWorksPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="section-label">Pipeline</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          How NomLens Works
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          A full walkthrough of every stage — from raw photograph to structured
          decode with Quốc ngữ transliteration and English meaning.
        </p>
      </div>

      {/* Phase Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
            Phase 1 (current)
          </div>
          <h2 className="font-serif text-xl font-semibold mb-2">
            Claude Vision API fallback
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            On-device model handles the majority of characters. Low-confidence
            crops escalate to Claude Vision API for per-glyph expert reasoning.
          </p>
        </div>
        <div className="bg-lacquer-50 border border-lacquer-200 rounded-xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-lacquer-600 mb-2">
            Phase 2 (active)
          </div>
          <h2 className="font-serif text-xl font-semibold text-lacquer-900 mb-2">
            On-device Core ML model
          </h2>
          <p className="text-sm text-lacquer-800/70 leading-relaxed">
            EfficientNet-B0, 972 classes, 97.6% accuracy, &lt;10ms on Neural
            Engine. Works offline. OTA model updates — no App Store update required.
          </p>
        </div>
      </div>

      {/* Full Pipeline Steps */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-8">
          The five-step pipeline
        </h2>

        <div className="space-y-10">
          {PIPELINE_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="flex gap-6 items-start pb-10 border-b border-stone-100 last:border-0"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-parchment-100 border border-parchment-200
                              flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-lacquer-500">{step.step}</span>
                  <h3 className="font-serif text-xl font-semibold text-stone-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                {/* Per-step deep dive */}
                {i === 1 && (
                  <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-stone-600">
                    <strong className="text-stone-800 block mb-2">Filter chain (in order):</strong>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Perspective correction — fix keystoning from camera angle</li>
                      <li>Deskew — straighten rotated page</li>
                      <li>Noise reduction — clean aged manuscript ink</li>
                      <li>Contrast + brightness + desaturate (grayscale)</li>
                      <li>Adaptive threshold — local contrast normalization for uneven stele lighting</li>
                      <li>Unsharp mask — sharpen character edges</li>
                    </ol>
                    <p className="mt-2 text-stone-500">
                      All filters run via Core Image (GPU-accelerated). Adaptive
                      thresholding is custom-built using Gaussian blur + local mean
                      subtraction — Core Image has no native implementation.
                    </p>
                  </div>
                )}
                {i === 2 && (
                  <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-stone-600">
                    <strong className="text-stone-800 block mb-2">Reading order:</strong>
                    <p>
                      Characters cluster into columns using a dynamic threshold
                      (1.2× median bounding box width — adapts to character density).
                      Columns sort right-to-left by midX; within each column,
                      top-to-bottom by minY. This is the correct classical Han Nôm
                      reading direction.
                    </p>
                    <p className="mt-2 text-stone-500">
                      Vision returns normalized coordinates with origin at
                      bottom-left. NomLens converts to pixel coordinates with origin
                      top-left using VNImageRectForNormalizedRect, then adds 8px
                      padding around each crop.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confidence Routing */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Confidence routing
        </h2>
        <p className="text-stone-600 mb-8 max-w-2xl">
          The on-device model returns a calibrated confidence score (after
          temperature scaling with T=0.6908) for every character. NomLens routes
          based on that score:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {CONFIDENCE_TIERS.map((tier) => (
            <div
              key={tier.range}
              className={`rounded-xl p-5 border ${
                tier.color === "green"
                  ? "bg-emerald-50 border-emerald-200"
                  : tier.color === "yellow"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <div
                className={`text-2xl font-serif font-bold mb-1 ${
                  tier.color === "green"
                    ? "text-emerald-700"
                    : tier.color === "yellow"
                    ? "text-amber-700"
                    : "text-red-700"
                }`}
              >
                {tier.range}
              </div>
              <div className="text-sm font-semibold text-stone-700 mb-1">
                {tier.label} confidence
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{tier.action}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          <strong>Important:</strong> These thresholds apply to{" "}
          <em>temperature-scaled</em> scores, not raw softmax probabilities.
          Raw neural network outputs are systematically overconfident — without
          calibration, a "95%" score might only correspond to 80% real accuracy.
          NomLens uses temperature scaling (T=0.6908) to produce scores with an
          Expected Calibration Error of 0.0034 — meaning the score you see
          is accurate to within ~0.3%.
        </div>
      </section>

      {/* Result Structure */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Result structure
        </h2>
        <p className="text-stone-600 mb-6">
          Each decoded character returns a structured record. The full decode
          for a page assembles these records in reading order.
        </p>

        <pre className="bg-stone-900 text-stone-100 rounded-xl p-6 text-sm overflow-x-auto">
{`{
  "character":          "南",          // Unicode character
  "type":               "han",         // "han" | "nom" | "unclear"
  "quoc_ngu":           "nam",         // Quốc ngữ transliteration
  "meaning":            "south",       // English meaning
  "confidence":         "high",        // "high" | "medium" | "low"
  "alternate_readings": [],            // Other possible readings
  "damage_noted":       false,         // True if degradation detected
  "notes":              ""             // Ambiguity or damage notes
}`}
        </pre>
        <p className="text-sm text-stone-400 mt-3">
          Low-confidence characters escalated to Claude Vision API use an
          identical output schema, returned by Claude&apos;s structured JSON response.
        </p>
      </section>

      {/* OTA Model Delivery */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          OTA model delivery
        </h2>
        <p className="text-stone-600 mb-6 max-w-2xl">
          The Core ML model is not bundled in the app binary. It downloads on
          demand and hot-swaps without requiring an App Store update — critical
          for pushing accuracy improvements as the training data grows.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Version check on launch",
              body: "ModelManager fetches a manifest.json from the hosted endpoint. If the version matches what's on disk, no download occurs.",
            },
            {
              title: "SHA-256 verification",
              body: "Every downloaded .mlpackage is verified against the manifest's SHA-256 hash before it replaces the active model. Corrupt downloads are discarded.",
            },
            {
              title: "Compiled model cache",
              body: "After first load, the compiled .mlmodelc is cached to disk. Subsequent launches load the compiled binary directly — no recompilation overhead.",
            },
            {
              title: "Hot-swap without restart",
              body: "ClassifierProxy holds the active model reference. ModelManager calls proxy.update() after verification — new model is live instantly.",
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/docs" className="btn-secondary">
            Full OTA documentation →
          </Link>
        </div>
      </section>

      {/* Nav footer */}
      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/model" className="btn-primary">
          Model architecture →
        </Link>
        <Link href="/docs" className="btn-secondary">
          Developer docs
        </Link>
      </div>
    </div>
  );
}
