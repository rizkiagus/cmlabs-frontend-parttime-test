import { Search } from "lucide-react";

export default function SectionNoSelectionIngredient() {
  return (
    <div className="text-center py-12">
      <div className="text-slate-400 mb-4">
        <Search className="h-12 w-12 mx-auto" />
      </div>
      <h3 className="text-lg font-medium text-slate-900 mb-2">
        Select an ingredient
      </h3>
      <p className="text-slate-600">
        Choose an ingredient from the list above to see all available recipes.
      </p>
    </div>
  );
}
