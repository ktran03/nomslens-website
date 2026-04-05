"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function HowItWorksContent() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <span className="section-label">{h.eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          {h.heading}
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">{h.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="bg-stone-900 text-white rounded-xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">{h.phase1.label}</div>
          <h2 className="font-serif text-xl font-semibold mb-2">{h.phase1.heading}</h2>
          <p className="text-sm text-stone-400 leading-relaxed">{h.phase1.description}</p>
        </div>
        <div className="bg-lacquer-50 border border-lacquer-200 rounded-xl p-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-lacquer-600 mb-2">{h.phase2.label}</div>
          <h2 className="font-serif text-xl font-semibold text-lacquer-900 mb-2">{h.phase2.heading}</h2>
          <p className="text-sm text-lacquer-800/70 leading-relaxed">{h.phase2.description}</p>
        </div>
      </div>

      {/* Full Pipeline Steps */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-8">{h.pipelineHeading}</h2>
        <div className="space-y-10">
          {t.home.pipelineSteps.map((step, i) => (
            <div key={step.step}
              className="flex gap-6 items-start pb-10 border-b border-stone-100 last:border-0">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-parchment-100 border border-parchment-200
                              flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-lacquer-500">{step.step}</span>
                  <h3 className="font-serif text-xl font-semibold text-stone-900">{step.title}</h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">{step.description}</p>
                {i === 1 && (
                  <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-stone-600">
                    <strong className="text-stone-800 block mb-2">{h.filterChain.heading}</strong>
                    <ol className="list-decimal list-inside space-y-1">
                      {h.filterChain.filters.map((f) => <li key={f}>{f}</li>)}
                    </ol>
                    <p className="mt-2 text-stone-500">{h.filterChain.note}</p>
                  </div>
                )}
                {i === 2 && (
                  <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-stone-600">
                    <strong className="text-stone-800 block mb-2">{h.readingOrder.heading}</strong>
                    <p>{h.readingOrder.body}</p>
                    <p className="mt-2 text-stone-500">{h.readingOrder.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confidence Routing */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.confidenceRouting.heading}</h2>
        <p className="text-stone-600 mb-8 max-w-2xl">{h.confidenceRouting.subhead}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {h.confidenceRouting.tiers.map((tier) => (
            <div key={tier.range}
              className={`rounded-xl p-5 border ${
                tier.color === "green"  ? "bg-emerald-50 border-emerald-200"
                : tier.color === "yellow" ? "bg-amber-50 border-amber-200"
                : "bg-red-50 border-red-200"
              }`}>
              <div className={`text-2xl font-serif font-bold mb-1 ${
                tier.color === "green"  ? "text-emerald-700"
                : tier.color === "yellow" ? "text-amber-700"
                : "text-red-700"
              }`}>{tier.range}</div>
              <div className="text-sm font-semibold text-stone-700 mb-1">{tier.label}</div>
              <p className="text-xs text-stone-500 leading-relaxed">{tier.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          {h.confidenceRouting.warning}
        </div>
      </section>

      {/* Result Structure */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.resultStructure.heading}</h2>
        <p className="text-stone-600 mb-6">{h.resultStructure.subhead}</p>
        <pre className="bg-stone-900 text-stone-100 rounded-xl p-6 text-sm overflow-x-auto">
{`{
  "character":          "南",
  "type":               "han",
  "quoc_ngu":           "nam",
  "meaning":            "south",
  "confidence":         "high",
  "alternate_readings": [],
  "damage_noted":       false,
  "notes":              ""
}`}
        </pre>
        <p className="text-sm text-stone-400 mt-3">{h.resultStructure.note}</p>
      </section>

      {/* OTA */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.ota.heading}</h2>
        <p className="text-stone-600 mb-6 max-w-2xl">{h.ota.subhead}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {h.ota.cards.map((card) => (
            <div key={card.title} className="card">
              <h3 className="font-semibold text-stone-900 mb-2">{card.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/docs" className="btn-secondary">{h.ota.cta}</Link>
        </div>
      </section>

      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/model" className="btn-primary">{h.footer.cta1}</Link>
        <Link href="/docs" className="btn-secondary">{h.footer.cta2}</Link>
      </div>
    </div>
  );
}
