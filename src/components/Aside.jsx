import React from "react";
import MealForm from "./MealForm";

const Aside = ({
  toggleAside,
  isAsideOpen,
  addMeal,
  editMeal,
  mealToEdit,
  setMealToEdit,
}) => {
  return (
    <div
      id="drawer-form"
      className={`fixed top-0 left-0 z-40 h-screen p-4 pb-[9rem] overflow-y-auto transition-transform bg-white w-full dark:bg-gray-800 ${
        isAsideOpen ? "" : "-translate-x-full"
      }`}
      tabIndex="-1"
      aria-labelledby="drawer-form-label"
    >
      <div>
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-xl font-black  dark:text-gray-400"
        >
          New meal
        </h5>
        <button
          type="button"
          onClick={toggleAside}
          aria-controls="drawer-form"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <MealForm
          addMeal={addMeal}
          editMeal={editMeal}
          mealToEdit={mealToEdit}
          setMealToEdit={setMealToEdit}
          closeAside={toggleAside}
        />
      </div>
    </div>
  );
};

export default Aside;
