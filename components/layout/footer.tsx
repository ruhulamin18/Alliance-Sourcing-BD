import Link from "next/link";

import { NAVIGATION, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h2 className="text-xl font-bold">
              Alliance Sourcing BD
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Professional buying and sourcing services for apparel and
              garment manufacturing.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <span className="text-sm text-slate-400">
                Garment Sourcing
              </span>

              <span className="text-sm text-slate-400">
                Quality Control
              </span>

              <span className="text-sm text-slate-400">
                Production Management
              </span>

              <span className="text-sm text-slate-400">
                Logistics Support
              </span>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">

              <p>{CONTACT_INFO.address}</p>

              <p>{CONTACT_INFO.email}</p>

              <p>{CONTACT_INFO.phone}</p>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Alliance Sourcing BD. All rights
            reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}