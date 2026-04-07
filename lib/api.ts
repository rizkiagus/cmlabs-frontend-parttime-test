import { TResponseIngredients, TResponseMealByIngredient } from "./type";

const LINK_API = "https://www.themealdb.com/api/json/v1/1";

export async function getListIngredients(): Promise<TResponseIngredients> {
  const res = await fetch(`${LINK_API}/list.php?i=list`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch List of Ingredients");

  return res.json();
}

export async function getMealsByIngredients(
  params: string,
): Promise<TResponseMealByIngredient> {
  const res = await fetch(`${LINK_API}/filter.php?i=${params}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch List of Meals by ${params}`);

  return res.json();
}

export async function geDetailMealById(params: string) {
  const res = await fetch(`${LINK_API}/lookup.php?i=${params}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch Meals ${params}`);

  return res.json();
}
