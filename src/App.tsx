import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { authRoutes, routes } from "./components/Routes";
import { useAppSelector } from "./store";
import SideBarLayout from "./pages/SideBarLayout";
import AuthLayout from "./components/Authentication/AuthLayout";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <>
      <Suspense>
        <Routes>
          {!isAuth && (
            <Route element={<AuthLayout />}>
              {React.Children.toArray(
                authRoutes.map((route) => (
                  <Route path={route.path} element={route.element} />
                ))
              )}
            </Route>
          )}

          {isAuth && (
            <Route element={<SideBarLayout />}>
              {React.Children.toArray(
                routes.map((route) => (
                  <Route path={route.path} element={route.element} />
                ))
              )}
            </Route>
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
