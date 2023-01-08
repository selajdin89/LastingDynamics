import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar";
import { Fragment, Suspense } from "react";
import { authRoutes, routes } from "./components/Routes";
import { useAppSelector } from "./store";
import SideBarLayout from "./pages/SideBarLayout";
import AuthLayout from "./components/Authentication/AuthLayout";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Suspense>
        <Routes>
          {!isAuth && (
            <Route element={<AuthLayout />}>
              {authRoutes.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Route>
          )}

          {isAuth && (
            <Route element={<SideBarLayout />}>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Route>
          )}
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
