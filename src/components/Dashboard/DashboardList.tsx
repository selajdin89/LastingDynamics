import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";
import UrgentIcon from "../../assets/icons/UrgentIcon";
import HighIcon from "../../assets/icons/HighIcon";
import TaskIcon from "../../assets/icons/TaskIcon";
import { pendingReviews } from "../../data/Pending";
import { Todo } from "../../store/tabs-slice";
import MediumIcon from "../../assets/icons/MediumIcon";
import LowIcon from "../../assets/icons/LowIcon";
import { ComplexIcon, InprogressIcon } from "../../assets/icons";

const DashboardList = ({ state }: any) => {
  const [loading, setLoading] = useState(true);
  const sortedTodos = state.todos?.sort(
    (a: { urgency: string }, b: { urgency: string }) =>
      parseFloat(b.urgency) - parseFloat(a.urgency)
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, [state]);

  return (
    <Box>
      <Box display="flex" sx={{ mt: "5rem", mb: "2.4rem" }}>
        <Typography fontSize="2rem">Todos</Typography>
        <Chip
          color="info"
          label={state.todos ? state.todos.length : "0"}
          size="small"
          sx={{ ml: "1.6rem", alignSelf: "center" }}
        />
      </Box>
      {!state.todos && (
        <Box textAlign="center">
          <Typography fontSize="1.4rem" border="1px dashed rgba(0,0,0,0.25)">
            No issues
          </Typography>
        </Box>
      )}
      {React.Children.toArray(
        sortedTodos?.map((todo: Todo) => (
          <List dense disablePadding>
            {loading ? (
              <ListItemButton>
                <ListItem
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mr: "1rem" }}>
                    <Skeleton
                      variant="circular"
                      width={22}
                      height={22}
                      animation="pulse"
                    />
                  </Box>
                  <Box sx={{ mr: "1rem" }}>
                    <Skeleton
                      variant="circular"
                      width={22}
                      height={22}
                      animation="pulse"
                    />
                  </Box>
                  <ListItemText
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": { fontSize: "1.4rem" },
                    }}
                    primary={
                      <Typography width="80%" sx={{ marginLeft: "1rem" }}>
                        <Skeleton
                          sx={{ fontSize: "1.8rem" }}
                          variant="text"
                          animation="pulse"
                        />
                      </Typography>
                    }
                  />
                  <Skeleton variant="rounded" animation="pulse" width={60} />
                </ListItem>
              </ListItemButton>
            ) : (
              <ListItemButton>
                <ListItem
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mr: "1rem" }}>
                    {todo.priority === "urgent" ? (
                      <UrgentIcon />
                    ) : todo.priority === "high" ? (
                      <HighIcon />
                    ) : todo.priority === "medium" ? (
                      <MediumIcon />
                    ) : (
                      <LowIcon />
                    )}
                  </Box>
                  <Box sx={{ mr: "1rem" }}>
                    {todo.status === "done" ? (
                      <TaskIcon />
                    ) : todo.status === "complex" ? (
                      <ComplexIcon />
                    ) : (
                      <InprogressIcon />
                    )}
                  </Box>
                  <ListItemText
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": { fontSize: "1.4rem" },
                    }}
                    primary="WMS-20"
                    secondary={
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {todo.todo}
                      </Typography>
                    }
                  />

                  <Chip size="small" label="primary" color="primary" />
                </ListItem>
              </ListItemButton>
            )}

            <Divider sx={{ borderColor: "#F4F6FC" }} />
          </List>
        ))
      )}
      <Box display="flex" sx={{ mt: "5rem", mb: "2.4rem" }}>
        <Typography fontSize="2rem">Pending Reviews</Typography>
        <Chip
          color="warning"
          label="12"
          size="small"
          sx={{ ml: "1.6rem", alignSelf: "center" }}
        />
      </Box>
      {React.Children.toArray(
        pendingReviews.map((task) => (
          <List dense disablePadding>
            {loading ? (
              <ListItemButton>
                <ListItem
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mr: "1rem" }}>
                    <Skeleton
                      variant="circular"
                      width={22}
                      height={22}
                      animation="pulse"
                    />
                  </Box>
                  <Box sx={{ mr: "1rem" }}>
                    <Skeleton
                      variant="circular"
                      width={22}
                      height={22}
                      animation="pulse"
                    />
                  </Box>
                  <ListItemText
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": { fontSize: "1.4rem" },
                    }}
                    primary={
                      <Typography width="80%" sx={{ marginLeft: "1rem" }}>
                        <Skeleton
                          sx={{ fontSize: "1.8rem" }}
                          variant="text"
                          animation="pulse"
                        />
                      </Typography>
                    }
                  />
                  <Skeleton variant="rounded" animation="pulse" width={60} />
                </ListItem>
              </ListItemButton>
            ) : (
              <ListItemButton>
                <ListItem
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mr: "1rem" }}>
                    {task.priority === "urgent" ? (
                      <UrgentIcon />
                    ) : task.priority === "medium" ? (
                      <MediumIcon />
                    ) : task.priority === "high" ? (
                      <HighIcon />
                    ) : (
                      <LowIcon />
                    )}
                  </Box>
                  <Box sx={{ mr: "1rem" }}>
                    <TaskIcon />
                  </Box>
                  <ListItemText
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& .MuiTypography-root": { fontSize: "1.4rem" },
                    }}
                    primary="WMS-20"
                    secondary={
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {task.task}
                      </Typography>
                    }
                  />
                  <Chip size="small" label="primary" color="primary" />
                </ListItem>
              </ListItemButton>
            )}
            <Divider sx={{ borderColor: "#F4F6FC" }} />
          </List>
        ))
      )}
    </Box>
  );
};

export default DashboardList;
