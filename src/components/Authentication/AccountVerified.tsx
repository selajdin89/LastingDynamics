import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { MailIcon } from "../../assets/icons";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const AccountVerified = () => {
  return (
    <Stack
      position="relative"
      height="100%"
      p={12.3}
      pt="4.7rem"
      pb="5.7rem"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h3"
        fontFamily="inherit"
        lineHeight="2rem"
        fontSize="2.2rem"
        mb="6.6rem"
      >
        Your account is ready
      </Typography>
      <MailIcon />
      <Typography mt="3.6rem" mb="6.6rem" fontSize="1.8rem" textAlign="center">
        Please verify your email and continue to Roundrush
      </Typography>

      <Box width="100%" display="flex" justifyContent="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            color="primary"
            fontSize="1.4rem"
            fontWeight="400"
          >
            Go to login page
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default AccountVerified;
