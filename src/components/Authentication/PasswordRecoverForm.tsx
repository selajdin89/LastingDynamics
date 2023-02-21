import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../../muiStyles/RouterLinks";
import { buttonRecoverPassword } from "./../../muiStyles/Auths";

type Props = {
  newEmailInput: string;
  isSubmitted: boolean;
  submitHandler: (event: React.SyntheticEvent) => void;
  emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordRecoverForm: React.FC<Props> = (props) => {
  const { newEmailInput, isSubmitted, submitHandler, emailHandler } = props;

  return (
    <Box onSubmit={submitHandler} component="form" width="100%">
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
          value={newEmailInput}
        />
        <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
      </FormControl>
      {!isSubmitted && (
        <Button type="submit" sx={buttonRecoverPassword} variant="contained">
          Recover your password
        </Button>
      )}
      {isSubmitted && (
        <Link to="/new-password" style={linkStyle}>
          <Button type="submit" sx={buttonRecoverPassword} variant="contained">
            Done
          </Button>
        </Link>
      )}
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
  );
};

export default PasswordRecoverForm;
