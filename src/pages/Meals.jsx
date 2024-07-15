import React from "react";
import MealList from "../components/MealList";
import { useLoaderData, Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Home = () => {
  const { meals } = useLoaderData();

  const deleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  return (
    <>
      <MealList meals={meals} deleteMeal={deleteMeal} />
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Home;
