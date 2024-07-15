import React from "react";
import { useParams } from "react-router-dom";
import initialMeals from "../data";

const MealDetailPage = () => {
  const { mealId } = useParams();

  const meal = initialMeals.find((m) => m.id === parseInt(mealId, 10));

  if (!meal) {
    return <p>Meal not found!</p>;
  }

  return (
    <div>
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
    </div>
  );
};

export default MealDetailPage;
