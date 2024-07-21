import React, { Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MealsLoader from "./components/MealsLoader";
import SkeletonMeal from "./components/SkeletonMeal";
import HomeLayout from "./layouts/HomeLayout";
import RootLayout from "./layouts/RootLayout";
import MealDetailPage from "./pages/MealDetailPage";
import NotFound from "./pages/NotFound";
import Plan from "./pages/Plan";
import Settings from "./pages/Settings";
import List from "./pages/ShoppingList";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { fetchMealById } from "./util/api";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : true
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // const isAuthenticated = !!authToken;
  const isAuthenticated = true;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
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
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
