import { Button } from "@/components/ui/button";

export default function SectionHero() {
  return (
    <section className="mb-12 overflow-hidden rounded-[2rem] bg-linear-to-br from-amber-50 via-white to-rose-50 p-4 md:p-8 shadow-[0_30px_80px_-50px_rgba(251,146,60,0.45)]">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
            Discover tasty meals
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            See All The Delicious Foods
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore fresh recipes by ingredients, find your next favorite dish,
            and cook with confidence. Mealapp makes finding delicious meals easy
            and beautiful.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-4">
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
              Fresh and simple breakfast with creamy avocado, tomato, and crisp
              bread.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
