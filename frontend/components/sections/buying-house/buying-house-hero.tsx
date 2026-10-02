import Image from "next/image";

export function BuyingHouseHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-2xl">
            {/* Small Label */}
            <p className="text-lg font-bold tracking-tight text-blue-900 sm:text-xl">
              Buying House{" "}
              <span className="text-sky-500">Services</span>
            </p>

            {/* Heading */}
            <h1 className="mt-3 text-5xl font-extrabold leading-[1.02] tracking-tight text-blue-950 sm:text-6xl lg:text-[64px]">
              Professional
              <span className="block">Sourcing Services</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              State-of-the-art facilities meeting the highest global ethical
              and quality standards through innovation and precision. Your
              premier partner in seamless garments manufacturing and apparels
              sourcing.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[500px] lg:min-h-screen">
          <Image
            src="/buying-house.png"
            alt="Garment manufacturing and apparel sourcing"
            fill
            priority
            className="object-cover"
          />

          {/* Soft blend into left side */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent lg:w-48" />

          {/* Bottom soft overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}