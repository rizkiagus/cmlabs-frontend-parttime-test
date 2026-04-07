import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function SectionNoResult({
  onClickClearFilter,
  selectedIngredient,
}: {
  onClickClearFilter: () => void;
  selectedIngredient: string;
}) {
  return (
    <div className="text-center py-12">
      <div className="text-slate-400 mb-4">
        <Filter className="h-12 w-12 mx-auto" />
      </div>
      <h3 className="text-lg font-medium text-slate-900 mb-2">
        No meals found
      </h3>
      <p className="text-slate-600 mb-4">
        No recipes found for &quot;{selectedIngredient}&quot;. Try selecting a
        different ingredient.
      </p>
      <Button onClick={onClickClearFilter} variant="outline">
        Clear filter
      </Button>
    </div>
  );
}
