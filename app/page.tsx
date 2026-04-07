import { Button } from "@/components/ui/button";

export default function Home() {
  const ingredientTags = [
    "Chicken",
    "Tomato",
    "Mushroom",
    "Avocado",
    "Shrimp",
    "Cheese",
  ];

  const foods = [
    {
      id: 1,
      name: "Creamy Chicken Alfredo",
      category: "Pasta",
      ingredients: ["Chicken", "Cheese", "Garlic"],
      time: "35 min",
    },
    {
      id: 2,
      name: "Avocado Toast",
      category: "Breakfast",
      ingredients: ["Avocado", "Tomato", "Bread"],
      time: "15 min",
    },
    {
      id: 3,
      name: "Shrimp Tacos",
      category: "Seafood",
      ingredients: ["Shrimp", "Avocado", "Lime"],
      time: "25 min",
    },
    {
      id: 4,
      name: "Mushroom Risotto",
      category: "Vegetarian",
      ingredients: ["Mushroom", "Cheese", "Parsley"],
      time: "40 min",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen p-8">
      <section className="mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-50 via-white to-rose-50 p-8 shadow-[0_30px_80px_-50px_rgba(251,146,60,0.45)]">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
              Discover tasty meals
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              See All The Delicious Foods
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore fresh recipes by ingredients, find your next favorite
              dish, and cook with confidence. Mealapp makes finding delicious
              meals easy and beautiful.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                className="bg-slate-900 text-white hover:bg-slate-800"
                size="lg"
              >
                Explore Menu
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100"
                size="lg"
              >
                Browse Ingredients
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Popular today
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Creamy Chicken Alfredo
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Comfort pasta with rich sauce, tender chicken, and parmesan
                cheese.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                Quick bite
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                Avocado Toast
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Fresh and simple breakfast with creamy avocado, tomato, and
                crisp bread.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            >
              View all ingredients
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ingredientTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="h-12 rounded-full border-slate-200 bg-slate-50 text-sm font-medium text-slate-700 hover:border-amber-300 hover:bg-amber-50 transition"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Foods List</h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse popular meals and explore recipes with the best
              ingredients.
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
          {foods.map((food) => (
            <div
              key={food.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4 gap-4">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                  {food.category}
                </span>
                <span className="text-sm text-slate-500">{food.time}</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {food.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {food.ingredients.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
