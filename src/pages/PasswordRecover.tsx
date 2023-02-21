import { useState, Fragment } from "react";
import { Stack, Typography } from "@mui/material";
import Form from "../components/Authentication/Form";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import Title from "../components/Authentication/Title";
import setLoading from "../HOC/setLoading";
import PasswordRecoverForm from "./../components/Authentication/PasswordRecoverForm";

const textTitle = "signing up a new account";

const PasswordRecover = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newEmailInput, setNewEmailInput] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmailInput(event.target.value);
  };

  const formIsNotValid = !newEmailInput.trim().includes("@");

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);

    if (formIsNotValid) {
      setError(true);
    } else {
      setIsSubmitted(true);
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      <Title textTitle={textTitle} role={""} />
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
            Enter your details below
          </Typography>

          {!isLoading && !isSubmitted && error && <ErrorMessage />}
          {isLoading && <Loading />}
          {isSubmitted && <SuccessMessage />}
          <PasswordRecoverForm
            isSubmitted={isSubmitted}
            newEmailInput={newEmailInput}
            submitHandler={submitHandler}
            emailHandler={emailHandler}
          />
        </Stack>
      </Form>
    </Fragment>
  );
};

export default setLoading(PasswordRecover);
