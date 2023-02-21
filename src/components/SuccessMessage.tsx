import { Box, Typography } from "@mui/material";
import CheckIcon from "../assets/icons/CheckIcon";

const SuccessMessage = () => {
  return (
    <Box
      width="100%"
      position="relative"
      display="flex"
      alignItems="center"
      sx={{ background: "#F4F6FC", color: "#29C293", marginBottom: "2.4rem" }}
    >
      <Box component="span" ml="1.4rem" pt="3px">
        <CheckIcon />
      </Box>
      <Typography
        variant="h5"
        padding="1.2rem 2.8rem .9rem 1.9rem"
        fontSize="1.2rem"
        fontFamily="inherit"
      >
        Well done, we'll email you with a reset link.
      </Typography>
    </Box>
  );
};

export default SuccessMessage;
