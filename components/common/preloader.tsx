"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        setHidden(true);
      }, 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-white
        transition-opacity duration-500
        ${loading ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-20 w-20 animate-pulse">
          <Image
            src="/icon.svg"
            alt="Alliance Sourcing BD"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Brand Name */}
        <div className="mt-4 text-center leading-tight">
          <p className="text-lg font-bold tracking-[0.12em] text-slate-900">
            ALLIANCE
          </p>

          <p className="text-sm font-normal tracking-[0.18em] text-slate-500">
            SOURCING BD
          </p>
        </div>

        {/* Loading Line */}
        <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 animate-[loader_1.2s_ease-in-out_infinite] rounded-full bg-cyan-600" />
        </div>
      </div>
    </div>
  );
}