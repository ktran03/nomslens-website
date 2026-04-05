"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const ARCHITECTURE_ROWS = [
  { property: "Architecture",       value: "EfficientNet-B0"                                },
  { property: "Parameters",         value: "5.3M"                                           },
  { property: "Input",              value: "96×96 px RGB, single character crop"            },
  { property: "Output",             value: "classLabel (String) + classLabelProbs (Dict)"  },
  { property: "Format",             value: ".mlpackage (mlprogram, iOS 16+)"               },
  { property: "Size",               value: "10.6 MB (v1)"                                  },
  { property: "Inference",          value: "<10ms on iPhone Neural Engine"                  },
  { property: "Temperature (T)",    value: "0.6908"                                         },
  { property: "ECE after scaling",  value: "0.0034"                                         },
  { property: "Training framework", value: "PyTorch ≥2.2.0 + coremltools ≥7.0"            },
];

export function ModelContent() {
  const { t } = useLanguage();
  const h = t.model;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <span className="section-label">{h.eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          {h.heading}
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">{h.description}</p>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {t.home.modelStats.slice(0, 4).map((stat) => (
          <div key={stat.label} className="card text-center">
            <div className="stat-number">{stat.value}</div>
            <div className="text-sm font-medium text-stone-700 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{h.architecture.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-stone-600 leading-relaxed mb-4">{h.architecture.p1}</p>
            <p className="text-stone-600 leading-relaxed mb-4">{h.architecture.p2}</p>
            <p className="text-stone-600 leading-relaxed">{h.architecture.p3}</p>
          </div>
          <div className="bg-stone-900 text-stone-100 rounded-xl p-5 text-xs font-mono overflow-x-auto">
            <div className="text-stone-400 mb-3 text-xs">EfficientNet-B0 shape trace</div>
            {[
              ["Input",              "[1, 3, 96, 96]"],
              ["Stem Conv 3×3 s2",   "[1, 32, 48, 48]"],
              ["MBConv1 ×1",         "[1, 16, 48, 48]"],
              ["MBConv6 ×2 (1)",     "[1, 24, 24, 24]"],
              ["MBConv6 ×2 (2)",     "[1, 40, 12, 12]"],
              ["MBConv6 ×3 (1)",     "[1, 80, 6, 6]"],
              ["MBConv6 ×3 (2)",     "[1, 112, 6, 6]"],
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
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.training.heading}</h2>
        <p className="text-stone-600 mb-8 max-w-2xl">{h.training.subhead}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {h.training.phases.map((phase) => (
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
          <h4 className="font-semibold text-stone-900 mb-2">{h.training.imbalance.heading}</h4>
          <p className="text-stone-600 leading-relaxed">{h.training.imbalance.body}</p>
        </div>
      </section>

      {/* Training Data */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{/* "Training data" */}
          {t.model.training.heading.includes("Huấn") ? "Dữ Liệu Huấn Luyện" : "Training data"}
        </h2>
        <div className="space-y-4">
          {h.dataSources.map((src) => (
            <div key={src.name} className="card">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-stone-900">{src.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  src.role.startsWith("Chính") || src.role.startsWith("Primary")
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-stone-50 text-stone-500 border border-stone-200"
                }`}>{src.role}</span>
              </div>
              <p className="text-sm text-stone-600 mb-2 leading-relaxed">{src.description}</p>
              <p className="text-xs text-stone-400 italic">{src.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temperature Scaling */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.tempScaling.heading}</h2>
        <p className="text-stone-600 mb-6 max-w-2xl leading-relaxed">{h.tempScaling.subhead}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-2">{h.tempScaling.fix}</h3>
            <pre className="text-xs bg-stone-50 rounded p-3 overflow-x-auto text-stone-700">
{`calibrated = softmax(logits / T)

T > 1 → spreads probability → less confident
T < 1 → concentrates probability → more confident
T = 1 → no change`}
            </pre>
          </div>
          <div className="card">
            <h3 className="font-semibold text-stone-900 mb-3">{h.tempScaling.results}</h3>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-stone-400 mb-1">Temperature (T)</div>
                <div className="font-mono text-2xl text-stone-900 font-semibold">0.6908</div>
              </div>
              <div className="border-t border-stone-100 pt-3">
                <div className="text-xs text-stone-400 mb-1">ECE</div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-lg text-stone-500 line-through">0.1038</span>
                  <span className="text-stone-400">→</span>
                  <span className="font-mono text-2xl text-emerald-700 font-semibold">0.0034</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          {h.tempScaling.note}
        </div>
      </section>

      {/* Character Coverage */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.coverage.heading}</h2>
        <p className="text-stone-600 mb-8 max-w-2xl">{h.coverage.subhead}</p>
        <div className="space-y-4">
          {h.coverage.tiers.map((tier) => (
            <div key={tier.label} className="flex items-center gap-4">
              <div className="w-32 text-sm text-stone-600 flex-shrink-0">{tier.label}</div>
              <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden">
                <div className="h-full bg-lacquer-500 rounded-full" style={{ width: `${tier.bar}%` }} />
              </div>
              <div className="w-24 text-right">
                <span className="font-semibold text-stone-900">{tier.coverage}</span>
                <span className="text-xs text-stone-400 ml-1">({tier.classes})</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-4">{h.coverage.note}</p>
      </section>

      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/docs" className="btn-primary">{h.footer.cta1}</Link>
        <Link href="/research" className="btn-secondary">{h.footer.cta2}</Link>
      </div>
    </div>
  );
}
