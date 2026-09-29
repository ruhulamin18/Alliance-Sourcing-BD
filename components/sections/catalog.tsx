import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/common/section-wrapper";

const catalogItems = [
  {
    icon: "🧶",
    title: "Raw fabric",
    description: "Cotton, linen, and blends sourced globally",
  },
  {
    icon: "✂️",
    title: "Trim and lining fabrics",
    description: "High quality finishing materials",
  },
  {
    icon: "🪡",
    title: "Woven fabrics",
    description: "Premium woven solutions",
  },
  {
    icon: "⏱️",
    title: "Production lead time",
    description: "Industry trends and filtering materials",
  },
];

export function Catalog() {
  return (
    <SectionWrapper className="bg-[#faf9f7]">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Left Image */}
        <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[500px]">
          <Image
            src="/sewing.png"
            alt="Apparel production and sewing"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            CATALOG
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Products and services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            We source and manage everything you need for apparel production.
          </p>

          {/* Catalog Items */}
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {catalogItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/buying-house"
            className="mt-10 inline-flex rounded-xl bg-sky-500 px-11 py-4 text-lg font-bold text-white shadow-sm transition duration-300 hover:bg-sky-600 hover:shadow-md"
          >
            Browse
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}