import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionFoods from "@/components/Home/SectionFoods";
import SectionHero from "@/components/Home/SectionHero";
import SectionIngredients from "@/components/Home/SectionIngredients";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen p-8">
      <BreadcrumbNav />
      <SectionHero />
      <SectionIngredients />
      <SectionFoods />
    </div>
  );
}
