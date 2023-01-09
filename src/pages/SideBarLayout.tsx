import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import setLoading from "../HOC/setLoading";

const SideBarLayout = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default setLoading(SideBarLayout);
