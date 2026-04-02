import type { Metadata } from "next";
import Link from "next/link";
import { MODEL_STATS, COVERAGE_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Model",
  description:
    "EfficientNet-B0 Core ML classifier for Han Nôm character recognition. Architecture, training, calibration, and performance.",
};

const ARCHITECTURE_ROWS = [
  { property: "Architecture",         value: "EfficientNet-B0"                                },
  { property: "Parameters",           value: "5.3M"                                           },
  { property: "Input",                value: "96×96 px RGB, single character crop"            },
  { property: "Output",               value: "classLabel (String) + classLabelProbs (Dict)"  },
  { property: "Format",               value: ".mlpackage (mlprogram, iOS 16+)"               },
  { property: "Size",                 value: "10.6 MB (v1)"                                  },
  { property: "Inference",            value: "<10ms on iPhone Neural Engine"                  },
  { property: "Temperature (T)",      value: "0.6908"                                         },
  { property: "ECE after scaling",    value: "0.0034"                                         },
  { property: "Training framework",   value: "PyTorch ≥2.2.0 + coremltools ≥7.0"            },
];

const TRAINING_PHASES = [
  {
    phase: "Head-only (epochs 1–5)",
    details: [
      "Backbone weights frozen (requires_grad=False)",
      "Only Linear(1280→N) classification head trains",
      "Adam optimizer, lr=1e-3",
      "Rationale: prevents garbage gradients from random head from destroying pretrained backbone features",
    ],
  },
  {
    phase: "Full fine-tune (epochs 6–50)",
    details: [
      "All 5.3M parameters train",
      "AdamW optimizer, lr=1e-4 (10× lower than phase 1)",
      "CosineAnnealingLR — smooth decay toward ~0",
      "Weight decay=1e-4 (L2 regularization against overfitting)",
      "Stopped at epoch 24 — converged at 97.6% val accuracy",
    ],
  },
];

const DATA_SOURCES = [
  {
    name: "CASIA-HWDB",
    role: "Primary",
    description:
      "294,280 images across 511 CJK character classes. Real handwriting from Chinese writers on pen tablets. Institute of Automation, Chinese Academy of Sciences.",
    note: "Covers the Hán layer of Han Nôm. Dense training data for the most common characters.",
  },
  {
    name: "Han Nôm Font Renders",
    role: "Primary (Nôm layer)",
    description:
      "1,944 PNG images rendered from HanNomA.ttf and HanNomB.ttf — 4 font variants, 2 images per class.",
    note: "461 Nôm-specific characters don't exist in any handwriting database. Font renders are the only available training data for these classes.",
  },
  {
    name: "NomNaOCR Dataset (Kaggle)",
    role: "Future (v2)",
    description:
      "38,318 labeled character patches from real woodblock-print manuscripts. Covers Truyện Kiều × 3 versions, Lục Vân Tiên, and Đại Việt Sử Ký Toàn Thư.",
    note: "Would meaningfully improve model performance on printed manuscript sources. Not yet incorporated.",
  },
  {
    name: "User Corrections (Phase 3)",
    role: "Future flywheel",
    description:
      "Verified in-app corrections feed a retraining pipeline. Every low-confidence prediction that a user corrects becomes labeled training data.",
    note: "The moat: real-world field data from actual users and scholars cannot be replicated from scratch.",
  },
];

export default function ModelPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="section-label">ML Model</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          The NomLens Classifier
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          EfficientNet-B0 trained on Han Nôm character data, exported to Core ML,
          and delivered OTA to iOS devices. Architecture, training strategy,
          calibration, and performance breakdown.
        </p>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {MODEL_STATS.slice(0, 4).map((stat) => (
          <div key={stat.label} className="card text-center">
            <div className="stat-number">{stat.value}</div>
            <div className="text-sm font-medium text-stone-700 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-stone-600 leading-relaxed mb-4">
              NomLens uses <strong>EfficientNet-B0</strong> — a CNN designed specifically
              for mobile/edge deployment via compound scaling of depth, width, and
              input resolution. It achieves better accuracy per parameter than ResNet
              or MobileNet at this size class.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This is a <strong>single-character image classifier</strong>, not an OCR
              sequence model. Segmentation is handled upstream by Apple&apos;s Vision
              framework, so the model only needs to solve: &ldquo;given a 96×96 crop of one
              character, what is it?&rdquo; — a simpler and more accurate task than sequence
              decoding.
            </p>
            <p className="text-stone-600 leading-relaxed">
              After the convolutional layers, AdaptiveAvgPool collapses spatial
              dimensions to a 1280-dimensional feature vector. The classifier head
              (Linear 1280→N) maps this to probabilities over N character classes.
            </p>
          </div>

          <div className="bg-stone-900 text-stone-100 rounded-xl p-5 text-xs font-mono overflow-x-auto">
            <div className="text-stone-400 mb-3 text-xs">EfficientNet-B0 shape trace</div>
            {[
              ["Input",              "[1, 3, 96, 96]"],
              ["Stem Conv 3×3 s2",   "[1, 32, 48, 48]"],
              ["MBConv1 ×1",         "[1, 16, 48, 48]"],
              ["MBConv6 ×2",         "[1, 24, 24, 24]"],
              ["MBConv6 ×2",         "[1, 40, 12, 12]"],
              ["MBConv6 ×3",         "[1, 80, 6, 6]"],
              ["MBConv6 ×3",         "[1, 112, 6, 6]"],
              ["MBConv6 ×4",         "[1, 192, 3, 3]"],
              ["MBConv6 ×1",         "[1, 320, 3, 3]"],
              ["Head Conv 1×1",      "[1, 1280, 3, 3]"],
              ["AdaptiveAvgPool",    "[1, 1280]  ← feature vector"],
              ["Dropout(0.3)",       "[1, 1280]"],
              ["Linear(1280→N)",     "[1, N]     ← logits"],
            ].map(([label, shape], i) => (
              <div key={i} className="flex justify-between gap-4 py-0.5">
                <span className="text-stone-400">{label}</span>
                <span className="text-emerald-400">{shape}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-2 text-stone-500 font-medium">Property</th>
                <th className="text-left px-4 py-2 text-stone-500 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {ARCHITECTURE_ROWS.map((row, i) => (
                <tr key={row.property} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                  <td className="px-4 py-2.5 text-stone-600 font-medium">{row.property}</td>
                  <td className="px-4 py-2.5 text-stone-800 font-mono text-xs">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Training */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Training strategy
        </h2>
        <p className="text-stone-600 mb-8 max-w-2xl">
          Transfer learning from ImageNet pretrained weights. The backbone already
          knows edges, curves, textures, and geometric patterns — the same low-level
          features needed for stroke and radical recognition. Two-phase fine-tuning
          prevents the random classification head from destroying those pretrained features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRAINING_PHASES.map((phase) => (
            <div key={phase.phase} className="card">
              <h3 className="font-semibold text-stone-900 mb-3">{phase.phase}</h3>
              <ul className="space-y-1.5">
                {phase.details.map((detail) => (
                  <li key={detail} className="text-sm text-stone-600 flex gap-2">
                    <span className="text-lacquer-500 mt-0.5 flex-shrink-0">·</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-stone-50 border border-stone-200 rounded-lg p-5 text-sm">
          <h4 className="font-semibold text-stone-900 mb-2">Class imbalance handling</h4>
          <p className="text-stone-600 leading-relaxed">
            511 Han classes have ~576 HWDB samples each (294K total). 461 Nôm-only
            classes have 2–4 font renders each (1,900 total). Without intervention, the
            model would learn to predict Han characters almost exclusively.{" "}
            <strong>WeightedRandomSampler</strong> gives each sample a weight of
            1/(number of samples in its class), ensuring every class appears at roughly
            equal frequency in every training batch regardless of raw sample count.
          </p>
        </div>
      </section>

      {/* Training Data */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          Training data
        </h2>
        <div className="space-y-4">
          {DATA_SOURCES.map((src) => (
            <div key={src.name} className="card">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-stone-900">{src.name}</h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    src.role === "Primary"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : src.role === "Primary (Nôm layer)"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-stone-50 text-stone-500 border border-stone-200"
                  }`}
                >
                  {src.role}
                </span>
              </div>
              <p className="text-sm text-stone-600 mb-2 leading-relaxed">{src.description}</p>
              <p className="text-xs text-stone-400 italic">{src.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temperature Scaling */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Temperature scaling
        </h2>
        <p className="text-stone-600 mb-6 max-w-2xl leading-relaxed">
          Neural networks trained with cross-entropy loss are systematically
          overconfident — a raw softmax output of &ldquo;97%&rdquo; might only correspond to 80%
          real accuracy. This makes confidence-based routing meaningless without
          calibration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-2">The fix</h3>
            <pre className="text-xs bg-stone-50 rounded p-3 overflow-x-auto text-stone-700">
{`calibrated = softmax(logits / T)

T > 1 → spreads probability → less confident
T < 1 → concentrates probability → more confident
T = 1 → no change`}
            </pre>
            <p className="text-xs text-stone-500 mt-3">
              T is fit post-training on a held-out calibration set using LBFGS.
              It doesn&apos;t change which class wins — only the confidence values.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-3">v1 results</h3>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-stone-400 mb-1">Temperature (T)</div>
                <div className="font-mono text-2xl text-stone-900 font-semibold">0.6908</div>
                <div className="text-xs text-stone-400">Model was slightly underconfident</div>
              </div>
              <div className="border-t border-stone-100 pt-3">
                <div className="text-xs text-stone-400 mb-1">Expected Calibration Error (ECE)</div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-lg text-stone-500 line-through">0.1038</span>
                  <span className="text-stone-400">→</span>
                  <span className="font-mono text-2xl text-emerald-700 font-semibold">0.0034</span>
                </div>
                <div className="text-xs text-stone-400">
                  Confidence scores accurate to within ~0.3%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          T is baked into the exported Core ML model via{" "}
          <code className="font-mono text-xs bg-blue-100 px-1 py-0.5 rounded">
            forward_calibrated()
          </code>
          — the iOS app never sees raw logits. All outputs are calibrated probabilities.
        </div>
      </section>

      {/* Character Coverage */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Character coverage
        </h2>
        <p className="text-stone-600 mb-8 max-w-2xl">
          Coverage is measured against a 22-work Chữ Nôm corpus from chunom.org.
          Rare characters outside the class set fall through to Claude Vision API
          fallback.
        </p>
        <div className="space-y-4">
          {COVERAGE_TIERS.map((tier) => (
            <div key={tier.label} className="flex items-center gap-4">
              <div className="w-28 text-sm text-stone-600 flex-shrink-0">{tier.label}</div>
              <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-lacquer-500 rounded-full transition-all"
                  style={{ width: `${tier.bar}%` }}
                />
              </div>
              <div className="w-20 text-right">
                <span className="font-semibold text-stone-900">{tier.coverage}</span>
                <span className="text-xs text-stone-400 ml-1">({tier.classes})</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-4">
          v2 (2,000 classes) and v3 (3,000 classes) are blocked on additional training
          data. The app&apos;s correction flywheel — every user-verified label — is the
          primary mechanism for unlocking them.
        </p>
      </section>

      {/* Nav footer */}
      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/docs" className="btn-primary">
          OTA & developer docs →
        </Link>
        <Link href="/research" className="btn-secondary">
          Research context
        </Link>
      </div>
    </div>
  );
}
