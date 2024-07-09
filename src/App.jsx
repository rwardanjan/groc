import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import List from "./pages/List";
import Aside from "./components/Aside";
import "./index.css";

const App = () => {
  const initialMeals = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      image:
        "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=3703&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: ["Spaghetti", "Meat", "Tomato Sauce"],
      description:
        "Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.",
    },
  ];

  const [meals, setMeals] = useState(initialMeals);
  const [mealToEdit, setMealToEdit] = useState(null);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const addMeal = (meal) => {
    meal.id = Date.now();
    setMeals([...meals, meal]);
  };

  const editMeal = (updatedMeal) => {
    setMeals(
      meals.map((meal) => (meal.id === updatedMeal.id ? updatedMeal : meal))
    );
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
    console.log(isAsideOpen);
  };

  useEffect(() => {
    // if (isAsideOpen) {
    //   document.body.classList.add("fixed", "overflow-hidden");
    // } else {
    //   document.body.classList.remove("fixed", "overflow-hidden");
    // }
  }, [isAsideOpen]);

  return (
    <>
      <div className="p-4 bg-white min-h-screen overflow-hidden pb-[5rem]">
        <div className="container md:max-w-2xl mx-auto">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  meals={meals}
                  deleteMeal={deleteMeal}
                  setMealToEdit={setMealToEdit}
                />
              }
            />
            <Route path="/plan" element={<Plan />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
        <Footer toggleAside={toggleAside} />
      </div>
      <Aside
        addMeal={addMeal}
        editMeal={editMeal}
        mealToEdit={mealToEdit}
        setMealToEdit={setMealToEdit}
        toggleAside={toggleAside}
        isAsideOpen={isAsideOpen}
      />
    </>
  );
};

export default App;
