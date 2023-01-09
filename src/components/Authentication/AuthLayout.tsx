import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";
import Authentication from "./Authentication";

const AuthLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Authentication>
      <Outlet />
    </Authentication>
  );
};

export default AuthLayout;
