import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Ingredients() {
  const ingredients = [
    {
      id: 1,
      name: "Chicken",
      description:
        "Versatile protein perfect for grilling, baking, or stir-frying",
      image: "🍗",
      category: "Protein",
      recipes: 45,
    },
    {
      id: 2,
      name: "Tomato",
      description:
        "Juicy and versatile, great for sauces, salads, and sandwiches",
      image: "🍅",
      category: "Vegetable",
      recipes: 67,
    },
    {
      id: 3,
      name: "Mushroom",
      description:
        "Earthy flavor that adds depth to soups, sauces, and main dishes",
      image: "🍄",
      category: "Vegetable",
      recipes: 32,
    },
    {
      id: 4,
      name: "Avocado",
      description:
        "Creamy texture perfect for spreads, salads, and Mexican cuisine",
      image: "🥑",
      category: "Fruit",
      recipes: 28,
    },
    {
      id: 5,
      name: "Shrimp",
      description:
        "Sweet and delicate seafood ideal for quick stir-fries and pasta",
      image: "🦐",
      category: "Seafood",
      recipes: 23,
    },
    {
      id: 6,
      name: "Cheese",
      description:
        "Rich and varied flavors that melt beautifully in many dishes",
      image: "🧀",
      category: "Dairy",
      recipes: 89,
    },
    {
      id: 7,
      name: "Garlic",
      description:
        "Aromatic bulb that adds essential flavor to countless recipes",
      image: "🧄",
      category: "Vegetable",
      recipes: 156,
    },
    {
      id: 8,
      name: "Basil",
      description: "Fresh herb that brings Italian cuisine to life",
      image: "🌿",
      category: "Herb",
      recipes: 43,
    },
  ];

  const categories = [
    "All",
    "Protein",
    "Vegetable",
    "Fruit",
    "Seafood",
    "Dairy",
    "Herb",
  ];

  return (
    <div className="w-full bg-white min-h-screen p-4 md:p-8">
      <BreadcrumbNav />
      {/* Hero Section */}
      <section className="mb-12 overflow-hidden rounded-[2rem] bg-linear-to-br from-green-50 via-white to-emerald-50 p-4 md:p-8 shadow-[0_30px_80px_-50px_rgba(34,197,94,0.45)]">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
              Fresh ingredients
            </span>
            <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
              Discover Fresh Ingredients
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore our curated collection of fresh, high-quality ingredients.
              Find recipes, learn cooking tips, and discover new flavors to
              elevate your meals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-4">
              <Button
                className="bg-slate-900 text-white hover:bg-slate-800"
                size="lg"
              >
                Browse Recipes
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100"
                size="lg"
              >
                Cooking Tips
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Most used
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Garlic & Herbs
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Essential aromatics that transform simple dishes into culinary
                masterpieces.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Seasonal
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Fresh Produce
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Vibrant vegetables and fruits at their peak flavor and
                nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

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

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${
                  category === "All"
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border-slate-300 text-slate-900 hover:bg-slate-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-6xl group-hover:scale-110 transition-transform duration-300">
                  {ingredient.image}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {ingredient.name}
                </h3>
                <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 mb-3">
                  {ingredient.category}
                </span>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {ingredient.description}
                </p>
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs text-slate-500">
                    {ingredient.recipes} recipes
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-900 hover:bg-slate-100"
                    render={
                      <Link href={`/foods?ingredient=${ingredient.name}`} />
                    }
                    nativeButton={false}
                  >
                    View Recipes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
