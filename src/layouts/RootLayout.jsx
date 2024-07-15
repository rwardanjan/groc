import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

const RootLayout = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const editMeal = (updatedMeal) => {
    setMeals(
      meals.map((meal) => (meal.id === updatedMeal.id ? updatedMeal : meal))
    );
  };

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
    console.log(isAsideOpen);
  };

  const drawerContent = "<div>Drawer Content</div>";
  useEffect(() => {
    // if (isAsideOpen) {
    //   document.body.classList.add("fixed", "overflow-hidden");
    // } else {
    //   document.body.classList.remove("fixed", "overflow-hidden");
    // }
  }, [isAsideOpen]);

  return (
    <div className="p-4 bg-white min-h-screen overflow-hidden pb-[5rem]">
      <div className="container md:max-w-2xl mx-auto p-0">
        <Header />
        <Aside
          content={drawerContent}
          toggleAside={toggleAside}
          isAsideOpen={isAsideOpen}
        />
        <main>
          <Outlet />
        </main>
        <Footer toggleAside={toggleAside} />
      </div>
    </div>
  );
};

export default RootLayout;
