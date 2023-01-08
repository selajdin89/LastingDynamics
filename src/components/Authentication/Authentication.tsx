import { Box } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Authentication: React.FC<Props> = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e8f0fe 100%)",
      }}
    >
      {children}
    </Box>
  );
};

export default Authentication;
