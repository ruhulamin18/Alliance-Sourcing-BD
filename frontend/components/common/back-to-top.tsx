"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      aria-label="Back to top"
      className={`
        group fixed bottom-24 right-6 z-40
        flex h-12
        items-center justify-center
        overflow-hidden
        rounded-full
        border-4 border-purple-100
        bg-black
        text-white
        shadow-lg
        transition-all duration-400 ease-out

        ${
          visible
            ? "w-12 translate-y-0 scale-100 opacity-100"
            : "pointer-events-none w-12 translate-y-8 scale-75 opacity-0"
        }

        hover:w-36
        hover:bg-cyan-600
      `}
    >
      {/* Center Arrow - Normal State */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          flex
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          transition-all duration-200
          group-hover:scale-75
          group-hover:opacity-0
        "
      >
        <ChevronUp
          className="h-5 w-5"
          strokeWidth={2.5}
        />
      </span>

      {/* Hover Content */}
      <span
        className="
          flex
          items-center
          gap-2
          whitespace-nowrap
          text-xs
          font-semibold
          opacity-0
          translate-x-2
          transition-all duration-300 ease-out
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        {/* Left Arrow */}
        <ChevronUp
          className="h-4 w-4"
          strokeWidth={2.5}
        />

        {/* Text */}
        <span>Back to Top</span>
      </span>
    </button>
  );
}