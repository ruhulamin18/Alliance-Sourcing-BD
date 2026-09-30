"use client";

import { useState } from "react";
import Image from "next/image";

type Region = "All Clients" | "USA" | "Europe" | "Japan";

interface Partner {
  name: string;
  region: Exclude<Region, "All Clients">;
  image: string;
}

const partners: Partner[] = [
  {
    name: "Forever 21",
    region: "USA",
    image: "/partners/forever21.png",
  },
  {
    name: "Buckle",
    region: "USA",
    image: "/partners/buckle.png",
  },
  {
    name: "Country Boy Lifestyle",
    region: "USA",
    image: "/partners/country-boy.png",
  },
  {
    name: "Select",
    region: "USA",
    image: "/partners/select.png",
  },
  {
    name: "Whispering Smith",
    region: "Europe",
    image: "/partners/whispering-smith.png",
  },
  {
    name: "Moririn",
    region: "Japan",
    image: "/partners/moririn.png",
  },
  {
    name: "Teijin",
    region: "Japan",
    image: "/partners/teijin.png",
  },
  {
    name: "Hope",
    region: "Japan",
    image: "/partners/hope.png",
  },
  {
    name: "Yagi",
    region: "Japan",
    image: "/partners/yagi.png",
  },
  {
    name: "Aeon",
    region: "Japan",
    image: "/partners/aeon.png",
  },
];

const regions: Region[] = [
  "All Clients",
  "USA",
  "Europe",
  "Japan",
];

export function ExplorePartners() {
  const [activeRegion, setActiveRegion] =
    useState<Region>("All Clients");

  const filteredPartners =
    activeRegion === "All Clients"
      ? partners
      : partners.filter(
          (partner) => partner.region === activeRegion
        );

  return (
    <section className="bg-slate-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Explore Our Partners
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Alliance Sourcing BD links international clients with
            reliable production in Bangladesh, driven by trust,
            compliance, and efficiency.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {regions.map((region) => {
            const active = activeRegion === region;

            return (
              <button
                key={region}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`
                  min-w-[115px]
                  px-6 py-3
                  text-sm font-semibold
                  transition-all duration-300
                  ${
                    active
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }
                `}
              >
                {region}
              </button>
            );
          })}
        </div>

        {/* Partner Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="
                group
                flex h-[150px]
                items-center
                justify-center
                overflow-hidden
                rounded-sm
                border border-slate-200
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-2
                hover:border-cyan-500
                hover:shadow-[0_0_0_4px_rgba(6,182,212,0.10),0_10px_25px_rgba(8,145,178,0.15)]
              "
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={240}
                height={120}
                className="
                  max-h-20
                  w-auto
                  max-w-[82%]
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}