"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Messages",
    href: "/admin/messages",
  },
  {
    label: "Services",
    href: "/admin/services",
  },
  {
    label: "Products",
    href: "/admin/products",
  },
  {
    label: "Factories",
    href: "/admin/factories",
  },
  {
    label: "Machinery",
    href: "/admin/machinery",
  },
  {
    label: "Partners",
    href: "/admin/partners",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <Link
          href="/admin/dashboard"
          className="text-lg font-bold tracking-tight text-slate-800"
        >
          ALLIANCE
          <span className="text-cyan-600"> SOURCING BD</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 px-6 py-4">
        <p className="text-xs text-slate-500">
          Alliance Sourcing BD
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Admin Portal
        </p>
      </div>
    </aside>
  );
}