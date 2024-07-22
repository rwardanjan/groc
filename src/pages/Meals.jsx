import React, { Suspense } from "react";
import MealList from "../components/MealList";

const Meals = ({ meals }) => {
  return <MealList meals={meals} />;
};

export default Meals;
