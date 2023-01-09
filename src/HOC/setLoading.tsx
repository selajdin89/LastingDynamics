import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

const setLoading =
  (Component: any) =>
  ({ ...props }) => {
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
      <Box component="div">
        <Component {...props} />
      </Box>
    );
  };

export default setLoading;
