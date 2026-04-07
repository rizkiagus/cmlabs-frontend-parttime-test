import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SectionHeader() {
  return (
    <section className="mb-12 overflow-hidden rounded-[2rem] bg-linear-to-br from-amber-50 via-white to-orange-50 p-4 md:p-8 shadow-[0_30px_80px_-50px_rgba(245,158,11,0.45)]">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
            Delicious recipes
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Discover Amazing Meals
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore our curated collection of delicious recipes. Filter by
            ingredients, discover new flavors, and find the perfect meal for any
            occasion.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-4">
            <Button
              className="bg-slate-900 text-white hover:bg-slate-800"
              size="lg"
              render={<Link href="/ingredients">Browse Ingredients</Link>}
              nativeButton={false}
            />
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Popular
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Chicken Dishes
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Versatile and delicious chicken recipes that everyone will love.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Quick & Easy
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              30-Min Meals
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Fast and flavorful recipes perfect for busy weeknights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
