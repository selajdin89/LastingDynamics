import avatarImg from "../assets/images/avatar.jpeg";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  HomeIcon,
  SettingsIcon,
  TrelloIcon,
  YellowLogo,
} from "../assets/icons";
import Avatar from "@mui/material/Avatar";
const image = (
  <Avatar sx={{ width: "24px", height: "24px" }} alt="Remy Sharp" src={""} />
);
export const icons = [
  {
    source: <YellowLogo />,
    text: "Yellow Tech Inc.",
  },
  {
    source: <TrelloIcon />,
    text: "Personal Board",
  },
  { source: <HomeIcon />, text: "Dashboard" },
  {
    source: <SettingsIcon />,
    text: "Space Settings",
  },
];

export const footerIcons = [
  { icon: image, toolTip: "Account", id: "e1" },
  { icon: <HelpOutlineIcon />, toolTip: "Custommer Help", id: "e2" },
  { icon: <LogoutIcon />, toolTip: "Sign Out", id: "e3" },
];
