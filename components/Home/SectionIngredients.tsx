"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getListIngredients } from "@/lib/api";
import { TMealIngredients } from "@/lib/type";
import Link from "next/link";

export default function SectionIngredients() {
  const [ingredients, setIngredients] = useState<TMealIngredients[]>();

  async function fetchIngredients() {
    const response = await getListIngredients();
    setIngredients(response.meals);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchIngredients();
  }, []);

  return (
    <section className="mb-12 rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm ring-1 ring-slate-100">
      <div className="flex flex-col gap-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Foods by Ingredients
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Start with fresh ingredients and discover meals that match your
              craving.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-300 text-slate-900 hover:bg-slate-100"
            render={<Link href="/ingredients" />}
            nativeButton={false}
          >
            View all ingredients
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients?.slice(0, 6).map((data) => (
            <Button
              key={data.idIngredient}
              variant="outline"
              size="sm"
              className="h-12 rounded-full border-slate-200 bg-slate-50 text-sm font-medium text-slate-700 hover:border-amber-300 hover:bg-amber-50 transition"
            >
              {data.strIngredient}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
