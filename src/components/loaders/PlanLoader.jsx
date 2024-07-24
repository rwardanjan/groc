// Plan.jsx
import React, { useState, useEffect } from "react";
import SkeletonDay from "../skeletons/SkeletonDay";
import Plan from "@/pages/Plan";
import { fetchWeeklyMenus } from "../../util/api"; // Ensure this function is properly defined

const PlanLoader = () => {
  const [weeklyMenu, setWeeklyMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeeklyMenus = async () => {
      try {
        const menus = await fetchWeeklyMenus();
        const activeMenu = menus.find((menu) => menu.active);
        setWeeklyMenu(activeMenu);
      } catch (error) {
        setError("Failed to fetch meals");
      } finally {
        setLoading(false);
      }
    };

    loadWeeklyMenus();
  }, []);

  if (loading) {
    return <SkeletonDay />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <Plan weeklyMenu={weeklyMenu} />;
};

export default PlanLoader;
