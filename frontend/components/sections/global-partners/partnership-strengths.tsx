import {
  ArrowUpRight,
  Clock3,
  Leaf,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const strengths = [
  {
    icon: ArrowUpRight,
    title: "Long-term collaboration approach",
    description:
      "Building lasting relationships that grow stronger with every collection",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    description:
      "Clear, honest dialogue at every stage of production",
  },
  {
    icon: ShieldCheck,
    title: "Strong quality control system",
    description:
      "Rigorous standards ensuring excellence in every garment",
  },
  {
    icon: Clock3,
    title: "On-time delivery commitment",
    description:
      "Meeting deadlines consistently to keep your business running smoothly",
  },
  {
    icon: Leaf,
    title: "Ethical and sustainable sourcing",
    description:
      "Responsible practices that protect people and planet",
  },
];

export function PartnershipStrengths() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl">
            What Makes Our Partnerships Strong
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Our commitment to excellence goes beyond manufacturing. We
            build partnerships on trust, transparency, and shared
            success.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <div
                key={strength.title}
                className="
                  group
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  px-8 py-8
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-2
                  hover:border-cyan-500
                  hover:shadow-[0_0_0_4px_rgba(6,182,212,0.10),0_10px_25px_rgba(8,145,178,0.15)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-lg
                    bg-blue-950
                    text-white
                    transition-all duration-300
                    group-hover:bg-cyan-600
                  "
                >
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-7
                    text-lg font-bold leading-6
                    text-slate-900
                  "
                >
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}