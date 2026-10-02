import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/common/section-wrapper";

const capabilities = [
  {
    icon: "👕",
    title: "Garment production",
    description: "State of the art",
  },
  {
    icon: "🔧",
    title: "Maintenance and technical support",
    description: "24/7 available",
  },
  {
    icon: "🧵",
    title: "Machinery supply and setup",
    description: "Latest models only",
  },
  {
    icon: "⚙️",
    title: "Production optimization",
    description: "Efficiency experts",
  },
];

export function FactoryMachinery() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            FACTORY
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Factory and machinery capabilities
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            We work with modern facilities equipped for precision production.
          </p>

          {/* Capabilities */}
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/factory-machinery"
            className="mt-10 inline-flex rounded-xl bg-sky-500 px-10 py-4 text-lg font-bold text-white shadow-sm transition duration-300 hover:bg-sky-600 hover:shadow-md"
          >
            Details
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[500px]">
          <Image
            src="/factory.png"
            alt="Factory and garment machinery"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </SectionWrapper>
  );
}