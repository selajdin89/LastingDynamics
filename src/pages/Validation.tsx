import { Fragment } from "react";
import Title from "../components/Authentication/Title";
import ValidateEmail from "../components/Authentication/ValidateEmail";
import Form from "../components/Authentication/Form";
import setLoading from "../HOC/setLoading";

const textTitle = "Signing up a new account";

const Validation = () => {
  return (
    <Fragment>
      <Title textTitle={textTitle} />
      <Form>
        <ValidateEmail />
      </Form>
    </Fragment>
  );
};

export default setLoading(Validation);
