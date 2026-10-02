const features = [
  {
    icon: "🏅",
    title: "Quality assurance",
    description: "Rigorous testing at every production stage",
    highlighted: true,
  },
  {
    icon: "🧵",
    title: "Ethical sourcing",
    description: "Fair wages and safe working conditions",
    highlighted: false,
  },
  {
    icon: "💵",
    title: "On-time delivery",
    description: "Your deadlines are our commitments",
    highlighted: false,
  },
  {
    icon: "🌐",
    title: "Global network",
    description: "Connected across Bangladesh and beyond",
    highlighted: false,
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            WHY
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            What sets us apart
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            We stand behind every garment
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className={`min-h-[220px] rounded-2xl px-7 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                feature.highlighted
                  ? "border border-orange-300 bg-orange-50/70"
                  : "border border-slate-200 bg-white"
              }`}
            >

              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl text-3xl ${
                  feature.highlighted
                    ? "bg-orange-100"
                    : "bg-slate-50"
                }`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-7 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-base leading-7 text-slate-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}