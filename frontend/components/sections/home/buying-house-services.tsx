import { SectionWrapper } from "@/components/common/section-wrapper";

const services = [
  {
    icon: "📦",
    title: "Product development and sampling",
    description: "We find and shortlist your ideal results",
  },
  {
    icon: "🔍",
    title: "Supplier selection and evaluation",
    description: "We find and shortlist your best factories",
  },
  {
    icon: "💰",
    title: "Price negotiation and order placement",
    description: "We secure the best terms for your orders",
  },
  {
    icon: "🏭",
    title: "Production follow-up and quality inspection",
    description: "We monitor every batch from loom to shipment",
  },
];

export function BuyingHouseServices() {
  return (
    <SectionWrapper className="bg-[#faf9f7]">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
          COMPANY
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Buying house services
        </h2>

        <p className="mt-4 text-lg text-slate-500">
          We manage every step of your sourcing journey with precision.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="
              group
              min-h-[200px]
              rounded-2xl
              border border-slate-200
              bg-white
              p-8
              transition-colors duration-300
              hover:border-sky-500
              hover:bg-sky-500
            "
          >
            {/* Icon */}
            <div className="text-3xl">
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className="
                mt-7
                text-xl
                font-bold
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
                mt-3
                text-base
                leading-7
                text-slate-500
                transition-colors duration-300
                group-hover:text-white
              "
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}