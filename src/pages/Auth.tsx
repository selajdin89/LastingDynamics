import { Fragment } from "react";
import Form from "../components/Authentication/Form";
import LoginForm from "../components/Authentication/LoginForm";
import Title from "../components/Authentication/Title";

const textTitle = "the optimized workflow out of the box";

const Auth = () => {
  return (
    <Fragment>
      <Title textTitle={textTitle} />
      <Form>
        <LoginForm />
      </Form>
    </Fragment>
  );
};

export default Auth;
