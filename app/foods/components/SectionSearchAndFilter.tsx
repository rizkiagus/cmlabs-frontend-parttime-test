import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TMealIngredients } from "@/lib/type";
import { Search, Filter } from "lucide-react";

type TSectionSearchAndFilterProps = {
  value: string;
  onClearFilter: () => void;
  onClickIngredient: (value: string) => void;
  ingredientList: TMealIngredients[];
  onChangeInput: (e: string) => void;
  selectedIngredient: string;
};

export default function SectionSearchAndFilter({
  value,
  onChangeInput,
  onClearFilter,
  onClickIngredient,
  ingredientList,
  selectedIngredient,
}: TSectionSearchAndFilterProps) {
  return (
    <section className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            placeholder="Search ingredients..."
            value={value}
            onChange={(e) => onChangeInput(e.target.value)}
            className="pl-10 py-6"
          />
        </div>
        {selectedIngredient && (
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
            <Filter className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">
              Filtered by: {selectedIngredient}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.delete("ingredient");
                window.history.pushState({}, "", url.toString());
                onClearFilter();
              }}
              className="h-6 w-6 p-0 text-amber-600 hover:text-amber-800"
            >
              ×
            </Button>
          </div>
        )}
      </div>

      {/* Popular Ingredients */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">
          Popular Ingredients
        </h3>
        <div className="flex flex-wrap gap-2">
          {ingredientList.slice(0, 12).map((ingredient) => (
            <Button
              key={ingredient.idIngredient}
              variant={
                selectedIngredient === ingredient.strIngredient
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => onClickIngredient(ingredient.strIngredient)}
              className={`${
                selectedIngredient === ingredient.strIngredient
                  ? "bg-amber-600 hover:bg-amber-700"
                  : "border-slate-300 hover:bg-slate-100"
              }`}
            >
              {ingredient.strIngredient}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
