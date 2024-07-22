import React, { useState, useEffect } from "react";
import { PlusIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchMeals } from "../util/api"; // Ensure this function is properly defined

const DayCard = ({ day: dayProp, meals: initialMeals }) => {
  const [meals, setMeals] = useState(initialMeals || []);
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      const loadAvailableMeals = async () => {
        try {
          const data = await fetchMeals();
          setAvailableMeals(data);
        } catch (error) {
          console.error("Failed to load available meals:", error);
        }
      };

      loadAvailableMeals();
    }
  }, [isDrawerOpen]);

  const handleAddMeal = (meal) => {
    setMeals([...meals, meal]);
    setIsDrawerOpen(false);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      // Handle invalid date
      return { weekday: "Unknown", month: "Unknown", day: "Unknown" };
    }
    const options = { weekday: "long", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const [weekday, month, day] = formattedDate.split(" ");

    return { weekday, month, day };
  };

  const { weekday, month, day } = formatDate(dayProp || "");

  return (
    <Card className="gap-3 mb-3 shadow-sm">
      <CardHeader className="flex items-center gap-4 flex-row">
        <CardTitle className="text-lg font-bold">
          {weekday}{" "}
          <span className="text-sm text-muted-foreground">{`${month} ${day}`}</span>
        </CardTitle>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger className="ml-auto text-md font-bold text-primary focus:border-transparent focus:ring-0 focus:outline-none">
            <PlusIcon width="20" height="20" />
            <span className="sr-only">Add meal to day</span>
          </DrawerTrigger>
          <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] focus:outline-none">
            <DrawerHeader className="text-left">
              <DrawerTitle>Select Recipe</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 max-w-md w-full mx-auto flex flex-col overflow-auto gap-2">
              {availableMeals.map((meal) => (
                <div
                  key={meal.id}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleAddMeal(meal)}
                >
                  <img
                    src={meal.imageUrl || "https://via.placeholder.com/36"}
                    alt={meal.name}
                    width="36"
                    height="36"
                    className="aspect-square rounded-md object-cover"
                  />
                  <span>{meal.name}</span>
                </div>
              ))}
            </div>
            <DrawerFooter className="pb-[env(safe-area-inset-bottom)]">
              <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardHeader>
      {meals.length > 0 && (
        <CardFooter className="p-3 gap-2 flex-row flex-wrap w-full">
          {meals.map((meal) => (
            <div key={meal.id} className="flex items-center gap-2 min-w-full">
              <img
                src={meal.imageUrl || "https://via.placeholder.com/36"}
                alt={meal.name}
                width="36"
                height="36"
                className="aspect-square rounded-md object-cover"
              />
              <CardTitle className="font-semibold">{meal.name}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                    className="ml-auto justify-end mr-[3px] background"
                  >
                    <DotsVerticalIcon />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default DayCard;
