import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-xl font-semibold text-white mb-3">
              Nom<span className="text-lacquer-400">Lens</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Decoding Han Nôm script for scholars, researchers, and anyone who
              wants to read what time is erasing.
            </p>
            <p className="text-xs mt-4 text-stone-600">
              漢喃 · Chữ Nôm · Classical Vietnamese
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.chunom.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  chunom.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/datasets/quandang/nomnaocr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  NomNaOCR Dataset
                </a>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Academic Background
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  Developer Docs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} NomLens. All rights reserved.</p>
          <div className="flex gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-stone-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
