import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../pages/Auth";

const Validation = lazy(() => import("../pages/Validation"));
const SignUp = lazy(() => import("../pages/SignUp"));
const CompanySignUp = lazy(() => import("../pages/CompanySignUp"));
const AccountReady = lazy(() => import("../pages/AccountReady"));
const PasswordRecover = lazy(() => import("../pages/PasswordRecover"));
const NewPassword = lazy(() => import("../pages/NewPassword"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Objectives = lazy(() => import("../pages/Objectives"));
const SpaceSettings = lazy(() => import("../pages/SpaceSettings"));

export const authRoutes = [
  { path: "/", element: <Auth /> },
  { path: "/validation", element: <Validation /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/company-sign-up", element: <CompanySignUp /> },
  { path: "/account-ready", element: <AccountReady /> },
  { path: "/recover-password", element: <PasswordRecover /> },
  { path: "/new-password", element: <NewPassword /> },
  { path: "*", element: <Navigate to="/" replace /> },
];

export const routes = [
  { path: "/dashboard/*", element: <Dashboard /> },
  { path: "/space-settings/*", element: <SpaceSettings /> },
  { path: "/space-settings/", element: <Navigate to="/space-settings/info" /> },
  { path: "/objectives/*", element: <Objectives /> },
];
