import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Todo } from "../../store/tabs-slice";
import { linkStyle } from "../../muiStyles/RouterLinks";
import { SearchIcon } from "../../assets/icons";

const TableObjectives = ({ state }: any) => {
  const [todos, setTodos] = useState<Todo[]>(state.todos);
  const [searched, setSearched] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setSearched(event.target.value);
      const filteredTodos = todos.filter((todo) => {
        return todo.name.toLowerCase().includes(searched.toLowerCase());
      });
      setTodos(filteredTodos);
    } else {
      setSearched(event.target.value);
      setTodos(state.todos);
    }
  };

  return (
    <Stack width="100%">
      <Stack direction="row" pt="5rem" mb="4rem">
        <FormControl sx={{ width: "19ch", mr: "auto" }}>
          <OutlinedInput
            value={searched}
            onChange={handleSearch}
            sx={{ "& .MuiOutlinedInput-input": { p: "4.5px 2px" } }}
            placeholder="Choose something"
            endAdornment={<SearchIcon />}
          />
        </FormControl>
        <Box mr="1.5rem">
          <Button
            variant="outlined"
            sx={{
              mr: "1.6rem",
              fontSize: "1.4rem",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            Milestones
          </Button>
          <Button
            variant="text"
            sx={{
              fontSize: "1.4rem",
              fontWeight: "500",
              color: "#ADB0B8",
              textTransform: "capitalize",
            }}
          >
            Requirements
          </Button>
        </Box>
      </Stack>

      <TableContainer sx={{ pr: "5rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">PRIORITY</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center">ASSIGNEES</TableCell>
              <TableCell align="center">DUE DATE</TableCell>
              <TableCell align="center">CHECKMARKS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((todo: Todo) => (
              <TableRow
                key={todo.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background: !todo.priority ? "#CEF2D8" : "",
                }}
              >
                <TableCell width="40%" component="th" scope="row">
                  <Typography>
                    <Link
                      to="/objectives/notifications"
                      style={linkStyle}
                      state={{
                        name: todo.name,
                        priority: todo.priority,
                      }}
                    >
                      {todo?.name}
                    </Link>
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  width="10%"
                  sx={{ p: "0 2.3rem", minWidth: "13.5rem" }}
                >
                  <Typography
                    textTransform="capitalize"
                    fontSize="1.2rem"
                    fontWeight="500"
                    sx={{
                      visibility: !todo.priority ? "hidden" : "",
                      borderRadius: "6px",
                      background: "red",
                      p: "7px 0",
                      color: "#fff",
                      backgroundColor:
                        todo?.priority === "urgent"
                          ? "#DB54FD"
                          : todo.priority === "high"
                          ? "#FD5461"
                          : todo.priority === "medium"
                          ? "#FFAB2A"
                          : "#29C293",
                    }}
                  >
                    {todo?.priority}
                  </Typography>
                </TableCell>
                <TableCell
                  width="8.5%"
                  align="center"
                  sx={{ p: "0 23px", minWidth: "13.5rem" }}
                >
                  <Typography
                    fontSize="1.2rem"
                    fontWeight="500"
                    sx={{
                      visibility: !todo.status ? "hidden" : "",
                      color: "#fff",
                      background: "#D6D7DC",
                      p: "7px 0",
                      borderRadius: "6px",
                    }}
                  >
                    {todo?.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <AvatarGroup
                    max={4}
                    sx={{
                      textAlign: "center",
                      "&.MuiAvatarGroup-root .MuiAvatar-root": {
                        marginLeft: "-2rem",
                      },

                      "&.MuiAvatarGroup-root .MuiAvatar-root:first-of-type": {
                        marginLeft: "0px",
                      },
                      "&.MuiAvatarGroup-root": {
                        flexDirection: "row",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    />
                  </AvatarGroup>{" "}
                </TableCell>

                <TableCell align="center">15/01/2020 </TableCell>
                <TableCell align="center">4.0</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default TableObjectives;
