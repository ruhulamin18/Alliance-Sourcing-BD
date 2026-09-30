import Image from "next/image";
import { FileText } from "lucide-react";

export function OwnFactory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Own Factory
            </h2>

            <h3 className="mt-6 text-xl font-semibold text-slate-800 sm:text-2xl">
              The Ways to Keep Business Growing Since 2007
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Are you interested to know details about our factory,
              production system and company policy at a glance? Please have
              a look at the provided pdf file.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/factory-profile.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FileText className="h-4 w-4" />
                Download PDF
              </a>

              <a
                href="/factory-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                View PDF
              </a>
            </div>
          </div>

          {/* Factory Image */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/factory-own.png"
              alt="Alliance factory"
              width={1000}
              height={700}
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}