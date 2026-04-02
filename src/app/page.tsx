import type { Metadata } from "next";
import Link from "next/link";
import { PIPELINE_STEPS, MODEL_STATS, AUDIENCE_CARDS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "NomLens — Han Nôm Decoder",
  description:
    "NomLens decodes Han Nôm script from photos of stone steles, temple inscriptions, and ancient manuscripts — on your iPhone, offline.",
};

const DECORATIVE_CHARS = "漢喃越南字書文詩史";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        {/* Decorative Nôm characters */}
        <div
          aria-hidden="true"
          className="nom-bg absolute inset-0 flex items-center justify-center
                     text-[22rem] text-white/[0.03] leading-none tracking-tight
                     overflow-hidden select-none"
        >
          {DECORATIVE_CHARS}
        </div>

        {/* Red gradient */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-48
                     bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="section-label text-lacquer-400">Han Nôm Decoder · iOS</span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mt-4 mb-6 leading-[1.1]">
              Read what<br />
              <span className="text-lacquer-400">time is erasing.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 mb-4 leading-relaxed max-w-xl">
              NomLens decodes Han Nôm script from photos of stone steles, temple
              inscriptions, and ancient Vietnamese manuscripts — on your iPhone,
              <strong className="text-white"> offline</strong>.
            </p>

            <p className="text-sm text-stone-500 mb-10">
              Characters, Quốc ngữ transliteration, and English meaning. In seconds.
            </p>

            <div className="flex flex-wrap gap-3" id="download">
              <a
                href="#download"
                className="inline-flex items-center gap-2.5 bg-lacquer-600 hover:bg-lacquer-500
                           text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 border border-stone-700 hover:border-stone-500
                           text-stone-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                How it works
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stat ribbon */}
        <div className="relative border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-stone-400">
              <span><strong className="text-white">97.6%</strong> validation accuracy</span>
              <span><strong className="text-white">&lt;10ms</strong> per character on Neural Engine</span>
              <span><strong className="text-white">10.6 MB</strong> model · works offline</span>
              <span><strong className="text-white">972</strong> character classes (v1)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Han Nôm? ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">The Script</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3 mb-5">
              What is Han Nôm?
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                <strong className="text-stone-800">Chữ Nôm</strong> (漢喃) was the primary
                writing system of Vietnam for over a thousand years. It combines Chinese
                characters (Hán) with characters invented specifically for Vietnamese
                sounds and concepts (Nôm).
              </p>
              <p>
                The script was used for imperial edicts, poetry, religious texts, genealogies,
                and stele inscriptions. Vietnam&apos;s greatest literary work —{" "}
                <em>Truyện Kiều</em> — was originally written in chữ Nôm.
              </p>
              <p>
                Today, fewer than 100 scholars worldwide can read it fluently. The physical
                artifacts — stone steles, aged manuscripts, temple carvings — deteriorate
                every year. The window for preservation is closing.
              </p>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 mt-6 text-lacquer-600
                         hover:text-lacquer-700 text-sm font-medium"
            >
              Research context →
            </Link>
          </div>

          {/* Decorative character block */}
          <div
            aria-hidden="true"
            className="nom-bg hidden md:flex flex-wrap items-center justify-center
                       gap-4 text-5xl text-stone-500 p-12 rounded-2xl bg-parchment-100
                       border border-parchment-200 select-none"
          >
            {["漢", "喃", "越", "南", "字", "書", "文", "詩", "史", "國", "語", "詞"].map(
              (char, i) => (
                <span
                  key={i}
                  className="hover:text-lacquer-500 transition-colors cursor-default"
                  style={{ opacity: 0.55 + (i % 4) * 0.12 }}
                >
                  {char}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─────────────────────────────────────────────────────── */}
      <section className="bg-parchment-50 border-y border-parchment-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Pipeline</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3">
              How NomLens works
            </h2>
            <p className="text-stone-500 mt-3 max-w-lg mx-auto">
              Five steps from raw photo to structured decode. Steps 1–4 run
              entirely on-device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PIPELINE_STEPS.map((step, i) => (
              <div
                key={step.step}
                className="relative bg-white border border-stone-200 rounded-xl p-5 shadow-sm"
              >
                {/* Connector arrow on desktop */}
                {i < PIPELINE_STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2
                               text-stone-300 text-lg z-10"
                  >
                    →
                  </span>
                )}

                <div className="text-2xl mb-3">{step.icon}</div>
                <div className="text-xs font-mono text-lacquer-500 mb-1">{step.step}</div>
                <h3 className="font-serif font-semibold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/how-it-works" className="btn-secondary">
              Full pipeline walkthrough →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="section-label">Performance</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3">
            By the numbers
          </h2>
          <p className="text-stone-500 mt-3 max-w-md mx-auto">
            EfficientNet-B0 with temperature-scaled calibration. v1 model, trained on
            HWDB handwriting + Han Nôm font renders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MODEL_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card text-center hover:border-stone-300 transition-colors"
            >
              <div className="stat-number">{stat.value}</div>
              <div className="text-sm font-medium text-stone-700 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-stone-400 mt-1">{stat.note}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/model" className="btn-secondary">
            Model architecture & training →
          </Link>
        </div>
      </section>

      {/* ─── The Mission ──────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label text-lacquer-400">Mission</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug">
              The scholarly community is small,<br />
              the artifacts are deteriorating,<br />
              and the window is closing.
            </h2>
            <p className="text-stone-400 leading-relaxed mb-6">
              The Vietnamese Nôm Preservation Foundation spent two decades digitizing
              manuscripts before dissolving in 2018. Academic OCR research reaches
              71–85% accuracy on pristine woodblock prints — but there&apos;s no production
              iOS app and no offline capability for field use.
            </p>
            <p className="text-stone-300 leading-relaxed">
              NomLens was built for scholars at remote temples and rural sites where
              there is no cell signal. Every decode session contributes to a correction
              flywheel that makes the model smarter. Every verified correction becomes
              labeled training data that doesn&apos;t exist anywhere else.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/research" className="btn-primary">
                Academic background →
              </Link>
              <Link
                href="/research#partnerships"
                className="border border-stone-700 hover:border-stone-500 text-stone-300
                           hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium
                           transition-colors"
              >
                Partnership opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── For Every Audience ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="section-label">Who It&apos;s For</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mt-3">
            Built for three kinds of people
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE_CARDS.map((card) => (
            <div
              key={card.audience}
              className="card flex flex-col hover:border-stone-300 transition-colors"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-lacquer-600 mb-2">
                {card.audience}
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">
                {card.headline}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed flex-1">
                {card.body}
              </p>
              <div className="mt-5">
                <Link
                  href={card.cta.href}
                  className="text-lacquer-600 hover:text-lacquer-700 text-sm font-medium"
                >
                  {card.cta.label} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Download CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-lacquer-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div
            aria-hidden="true"
            className="nom-bg text-6xl text-white/10 mb-4 select-none"
          >
            漢喃
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Start decoding
          </h2>
          <p className="text-lacquer-200 mb-8 max-w-sm mx-auto">
            Free download. Works offline. No account required.
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-white text-lacquer-700
                       hover:bg-lacquer-50 px-8 py-4 rounded-xl font-semibold text-lg
                       transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
          <p className="text-lacquer-300 text-xs mt-4">Requires iOS 17+</p>
        </div>
      </section>
    </>
  );
}
