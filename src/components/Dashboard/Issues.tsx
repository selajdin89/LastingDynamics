import { IconButton, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import DashboardList from "./DashboardList";
import { Link, useLocation } from "react-router-dom";
import { linkStyle } from "../../muiStyles/RouterLinks";

const Issues = () => {
  const { state }: { state: any } = useLocation();

  return (
    <Fragment>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{ fontSize: "2.6rem", fontWeight: "500", color: "#4C84FF" }}
        >
          {state.name}
        </Typography>
        <Stack
          mt=".8rem"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link
            to={state.todos ? "/objectives/" : ""}
            style={linkStyle}
            state={{
              todos: state.todos,
              id: state.id,
              color: state.color,
              initials: state.initials,
              name: state.name,
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "#838895",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              Go to the project
            </Typography>
            <IconButton>
              <ArrowRight />
            </IconButton>
          </Link>
        </Stack>
      </Stack>
      <DashboardList state={state} />
    </Fragment>
  );
};

export default Issues;
