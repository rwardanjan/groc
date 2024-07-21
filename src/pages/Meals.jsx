import React from "react";
import { useLoaderData } from "react-router-dom";
import MealList from "../components/MealList";

const Meals = () => {
  const { meals } = useLoaderData();
  return <MealList meals={meals} />;
};

export default Meals;
