"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { NAVIGATION } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-bold text-slate-700 transition hover:text-cyan-600"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 lg:block"
          >
            Contact Us
          </Link>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="border-t border-slate-200 py-4 lg:hidden">

            <nav className="flex flex-col gap-1">

              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Speak with us
              </Link>

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}