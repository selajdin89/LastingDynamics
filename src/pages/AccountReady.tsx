import { Fragment } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Authentication/Form";
import MailIcon from "../assets/icons/MailIcon";
import Title from "../components/Authentication/Title";
import setLoading from "../HOC/setLoading";
import AccountVerified from "../components/Authentication/AccountVerified";

const textTitle = "signing up a new account";

const AccountReady = () => {
  return (
    <Fragment>
      <Title textTitle={textTitle} role={""} />
      <Form>
        <AccountVerified />
      </Form>
    </Fragment>
  );
};

export default setLoading(AccountReady);
