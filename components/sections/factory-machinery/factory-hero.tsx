import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function FactoryHero() {
  return (
    <section className="relative h-[460px] overflow-hidden">
      <Image
        src="/factory-machinery.png"
        alt="Factory and machinery"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-6xl text-center text-white">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link
              href="/"
              className="text-white/80 transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-white/70" />

            <span className="font-semibold">
              Factory & Machinery
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Manufacturing Excellence
          </h1>

          <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-white/90 sm:text-lg lg:text-2xl lg:leading-9">
            State-of-the-art facilities meeting the highest global ethical
            and quality standards through innovation and precision
          </p>
        </div>
      </div>
    </section>
  );
}