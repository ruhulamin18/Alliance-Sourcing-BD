import { SectionWrapper } from "@/components/common/section-wrapper";

const processSteps = [
  {
    icon: "💬",
    title: "Consultation",
    description:
      "We listen to your needs and understand your specifications",
  },
  {
    icon: "🤝",
    title: "Supplier match",
    description:
      "We connect you with manufacturers who meet your standards",
  },
  {
    icon: "📋",
    title: "Order management",
    description:
      "We negotiate terms and oversee production from start to finish",
  },
  {
    icon: "✅",
    title: "Quality check",
    description:
      "Every batch is tested against your specifications and standards",
  },
];

export function ProcessFlow() {
  return (
    <SectionWrapper className="bg-slate-50">
      {/* Heading */}
      <div className="text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
          PROCESS
        </p>

        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
          How we work
        </h2>

        <p className="mt-4 text-lg text-slate-500">
          Simple
        </p>
      </div>

      {/* Process Cards */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {processSteps.map((step) => (
          <div
            key={step.title}
            className="
              group
              flex
              min-h-[125px]
              items-center
              gap-6
              rounded-3xl
              border
              border-slate-200
              bg-white
              px-7
              py-6
              transition-colors
              duration-300
              hover:border-sky-500
              hover:bg-sky-500
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-sky-50
                text-2xl
              "
            >
              {step.icon}
            </div>

            {/* Content */}
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-2
                  text-base
                  leading-6
                  text-slate-500
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}