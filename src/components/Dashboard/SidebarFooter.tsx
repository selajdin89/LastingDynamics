import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  Avatar,
  Tooltip,
} from "@mui/material";
import avatarImg from "../assets/images/avatar.jpeg";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAppDispatch } from "../../store";
import { setIsAuth } from "../../store/auth-slice";
import { footerIcons } from "../../data/SidebarIcons";
import { useNavigate } from "react-router-dom";

type Input = {
  open: boolean;
};

const SidebarFooter = ({ open }: Input) => {
  const [toolTip, setToolTip] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const navToDashboard = () => {
    navigate("/dashboard", { replace: true });
  };
  const logoutHandler = () => {
    setTimeout(() => {
      dispatch(setIsAuth());
    }, 700);
  };
  return (
    <List
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: open ? "row" : "column-reverse",
        bottom: "1px",
        width: "100%",
      }}
    >
      {React.Children.toArray(
        footerIcons.map((icon) => (
          <ListItem disablePadding sx={{ width: "unset" }}>
            <Tooltip title={icon.toolTip} placement="top">
              <ListItemButton
                onClick={
                  icon.id === "e3"
                    ? logoutHandler
                    : icon.id === "e1"
                    ? navToDashboard
                    : undefined
                }
                sx={{
                  minHeight: 48,
                  width: 48,
                  justifyContent: "center",
                  px: 2.5,
                  p: 0,
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
                  borderRadius: "50%",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: 0,
                    // mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon.icon}
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default SidebarFooter;
