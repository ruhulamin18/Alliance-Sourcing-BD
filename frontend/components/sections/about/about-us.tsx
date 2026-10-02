import Image from "next/image";

export function AboutUs() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
      <Image
        src="/garment-rack.png"
        alt="Apparel sourcing and garment manufacturing"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold text-white sm:text-base">
          About Us
        </p>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          About Alliance Sourcing BD
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg lg:text-xl">
          Your trusted partner in apparel sourcing and manufacturing,
          connecting international buyers with reliable suppliers across
          Bangladesh.
        </p>
      </div>
    </section>
  );
}