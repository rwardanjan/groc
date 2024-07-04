import React from 'react';
import MealCard from './MealCard';

const MealList = ({ meals, deleteMeal, setMealToEdit }) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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