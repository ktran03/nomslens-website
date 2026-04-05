"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ResearchContent() {
  const { t } = useLanguage();
  const h = t.research;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <span className="section-label">{h.eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-900 mt-3 mb-4 leading-tight">
          {h.heading}
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">{h.description}</p>
      </div>

      {/* Preservation Crisis */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{h.crisis.heading}</h2>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-lacquer-500 pl-6 mb-8">
          <p className="font-serif text-xl md:text-2xl text-stone-800 leading-snug italic">
            &ldquo;{t.home.mission.pullQuote}&rdquo;
          </p>
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-stone-600 leading-relaxed mb-4">{h.crisis.p1}</p>
            <p className="text-stone-600 leading-relaxed mb-4">{h.crisis.p2}</p>
            <p className="text-stone-600 leading-relaxed">{h.crisis.p3}</p>
          </div>
          <div className="space-y-4">
            {h.crisis.stats.map((item) => (
              <div key={item.label} className="flex items-start gap-4 card">
                <div className="font-serif text-2xl font-bold text-lacquer-600 flex-shrink-0">
                  {item.stat}
                </div>
                <p className="text-sm text-stone-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision callout */}
        <div className="bg-stone-950 text-white rounded-2xl p-8 text-center">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-stone-100 max-w-2xl mx-auto">
            {t.home.mission.vision}
          </p>
        </div>
      </section>

      {/* Academic Work */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{h.academic.heading}</h2>
        <div className="space-y-4">
          {h.academic.papers.map((paper, i) => (
            <div key={paper.title}
              className={`card ${i === 0 ? "border-l-4 border-l-lacquer-400" : ""}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-stone-900">{paper.title}</h3>
                {"badge" in paper && (
                  <span className="text-xs bg-lacquer-50 text-lacquer-700 border border-lacquer-200 px-2 py-0.5 rounded-full font-medium">
                    {paper.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">{paper.body}</p>
              {"kaggle" in paper && (
                <div className="flex flex-wrap gap-3 text-xs">
                  <a href="https://www.kaggle.com/datasets/quandang/nomnaocr"
                    target="_blank" rel="noopener noreferrer"
                    className="text-lacquer-600 hover:text-lacquer-700 font-medium">
                    {paper.kaggle}
                  </a>
                  <a href="https://github.com/ds4v/NomNaOCR"
                    target="_blank" rel="noopener noreferrer"
                    className="text-lacquer-600 hover:text-lacquer-700 font-medium">
                    {paper.github}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.comparison.heading}</h2>
        <p className="text-stone-600 mb-6 max-w-2xl">{h.comparison.note}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="text-left px-4 py-3 text-stone-500 font-medium">{h.comparison.columns.dimension}</th>
                <th className="text-left px-4 py-3 text-stone-500 font-medium">{h.comparison.columns.academic}</th>
                <th className="text-left px-4 py-3 text-lacquer-600 font-medium">{h.comparison.columns.nomlens}</th>
              </tr>
            </thead>
            <tbody>
              {h.comparison.rows.map((row, i) => (
                <tr key={row.dimension} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                  <td className="px-4 py-3 text-stone-600 font-medium">{row.dimension}</td>
                  <td className="px-4 py-3 text-stone-500">{row.academic}</td>
                  <td className="px-4 py-3 text-stone-800 font-medium">{row.nomlens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-lacquer-50 border border-lacquer-200 rounded-lg p-4 text-sm text-lacquer-800">
          {h.comparison.highlight}
        </div>
      </section>

      {/* Kaggle */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.kaggle.heading}</h2>
        <div className="card">
          <p className="text-stone-600 leading-relaxed mb-4">{h.kaggle.body}</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.kaggle.com/datasets/quandang/nomnaocr"
              target="_blank" rel="noopener noreferrer" className="btn-primary">
              {h.kaggle.cta}
            </a>
            <span className="text-sm text-stone-500 self-center">{h.kaggle.note}</span>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">{h.roadmap.heading}</h2>
        <div className="space-y-4">
          {h.roadmap.phases.map((phase) => (
            <div key={phase.phase}
              className={`card border-l-4 ${
                phase.status === "complete" ? "border-l-emerald-400"
                : phase.status === "active"  ? "border-l-lacquer-400"
                : "border-l-stone-200"
              }`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                    phase.status === "complete" ? "text-emerald-600"
                    : phase.status === "active"  ? "text-lacquer-600"
                    : "text-stone-400"
                  }`}>{phase.phase}</div>
                  <h3 className="font-serif font-semibold text-stone-900 text-lg">{phase.title}</h3>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  phase.status === "complete"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : phase.status === "active"
                    ? "bg-lacquer-50 text-lacquer-700 border border-lacquer-200"
                    : "bg-stone-50 text-stone-400 border border-stone-200"
                }`}>
                  {phase.status === "complete" ? (t.research.eyebrow === "Nghiên Cứu" ? "Hoàn thành" : "Complete")
                    : phase.status === "active"  ? (t.research.eyebrow === "Nghiên Cứu" ? "Đang triển khai" : "In progress")
                    : (t.research.eyebrow === "Nghiên Cứu" ? "Tương lai" : "Future")}
                </span>
              </div>
              <ul className="space-y-1">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-stone-600 flex gap-2">
                    <span className={`flex-shrink-0 mt-0.5 ${
                      phase.status === "complete" ? "text-emerald-500"
                      : phase.status === "active"  ? "text-lacquer-500"
                      : "text-stone-300"
                    }`}>{phase.status === "complete" ? "✓" : "·"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Grants */}
      <section className="mb-16" id="partnerships">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.grants.heading}</h2>
        <p className="text-stone-600 mb-6 max-w-2xl">{h.grants.subhead}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {h.grants.items.map((grant) => (
            <div key={grant.name} className="card">
              <h3 className="font-semibold text-stone-900 mb-1">{grant.name}</h3>
              <div className="text-xs text-lacquer-600 font-medium mb-2">{grant.program}</div>
              <p className="text-sm text-stone-600 leading-relaxed">{grant.fit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Citation */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">{h.citation.heading}</h2>
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
          <p className="text-sm text-stone-500 mb-3">{h.citation.note}</p>
          <pre className="text-xs font-mono text-stone-700 whitespace-pre-wrap">
{`NomLens: On-Device Han Nôm Character Classification with Confidence-Routed
AI Fallback. [Author]. 2026. https://nomlens.app`}
          </pre>
        </div>
      </section>

      <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100">
        <Link href="/model" className="btn-primary">{h.footer.cta1}</Link>
        <Link href="/docs" className="btn-secondary">{h.footer.cta2}</Link>
      </div>
    </div>
  );
}
