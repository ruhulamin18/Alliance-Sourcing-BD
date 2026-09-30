import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ChevronRight,
  Globe2,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "03+",
    label: "REGIONS",
    icon: Globe2,
  },
  {
    value: "40+",
    label: "GLOBAL CLIENTS",
    icon: Users,
  },
  {
    value: "09+",
    label: "YEARS",
    icon: Award,
  },
];

export function GlobalPartnersHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#061a36]">
      {/* Background Image */}
      <Image
        src="/global-partners.png"
        alt="Global partners and international sourcing"
        fill
        priority
        className="object-cover"
      />

      {/* Light Dark Overlay */}
      <div className="absolute inset-0 bg-[#031b3d]/35" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#02142f]/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center px-6 pb-10 pt-14 text-center sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Link
            href="/"
            className="text-white/80 transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight className="h-3.5 w-3.5 text-white/70" />

          <span className="font-semibold text-white">
            Global Partners
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our{" "}
          <span className="text-sky-400">Global</span>{" "}
          Partners
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base lg:text-lg">
          We connect global fashion brands with top Bangladeshi
          manufacturers, built on a decade of transparency and quality.
        </p>

        {/* Divider */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-1 w-14 rounded-full bg-sky-400" />
          <span className="h-1 w-10 rounded-full bg-white/25" />
        </div>

        {/* Statistics */}
        <div className="mt-7 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  group
                  relative
                  flex min-h-[115px]
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-xl
                  border border-sky-300/25
                  bg-blue-950/35
                  px-5 py-4
                  text-left
                  shadow-lg
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-sky-300/45
                  hover:bg-blue-900/45
                "
              >
                {/* Glow */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl" />

                {/* Icon */}
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500/20 ring-1 ring-sky-300/20">
                  <Icon
                    className="h-5 w-5 text-sky-100"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text */}
                <div className="relative">
                  <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] font-medium tracking-[0.18em] text-white/80 sm:text-xs">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 h-0.5 w-16 -translate-x-1/2 bg-sky-400/70 transition-all duration-300 group-hover:w-24" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}