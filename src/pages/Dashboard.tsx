import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Stack,
} from "@mui/material";
import userWellcome from "../assets/images/wellcome-user.png";
import { AddIcon, BellIcon } from "../assets/icons";
import {
  appBarStyle,
  sxStyle,
  tabsContainerStyle,
  tabsStyle,
  toolBarStyle,
} from "../muiStyles/StyleDashbord";
import Issues from "../components/Dashboard/Issues";
import { Link, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../store";
import { linkStyle } from "../muiStyles/RouterLinks";
import TaskPlaceholder from "../components/Dashboard/TaskPlaceholder";
import setLoading from "../HOC/setLoading";

const Dashboard = () => {
  const [openTasks, setOpenTasks] = useState(false);

  const items = useAppSelector((state) => state.tabs.items);

  return (
    <Box sx={{ display: "flex", background: "#fff" }}>
      <Box sx={{ width: "100%", pl: "5rem" }}>
        <Box>
          <AppBar sx={appBarStyle} position="static">
            <Toolbar sx={toolBarStyle}>
              <Typography
                sx={{ flex: 3, fontSize: "2.4rem" }}
                variant="h6"
                component="div"
              >
                Dashboard
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
        <Grid container>
          <Grid
            item
            xs={12}
            lg={6.5}
            sx={{ borderRight: "0.5px solid rgba(0, 0, 0, 0.1)", pr: "4rem" }}
          >
            <Box sx={sxStyle}>
              <Box component="div" sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "2.4rem",
                    mb: "1.6rem",
                  }}
                >
                  Welcome back, James
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "1.4rem", fontFamily: "inherit" }}
                >
                  In Marketing you have 14 tasks to accomplish and 10 reviews
                  left on your current iteration
                </Typography>
              </Box>
              <img
                src={userWellcome}
                style={{
                  position: "absolute",
                  right: "4.1rem",
                  top: "-2.8rem",
                }}
              />
            </Box>
            <Box sx={{ p: "1.6rem" }}>
              <Typography
                sx={{
                  display: "block",
                  color: "#31394E",
                  fontSize: "2rem",
                  mb: "1.8rem",
                }}
              >
                Favorite Projects
              </Typography>
              <Stack
                display="flex"
                direction="row"
                flexWrap="wrap"
                gap="1.7rem"
              >
                {React.Children.toArray(
                  items.map((item) => (
                    <Box
                      sx={[
                        tabsContainerStyle,
                        { "&:hover": { background: "#E8F0FE" } },
                      ]}
                    >
                      <Link
                        style={linkStyle}
                        to="list"
                        state={{
                          todos: item.todos,
                          name: item.name,
                          id: item.id,
                          initials: item.initials,
                          color: item.color,
                        }}
                      >
                        <Box
                          sx={[{ background: `${item.color}` }, tabsStyle]}
                          onClick={() => setOpenTasks(true)}
                        >
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "2.6rem",
                              fontFamily: "inherit",
                              fontWeight: "500",
                              color: "#fff",
                            }}
                          >
                            {item.initials}
                          </Typography>
                        </Box>
                        <Typography sx={{ mt: "2.4rem", color: "#838895" }}>
                          {item.name}
                        </Typography>
                      </Link>
                    </Box>
                  ))
                )}
              </Stack>
            </Box>
          </Grid>
          <Grid
            minHeight="100vh"
            item
            xs={12}
            lg={5.5}
            sx={{ p: "5.3rem 5rem 5.3rem 2.4rem " }}
          >
            <Routes>
              <Route path="list" element={<Issues />} />
            </Routes>
            {!openTasks && <TaskPlaceholder />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default setLoading(Dashboard);
