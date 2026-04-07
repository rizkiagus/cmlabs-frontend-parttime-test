export type TResponseIngredients = {
  meals: TMealIngredients[];
};

export type TResponseMealByIngredient = {
  meals: TMealByIngredient[];
};

export type TMealIngredients = {
  idIngredient: string;
  strIngredient: string;
  strDescription: null | string;
  strThumb: string;
  strType: null | string;
};

export type TMealByIngredient = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};
