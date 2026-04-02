import type { Metadata } from "next";
import Link from "next/link";
import { COMPETITOR_ROWS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Academic background on Han Nôm OCR, competitive landscape, dataset sources, and partnership opportunities.",
};

const ROADMAP_PHASES = [
  {
    phase: "Phase 1 · Complete",
    title: "AI-Powered Decoder",
    status: "complete",
    items: [
      "Claude Vision API per-character decode",
      "Core Image preprocessing (adaptive threshold, deskew, perspective correction)",
      "Vision framework segmentation + reading order sort",
      "SwiftData local history",
      "Structured JSON export",
    ],
  },
  {
    phase: "Phase 2 · Active",
    title: "On-Device Core ML Model",
    status: "active",
    items: [
      "EfficientNet-B0 trained (97.6% val accuracy, 10.6 MB)",
      "Temperature calibration (ECE 0.0034)",
      "OTA model delivery (iOS components built, manifest server pending)",
      "Confidence routing: on-device → Claude fallback",
    ],
  },
  {
    phase: "Phase 3 · Planned",
    title: "Active Learning Loop",
    status: "planned",
    items: [
      "In-app correction flow (user verifies low-confidence characters)",
      "Supabase backend: correction store, image crops, auth",
      "Data quality pipeline (outlier detection, expert review queue)",
      "Threshold-based retraining trigger (500+ new verified corrections)",
      "Automated evaluation + Core ML export + OTA push",
    ],
  },
  {
    phase: "Phase 4 · Future",
    title: "Community & Collaboration",
    status: "future",
    items: [
      "Scholar verification accounts with elevated correction weight",
      "GPS-tagged decode archive (living map of Han Nôm inscriptions)",
      "Public session publishing and community annotation",
      "Context tagging (dynasty, text type, location, subject matter)",
    ],
  },
  {
    phase: "Phase 5 · Future",
    title: "Deeper NLP",
    status: "future",
    items: [
      "Literary translation with cultural context (Claude or fine-tuned model)",
      "Poetic form identification (lục bát, Đường thi forms)",
      "Historical period estimation from vocabulary and style",
      "Named entity recognition (place names, reign titles, personal names)",
    ],
  },
  {
    phase: "Phase 6 · Future",
    title: "Academic Integration",
    status: "future",
    items: [
      "Open dataset export — verified corrections contributed to Nom Foundation and Kaggle",
      "Research API for batch manuscript digitization",
      "NEH / Mellon Foundation grant applications",
      "Partnerships: VNUHCM-UIT, Yale, Harvard, Cornell Southeast Asian Studies",
    ],
  },
];

const GRANTS = [
  {
    name: "NEH (National Endowment for the Humanities)",
    program: "Digital Humanities Advancement Grants",
    fit: "Open dataset contribution, manuscript digitization infrastructure",
  },
  {
    name: "Mellon Foundation",
    program: "Scholarly Communications & Information Technology",
    fit: "Cultural heritage preservation, academic access to endangered script data",
  },
  {
    name: "Vietnamese Ministry of Culture",
    program: "Cultural Heritage Digitization Program",
    fit: "National interest in preserving Nôm manuscript heritage",
  },
  {
    name: "University Partners",
    program: "Yale, Harvard, Cornell — Southeast Asian Studies",
    fit: "Batch digitization of institutional manuscript collections, student research access",
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="section-label">Research</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          Academic Context
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          The state of Han Nôm OCR research, how NomLens compares to existing
          academic approaches, data sources, the full product roadmap, and
          partnership opportunities.
        </p>
      </div>

      {/* The Preservation Crisis */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          The preservation crisis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-stone-600 leading-relaxed mb-4">
              Chữ Nôm was the primary writing system of Vietnam for over a thousand
              years — used for imperial edicts, poetry, religious texts, genealogies,
              and stone stele inscriptions across the country.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The script was progressively replaced by Quốc ngữ (Latin-alphabet
              Vietnamese) during the French colonial period. Today, fewer than 100
              scholars worldwide can read it fluently.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The physical artifacts — stone steles, aged manuscripts, temple carvings
              — deteriorate every year. The Vietnamese Nôm Preservation Foundation
              spent two decades digitizing manuscripts before dissolving in 2018,
              having declared its initial mission complete. Their scanned corpus
              became the NomNaOCR training dataset.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { stat: "&lt;100", label: "Scholars worldwide who can read Han Nôm fluently" },
              { stat: "1,000+", label: "Years of Vietnamese history written in this script" },
              { stat: "2018", label: "Year the Nôm Preservation Foundation dissolved" },
              { stat: "Growing", label: "Rate of physical artifact deterioration" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 card">
                <div
                  className="font-serif text-2xl font-bold text-lacquer-600 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: item.stat }}
                />
                <p className="text-sm text-stone-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Work */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          Prior academic work
        </h2>

        <div className="space-y-4">
          <div className="card border-l-4 border-l-lacquer-400">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-stone-900">
                NomNaOCR (2022) — VNUHCM-UIT
              </h3>
              <span className="text-xs bg-lacquer-50 text-lacquer-700 border border-lacquer-200 px-2 py-0.5 rounded-full font-medium">
                Most significant
              </span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              2,953 pages, 38,318 labeled character patches from woodblock prints
              (Truyện Kiều × 3, Lục Vân Tiên, Đại Việt Sử Ký Toàn Thư). Architecture:
              DBNet detection + CRNN/Transformer recognition. Server-side only.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="https://www.kaggle.com/datasets/quandang/nomnaocr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lacquer-600 hover:text-lacquer-700 font-medium"
              >
                Dataset on Kaggle →
              </a>
              <a
                href="https://github.com/ds4v/NomNaOCR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lacquer-600 hover:text-lacquer-700 font-medium"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-2">
              Nom Document Digitalization (2020) — Pattern Recognition Letters
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              719 pages of Truyện Kiều. U-Net segmentation + CNN classifier with attention.
              Results: segmentation IoU 92%,{" "}
              <strong>character recognition 85.07%</strong>. Clean woodblock prints only.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-2">
              Integrating Nôm Language Model (2022)
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Tests on unseen woodblock editions (cross-edition generalization).
              Results:{" "}
              <strong>71–74% mAP at sequence level on unseen data</strong>. This is
              the honest real-world number for the best academic sequence-level work.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-2">
              Scene Sino-Nom OCR (2025) — most recent
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Focuses on real-world photos (temples, signs) — the most relevant use case
              to NomLens. Combines deep learning with explicit linguistic knowledge of
              Nôm structure. Architecture and accuracy results not yet published at time
              of writing.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          How NomLens compares
        </h2>
        <p className="text-stone-600 mb-6 max-w-2xl">
          Note: the 71–74% accuracy of the best academic sequence-level work on unseen
          data vs. NomLens&apos;s 97.6% per-character accuracy is not a fair comparison —
          they solve different tasks. Per-character classification is simpler and more
          accurate than sequence OCR, given reliable upstream segmentation.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-3 text-stone-500 font-medium">Dimension</th>
                <th className="text-left px-4 py-3 text-stone-500 font-medium">Academic / Existing Apps</th>
                <th className="text-left px-4 py-3 text-lacquer-600 font-medium">NomLens</th>
              </tr>
            </thead>
            <tbody>
              {COMPETITOR_ROWS.map((row, i) => (
                <tr
                  key={row.dimension}
                  className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                >
                  <td className="px-4 py-3 text-stone-600 font-medium">{row.dimension}</td>
                  <td className="px-4 py-3 text-stone-500">{row.academic}</td>
                  <td className="px-4 py-3 text-stone-800 font-medium">{row.nomlens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-lacquer-50 border border-lacquer-200 rounded-lg p-4 text-sm text-lacquer-800">
          <strong>The key finding:</strong> A production-quality, on-device, real-time Nôm
          character recognizer for iOS is genuinely novel. No direct competitor exists.
          Academic work is server-side and not productized. Existing App Store apps are
          undisclosed black boxes with no accuracy claims or on-device inference.
        </div>
      </section>

      {/* The Kaggle Dataset */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          NomNaOCR dataset
        </h2>
        <div className="card">
          <p className="text-stone-600 leading-relaxed mb-4">
            The NomNaOCR dataset (38,318 labeled character patches from real Nôm
            woodblock-print manuscripts) is publicly available on Kaggle. This is real
            printed Nôm character images with labels — adding it to training would
            meaningfully improve the model&apos;s knowledge of what printed manuscript
            characters look like, beyond synthetic font renders.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.kaggle.com/datasets/quandang/nomnaocr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on Kaggle →
            </a>
            <span className="text-sm text-stone-500 self-center">
              Evaluated for v2 / v3 training inclusion
            </span>
          </div>
        </div>
      </section>

      {/* Full Roadmap */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          Product roadmap
        </h2>

        <div className="space-y-4">
          {ROADMAP_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className={`card border-l-4 ${
                phase.status === "complete"
                  ? "border-l-emerald-400"
                  : phase.status === "active"
                  ? "border-l-lacquer-400"
                  : "border-l-stone-200"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                      phase.status === "complete"
                        ? "text-emerald-600"
                        : phase.status === "active"
                        ? "text-lacquer-600"
                        : "text-stone-400"
                    }`}
                  >
                    {phase.phase}
                  </div>
                  <h3 className="font-serif font-semibold text-stone-900 text-lg">
                    {phase.title}
                  </h3>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    phase.status === "complete"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : phase.status === "active"
                      ? "bg-lacquer-50 text-lacquer-700 border border-lacquer-200"
                      : "bg-stone-50 text-stone-400 border border-stone-200"
                  }`}
                >
                  {phase.status === "complete"
                    ? "Complete"
                    : phase.status === "active"
                    ? "In progress"
                    : "Future"}
                </span>
              </div>
              <ul className="space-y-1">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-stone-600 flex gap-2">
                    <span
                      className={`flex-shrink-0 mt-0.5 ${
                        phase.status === "complete"
                          ? "text-emerald-500"
                          : phase.status === "active"
                          ? "text-lacquer-500"
                          : "text-stone-300"
                      }`}
                    >
                      {phase.status === "complete" ? "✓" : "·"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Grant & Partnership Opportunities */}
      <section className="mb-16" id="partnerships">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Grant &amp; partnership opportunities
        </h2>
        <p className="text-stone-600 mb-6 max-w-2xl">
          The open dataset contribution (verified user corrections exported as labeled
          training data) is the key that opens academic and institutional doors. We&apos;re
          not asking for money to build a product — we&apos;re offering infrastructure that
          advances shared scholarly goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GRANTS.map((grant) => (
            <div key={grant.name} className="card">
              <h3 className="font-semibold text-stone-900 mb-1">{grant.name}</h3>
              <div className="text-xs text-lacquer-600 font-medium mb-2">{grant.program}</div>
              <p className="text-sm text-stone-600 leading-relaxed">{grant.fit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Citation placeholder */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Cite NomLens
        </h2>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
          <p className="text-sm text-stone-500 mb-3">
            Academic citation format (placeholder — update with publication details):
          </p>
          <pre className="text-xs font-mono text-stone-700 whitespace-pre-wrap">
{`NomLens: On-Device Han Nôm Character Classification with Confidence-Routed
AI Fallback. [Author]. 2026. https://nomlens.app`}
          </pre>
        </div>
      </section>

      {/* Nav footer */}
      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/model" className="btn-primary">
          ← Model details
        </Link>
        <Link href="/docs" className="btn-secondary">
          Developer docs
        </Link>
      </div>
    </div>
  );
}
