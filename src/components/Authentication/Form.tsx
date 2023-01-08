import { Box, Paper, Stack } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Form: React.FC<Props> = ({ children }) => {
  return (
    <Stack minHeight="100vh" alignItems="center">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: 539,
          },
        }}
      >
        <Paper elevation={1} sx={{ borderRadius: "6px" }}>
          {children}
        </Paper>
      </Box>
    </Stack>
  );
};

export default Form;
