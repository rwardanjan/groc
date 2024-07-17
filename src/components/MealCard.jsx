import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MealCard = ({ meal, setMealToEdit, deleteMeal }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  if (!meal.image) {
    meal.image =
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574";
  }
  return (
    <>
      <Card className="flex items-center gap-3 mb-3">
        <CardHeader className="flex items-center gap-4 flex-row">
          <CardDescription>
            {" "}
            <img
              src={meal.image}
              alt={meal.name}
              width="64"
              height="64"
              className="aspect-square rounded-md object-cover"
              loading="lazy"
            />
          </CardDescription>
          <CardTitle>{meal.name}</CardTitle>
        </CardHeader>
        <CardFooter className="ml-auto p-0 pr-3">
          <Link to={`/meal/${meal.id}`}>
            <Button size="icon">
              <ChevronRightIcon></ChevronRightIcon>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default MealCard;
