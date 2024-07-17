import React, { useEffect, useState } from "react";
import { fetchMeals } from "../util/api";
import MealList from "../components/MealList";
import SkeletonMeal from "../components/SkeletonMeal";

const MealsLoader = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const fetchedMeals = await fetchMeals();
        setMeals(fetchedMeals);
      } catch (err) {
        setError("Failed to fetch meals");
      } finally {
        setLoading(false);
      }
    };

    loadMeals();
  }, []);

  if (loading) {
    return <SkeletonMeal />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <MealList meals={meals} />;
};

export default MealsLoader;
