import React, { useEffect, useState } from "react";
import { fetchMeals } from "../util/api";
import SkeletonMeal from "../components/SkeletonMeal";
import Meals from "@/pages/Meals";

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

  return <Meals meals={meals} />;
};

export default MealsLoader;
