"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Factory & Machinery", href: "/factory-machinery" },
  { label: "Sister Concern", href: "#" },
  { label: "Global Partners", href: "/global-partners" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: "/icon/facebook.svg",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "/icon/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "/icon/linkedin.svg",
  },
  {
    label: "X",
    href: "#",
    icon: "/icon/x.svg",
  },
  {
    label: "YouTube",
    href: "#",
    icon: "/icon/youtube.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0d172d] text-white">
      <div className="mx-auto max-w-[1800px] px-6 py-10 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1.2fr_0.9fr] lg:gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-4">
              {/* Alliance Apparel */}
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-14 shrink-0">
                  <Image
                    src="/logo2.png"
                    alt="Alliance Apparel Ltd."
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="leading-[1.05]">
                  <p className="text-[13px] font-bold text-white">
                    ALLIANCE
                  </p>
                  <p className="text-[13px] font-bold text-white">
                    APPARELS
                  </p>
                  <p className="text-[13px] font-bold text-white">
                    LTD.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-11 w-px bg-white/60" />

              {/* Alliance Sourcing */}
              <Link
                href="/"
                className="flex items-center gap-2.5"
              >
                <div className="relative h-11 w-11 shrink-0">
                  <Image
                    src="/icon.svg"
                    alt="Alliance Sourcing BD"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="leading-[1.05]">
                  <p className="text-[13px] font-bold text-white">
                    ALLIANCE
                  </p>
                  <p className="text-[13px] font-bold text-white">
                    SOURCING
                  </p>
                  <p className="text-[13px] font-bold text-white">
                    BD
                  </p>
                </div>
              </Link>
            </div>

            <p className="mt-5 max-w-[330px] text-sm leading-6 text-slate-400">
              Your premier partner in seamless garment sourcing
              and social manufacturing excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3.5 text-sm text-slate-400">
              {/* Email 1 */}
              <a
                href="mailto:info@alliancebdltd.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@alliancebdltd.com</span>
              </a>

              {/* Email 2 */}
              <a
                href="mailto:mansur@alliancebdltd.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>mansur@alliancebdltd.com</span>
              </a>

              {/* Email 3 */}
              <a
                href="mailto:khan@alliancebdltd.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>khan@alliancebdltd.com</span>
              </a>

              {/* Email 4 */}
              <a
                href="mailto:farooque@alliancebdltd.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>farooque@alliancebdltd.com</span>
              </a>

              {/* Phone 1 */}
              <a
                href="tel:+8801972438732"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+880 1972-438732</span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+8801714238182"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+880 171423-8182</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 pt-1">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                <p className="leading-6">
                  Asha Plaza (2nd floor), Hemayetpur,
                  <br />
                  Savar, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Connect With Us
            </h3>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full bg-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="mt-7 border-t border-white/10 pt-5">
              <h4 className="text-base font-bold text-white">
                Chat with us
              </h4>

              <a
                href="https://wa.me/8801972438732"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-flex items-center gap-2.5
                  rounded-lg
                  bg-green-600
                  px-5 py-3
                  text-sm font-bold text-white
                  transition-all duration-300
                  hover:bg-green-500
                  hover:shadow-lg
                "
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-9 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>
                © 2026 Alliance Sourcing BD. All rights reserved.
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:block" />

              <span>
                Developed by{" "}
                <a
                  href="https://github.com/ruhulamin18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-300 transition-colors hover:text-white"
                >
                  Md. Ruhul Amin
                </a>
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-5 text-sm text-slate-400">
              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacy policy
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Terms of service
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Cookie settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}