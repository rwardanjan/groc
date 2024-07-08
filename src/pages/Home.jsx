import React from "react";
import MealList from "../components/MealList";

const Home = ({ meals, deleteMeal, setMealToEdit }) => {
  return (
    <>
      <MealList
        meals={meals}
        deleteMeal={deleteMeal}
        setMealToEdit={setMealToEdit}
      />
    </>
  );
};

export default Home;
