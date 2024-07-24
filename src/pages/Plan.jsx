// Plan.jsx
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DayCard from "@/components/DayCard";

const Plan = ({ weeklyMenu }) => {
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
