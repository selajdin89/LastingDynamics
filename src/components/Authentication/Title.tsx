import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import RoundRushTitle from "../../assets/icons/RoundRushTitle";

type Props = {
  textTitle: string;
};

const Title: React.FC<Props> = ({ textTitle }) => {
  return (
    <Stack alignItems="center" mt="6.2rem" mb="7.4rem">
      <Box component="div" sx={{ mb: "2.6rem" }}>
        <RoundRushTitle />
      </Box>
      <Typography
        color="primary"
        sx={{
          textAlign: "center",
          width: "30rem",
          fontWeight: "500",
          fontSize: "1.2rem",
          textTransform: "uppercase",
          fontFamily: "Inter",
          lineHeight: "2.4rem",
          letterSpacing: "6px",
        }}
      >
        {textTitle}
      </Typography>
    </Stack>
  );
};

export default Title;
