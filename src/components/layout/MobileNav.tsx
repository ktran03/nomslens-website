"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span
          className={`block w-5 h-0.5 bg-stone-700 transition-transform origin-center ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-stone-700 transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-stone-700 transition-transform origin-center ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-stone-950/40"
            onClick={() => setOpen(false)}
          />

          {/* Menu panel */}
          <nav className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
              <span className="font-serif font-semibold text-stone-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-stone-500 hover:text-stone-900 p-1"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-1 px-4 py-4 flex-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-lacquer-50 text-lacquer-700"
                      : "text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="px-4 py-4 border-t border-stone-100">
              <a
                href="#download"
                className="btn-primary w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Download
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
