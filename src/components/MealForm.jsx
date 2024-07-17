import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MealForm = ({ editMeal, mealToEdit, setMealToEdit, closeAside }) => {
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    image: "",
    ingredients: [""],
  });
  const ingredientRefs = useRef([]);
  const [focusIndex, setFocusIndex] = useState(null);

  const addMeal = (meal) => {
    meal.id = Date.now();
    setMeals([...meals, meal]);
  };

  useEffect(() => {
    if (mealToEdit) {
      setMeal(mealToEdit);
    } else {
      setMeal({ name: "", description: "", image: "", ingredients: [""] });
    }
  }, [mealToEdit]);

  useEffect(() => {
    if (focusIndex !== null && ingredientRefs.current[focusIndex]) {
      ingredientRefs.current[focusIndex].focus();
      setFocusIndex(null);
    }
  }, [focusIndex]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "name" || name === "description") {
      setMeal({ ...meal, [name]: value });
    } else if (name.startsWith("ingredient-")) {
      const newIngredients = [...meal.ingredients];
      newIngredients[index] = value;
      setMeal({ ...meal, ingredients: newIngredients });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMeal({ ...meal, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddIngredient = () => {
    const newIndex = meal.ingredients.length;
    setMeal((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, ""],
    }));
    setFocusIndex(newIndex);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = meal.ingredients.filter((_, i) => i !== index);
    setMeal({ ...meal, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mealToEdit) {
      editMeal(meal);
    } else {
      addMeal(meal);
    }
    setMeal({ name: "", description: "", image: null, ingredients: [""] });
    setMealToEdit(null);
    closeAside();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Label onChange={(e) => handleChange(e)} htmlFor="name">
            Naam
          </Label>
          <Input type="text" id="name" placeholder="Pasta Carbonara" />
        </div>
        <div className="mb-5">
          <Label htmlFor="description">Beschrijving</Label>
          <Textarea
            id="description"
            onChange={(e) => handleChange(e)}
            placeholder="Heerlijke pasta met...."
          />
        </div>
        <div className="mb-5">
          <Label htmlFor="ingredients">Ingredients</Label>
          {meal.ingredients.map((ingredient, index) => (
            <div key={index} className="relative">
              <Input
                ref={(el) => (ingredientRefs.current[index] = el)}
                type="text"
                id="name"
                name={`ingredient-${index}`}
                key={`ingredient-${index}`}
                placeholder="Enter ingredient"
                className="mb-2"
              />
              {meal.ingredients.length > 1 && (
                <Button
                  onClick={() => handleRemoveIngredient(index)}
                  disabled={meal.ingredients.length === 1}
                  variant="ghost"
                  size="icon"
                  className="absolute end-0 top-0"
                >
                  <TrashIcon></TrashIcon>
                </Button>
              )}
            </div>
          ))}
          <Button onClick={handleAddIngredient} variant="dotted" size="xs">
            <PlusIcon className="mr-0.5"></PlusIcon> Add
          </Button>
        </div>
        <div>
          {/* <Button onClick={handleAddIngredient}>Add meal</Button> */}
          {/* <button
            type="submit"
            className="text-white justify-center flex items-center bg-black w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5"
          >
            Add meal
          </button> */}
        </div>
      </form>
    </>
  );
};

export default MealForm;
