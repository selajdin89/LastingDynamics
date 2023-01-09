import { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { linkStyle } from "../../muiStyles/RouterLinks";

const ValidateEmail = () => {
  const [error, setError] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");

  const navigate = useNavigate();

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const emailIsNotValid = emailInput.trim().includes("@");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (emailIsNotValid) {
      setError(true);
    } else {
      navigate("/validation", { replace: true });
    }
  };

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
        fontFamily="inherit"
        lineHeight="2rem"
        fontSize="2.2rem"
        variant="h3"
        mb="16px"
      >
        Sign Up
      </Typography>
      <Typography fontSize="1.4rem" sx={{ mb: "4rem", color: "#5A6171" }}>
        Let's validate your email first
      </Typography>
      {error && (
        <Typography fontSize="1.4rem" sx={{ mb: "4rem", color: "#5A6171" }}>
          Your email it's already account in Roundrush
        </Typography>
      )}
      <Box onSubmit={submitHandler} component="form" width="100%">
        {!error && (
          <FormControl
            sx={{ width: "100%", height: "4rem", mb: 3 }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{ height: "100%", "& .MuiOutlinedInput-input": { p: 1 } }}
              type="email"
              placeholder="Insert your email"
              id="email"
              onChange={emailHandler}
              value={emailInput}
            />
            <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
          </FormControl>
        )}

        {!error && (
          <Button
            type="submit"
            sx={{
              width: "100%",
              height: "4.8rem",
              fontSize: "1.4rem",
              mb: "1.8rem",
            }}
            variant="contained"
          >
            Next
          </Button>
        )}
        {error && (
          <Link to="/sign-up" style={linkStyle}>
            <Button
              type="submit"
              sx={{
                width: "100%",
                height: "4.8rem",
                fontSize: "1.4rem",
                mb: "1.8rem",
              }}
              variant="contained"
            >
              Click here to authentication
            </Button>
          </Link>
        )}
      </Box>
    </Stack>
  );
};

export default ValidateEmail;
