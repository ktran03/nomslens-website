"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function DocsContent() {
  const { t } = useLanguage();
  const h = t.docs;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <span className="section-label">{h.eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          {h.heading}
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">{h.description}</p>
      </div>

      {/* Overview */}
      <section className="mb-16" id="overview">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.overview.heading}</h2>
        <p className="text-stone-600 leading-relaxed mb-4">{h.overview.body}</p>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
          <h3 className="font-semibold text-stone-900 mb-3 text-sm">{h.overview.startup}</h3>
          <pre className="text-xs font-mono text-stone-700 overflow-x-auto">
{`// ContentView.swift → ServiceContainer.init
Task { await manager.loadStoredModel() }   // 1. restore from disk (ms)
Task { await manager.checkForUpdates() }   // 2. fetch manifest (background)`}
          </pre>
          <p className="text-xs text-stone-500 mt-3">{h.overview.note}</p>
        </div>
      </section>

      {/* iOS Components */}
      <section className="mb-16" id="ios-components">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{h.components.heading}</h2>
        <div className="space-y-4">
          {h.components.items.map((comp) => (
            <div key={comp.name} className="card">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-stone-900 font-mono text-sm">{comp.name}</h3>
                <code className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">{comp.file}</code>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{comp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifest */}
      <section className="mb-16" id="manifest">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.manifest.heading}</h2>
        <p className="text-stone-600 mb-4">{h.manifest.subhead}</p>
        <pre className="bg-stone-900 text-stone-100 rounded-xl p-6 text-sm overflow-x-auto mb-4">
{`GET https://api.nomlens.app/model/manifest.json

{
  "version":            "1.0.0",
  "url":                "https://…/models/NomLensClassifier_1.0.0.mlpackage",
  "sha256":             "c0018e1270fe8f821248465a6f873544f4992b2ec58c344a0ef2d918d6e08439",
  "num_classes":        972,
  "class_list_version": "v1",
  "training_date":      "2026-03-27",
  "size_mb":            10.6
}`}
        </pre>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-2 text-stone-500 font-medium">Field</th>
                <th className="text-left px-4 py-2 text-stone-500 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {h.manifest.fields.map(([field, purpose], i) => (
                <tr key={field} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                  <td className="px-4 py-2.5 font-mono text-xs text-stone-800">{field}</td>
                  <td className="px-4 py-2.5 text-stone-600 text-xs">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          {h.manifest.cacheNote}
        </div>
      </section>

      {/* Download Flow */}
      <section className="mb-16" id="download">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.downloadFlow.heading}</h2>
        <ol className="space-y-3">
          {h.downloadFlow.steps.map(([title, body], i) => (
            <li key={title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-lacquer-100 text-lacquer-700
                              text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </div>
              <div>
                <span className="font-semibold text-stone-900">{title}: </span>
                <span className="text-stone-600 text-sm">{body}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Activation */}
      <section className="mb-16" id="activation">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.activation.heading}</h2>
        <div className="card mb-4">
          <pre className="text-xs font-mono text-stone-700 overflow-x-auto whitespace-pre-wrap">
{`activate(modelURL:version:) steps:

1. Check if {version}.mlmodelc exists in models dir
   → If yes: load compiled binary directly (fast, no recompile)

2. If only .mlpackage exists:
   → MLModel.compileModel(at:)
   → Load compiled result

3. Cache .mlmodelc to models dir for next launch
   (non-fatal if this fails)

4. proxy.update(newClassifier)
   → Hot-swap. New model is live, no restart required.

5. Persist version string to UserDefaults

6. Call onReady() on main actor
   → Sets ServiceContainer.isModelReady = true
   → Enables "Decode All" button in UI`}
          </pre>
        </div>
      </section>

      {/* Storage */}
      <section className="mb-16" id="storage">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.storage.heading}</h2>
        <pre className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs font-mono text-stone-700">
{`Application Support/
  NomLens/
    models/
      1.0.0.mlpackage     ← downloaded source model
      1.0.0.mlmodelc      ← compiled cache (written after first load)`}
        </pre>
      </section>

      {/* Hosting */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.hosting.heading}</h2>
        <p className="text-stone-600 mb-6">{h.hosting.subhead}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="card">
            <div className="font-mono text-xs text-stone-500 mb-1">{h.hosting.manifest.name}</div>
            <p className="text-sm text-stone-600">{h.hosting.manifest.desc}</p>
          </div>
          <div className="card">
            <div className="font-mono text-xs text-stone-500 mb-1">{h.hosting.model.name}</div>
            <p className="text-sm text-stone-600">{h.hosting.model.desc}</p>
          </div>
        </div>
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-stone-600">
          {h.hosting.note}
        </div>
      </section>

      {/* Known Gaps */}
      <section className="mb-16" id="gaps">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{h.gaps.heading}</h2>
        <div className="space-y-3">
          {h.gaps.items.map((gap) => (
            <div key={gap.item} className="card border-l-4 border-l-amber-400">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-stone-900">{gap.item}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  gap.status === "Missing" || gap.status === "Thiếu"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : gap.status === "Partial" || gap.status === "Một phần"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-stone-50 text-stone-500 border border-stone-200"
                }`}>{gap.status}</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{gap.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dev Workaround */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.workaround.heading}</h2>
        <p className="text-stone-600 mb-4">{h.workaround.subhead}</p>
        <pre className="bg-stone-900 text-stone-100 rounded-xl p-5 text-xs overflow-x-auto">
{`// ContentView.swift — REMOVE before production
Task {
    let e17 = URL(fileURLWithPath:
        "/Users/kt/Documents/NomLensMLModel/export/NomLensClassifier_1.0.0.mlpackage")
    if FileManager.default.fileExists(atPath: e17.path) {
        await manager.loadModel(at: e17)
    }
}`}
        </pre>
        <p className="text-sm text-stone-500 mt-3">{h.workaround.note}</p>
      </section>

      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/model" className="btn-primary">{h.footer.cta1}</Link>
        <Link href="/research" className="btn-secondary">{h.footer.cta2}</Link>
      </div>
    </div>
  );
}
