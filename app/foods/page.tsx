"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getMealsByIngredients, getListIngredients } from "@/lib/api";
import { TMealByIngredient, TMealIngredients } from "@/lib/type";
import Link from "next/link";
import SectionHeader from "./components/SectionHeader";
import SectionSearchAndFilter from "./components/SectionSearchAndFilter";
import Loading from "@/components/ui/loading";
import SectionNoResult from "./components/SectionNoResultFound";
import SectionNoSelectionIngredient from "./components/SectionNoSelectionIngredient";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default function FoodsPage() {
  const searchParams = useSearchParams();
  const [foods, setFoods] = useState<TMealByIngredient[]>([]);
  const [ingredients, setIngredients] = useState<TMealIngredients[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const ingredientParam = searchParams.get("ingredient");

  async function fetchIngredients() {
    try {
      const response = await getListIngredients();
      setIngredients(response.meals);
    } catch (error) {
      console.error("Failed to fetch ingredients:", error);
    }
  }

  async function fetchFoods(ingredient: string) {
    if (!ingredient) return;

    setIsLoading(true);
    try {
      const response = await getMealsByIngredients(ingredient);
      setFoods(response.meals || []);
      setSelectedIngredient(ingredient);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
      setFoods([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  useEffect(() => {
    if (ingredientParam) {
      fetchFoods(ingredientParam);
    }
  }, [ingredientParam]);

  const handleIngredientFilter = (ingredient: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("ingredient", ingredient);
    window.history.pushState({}, "", url.toString());
    fetchFoods(ingredient);
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const hasResults = foods.length > 0;
  const noResults = !isLoading && selectedIngredient && !hasResults;
  const noSelection = !isLoading && !selectedIngredient;

  return (
    <div className="w-full bg-white min-h-screen p-4 md:p-8">
      <BreadcrumbNav />
      <SectionHeader />
      <SectionSearchAndFilter
        onClickIngredient={(value) => handleIngredientFilter(value)}
        ingredientList={filteredIngredients}
        onClearFilter={() => {
          setSelectedIngredient("");
          setFoods([]);
        }}
        value={searchTerm}
        onChangeInput={(e) => setSearchTerm(e)}
        selectedIngredient={selectedIngredient}
      />

      {isLoading && <Loading />}

      {!isLoading && hasResults && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Meals with {selectedIngredient}
            </h2>
            <span className="text-sm text-slate-600">
              {foods.length} recipe{foods.length !== 1 ? "s" : ""} found
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {foods.map((food) => (
              <Link href={`/foods/${food.idMeal}`} key={food.idMeal}>
                <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg h-64 cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${food.strMealThumb})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/70 transition-colors" />
                  <div className="relative flex flex-col justify-end h-full p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 drop-shadow-sm">
                      {food.strMeal}
                    </h3>
                    <p className="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-2 drop-shadow-sm hidden md:block">
                      A delicious recipe featuring{" "}
                      {selectedIngredient || "fresh ingredients"}. Perfect for
                      any occasion.
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs text-white/80 drop-shadow-sm">
                        {Math.floor(Math.random() * 45) + 15} min prep
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {noResults && (
        <SectionNoResult
          selectedIngredient={selectedIngredient}
          onClickClearFilter={() => {
            const url = new URL(window.location.href);
            url.searchParams.delete("ingredient");
            window.history.pushState({}, "", url.toString());
            setSelectedIngredient("");
          }}
        />
      )}

      {noSelection && <SectionNoSelectionIngredient />}
    </div>
  );
}
