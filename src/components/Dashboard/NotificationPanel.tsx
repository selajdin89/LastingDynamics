import {
  Avatar,
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CloseIcon,
  DeleteIcon,
  FolderIcon,
  HighIcon,
  HorizontalDotsIcon,
  NewIcon,
  UrgentIcon,
} from "../../assets/icons";
import LowIcon from "../../assets/icons/LowIcon";
import MediumIcon from "../../assets/icons/MediumIcon";

const NotificationPanel = () => {
  const [checked, setChecked] = React.useState(["1"]);

  const { state }: { state: any } = useLocation();
  const navigate = useNavigate();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box
      bgcolor="#fff"
      mt="-6.8rem"
      zIndex="100"
      pt="20px"
      width="41%"
      borderRadius="6px"
      border="1px solid #F4F6FC"
      borderRight="none"
    >
      <Box
        justifyContent="flex-end"
        display="flex"
        borderBottom="1px solid #F4F6FC"
        pb="14px"
      >
        <IconButton sx={{ p: "0" }}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => navigate(-1)} sx={{ ml: "3.5rem", p: "0" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box pr="7.6rem" pl="2.4rem">
        <Typography
          fontSize="2.4rem"
          fontWeight="500"
          sx={{ color: "#151B26", mt: "2.4rem", mb: "2.4rem" }}
        >
          Notification Center
        </Typography>
        <Box>
          <Box p="1rem">
            <Typography
              fontSize="1.2rem"
              sx={{ color: "#ADB0B8", mb: "1.4rem" }}
            >
              Description
            </Typography>
            <Typography
              fontSize="1.4rem"
              component="p"
              sx={{ color: "rgba(21, 27, 38, 0.5)" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              distinctio eius tempora illum, ab sint omnis fugiat iste adipisci
              tenetur est impedit soluta consequatur, non hic numquam, ratione
              molestias. Sunt.
            </Typography>
          </Box>
          <Box mt="5.2rem">
            <Typography
              fontSize="1.2rem"
              sx={{ color: "#ADB0B8", mb: "1.4rem" }}
            >
              Priority
            </Typography>
          </Box>
          <Box display="flex">
            {state.priority === "high" ? (
              <HighIcon />
            ) : state.priority === "urgent" ? (
              <UrgentIcon />
            ) : state.priority === "medium" ? (
              <MediumIcon />
            ) : (
              <LowIcon />
            )}
            <Typography textTransform="capitalize" sx={{ ml: "8px" }}>
              {state?.priority} priority
            </Typography>
          </Box>
          <Typography
            fontSize="1.2rem"
            sx={{ color: "#ADB0B8", mb: "1.4rem", mt: "3rem" }}
          >
            Subproject
          </Typography>
          <Box display="flex">
            <FolderIcon />
            <Typography sx={{ ml: "8px" }}>{state.name}</Typography>
          </Box>
          <Typography
            fontSize="1.2rem"
            sx={{ color: "#ADB0B8", mb: "2.2rem", mt: "3rem" }}
          >
            Assignees
          </Typography>
          <Box display="flex">
            <Box
              display="flex"
              alignItems="center"
              mr="7px"
              borderRadius="7.5px"
              sx={{
                background: "rgba(0, 121, 255, 0.296258)",
                color: "#0079FF",
              }}
              p=".6rem 1.2rem"
            >
              <Avatar
                sx={{ width: "2rem", height: "2rem", mr: ".2rem" }}
                alt="r"
              ></Avatar>
              <Typography fontSize="1.25rem">Iene Robert</Typography>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              borderRadius="7.5px"
              sx={{
                background: "rgba(0, 121, 255, 0.296258)",
                color: "#0079FF",
              }}
              p=".6rem 1.2rem"
            >
              <Avatar
                sx={{ width: "2rem", height: "2rem", mr: "1.2rem" }}
                alt="r"
              ></Avatar>
              <Typography fontSize="1.25rem">Kristin Rich</Typography>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography
            fontSize="1.2rem"
            sx={{ color: "#ADB0B8", mb: "1.4rem", mt: "3rem" }}
          >
            Linked Projects
          </Typography>
          <Typography component="span">10/12/2012</Typography>
          <Typography
            fontSize="1.2rem"
            sx={{ color: "#ADB0B8", mb: "1.4rem", mt: "3rem" }}
          >
            Due Date
          </Typography>
          <Typography component="span">10/12/2012</Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="5.8rem"
      >
        <Typography
          fontSize="1.2rem"
          fontWeight="500"
          textTransform="uppercase"
          sx={{ color: "#4C84FF", ml: "3.3rem" }}
        >
          Checkmarks
        </Typography>
        <IconButton sx={{ mr: "2.9rem" }}>
          <NewIcon />
        </IconButton>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {["Notification Service", "Notification Updated", "API Server"].map(
          (value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton sx={{ pl: "23px" }}>
                  <ListItemText
                    id={labelId}
                    primary={`${value}`}
                    sx={{
                      "&.MuiListItemText-root": {
                        flex: "initial",
                        mr: "auto",
                      },
                    }}
                  />
                  <IconButton>
                    <HorizontalDotsIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            );
          }
        )}
      </List>
    </Box>
  );
};

export default NotificationPanel;
