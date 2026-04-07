"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Foods", href: "/foods" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "Level Culinary", href: "/level-culinary" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 border-b border-slate-200 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between h-20 px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-900">mealapp</h1>

        {/* Navigation Menu */}
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-2 font-medium transition-colors rounded-full ${
                  isActive(item.href)
                    ? "bg-amber-100 text-amber-800"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
