import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import {
  AddIcon,
  CalendarIcon,
  ConferenceIcon,
  RocketIcon,
  SearchIcon,
  SlackIcon,
  ThreDotsIcon,
  YellowBellIcon,
} from "../assets/icons";
import TableObjectives from "../components/Dashboard/TableObjectives";
import NotificationPanel from "../components/Dashboard/NotificationPanel";
import { Route, Routes, useLocation } from "react-router-dom";
import setLoading from "../HOC/setLoading";

const Objectives = () => {
  const { state }: { state: any } = useLocation();

  return (
    <Box width="100%" sx={{ p: "2.8rem 5rem 0 5rem" }}>
      <Stack
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
        alignItems="baseline"
        direction="row"
        justifyContent="space-between"
      >
        <Box display="flex">
          <Typography fontSize="2.4rem" sx={{ mr: "2.7rem" }}>
            Objectives
          </Typography>
          <ConferenceIcon />
        </Box>
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-around"
          sx={{ minWidth: "50%" }}
        >
          <Box
            width="40%"
            display="flex"
            sx={{ background: "#E8F0FE", p: "6px 1.6rem", alignSelf: "end" }}
          >
            <Typography
              sx={{
                mr: "auto",
                fontSize: "1.4rem",
                padding: 0,
              }}
            >
              iteration: ROUND
            </Typography>
            <IconButton sx={{ p: "0" }}>
              <ThreDotsIcon />
            </IconButton>
          </Box>
          <Box sx={{ p: "0", alignSelf: "end" }}>
            <SlackIcon />
          </Box>
          <Box sx={{ p: "0", alignSelf: "end" }}>
            <CalendarIcon />
          </Box>
          <Button
            sx={{
              p: "6px 2.5rem",
              background: "#29C293",
              alignSelf: "end",
              "&.MuiButtonBase-root:hover": {
                background: "#209873",
              },
            }}
            startIcon={<RocketIcon />}
            variant="contained"
          >
            Upgrade
          </Button>
          <IconButton sx={{ p: "0", alignSelf: "end" }}>
            <YellowBellIcon />
          </IconButton>
          <IconButton sx={{ p: "0", alignSelf: "end" }}>
            <AddIcon />
          </IconButton>
        </Box>
      </Stack>
      <Stack direction="row">
        <TableObjectives state={state} />
        <Routes>
          <Route path="notifications" element={<NotificationPanel />} />
        </Routes>
      </Stack>
    </Box>
  );
};

export default Objectives;
