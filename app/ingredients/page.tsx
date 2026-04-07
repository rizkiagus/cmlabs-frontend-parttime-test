"use client";

import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getListIngredients } from "@/lib/api";
import { TMealIngredients } from "@/lib/type";
import Loading from "@/components/ui/loading";
import { Search } from "lucide-react";
import SectionHero from "./components/SectionHero";
import Link from "next/link";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState<TMealIngredients[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await getListIngredients();
        setIngredients(response.meals || []);
      } catch (error) {
        console.error("Failed to fetch ingredients:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  // Filter ingredients based on search term
  const filteredIngredients = (
    searchTerm
      ? ingredients.filter((ing) =>
          ing.strIngredient.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : ingredients
  ).slice(0, 8);

  if (isLoading) {
    return (
      <div className="w-full bg-white min-h-screen p-4 md:p-8">
        <BreadcrumbNav />
        <Loading />
      </div>
    );
  }

  if (ingredients.length === 0) {
    return (
      <div className="w-full bg-white min-h-screen p-4 md:p-8">
        <BreadcrumbNav />
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            No ingredients found
          </h2>
          <p className="text-slate-600">
            Unable to load ingredients at this time. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen p-4 md:p-8">
      <BreadcrumbNav />
      <SectionHero />

      {/* Ingredients List */}
      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              All Ingredients
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse our complete collection of fresh ingredients and discover
              new possibilities.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredIngredients.length > 0 ? (
            filteredIngredients.map((ingredient) => (
              <Link
                key={ingredient.idIngredient}
                href={`/foods?ingredient=${ingredient.strIngredient}`}
              >
                <div
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg h-64"
                  style={{
                    backgroundImage: ingredient.strThumb
                      ? `url(${ingredient.strThumb})`
                      : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/70 transition-colors" />
                  <div className="relative flex flex-col justify-end h-full p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">
                      {ingredient.strIngredient}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed line-clamp-2 drop-shadow-sm hidden md:block">
                      {ingredient.strDescription ||
                        "A versatile ingredient used in many delicious recipes."}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs text-white/80 drop-shadow-sm">
                        {Math.floor(Math.random() * 100) + 10} recipes
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600">
                No ingredients found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
