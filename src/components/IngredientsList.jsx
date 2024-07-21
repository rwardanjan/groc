import React, { useState } from "react";

const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "Tomatoes", status: "open" },
    { id: 2, name: "Cucumbers", status: "open" },
    { id: 3, name: "Onions", status: "done" },
    { id: 4, name: "Garlic", status: "open" },
    { id: 5, name: "Olive Oil", status: "done" },
  ]);

  const toggleIngredientStatus = (id) => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id
          ? {
              ...ingredient,
              status: ingredient.status === "open" ? "done" : "open",
            }
          : ingredient
      )
    );
  };

  const handleClick = (id) => {
    const element = document.getElementById(`ingredient-${id}`);
    element.classList.add("fade");
    setTimeout(() => {
      element.classList.remove("fade");
      toggleIngredientStatus(id);
    }, 500); // Delay of 0.5 seconds for the fade effect
  };

  return (
    <div>
      <div className="mt-7">
        <h1 className="text-3xl tracking-tighter font-bold mb-8">
          Ingredients
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-1">To Buy</h3>
          <ul className="list-none">
            {ingredients
              .filter((ingredient) => ingredient.status === "open")
              .map((ingredient) => (
                <li
                  key={ingredient.id}
                  id={`ingredient-${ingredient.id}`}
                  className="flex items-center py-4 border-b border-gray-200 transition-all"
                >
                  <input
                    type="radio"
                    id={`radio-${ingredient.id}`}
                    className="custom-radio "
                    onChange={() => handleClick(ingredient.id)}
                  />
                  <label
                    className="text-md w-full"
                    htmlFor={`radio-${ingredient.id}`}
                  >
                    {ingredient.name}
                  </label>
                  <button
                    type="button"
                    className="ml-auto inline-flex items-center px-1 py-1 text-sm font-medium text-grey-10 rounded-lg end-2 bottom-2 focus:ring-4 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-1">Bought</h3>
          <ul className="list-none">
            {ingredients
              .filter((ingredient) => ingredient.status === "done")
              .map((ingredient) => (
                <li
                  key={ingredient.id}
                  id={`ingredient-${ingredient.id}`}
                  className="flex items-center py-4 border-b border-gray-200 transition-all"
                >
                  <input
                    type="radio"
                    id={`radio-${ingredient.id}`}
                    className="custom-radio"
                    onChange={() => handleClick(ingredient.id)}
                    checked
                  />
                  <label
                    className="text-md w-full line-through text-gray-300"
                    htmlFor={`radio-${ingredient.id}`}
                  >
                    {ingredient.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientsList;
