"use client";

import Link from "next/link";
import { ChefHat, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-amber-400" />
              <h3 className="text-xl font-bold">mealapp</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Discover delicious recipes and explore ingredients for your
              culinary adventures. Create amazing meals for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/foods"
                  className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Foods
                </Link>
              </li>
              <li>
                <Link
                  href="/ingredients"
                  className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Ingredients
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300 text-sm">Breakfast</span>
              </li>
              <li>
                <span className="text-slate-300 text-sm">Lunch</span>
              </li>
              <li>
                <span className="text-slate-300 text-sm">Dinner</span>
              </li>
              <li>
                <span className="text-slate-300 text-sm">Desserts</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-slate-300 text-sm">
                  hello@mealapp.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-slate-300 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-slate-300 text-sm">
                  Culinary Street, Food City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} mealapp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
