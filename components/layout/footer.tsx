import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/buying-house" },
  { label: "Factory network", href: "/factory-machinery" },
  { label: "Quality control", href: "/buying-house" },
  { label: "Contact us", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/icon/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/icon/instagram.svg",
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: "/icon/x.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "/icon/linkedin.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: "/icon/youtube.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 sm:px-10 lg:px-12">

        {/* =========================
            Main Footer
        ========================== */}
        <div className="grid gap-12 lg:grid-cols-[1fr_190px]">

          {/* =========================
              Left Side
          ========================== */}
          <div>

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/icon.svg"
                alt="Alliance Sourcing BD"
                width={55}
                height={55}
                className="h-[55px] w-[55px] object-contain"
              />

              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  ALLIANCE
                </span>

                <span className="mt-1 text-sm font-extrabold tracking-tight text-white">
                  SOURCING BD
                </span>
              </div>
            </Link>

            {/* Address */}
            <div className="mt-8">
              <h3 className="text-base font-bold text-white">
                Address
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-7">
              <h3 className="text-base font-bold text-white">
                Contact
              </h3>

              <div className="mt-2 space-y-1">

                {/* Phone */}
                <a
                  href="tel:01716054044"
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  01716054044
                </a>

                {/* Email */}
                <a
                  href="mailto:faroque71@gmail.com"
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  faroque71@gmail.com
                </a>

              </div>
            </div>

            {/* =========================
                Social Icons
            ========================== */}
            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition duration-300 hover:-translate-y-1 hover:bg-slate-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>

          </div>

          {/* =========================
              Quick Links
          ========================== */}
          <div className="lg:justify-self-end lg:w-[190px]">

            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <nav className="mt-7 flex flex-col gap-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

          </div>
        </div>

        {/* =========================
            Bottom Footer
        ========================== */}
        <div className="mt-12 border-t border-slate-800 pt-5">

          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

            {/* Copyright */}
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Alliance Sourcing BD
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                href="#"
                className="text-xs text-slate-400 transition hover:text-white"
              >
                Privacy policy
              </Link>

              <Link
                href="#"
                className="text-xs text-slate-400 transition hover:text-white"
              >
                Terms of service
              </Link>

              <Link
                href="#"
                className="text-xs text-slate-400 transition hover:text-white"
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