import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";

const Info = () => {
  const [language, setLanguage] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  return (
    <Fragment>
      <Typography fontSize="24px" sx={{ color: "#31394E", mb: "51px" }}>
        Info
      </Typography>
      <Box display="flex" flexDirection="column">
        <Typography sx={{ color: "#ADB0B8", fontSize: "12px", mb: "12px" }}>
          Avatar
        </Typography>
        <Avatar sx={{ mb: "19px" }} />
        <FormControl sx={{ width: "523px", mb: "16px" }}>
          <FormHelperText
            sx={{
              color: "#ADB0B8",
              fontSize: "12px",
              mb: "8px",
              ml: "0",
            }}
          >
            Full Name
          </FormHelperText>
          <OutlinedInput
            sx={{
              "& .MuiOutlinedInput-input": {
                p: "4px 5px",
              },
            }}
            placeholder="Please enter your name"
          />
        </FormControl>
        <FormControl sx={{ width: "523px", mb: "16px" }}>
          <FormHelperText
            sx={{
              color: "#ADB0B8",
              fontSize: "12px",
              mb: "8px",
              ml: "0",
            }}
          >
            User Name
          </FormHelperText>
          <OutlinedInput
            sx={{ "& .MuiOutlinedInput-input": { p: "4px 5px" } }}
            placeholder="Please enter your user name"
          />
        </FormControl>
        <FormControl sx={{ width: "523px", mb: "16px" }}>
          <FormHelperText
            sx={{
              color: "#ADB0B8",
              fontSize: "12px",
              mb: "8px",
              ml: "0",
            }}
          >
            Email
          </FormHelperText>
          <OutlinedInput
            sx={{ "& .MuiOutlinedInput-input": { p: "4px 5px" } }}
            placeholder="Please enter your email"
          />
        </FormControl>
        <Box sx={{ minWidth: 120 }}>
          <Typography
            fontSize="14px"
            textTransform="uppercase"
            sx={{
              color: "rgba(49, 57, 78, 0.5)",
              mb: "24px",
              mt: "36px",
            }}
          >
            Preferences
          </Typography>
          <Typography sx={{ color: "#ADB0B8", fontSize: "12px", mb: "8px" }}>
            Language
          </Typography>
          <FormControl sx={{ minWidth: 120, width: 172 }}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ "& .MuiOutlinedInput-input": { p: "2px 10px" } }}
            >
              <MenuItem value={10}>Italian</MenuItem>
              <MenuItem value={20}>English</MenuItem>
              <MenuItem value={30}>Albanian</MenuItem>
              <MenuItem value={40}>Mandarin</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="171px">
        <Button
          variant="contained"
          color="error"
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "capitalize",
            padding: "6px 24px",
          }}
        >
          Button
        </Button>
        <Button
          variant="contained"
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "capitalize",
            padding: "6px 24px",
          }}
        >
          Save
        </Button>
      </Box>
    </Fragment>
  );
};

export default Info;
