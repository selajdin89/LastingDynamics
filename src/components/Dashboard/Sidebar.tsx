import React, { useState, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import MiniDrawer from "./MiniDrawer";
import Dashboard from "../../pages/Dashboard";
import Objectives from "../../pages/Objectives";
import SpaceSettings from "../../pages/SpaceSettings";
import Loading from "../Loading";

type Props = {
  children: React.ReactNode;
};

const Sidebar: React.FC<Props> = ({ children }) => {
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
    <Box sx={{ display: "flex", width: "100%", background: "#fff" }}>
      <CssBaseline />
      <MiniDrawer />
      <Box width="100%">{children}</Box>
    </Box>
  );
};

export default Sidebar;
