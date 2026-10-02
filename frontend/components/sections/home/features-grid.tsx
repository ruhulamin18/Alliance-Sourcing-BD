import { SectionWrapper } from "@/components/common/section-wrapper";

const features = [
  {
    icon: "🏅",
    title: "Quality assurance",
    description: "Rigorous testing at every production stage",
  },
  {
    icon: "⚖️",
    title: "Ethical sourcing",
    description: "Fair wages and safe working conditions",
  },
  {
    icon: "🚚",
    title: "On-time delivery",
    description: "Your deadlines are our commitments",
  },
  {
    icon: "🌐",
    title: "Global network",
    description: "Connected across Bangladesh and beyond",
  },
];

export function FeaturesGrid() {
  return (
    <SectionWrapper className="bg-white">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
          WHY
        </p>

        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
          What sets us apart
        </h2>

        <p className="mt-4 text-lg text-slate-500">
          We stand behind every garment
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              group
              min-h-[220px]
              rounded-2xl
              border border-slate-200
              bg-white
              px-7 py-8
              transition-colors duration-300
              hover:border-sky-500
              hover:bg-sky-500
            "
          >
            {/* Icon */}
            <div className="text-3xl">
              {feature.icon}
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
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-500
                transition-colors duration-300
                group-hover:text-white
              "
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}