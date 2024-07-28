import React, { Suspense, useEffect, useState, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SkeletonMeal from "./components/skeletons/SkeletonMeal";
import HomeLayout from "./layouts/HomeLayout";
import RootLayout from "./layouts/RootLayout";
import MealDetailPage from "./pages/MealDetailPage";
import NotFound from "./pages/NotFound";
const Settings = lazy(() => import("./pages/Settings"));
const List = lazy(() => import("./pages/ShoppingList"));
const MealsLoader = lazy(() => import("./components/loaders/MealsLoader"));
const PlanLoader = lazy(() => import("./components/loaders/PlanLoader"));
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
            <Route
              path="plan"
              element={
                <Suspense fallback={<SkeletonMeal />}>
                  <PlanLoader />
                </Suspense>
              }
            />
            <Route
              path="list"
              element={
                <Suspense fallback={<SkeletonMeal />}>
                  <List />
                </Suspense>
              }
            />
            <Route
              path="settings"
              element={
                <Suspense fallback={<SkeletonMeal />}>
                  <Settings />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
