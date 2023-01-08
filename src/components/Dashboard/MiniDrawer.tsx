import { useState, useEffect } from "react";
import {
  ListItemText,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  List,
  Box,
  Collapse,
  Popover,
  Typography,
} from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RoundRushLogo from "../../assets/icons/RoundRushLogo";
import { Drawer } from "../../muiStyles/sideBarStyles";
import { DrawerHeader } from "../../muiStyles/sideBarStyles";
import SidebarFooter from "./SidebarFooter";
import MenuIcon from "../../assets/icons/MenuIcon";
import { ExpandMore, KeyboardArrowRight, Star } from "@mui/icons-material";
import ThreeDotsHorIcon from "../../assets/icons/ThreeDotsHorIcon";
import { useAppDispatch } from "../../store";
import { addItem, removeItemFromFav } from "../../store/tabs-slice";
import { icons } from "../../data/SidebarIcons";
import { Link, useNavigate } from "react-router-dom";
import { linkStyle } from "../../muiStyles/RouterLinks";

interface Topics {
  [x: string]: any;
  name: string;
  color: string;
  initials: string;
  id: string;
}

interface Academies {
  topics: Topics;
  id: string;
  company: string;
}

const MiniDrawer = () => {
  const [academies, setAcademies] = useState<Academies[]>([]);
  const [requestsMenu, setRequestsMenu] = useState(false);
  const [collapse, setCollapse] = useState<Number[]>([]);
  const [hover, setHover] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isClicked, setIsClicked] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const expandIcon = requestsMenu ? <ExpandMore /> : <KeyboardArrowRight />;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://roundrush-ffee1-default-rtdb.firebaseio.com/projectsList.json"
      );
      const responseData = await response.json();
      console.log(responseData);

      setAcademies(responseData);
    };

    fetchData();
  }, []);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleIsClicked = (clickedIndex: string) => {
    if (isClicked.includes(clickedIndex)) {
      const openCopy = isClicked.filter((element) => {
        return element !== clickedIndex;
      });
      setIsClicked(openCopy);
    } else {
      const openCopy = [...isClicked];
      openCopy.push(clickedIndex);
      setIsClicked(openCopy);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHover("");
  };

  const opened = Boolean(anchorEl);
  const id = opened ? "simple-popover" : undefined;

  const handleRequestClick = () => {
    setRequestsMenu(!requestsMenu);
  };

  const handleDrawerOpen = () => {
    setOpen((prevState) => !prevState);
    setRequestsMenu(false);
  };

  const handleClick = (clickedIndex: Number) => {
    if (collapse.includes(clickedIndex)) {
      const openCopy = collapse.filter((element) => {
        return element !== clickedIndex;
      });
      setCollapse(openCopy);
    } else {
      const openCopy = [...collapse];
      openCopy.push(clickedIndex);
      setCollapse(openCopy);
    }
  };

  return (
    <Box>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#31394E",
            color: "#fff",
          },
        }}
      >
        <DrawerHeader>
          <Box
            sx={{
              position: "absolute",
              left: "24px",
              display: open ? "block" : "none",
            }}
          >
            <RoundRushLogo />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "block" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {icons.map((icon) => (
            <ListItem
              key={icon.text}
              disablePadding
              sx={{
                display: "block",
                "& .MuiListItemButton-root:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <Link
                to={
                  icon.text === "Space Settings"
                    ? "/space-settings/"
                    : "/dashboard/"
                }
                style={linkStyle}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#fff",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon.source}
                  </ListItemIcon>
                  <ListItemText
                    primary={icon.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      "& .MuiTypography-root": { fontSize: "1.4rem" },
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <List
          sx={{
            borderBottom: "1px solid white",
            borderTop: "1px solid white",
            "& .MuiListItemButton-root:hover": {
              background: "rgba(255, 255, 255, 0.2)",
            },
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          dense
        >
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={open ? handleRequestClick : undefined}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Teams"
                sx={{
                  opacity: open ? 1 : 0,
                  "& .MuiTypography-root": { fontSize: "1.4rem" },
                }}
              />
              {open && expandIcon}
            </ListItemButton>
          </ListItem>
          <Collapse in={requestsMenu} timeout="auto" unmountOnExit>
            {academies.map((el, index) => (
              <List key={el.id} component="div" disablePadding dense>
                <ListItemButton
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  onClick={() => handleClick(index)}
                >
                  <ListItemText
                    primary={el.company}
                    sx={{
                      opacity: open ? 1 : 0,
                      maxWidth: "16rem",
                      "& .MuiTypography-root": { fontSize: "1.4rem" },
                    }}
                  />
                  <IconButton sx={{ color: "white", p: "0" }}>
                    {index === hoveredIndex ? (
                      collapse.includes(index) && collapse.length > 0 ? (
                        <ExpandMore />
                      ) : (
                        <KeyboardArrowRight />
                      )
                    ) : (
                      ""
                    )}
                  </IconButton>
                </ListItemButton>
                <Collapse
                  in={collapse.includes(index)}
                  timeout="auto"
                  unmountOnExit
                >
                  {el.topics?.map((item: Topics) => (
                    <List
                      key={item.id}
                      component="div"
                      disablePadding
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "1.2rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          // ml: "1.6rem",
                        },
                        "& .MuiListItemText-root": {
                          margin: "2px",
                        },
                        "& .MuiListItemButton-root": { pr: "1.6rem" },
                      }}
                    >
                      <ListItemButton
                        sx={{
                          pr: "1.6rem",
                          pt: 0,
                          pb: 0,
                          p: 0,
                          ml: "1.6rem",
                        }}
                        onMouseEnter={() => setHover(item.id)}
                        onMouseLeave={() => setHover("")}
                      >
                        <Box
                          width="12px"
                          height="12px"
                          bgcolor={item.color}
                          borderRadius="3px"
                          mr="8px"
                        ></Box>
                        <ListItemText
                          sx={{ display: "flex" }}
                          primary={item.topic}
                        />

                        <IconButton
                          sx={{ p: 0 }}
                          onClick={handlePopoverClick}
                          aria-describedby={id}
                        >
                          {item.id === hover && <ThreeDotsHorIcon />}
                        </IconButton>

                        {item.id === hover && (
                          <Popover
                            id={id}
                            open={opened}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "center",
                              horizontal: "left",
                            }}
                          >
                            <Box p="8px 0">
                              <IconButton
                                onClick={() => {
                                  isClicked.includes(item.id)
                                    ? dispatch(removeItemFromFav(item.id))
                                    : dispatch(
                                        addItem({
                                          id: item.id,
                                          name: item.name,
                                          initials: item.initials,
                                          color: item.color,
                                          todos: item.todos,
                                        })
                                      ),
                                    handleIsClicked(item.id);
                                  handleClose();
                                  navigate("/dashboard", { replace: true });
                                }}
                                sx={{ borderRadius: 0, p: "0 1.6rem" }}
                              >
                                <Star
                                  sx={{
                                    width: "1.8rem",
                                    height: "1.8rem",
                                    mr: "1.8rem",
                                    "& .MuiSvgIcon-root": { fill: "yellow" },
                                    color: isClicked.includes(item.id)
                                      ? "yellow"
                                      : "",
                                  }}
                                />
                                <Typography fontSize="1.2rem">
                                  {isClicked.includes(item.id)
                                    ? "Remove from favorite"
                                    : "Add to favorite"}
                                </Typography>
                              </IconButton>
                            </Box>
                          </Popover>
                        )}
                      </ListItemButton>
                    </List>
                  ))}
                </Collapse>
              </List>
            ))}
          </Collapse>
        </List>
        <SidebarFooter open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};

export default MiniDrawer;
