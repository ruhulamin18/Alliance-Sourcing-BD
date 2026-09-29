import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/common/section-wrapper";

const services = [
  "Product development and sampling",
  "Supplier selection and evaluation",
  "Price negotiation and order placement",
];

export function Services() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Image */}
        <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[500px]">
          <Image
            src="/Services.png"
            alt="Garment sourcing and buying house services"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            SERVICES
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Professional buying house services
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            We handle the complexities so you can focus on your business.
          </p>

          {/* Service List */}
          <div className="mt-8 space-y-5">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-500">
                  ✓
                </div>

                <p className="text-base text-slate-600 sm:text-lg">
                  {service}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/buying-house"
            className="mt-10 inline-flex rounded-xl bg-sky-500 px-11 py-4 text-lg font-bold text-white shadow-sm transition duration-300 hover:bg-sky-600 hover:shadow-md"
          >
            Read More
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}