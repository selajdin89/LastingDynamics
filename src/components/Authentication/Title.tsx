import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import RoundRushTitle from "../../assets/icons/RoundRushTitle";
import { titleStyle } from "./../../muiStyles/TitleStyles";

type Props = {
  textTitle: string;
  role: string;
};

const Title: React.FC<Props> = ({ textTitle }) => {
  return (
    <Box data-testid="title" component="div" role="columnheader">
      <Stack alignItems="center" mt="6.2rem" mb="7.4rem">
        <Box component="div" sx={{ mb: "2.6rem" }}>
          <RoundRushTitle />
        </Box>
        <Typography color="primary" sx={titleStyle}>
          {textTitle}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Title;
