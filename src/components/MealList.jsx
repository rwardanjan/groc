import React from "react";
import MealCard from "./MealCard";

const MealList = ({ meals, deleteMeal, setMealToEdit }) => {
  return (
    <div className="mt-4 mb-[7rem]">
      {meals.map((meal, index) => (
        <MealCard
          key={meal.id}
          index={index}
          meal={meal}
          deleteMeal={deleteMeal}
          setMealToEdit={setMealToEdit}
        />
      ))}
    </div>
  );
};

export default MealList;
