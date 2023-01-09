import React, { Fragment } from "react";
import { Box, Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TableBody from "@mui/material/TableBody";
import HorizontalDotsIcon from "../../assets/icons/HorizontalDotsIcon";

function createData(
  name: string,
  email: string,
  status: string,
  owner: boolean
) {
  return { name, email, status, owner };
}

const rows = [
  createData(
    "Frozen Yoghuirt",
    "selajdinmemeti89@lastigdynamics.com",
    "Active",
    true
  ),
  createData("Sandwich", "selajdinmemeti89@gmail.com", "Active", false),
  createData("Eclair", "selajdinmemeti89@gmail.com", "Active", false),
  createData("Cupcake", "selajdinmemeti89@gmail.com", "Inactive", false),
  createData("Gingerbread", "selajdinmemeti89@gmail.com", "Inactive", false),
  createData("Sutlijac", "selajdinmemeti89@gmail.com", "Active", false),
];

type Props = {
  open: boolean;
};

const TableSpaceSettings: React.FC<Props> = ({ open }) => {
  return (
    <Fragment>
      <Typography fontSize="2.4rem" sx={{ color: "#31394E" }}>
        Users on plan
      </Typography>
      <TableContainer sx={{ mt: "4rem" }}>
        <Table size="small" sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                "&.MuiTableRow-root>.MuiTableCell-root": {
                  color: "rgba(49, 57, 78, 0.5)",
                },
              }}
            >
              <TableCell colSpan={2}>Name</TableCell>
              <TableCell></TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background: row.status === "Inactive" ? "#EAEBED" : "",
                  opacity: row.status === "Inactive" ? "0.5" : "",
                }}
              >
                <TableCell component="th" scope="row" width="3rem">
                  <Avatar
                    sx={{
                      "&.MuiAvatar-root": {
                        width: "2rem",
                        height: "2rem",
                      },
                    }}
                    alt="Remy Sharp"
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  />
                </TableCell>
                <TableCell sx={{ color: "#31394E" }}>{row.name}</TableCell>
                <TableCell>
                  {!open && (
                    <Typography
                      textAlign="center"
                      fontSize="1.2rem"
                      sx={{
                        background: "#BFEDDF",
                        color: "#29C293",
                        opacity: !row.owner ? "0" : "1",
                        width: "75%",
                        borderRadius: "6px",
                      }}
                    >
                      OWNER
                    </Typography>
                  )}
                </TableCell>

                <TableCell sx={{ fontSize: "1.2rem", color: "#838895" }}>
                  {row.email}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1.2rem",
                    color: row.status === "Inactive" ? "#FD5461" : "#29C293",
                  }}
                >
                  {row.status}
                </TableCell>
                <TableCell align="center">
                  <HorizontalDotsIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box textAlign="right" mt="15.2rem">
        <Button
          variant="contained"
          sx={{
            fontWeight: 500,
            fontSize: "1.4rem",
            textTransform: "capitalize",
            padding: ".6rem 2.4rem",
          }}
        >
          Save
        </Button>
      </Box>
    </Fragment>
  );
};

export default TableSpaceSettings;
