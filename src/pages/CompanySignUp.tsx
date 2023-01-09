import { useState, Fragment } from "react";
import {
  Stack,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Loading from "../components/Loading";
import Form from "../components/Authentication/Form";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import Title from "../components/Authentication/Title";
import { top5Songs } from "../data/Data";
import setLoading from "../HOC/setLoading";

const textTitle = "signing up a new account";

const CompanySignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [spaceInput, setSpaceInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [nameTouched, setNameTouched] = useState(false);
  const [spaceTouched, setSpaceTouched] = useState(false);
  const [label, setLabel] = useState<string>("");

  const navigate = useNavigate();

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };
  const nameBlurHandler = () => {
    setNameTouched(true);
  };
  const spaceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpaceInput(event.target.value);
  };
  const spaceBlurHandler = () => {
    setSpaceTouched(true);
  };

  const nameIsValid = nameInput.trim() !== "";
  const nameHasError = !nameIsValid && nameTouched;
  const spaceIsValid = spaceInput.trim() !== "";
  const spaceHasError = !spaceIsValid && spaceTouched;

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);
    setNameTouched(true);
    setSpaceTouched(true);
    if (!nameIsValid || !spaceIsValid) {
      setError("This field is required");
      setIsLoading(false);
      return;
    } else {
      setError(null);

      navigate("/account-ready", { replace: true });
    }
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
            mb="16px"
          >
            Sign up
          </Typography>
          <Typography mb=".8rem">Create your company space</Typography>

          {isLoading && <Loading />}

          <Box onSubmit={submitHandler} component="form">
            <FormControl
              sx={{ width: "100%", height: "4rem", mb: 3 }}
              variant="outlined"
            >
              <FormHelperText
                sx={{
                  color: "#ADB0B8",
                  fontSize: "1.2rem",
                  m: "2.4rem 0 0 0",
                }}
              >
                {!error ? "Company Name" : ""}
              </FormHelperText>
              <TextField
                variant="outlined"
                sx={{ height: "100%", "& .MuiOutlinedInput-input": { p: 1 } }}
                type="text"
                placeholder="Insert your name"
                id="text"
                onChange={nameHandler}
                onBlur={nameBlurHandler}
                value={nameInput}
                helperText={nameHasError && error}
                error={nameHasError && error !== null}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", height: "4rem", mb: 3 }}
              variant="outlined"
            >
              {" "}
              <FormHelperText
                sx={{ color: "#ADB0B8", fontSize: "1.2rem", m: "2.4rem 0 0 0" }}
              >
                {!error ? "Your space will be" : ""}
              </FormHelperText>
              <TextField
                variant="outlined"
                sx={{ height: "100%", "& .MuiOutlinedInput-input": { p: 1 } }}
                type="text"
                onChange={spaceHandler}
                onBlur={spaceBlurHandler}
                placeholder="Space"
                id="text"
                value={spaceInput}
                helperText={spaceHasError && error}
                error={spaceHasError && error !== null}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", height: "4rem", mb: 3 }}
              variant="outlined"
            >
              {" "}
              <FormHelperText
                sx={{ color: "#ADB0B8", fontSize: "1.2rem", m: "2.4rem 0 0 0" }}
              >
                Indusry
              </FormHelperText>
              <Autocomplete
                onFocus={() => setLabel("")}
                popupIcon={<ArrowDownIcon />}
                disablePortal
                id="combo-box-demo"
                options={top5Songs}
                sx={{
                  width: "100%",
                  ".MuiOutlinedInput-root": { p: "1px" },
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ "& .MuiOutlinedInput-root": { p: "1px" } }}
                    placeholder="Industry type"
                    {...params}
                    label={label}
                  />
                )}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", height: "4rem", mb: 3 }}
              variant="outlined"
            >
              {" "}
              <FormHelperText
                sx={{ color: "#ADB0B8", fontSize: "1.2rem", m: "2.4rem 0 0 0" }}
              >
                Number of employee
              </FormHelperText>
              <Autocomplete
                onFocus={() => setLabel("")}
                popupIcon={<ArrowDownIcon />}
                disablePortal
                id="combo-box-demo"
                options={top5Songs}
                sx={{
                  width: "100%",
                  ".MuiOutlinedInput-root": { p: "1px" },
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ "& .MuiOutlinedInput-root": { p: "1px" } }}
                    placeholder="Select a size..."
                    {...params}
                    label={label}
                  />
                )}
              />
            </FormControl>
            <FormGroup sx={{ mt: "3.1rem" }}>
              <FormControlLabel
                sx={{ fontSize: "1.2rem" }}
                control={<Checkbox />}
                label="Accetto le Condizioni di utilizzo e informativa sulla Privacy"
              />
            </FormGroup>
            <Button
              type="submit"
              sx={{
                width: "100%",
                height: "4.8rem",
                fontSize: "1.4rem",
                mb: "1.8rem",
                mt: "3.1rem",
                backgroundColor: "#29C293",
                "&.MuiButtonBase-root:hover": {
                  background: "#209873",
                },
              }}
              variant="contained"
            >
              Register
            </Button>
          </Box>
        </Stack>
      </Form>
    </Fragment>
  );
};

export default setLoading(CompanySignUp);
