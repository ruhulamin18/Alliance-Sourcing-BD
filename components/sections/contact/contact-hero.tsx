import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/contact-hero.png"
        alt="Apparel sourcing and garment manufacturing"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white">

          {/* Breadcrumb */}
          <div className="mb-5 flex items-center justify-center gap-2 text-sm sm:text-base">
            <Link
              href="/"
              className="text-white/80 transition hover:text-white"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4 text-white/70" />

            <span className="font-semibold text-white">
              Contact Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/90 sm:text-xl">
            We&apos;re here to answer your questions and discuss your sourcing
            needs
          </p>
        </div>
      </div>
    </section>
  );
}