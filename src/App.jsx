import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomeLayout from "./layouts/HomeLayout";
import Plan from "./pages/Plan";
import Settings from "./pages/Settings";
import List from "./pages/ShoppingList";
import MealDetailPage from "./pages/MealDetailPage";
import SkeletonMeal from "./components/SkeletonMeal";
import MealsLoader from "./components/MealsLoader";
import NotFound from "./pages/NotFound"; // Assuming you have a NotFound component
import { fetchMeals, fetchMealById, fetchIngredients } from "./util/api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<HomeLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<SkeletonMeal />}>
              <MealsLoader />
            </Suspense>
          }
        />
        <Route
          path="meal/:mealId"
          element={<MealDetailPage />}
          loader={async ({ params }) => {
            const meal = await fetchMealById(params.mealId);
            return { meal };
          }}
        />
      </Route>
      <Route path="plan" element={<Plan />} />
      <Route path="list" element={<List />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
