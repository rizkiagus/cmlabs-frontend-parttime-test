import { Button } from "@/components/ui/button";

export default function SectionHero() {
  return (
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
              Vibrant vegetables and fruits at their peak flavor and nutrition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
