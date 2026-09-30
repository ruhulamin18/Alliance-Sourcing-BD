"use client";

import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/8801972438732"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Glow */}
      <span
        className="
          absolute right-0
          h-12 w-12
          rounded-full
          bg-green-300
          opacity-0
          group-hover:opacity-50
          group-hover:animate-ping
        "
      />

      {/* Chat With Us */}
      <span
        className="
          absolute right-[3.5rem]
          whitespace-nowrap
          rounded-xl
          bg-slate-900
          px-3 py-2
          text-xs font-semibold text-white
          shadow-md
          opacity-0
          translate-x-2
          pointer-events-none
          transition-all duration-200
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <span
        className="
          relative z-10
          flex h-12 w-12
          items-center justify-center
          rounded-full
          bg-green-500
          shadow-lg
          transition-transform duration-200
          group-hover:scale-105
        "
      >
        <Image
          src="/icon/whatsapp.png"
          alt="WhatsApp"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </span>
    </a>
  );
}