import React from "react";
import MealList from "../components/MealList";
import { useLoaderData, Link } from "react-router-dom";

const Home = () => {
  const { meals } = useLoaderData();

  return (
    <>
      <MealList meals={meals} />
    </>
  );
};

export default Home;
