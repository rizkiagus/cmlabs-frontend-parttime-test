"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getDetailMealById } from "@/lib/api";
import { TMealDetail } from "@/lib/type";
import Link from "next/link";
import Loading from "@/components/ui/loading";
import Image from "next/image";
import BreadcrumbNav from "@/components/BreadcrumbNav";

function getYouTubeVideoId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : "";
}

export default function FoodDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [meal, setMeal] = useState<TMealDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMealDetail() {
      try {
        const response = await getDetailMealById(id);
        if (response.meals && response.meals.length > 0) {
          setMeal(response.meals[0]);
        }
      } catch (error) {
        console.error("Failed to fetch meal detail:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchMealDetail();
    }
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!meal) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Meal not found</h1>
          <Link href="/foods" className="text-blue-500 hover:underline">
            Back to foods
          </Link>
        </div>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof TMealDetail] as string;
    const measure = meal[`strMeasure${i}` as keyof TMealDetail] as string;
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={100}
            height={100}
            loading="eager"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {meal.strMeal}
          </h1>
          <div className="space-y-2 mb-6">
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
            {meal.strTags && (
              <p>
                <strong>Tags:</strong> {meal.strTags}
              </p>
            )}
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            {ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Instructions</h2>
        <div className="prose max-w-none">
          {meal.strInstructions.split("\r\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {meal.strYoutube && (
          <div className="mt-8 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Video Tutorial
            </h3>
            <div className="aspect-video w-full max-w-4xl">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(meal.strYoutube)}`}
                title={`${meal.strMeal} tutorial`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
