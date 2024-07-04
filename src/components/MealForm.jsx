import React, { useState, useEffect, useRef } from "react";
import { IoAddOutline } from "react-icons/io5";

const MealForm = ({
  addMeal,
  editMeal,
  mealToEdit,
  setMealToEdit,
  closeAside,
}) => {
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    image: "",
    ingredients: [""],
  });
  const ingredientRefs = useRef([]);
  const [focusIndex, setFocusIndex] = useState(null);

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
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={meal.name}
            onChange={(e) => handleChange(e)}
            className="bg-gray-100 text-gray-900 text-sm rounded-xl focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            placeholder="Pasta Carbonara"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            name="description"
            value={meal.description}
            onChange={(e) => handleChange(e)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg  focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
            placeholder="Write description..."
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="ingredients"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ingredients
          </label>
          {meal.ingredients.map((ingredient, index) => (
            <div key={index} className="relative">
              <input
                ref={(el) => (ingredientRefs.current[index] = el)}
                type="text"
                name={`ingredient-${index}`}
                value={ingredient}
                key={`ingredient-${index}`}
                onChange={(e) => handleChange(e, index)}
                placeholder="Enter ingredient"
                required
                className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {meal.ingredients.length > 1 && (
                <button
                  type="button"
                  disabled={meal.ingredients.length === 1}
                  onClick={() => handleRemoveIngredient(index)}
                  className="absolute inline-flex items-center px-1 py-1 text-sm font-medium text-grey-10 rounded-lg end-2 bottom-2 focus:ring-4 focus:outline-none dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-black border rounded-lg end-2 bottom-2  focus:ring-4 focus:outline-none dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <IoAddOutline size="20" />
            Add
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="text-white justify-center flex items-center bg-black w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add meal
          </button>
        </div>
      </form>
    </>
  );
};

export default MealForm;
