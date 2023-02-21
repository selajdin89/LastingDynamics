import { Fragment } from "react";
import Title from "../components/Authentication/Title";
import ValidateEmail from "../components/Authentication/ValidateEmail";
import Form from "../components/Authentication/Form";
import setLoading from "../HOC/setLoading";
import { Box } from "@mui/material";

const textTitle = "Signing up a new account";

const Validation = () => {
  return (
    <Box component="div">
      <Title textTitle={textTitle} role="columnheader" />
      <Form>
        <ValidateEmail />
      </Form>
    </Box>
  );
};

export default setLoading(Validation);
