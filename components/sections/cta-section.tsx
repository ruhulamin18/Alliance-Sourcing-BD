import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/garment-rack.png"
        alt="Apparel sourcing"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            CLOSING
          </p>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Ready to start sourcing?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Let us handle your manufacturing needs from start to finish.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-sky-500 px-12 py-4 text-lg font-bold text-white transition duration-300 hover:bg-sky-600"
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="rounded-xl bg-white px-12 py-4 text-lg font-bold text-sky-500 transition duration-300 hover:bg-slate-100"
            >
              Learn
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}