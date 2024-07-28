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

const MealCard = ({ meal, setMealToEdit, deleteMeal, index }) => {
  if (!meal.image) {
    if (index % 2 === 0) {
      meal.image =
        "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else {
      meal.image =
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574";
    }
  }
  return (
    <>
      <Card className="flex items-center gap-3 mb-3 shadow-sm">
        <CardHeader className="flex items-center gap-4 flex-row">
          <CardDescription>
            {" "}
            <img
              src={meal.image}
              alt={meal.name}
              width="52"
              height="52"
              className="aspect-square rounded-md object-cover"
              loading="lazy"
            />
          </CardDescription>
          <div className="block flex-col">
            <CardTitle className="">{meal.name}</CardTitle>
            <span className="text-muted-foreground/50 text-sm">
              {meal.prepLevel}
            </span>
          </div>
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
