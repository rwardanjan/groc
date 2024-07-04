import React from "react";
import MealCard from "./MealCard";

const MealList = ({ meals, deleteMeal, setMealToEdit }) => {
  return (
    <div className="mt-4">
      {meals.map((meal) => (
        <MealCard
          key={meal.id}
          meal={meal}
          deleteMeal={deleteMeal}
          setMealToEdit={setMealToEdit}
        />
      ))}
    </div>
  );
};

export default MealList;
