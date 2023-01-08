import Box from "@mui/material/Box";
import { AppBar, Toolbar, IconButton, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BellIcon, AddIcon, SettingsBlueIcon } from "../assets/icons";
import { appBarStyle, toolBarStyle } from "../muiStyles/StyleDashbord";
import TableSpaceSettings from "../components/Dashboard/TableSpaceSettings";
import { NavLink, Route, Routes } from "react-router-dom";
import Info from "../components/Dashboard/Info";

const SpaceSettings = () => {
  const open = false;

  let activeClassName = {
    color: "blue",
    textDecoration: "none",
  };

  let inactiveClassName = {
    color: "#838895",
    textDecoration: "none",
  };

  return (
    <Box sx={{ width: "100%", pl: "5rem", background: "#fff" }}>
      <Box>
        <AppBar sx={appBarStyle} position="static">
          <Toolbar sx={toolBarStyle}>
            <Typography
              sx={{ flex: 3, fontSize: "2.4rem" }}
              variant="h6"
              component="div"
            >
              Space Settings
            </Typography>
            <IconButton>
              <BellIcon />
            </IconButton>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        p="53px 0 53px 0"
        sx={{
          "&.MuiGrid-root .MuiGrid-item": {
            borderRight: "2px solid #F4F6FC",
          },
        }}
      >
        <Grid xs={1.8} item>
          <Box display="flex" alignItems="center" mt="5px">
            <SettingsBlueIcon />
            <Typography
              fontSize="14px"
              fontWeight="500"
              sx={{ color: "#4C84FF", ml: " 11px" }}
            >
              Space Settings
            </Typography>
          </Box>
          <Box
            sx={{
              "&.MuiBox-root>.MuiTypography-root": { fontSize: "14px" },
              ml: "25px",
              mt: "22px",
            }}
          >
            <NavLink
              style={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
              to="info"
            >
              <Typography>Info</Typography>
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
              to="members"
            >
              <Typography sx={{ mt: "24.5px" }}>Members</Typography>
            </NavLink>
          </Box>
        </Grid>

        <Grid p="0 5rem 0 5rem" xs={10.2} item>
          <Routes>
            <Route path="info" index element={<Info />} />
            <Route
              path="members"
              element={<TableSpaceSettings open={open} />}
            />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpaceSettings;
