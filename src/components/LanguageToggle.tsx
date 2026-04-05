"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-stone-200 overflow-hidden text-xs font-semibold">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-stone-900 text-white"
            : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
        }`}
        aria-pressed={lang === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("vi")}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "vi"
            ? "bg-stone-900 text-white"
            : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
        }`}
        aria-pressed={lang === "vi"}
        aria-label="Chuyển sang tiếng Việt"
      >
        VI
      </button>
    </div>
  );
}
