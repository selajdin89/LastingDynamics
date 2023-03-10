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
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Authentication/Form";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import Title from "../components/Authentication/Title";
import setLoading from "../HOC/setLoading";

const textTitle = "signing up a new account";

const NewPassword = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newEmailInput, setNewEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const newPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmailInput(event.target.value);
  };

  const formIsNotValid = passwordInput.trim().length < 8;

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);

    if (formIsNotValid) {
      setIsLoading(false);
      setError(true);
      return;
    } else {
      setIsSubmitted(true);
      navigate("/", { replace: true });
    }
    setIsLoading(false);
  };

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
            mb="1.6rem"
          >
            Forgot your password
          </Typography>
          <Typography fontSize="1.4rem" mb="5.6rem">
            Please enter your new password
          </Typography>

          {!isLoading && !isSubmitted && error && <ErrorMessage />}
          {isLoading && <Loading />}
          {isSubmitted && <SuccessMessage />}

          <Box onSubmit={submitHandler} component="form" width="100%">
            <FormControl
              sx={{ width: "100%", height: "4rem", mb: 3 }}
              variant="outlined"
            >
              <OutlinedInput
                sx={{ height: "100%", "& .MuiOutlinedInput-input": { p: 1 } }}
                type="password"
                placeholder="Insert your new password"
                id="password"
                onChange={newPasswordHandler}
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
              Recover your password
            </Button>
            <Box width="100%" display="flex" justifyContent="center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  color="primary"
                  fontSize="1.4rem"
                  fontWeight="400"
                >
                  Back to login page
                </Typography>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Form>
    </Fragment>
  );
};

export default setLoading(NewPassword);
