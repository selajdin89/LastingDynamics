import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const SideBarLayout = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default SideBarLayout;
