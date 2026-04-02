import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Developer documentation for the NomLens OTA model delivery system, iOS components, and manifest specification.",
};

const IOS_COMPONENTS = [
  {
    name: "ModelManager",
    file: "Services/ModelManager.swift",
    description:
      "Central Swift actor responsible for fetching, verifying, storing, and activating models. All state mutations are serialized with no manual locking. Runs two concurrent startup tasks: loadStoredModel() (restores from disk, milliseconds) and checkForUpdates() (fetches manifest in background).",
  },
  {
    name: "ClassifierProxy",
    file: "Services/ClassifierProxy.swift",
    description:
      "Actor that wraps the active NomClassifier and allows hot-swapping at runtime. RoutingDecoder holds a reference to the proxy for the app lifetime. ModelManager calls proxy.update(newClassifier) after a successful download — all subsequent calls use the new model automatically.",
  },
  {
    name: "NomClassifier",
    file: "Services/NomClassifier.swift",
    description:
      "Wraps a Core ML model using Vision (VNCoreMLModel + VNCoreMLRequest). Accepts .mlpackage or pre-compiled .mlmodelc. Class labels are Unicode codepoints in hex (e.g. '4EBA') — NomClassifier converts these to actual Unicode characters ('人'). Vision handles center-crop and scaling to the model's input size.",
  },
  {
    name: "RoutingDecoder",
    file: "Services/RoutingDecoder.swift",
    description:
      "Sits between ClassifierProxy and ClaudeService. For each character crop, applies confidence routing: ≥90% → accepted on-device (green), 60–90% → accepted on-device (yellow), <60% → escalated to Claude API, throws → fail-safe escalation to Claude.",
  },
];

const GAPS = [
  {
    item: "Manifest server",
    status: "Missing",
    note: "https://api.nomlens.app/model/manifest.json does not exist yet. checkForUpdates() fails silently. Development workaround: hardcoded local model path in ContentView.",
  },
  {
    item: "Old model cleanup",
    status: "Missing",
    note: "Superseded model versions are not deleted from disk after a successful update. Disk usage grows unbounded across model versions.",
  },
  {
    item: "Rollback logic",
    status: "Partial",
    note: "Infrastructure supports it (previous .mlpackage stays on disk) but no explicit rollback path or UI exists. If new model fails verification, the old model stays active — but there's no deliberate revert trigger.",
  },
  {
    item: "Zip extraction",
    status: "N/A for now",
    note: ".mlpackage is a directory bundle. Current download writes bytes directly assuming server serves uncompressed content. If a zip is uploaded to the CDN, a decompression step must be added to ModelManager.download().",
  },
];

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <span className="section-label">Developer Docs</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          OTA Model Delivery
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
          NomLens delivers Core ML model updates over-the-air — no App Store update
          required. This documents the iOS-side architecture, manifest format, download
          pipeline, and current gaps.
        </p>
      </div>

      {/* Overview */}
      <section className="mb-16" id="overview">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Overview
        </h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          The OTA system is designed to be silent, safe, and non-blocking. It never
          interrupts the user, never corrupts a working model, and degrades gracefully
          when offline.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
          <h3 className="font-semibold text-stone-900 mb-3 text-sm">Startup sequence</h3>
          <pre className="text-xs font-mono text-stone-700 overflow-x-auto">
{`// ContentView.swift → ServiceContainer.init
Task { await manager.loadStoredModel() }   // 1. restore from disk (ms)
Task { await manager.checkForUpdates() }   // 2. fetch manifest (background)`}
          </pre>
          <p className="text-xs text-stone-500 mt-3">
            These two tasks run concurrently. The app is usable as soon as
            loadStoredModel() completes. The update check happens silently behind.
          </p>
        </div>
      </section>

      {/* iOS Components */}
      <section className="mb-16" id="ios-components">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          iOS components
        </h2>
        <div className="space-y-4">
          {IOS_COMPONENTS.map((comp) => (
            <div key={comp.name} className="card">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-stone-900 font-mono text-sm">
                  {comp.name}
                </h3>
                <code className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
                  {comp.file}
                </code>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{comp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifest Format */}
      <section className="mb-16" id="manifest">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Manifest format
        </h2>
        <p className="text-stone-600 mb-4">
          The manifest is a small JSON file at a fixed HTTPS endpoint, fetched on
          every app launch.
        </p>

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

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-2 text-stone-500 font-medium">Field</th>
                <th className="text-left px-4 py-2 text-stone-500 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["version",            "Compared against UserDefaults. If equal, no download occurs."],
                ["url",                "Direct download link for the .mlpackage. Can change between versions."],
                ["sha256",             "Hex-encoded SHA-256. Verified via CryptoKit before model touches the models directory."],
                ["num_classes",        "Informational — used to sanity-check the downloaded model."],
                ["class_list_version", "Identifies which classes/v*.txt file the model was trained against."],
                ["training_date",      "Informational metadata."],
                ["size_mb",            "Used for download progress reporting."],
              ].map(([field, purpose], i) => (
                <tr key={field} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                  <td className="px-4 py-2.5 font-mono text-xs text-stone-800">{field}</td>
                  <td className="px-4 py-2.5 text-stone-600 text-xs">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          <strong>Caching:</strong> The manifest must have{" "}
          <code className="font-mono text-xs bg-amber-100 px-1 py-0.5 rounded">Cache-Control: no-cache, no-store</code>{" "}
          so version checks are always fresh. The model file itself can use aggressive
          CDN caching — it&apos;s content-addressed by version.
        </div>
      </section>

      {/* Download & Verification */}
      <section className="mb-16" id="download">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Download &amp; verification flow
        </h2>

        <ol className="space-y-3">
          {[
            ["Fetch manifest", "10-second timeout. Non-2xx response → throw. Current model stays active."],
            ["Version check", "Compare manifest version against UserDefaults['nomModelVersion']. If same → stop."],
            ["Download to temp", "Model file downloads to a UUID path in tmp/. Partial downloads never replace a good model."],
            ["SHA-256 verify", "CryptoKit verifies temp file against manifest.sha256. Mismatch → delete temp file, throw. Current model stays active."],
            ["Move to models dir", "createDirectory for Application Support/NomLens/models/ if needed. Move verified temp file → models/{version}.mlpackage."],
            ["Activate", "Call activate(modelURL:version:) — see activation section below."],
          ].map(([title, body], i) => (
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

      {/* Model Activation */}
      <section className="mb-16" id="activation">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Model activation &amp; compile cache
        </h2>

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

      {/* Storage Layout */}
      <section className="mb-16" id="storage">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Storage layout
        </h2>

        <pre className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs font-mono text-stone-700">
{`Application Support/
  NomLens/
    models/
      1.0.0.mlpackage     ← downloaded source model
      1.0.0.mlmodelc      ← compiled cache (written after first load)`}
        </pre>
      </section>

      {/* Hosting Requirements */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Hosting requirements
        </h2>
        <p className="text-stone-600 mb-6">
          The iOS app needs two static files reachable over HTTPS. No dynamic backend
          required. Cloudflare R2 is recommended: free egress, global CDN, per-file
          cache control headers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="card">
            <div className="font-mono text-xs text-stone-500 mb-1">manifest.json</div>
            <p className="text-sm text-stone-600">
              Version check on every launch. Must be at a stable, permanent URL.
              Cache-Control: no-cache.
            </p>
          </div>
          <div className="card">
            <div className="font-mono text-xs text-stone-500 mb-1">
              NomLensClassifier_1.0.0.mlpackage
            </div>
            <p className="text-sm text-stone-600">
              10.6 MB model file. URL comes from manifest — can change between versions.
              Cache-Control: public, max-age=31536000.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-stone-600">
          <strong className="text-stone-800">Constraints:</strong> No auth headers (URLSession
          download sends no credentials). HTTPS required (iOS ATS enforced).
          Content-Length header recommended for progress reporting.
        </div>
      </section>

      {/* Known Gaps */}
      <section className="mb-16" id="gaps">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
          Known gaps
        </h2>

        <div className="space-y-3">
          {GAPS.map((gap) => (
            <div key={gap.item} className="card border-l-4 border-l-amber-400">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-stone-900">{gap.item}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    gap.status === "Missing"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : gap.status === "Partial"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-stone-50 text-stone-500 border border-stone-200"
                  }`}
                >
                  {gap.status}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{gap.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dev workaround callout */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">
          Current development workaround
        </h2>
        <p className="text-stone-600 mb-4">
          Until the manifest endpoint is live, the iOS app loads the model directly
          from a local path. This block must be removed before production:
        </p>
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
        <p className="text-sm text-stone-500 mt-3">
          The checkForUpdates() call already exists in the startup sequence and will
          take over once the manifest URL is real. Two additional changes are needed:{" "}
          <code className="font-mono text-xs">ModelManager.manifestURL</code> must be
          updated to the live endpoint.
        </p>
      </section>

      {/* Nav footer */}
      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/model" className="btn-primary">
          ← Model architecture
        </Link>
        <Link href="/research" className="btn-secondary">
          Research context
        </Link>
      </div>
    </div>
  );
}
