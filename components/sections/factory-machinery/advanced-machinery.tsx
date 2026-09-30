import Image from "next/image";

const machines = [
  {
    title: "THREAD SUCKING MACHINE",
    image: "/factory-own.png",
  },
  {
    title: "NEEDLE DETECTOR MACHINE",
    image: "/machinery.png",
  },
];

export function AdvancedMachinery() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Advanced Machinery
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We invest in the latest industry 4.0 technology to reduce waste
            and maximize efficiency
          </p>
        </div>

        {/* Machine Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {machines.map((machine) => (
            <div
              key={machine.title}
              className="group relative h-[360px] overflow-hidden rounded-2xl"
            >
              <Image
                src={machine.image}
                alt={machine.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-lg font-bold tracking-wide text-white sm:text-xl">
                {machine.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}