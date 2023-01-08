import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      //   light: "#757ce8",
      main: "#4C84FF",
      //   dark: "#002884",
      //   contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `'Rubik',"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    htmlFontSize: 10,
  },
});

export default theme;
