import { useState, Fragment } from "react";
import {
  Stack,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Box,
} from "@mui/material";
import ErrorMessage from "../ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { linkStyle } from "../../muiStyles/RouterLinks";
import { useAppDispatch } from "../../store";
import { setIsAuth } from "../../store/auth-slice";

const LoginForm = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const formIsNotValid =
    passwordInput.length < 8 || !emailInput.trim().includes("@");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);

    if (formIsNotValid) {
      setError(true);
    } else {
      dispatch(setIsAuth());

      navigate("/dashboard/*", { replace: true });
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
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
          mb="5rem"
        >
          Login
        </Typography>

        {isLoading && <Loading />}
        {!isLoading && error && <ErrorMessage />}

        <Box onSubmit={submitHandler} component="form">
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
          <FormControl
            sx={{ width: "100%", height: "4rem", mb: 3 }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{ height: "100%", "& .MuiOutlinedInput-input": { p: 1 } }}
              type="password"
              onChange={passwordHandler}
              placeholder="Password"
              id="password"
              value={passwordInput}
            />
            <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
          </FormControl>

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
            Login
          </Button>
        </Box>

        <Box width="100%" display="flex" justifyContent="space-between">
          <Link to="/recover-password" style={linkStyle}>
            <Typography
              component="span"
              color="primary"
              fontSize="1.4rem"
              fontWeight="400"
            >
              I forgot my password
            </Typography>
          </Link>
          <Link to="/validation" style={linkStyle}>
            <Typography
              component="span"
              color="primary"
              fontSize="1.4rem"
              fontWeight="400"
            >
              I don't have an account
            </Typography>
          </Link>
        </Box>
      </Stack>
    </Fragment>
  );
};

export default LoginForm;
