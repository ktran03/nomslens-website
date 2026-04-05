"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const { t, lang } = useLanguage();
  const f = t.footer;
  const navLinks = NAV_LINKS.map((link) => ({
    ...link,
    label: t.nav[link.label.replace(/ /g, "") as keyof typeof t.nav] ?? link.label,
  }));

  return (
    <footer className="bg-stone-950 text-stone-400 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-serif text-xl font-semibold text-white mb-3">
              Nom<span className="text-lacquer-400">Lens</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{f.tagline}</p>
            <p className="text-xs mt-4 text-stone-600">{f.subtitle}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
              {f.navigation}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
              {f.resources}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.chunom.org" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">chunom.org</a>
              </li>
              <li>
                <a href="https://www.kaggle.com/datasets/quandang/nomnaocr"
                  target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">NomNaOCR Dataset</a>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  {lang === "vi" ? "Bối cảnh học thuật" : "Academic Background"}
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  {lang === "vi" ? "Tài liệu nhà phát triển" : "Developer Docs"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-start
                        sm:items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} NomLens. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-stone-400 transition-colors">{f.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
