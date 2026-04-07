"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Foods", href: "/foods" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "Level Culinary", href: "/level-culinary" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 border-b border-slate-200 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">
          mealapp
        </h1>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex gap-6">
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

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 font-medium transition-colors ${
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
      )}
    </nav>
  );
}
