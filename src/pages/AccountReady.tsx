import { Fragment } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Authentication/Form";
import MailIcon from "../assets/icons/MailIcon";
import Title from "../components/Authentication/Title";
import setLoading from "../HOC/setLoading";

const textTitle = "signing up a new account";

const AccountReady = () => {
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
            mb="6.6rem"
          >
            Your account is ready
          </Typography>
          <MailIcon />
          <Typography
            mt="3.6rem"
            mb="6.6rem"
            fontSize="1.8rem"
            textAlign="center"
          >
            Please verify your email and continue to Roundrush
          </Typography>

          <Box width="100%" display="flex" justifyContent="center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                component="span"
                color="primary"
                fontSize="1.4rem"
                fontWeight="400"
              >
                Go to login page
              </Typography>
            </Link>
          </Box>
        </Stack>
      </Form>
    </Fragment>
  );
};

export default setLoading(AccountReady);
