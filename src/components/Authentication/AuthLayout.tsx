import { Outlet } from "react-router-dom";
import Authentication from "./Authentication";

const AuthLayout = () => {
  return (
    <Authentication>
      <Outlet />
    </Authentication>
  );
};

export default AuthLayout;
