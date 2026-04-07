import SectionFoods from "@/components/Home/SectionFoods";
import SectionHero from "@/components/Home/SectionHero";
import SectionIngredients from "@/components/Home/SectionIngredients";

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
      <SectionHero />
      <SectionIngredients ingredientTags={ingredientTags} />
      <SectionFoods foods={foods} />
    </div>
  );
}
