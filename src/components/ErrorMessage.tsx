import React from "react";
import { Box, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const ErrorMessage = () => {
  return (
    <Box
      position="relative"
      display="flex"
      sx={{ background: "#F4F6FC", color: "#FD5461", marginBottom: "2.4rem" }}
    >
      <Box component="span">
        <WarningAmberIcon
          sx={{
            fontSize: "2rem",
            position: "absolute",
            left: "1.5rem",
            top: "2.3rem",
          }}
        />
      </Box>
      <Typography
        padding="1.2rem 2.8rem .9rem 5.2rem"
        fontSize="1.2rem"
        fontFamily="inherit"
      >
        Please make sure yu have the correct email or password
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
