"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const DECORATIVE_CHARS = "漢喃越南字書文詩史";

export function HomePageContent() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div aria-hidden="true"
          className="nom-bg absolute inset-0 flex items-center justify-center
                     text-[22rem] text-white/[0.03] leading-none tracking-tight
                     overflow-hidden select-none">
          {DECORATIVE_CHARS}
        </div>
        <div aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-48
                     bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="section-label text-lacquer-400">{h.hero.eyebrow}</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mt-4 mb-6 leading-[1.1]">
              {h.hero.line1}<br />
              <span className="text-lacquer-400">{h.hero.line2}</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-4 leading-relaxed max-w-xl">
              {h.hero.description}{" "}
              <strong className="text-white">{h.hero.offline}</strong>.
            </p>
            <p className="text-sm text-stone-500 mb-10">{h.hero.subtext}</p>
            <div className="flex flex-wrap gap-3" id="download">
              <a href="#download"
                className="inline-flex items-center gap-2.5 bg-lacquer-600 hover:bg-lacquer-500
                           text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {h.hero.downloadCTA}
              </a>
              <Link href="/how-it-works"
                className="inline-flex items-center gap-2 border border-stone-700 hover:border-stone-500
                           text-stone-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors">
                {h.hero.learnCTA} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-stone-400">
              <span><strong className="text-white">97.6%</strong> {h.hero.stats.accuracy.replace("97.6% ", "").replace("97,6% ", "")}</span>
              <span><strong className="text-white">&lt;10ms</strong> {h.hero.stats.inference.replace(/^.*?ms\s*/, "")}</span>
              <span><strong className="text-white">10.6 MB</strong> {h.hero.stats.size.replace(/^.*?MB\s*·\s*/, "· ")}</span>
              <span><strong className="text-white">972</strong> {h.hero.stats.classes.replace("972 ", "")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Han Nôm? ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">{h.whatIsHanNom.eyebrow}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3 mb-5">
              {h.whatIsHanNom.heading}
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>{h.whatIsHanNom.p1}</p>
              <p>{h.whatIsHanNom.p2}</p>
              <p>{h.whatIsHanNom.p3}</p>
            </div>
            <Link href="/research"
              className="inline-flex items-center gap-1.5 mt-6 text-lacquer-600
                         hover:text-lacquer-700 text-sm font-medium">
              {h.whatIsHanNom.cta}
            </Link>
          </div>
          <div aria-hidden="true"
            className="nom-bg hidden md:flex flex-wrap items-center justify-center
                       gap-4 text-5xl text-stone-500 p-12 rounded-2xl bg-parchment-100
                       border border-parchment-200 select-none">
            {["漢", "喃", "越", "南", "字", "書", "文", "詩", "史", "國", "語", "詞"].map((char, i) => (
              <span key={i} className="hover:text-lacquer-500 transition-colors cursor-default"
                style={{ opacity: 0.55 + (i % 4) * 0.12 }}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pipeline ───────────────────────────────────────────────────────── */}
      <section className="bg-parchment-50 border-y border-parchment-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">{h.pipeline.eyebrow}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3">
              {h.pipeline.heading}
            </h2>
            <p className="text-stone-500 mt-3 max-w-lg mx-auto">{h.pipeline.subhead}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {h.pipelineSteps.map((step, i) => (
              <div key={step.step}
                className="relative bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
                {i < h.pipelineSteps.length - 1 && (
                  <span aria-hidden
                    className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2
                               text-stone-300 text-lg z-10">→</span>
                )}
                <div className="text-2xl mb-3">{step.icon}</div>
                <div className="text-xs font-mono text-lacquer-500 mb-1">{step.step}</div>
                <h3 className="font-serif font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/how-it-works" className="btn-secondary">{h.pipeline.cta}</Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ──────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="section-label">{h.stats.eyebrow}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3">
            {h.stats.heading}
          </h2>
          <p className="text-stone-500 mt-3 max-w-md mx-auto">{h.stats.subhead}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {h.modelStats.map((stat) => (
            <div key={stat.label} className="card text-center hover:border-stone-300 transition-colors">
              <div className="stat-number">{stat.value}</div>
              <div className="text-sm font-medium text-stone-700 mt-2">{stat.label}</div>
              <div className="text-xs text-stone-400 mt-1">{stat.note}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/model" className="btn-secondary">{h.stats.cta}</Link>
        </div>
      </section>

      {/* ─── Mission ────────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 text-white py-28">
        <div className="max-w-5xl mx-auto px-6">

          {/* Eyebrow */}
          <div className="text-center mb-12">
            <span className="section-label text-lacquer-400">{h.mission.eyebrow}</span>
          </div>

          {/* Pull quote */}
          <blockquote className="text-center mb-16">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight
                          text-white max-w-3xl mx-auto">
              &ldquo;{h.mission.pullQuote}&rdquo;
            </p>
          </blockquote>

          {/* Narrow window */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-stone-300 text-lg leading-relaxed italic">
              {h.mission.window}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-stone-800" />
            <span className="nom-bg text-stone-600 text-2xl select-none">漢喃</span>
            <div className="flex-1 h-px bg-stone-800" />
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="font-serif text-xl font-semibold text-lacquer-400 mb-4 leading-snug">
                {h.mission.heading}
              </h2>
              <p className="text-stone-400 leading-relaxed">{h.mission.p1}</p>
            </div>
            <div>
              <p className="text-stone-300 leading-relaxed mb-6">{h.mission.p2}</p>
            </div>
          </div>

          {/* Vision statement */}
          <div className="border border-stone-700 rounded-2xl p-8 md:p-10 text-center">
            <p className="font-serif text-xl md:text-2xl text-stone-100 leading-relaxed max-w-2xl mx-auto">
              {h.mission.vision}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link href="/research" className="btn-primary">{h.mission.cta1}</Link>
            <Link href="/research#partnerships"
              className="border border-stone-700 hover:border-stone-500 text-stone-300
                         hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              {h.mission.cta2}
            </Link>
          </div>

        </div>
      </section>

      {/* ─── Audiences ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="section-label">{h.audiences.eyebrow}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3">
            {h.audiences.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {h.audiences.cards.map((card) => (
            <div key={card.audience} className="card flex flex-col hover:border-stone-300 transition-colors">
              <div className="text-3xl mb-4">{card.icon}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-lacquer-600 mb-2">
                {card.audience}
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">{card.headline}</h3>
              <p className="text-sm text-stone-600 leading-relaxed flex-1">{card.body}</p>
              <div className="mt-5">
                <Link href={card.href}
                  className="text-lacquer-600 hover:text-lacquer-700 text-sm font-medium">
                  {card.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Download CTA ───────────────────────────────────────────────────── */}
      <section className="bg-lacquer-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div aria-hidden="true" className="nom-bg text-6xl text-white/10 mb-4 select-none">漢喃</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">{h.download.heading}</h2>
          <p className="text-lacquer-200 mb-8 max-w-sm mx-auto">{h.download.subhead}</p>
          <a href="#download"
            className="inline-flex items-center gap-2.5 bg-white text-lacquer-700
                       hover:bg-lacquer-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {h.download.cta}
          </a>
          <p className="text-lacquer-300 text-xs mt-4">{h.download.footnote}</p>
        </div>
      </section>
    </>
  );
}
