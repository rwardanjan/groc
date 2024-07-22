import { defer } from "react-router-dom";
import { fetchMeals, fetchMealById } from "./api";

export const mealsLoader = async () => {
  const meals = await fetchMeals();
  return defer({ meals });
};

export const mealDetailLoader = async ({ params }) => {
  const meal = await fetchMealById(params.mealId);
  return defer({ meal });
};
