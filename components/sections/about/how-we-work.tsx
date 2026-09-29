import Link from "next/link";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    icon: "💬",
    title: "Consultation",
    description:
      "We listen to your needs and understand your specifications",
  },
  {
    icon: "🤝",
    title: "Supplier match",
    description:
      "We match you with manufacturers who meet your standards",
  },
  {
    icon: "🛒",
    title: "Order management",
    description:
      "We negotiate terms and oversee production from start to finish",
  },
  {
    icon: "🔍",
    title: "Quality check",
    description:
      "Every batch is checked against your specifications and standards",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Left Side */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              PROCESS
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              How we work
            </h2>

            <p className="mt-5 max-w-sm text-base leading-7 text-slate-500">
              A simple and transparent process designed to keep your
              sourcing journey efficient and reliable.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600"
            >
              Discuss
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Side */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-7 top-8 bottom-8 hidden w-px bg-slate-200 sm:block" />

            <div className="space-y-10">

              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="relative flex gap-6"
                >

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-sm ring-1 ring-slate-100">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-base leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}