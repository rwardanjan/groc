// Plan.jsx
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DayCard from "@/components/DayCard";
import { fetchWeeklyMenus } from "../util/api"; // Ensure this function is properly defined

const Plan = () => {
  const [weeklyMenu, setWeeklyMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeeklyMenus = async () => {
      try {
        const menus = await fetchWeeklyMenus(); // Fetch all weekly menus
        // Find the active weekly menu; adjust the condition based on your data structure
        const activeMenu = menus.find((menu) => menu.active); // Assuming there's an `isActive` property
        setWeeklyMenu(activeMenu);
      } catch (error) {
        console.error("Failed to load weekly menus:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWeeklyMenus();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading message or spinner
  }

  if (!weeklyMenu) {
    return <p>No active weekly menu found.</p>; // Handle case where no weekly menu is found
  }
  console.log(weeklyMenu);

  return (
    <>
      <div className="mt-7 mb-4">
        <h1 className="text-3xl tracking-tighter font-bold">Meal Plan</h1>
      </div>
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          {weeklyMenu.mealPlanEntries.map((entry) => (
            <DayCard
              key={entry.id}
              day={entry.dayOfMeal} // Convert date string to Date object if needed
              meals={entry.meals}
            />
          ))}
        </TabsContent>
        <TabsContent value="history">History</TabsContent>
      </Tabs>
    </>
  );
};

export default Plan;
