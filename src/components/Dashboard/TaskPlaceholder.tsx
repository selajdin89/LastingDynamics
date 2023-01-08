import { Stack, Typography } from "@mui/material";
import noIssuesImage from "../../assets/images/no-issues-image.svg";

const TaskPlaceholder = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <img src={noIssuesImage} />
      <Typography mt="3rem" fontSize="1.4rem" sx={{ color: "#ADB0B8" }}>
        Once you select the project, it's related tasks will apear here.
      </Typography>
    </Stack>
  );
};

export default TaskPlaceholder;
