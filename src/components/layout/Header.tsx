import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-stone-900 hover:text-lacquer-700 transition-colors"
        >
          Nom<span className="text-lacquer-600">Lens</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900
                         hover:bg-stone-50 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <a href="#download" className="btn-primary text-xs px-4 py-2">
            Download
          </a>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
