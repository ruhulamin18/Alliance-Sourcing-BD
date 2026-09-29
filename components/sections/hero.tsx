import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/garment-rack.png"
        alt="Garment sourcing"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-5xl text-center">

          <p className="inline-block rounded-full border border-white/30 bg-black/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.10em] text-white backdrop-blur-sm">
            House Of Fashion Stitching
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Your trusted partner in apparel sourcing
            
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
           We connect international buyers with reliable manufacturers across Bangladesh. From product development to final shipment, we handle every detail with precision and care.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-lg bg-cyan-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Start Sourcing
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}