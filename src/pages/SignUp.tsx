import { useState, Fragment } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../components/Authentication/Form";
import Loading from "../components/Loading";
import Title from "../components/Authentication/Title";
import ErrorMessage from "../components/ErrorMessage";
import setLoading from "../HOC/setLoading";

const textTitle = "Signing up a new account";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const navigate = useNavigate();

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };
  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  const formIsNotValid =
    passwordInput.length < 8 || nameInput.trim().includes("@");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);

    if (formIsNotValid) {
      setError(true);
    } else {
      navigate("/company-sign-up", { replace: true });
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <Title textTitle={textTitle} />
      <Form>
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
            Sign Up
          </Typography>
          {!isLoading && error && <ErrorMessage />}
          {isLoading && <Loading />}
          <Box onSubmit={submitHandler} component="form">
            <FormControl
              sx={{ width: "100%", height: "4rem", mb: 3 }}
              variant="outlined"
            >
              <OutlinedInput
                sx={{ height: "100%", "& .MuiOutlinedInput-input": { p: 1 } }}
                type="name"
                placeholder="Insert your name"
                id="name"
                onChange={nameHandler}
                value={nameInput}
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
              Next
            </Button>
          </Box>
        </Stack>
      </Form>
    </Fragment>
  );
};

export default setLoading(SignUp);
