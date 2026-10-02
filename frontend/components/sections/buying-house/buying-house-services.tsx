import {
  ClipboardCheck,
  FileCheck2,
  Handshake,
  PackageCheck,
  ReceiptText,
  Ship,
} from "lucide-react";

const services = [
  {
    icon: PackageCheck,
    title: "Product development & sampling",
    description:
      "We create samples that perfectly match your vision, ensuring precision, quality, and attention to every detail.",
  },
  {
    icon: Handshake,
    title: "Supplier selection & evaluation",
    description:
      "We find reliable manufacturers meeting your standards, ensuring quality, consistency, and excellence.",
  },
  {
    icon: ReceiptText,
    title: "Price negotiation & order placement",
    description:
      "We secure the best terms for your orders, ensuring competitive pricing, favorable conditions, and smooth transactions.",
  },
  {
    icon: ClipboardCheck,
    title: "Production follow-up & quality inspection test",
    description:
      "We monitor every batch from loom to shipment, ensuring consistent quality, accuracy, and timely delivery.",
  },
  {
    icon: FileCheck2,
    title: "Compliance Assistance",
    description:
      "We work with factories aligned with international buyer standards and ethical practices.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description:
      "Documentation support and shipment coordination with partners for smooth delivery.",
  },
];

export function BuyingHouseServices() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-500">
            Buying House Services
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Buying house services
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            We manage every step of your sourcing journey with precision
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  min-h-[175px]
                  rounded-xl
                  border border-slate-100
                  bg-white
                  px-5 py-5
                  shadow-[0_4px_18px_rgba(15,23,42,0.07)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-cyan-600
                  hover:shadow-[0_10px_28px_rgba(8,145,178,0.25)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-xl
                    bg-sky-50
                    transition-colors duration-300
                    group-hover:bg-white/10
                  "
                >
                  <Icon
                    className="
                      h-8 w-8
                      text-sky-500
                      transition-colors duration-300
                      group-hover:text-white
                    "
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-lg font-bold leading-6
                    text-slate-900
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    text-sm leading-6
                    text-slate-500
                    transition-colors duration-300
                    group-hover:text-white/95
                  "
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}