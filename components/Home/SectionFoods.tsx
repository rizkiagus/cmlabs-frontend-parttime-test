"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getMealsByIngredients } from "@/lib/api";
import { TMealByIngredient } from "@/lib/type";
import Link from "next/link";

type TFoods = {
  id: number;
  name: string;
  category: string;
  ingredients: string[];
  time: string;
};

export default function SectionFoods() {
  const [foods, setFoods] = useState<TMealByIngredient[]>();
  async function fetchFood() {
    const response = await getMealsByIngredients("chicken");

    setFoods(response.meals);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchFood();
  }, []);

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Foods List</h2>
          <p className="mt-2 text-sm text-slate-600">
            Browse popular meals and explore recipes with the best ingredients.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-slate-300 text-slate-900 hover:bg-slate-100"
        >
          See recipes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {foods?.slice(0, 8).map((food) => (
          <Link href="/meal-id" key={food.idMeal}>
            <div
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg h-64"
              style={{
                backgroundImage: `url(${food.strMealThumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="relative flex h-full flex-col justify-center p-6">
                <h3 className="text-2xl font-semibold text-white drop-shadow-sm mb-4 text-center">
                  {food.strMeal}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
