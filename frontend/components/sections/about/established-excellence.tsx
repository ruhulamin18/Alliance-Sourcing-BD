import Image from "next/image";

export function EstablishedExcellence() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/Services.png"
              alt="Garment factory and apparel sourcing"
              width={1000}
              height={750}
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[590px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              ESTABLISHED EXCELLENCE
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Professional buying
              <span className="block">
                house services
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-slate-500 sm:text-lg">
              Founded with a vision to provide dependable apparel sourcing,
              Alliance Sourcing BD connects international buyers with reliable
              garment manufacturers across Bangladesh. We help bridge the gap
              between global buyers and quality manufacturing partners.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
              Our approach is built around quality, ethical sourcing, clear
              communication, and efficient production management. From factory
              selection to final shipment, we support every stage of the
              sourcing process.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}