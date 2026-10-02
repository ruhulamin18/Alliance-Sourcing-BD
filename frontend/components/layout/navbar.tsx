"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { NAVIGATION } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isContactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[16px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-cyan-600"
                      : "text-slate-700 hover:text-cyan-600"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Us */}
          <Link
            href="/contact"
            className={`
              hidden
              rounded-lg
              bg-gradient-to-r from-blue-600 to-sky-400
              px-6 py-3
              text-sm font-bold
              text-white
              shadow-[0_6px_18px_rgba(59,130,246,0.25)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:from-blue-700
              hover:to-sky-500
              lg:block
              ${
                isContactActive
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : ""
              }
            `}
          >
            Contact Us
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
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
          <div className="border-t border-slate-200 py-3 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-cyan-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mx-1 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-400 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:from-blue-700 hover:to-sky-500"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}