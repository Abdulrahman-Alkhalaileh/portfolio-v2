import Home from "pages/Home/Home";
import HomeIcon from "@mui/icons-material/Home";

import Skills from "pages/Skills/Skills";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

import Experience from "pages/Experience/Experience";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import Projects from "pages/Projects/Projects";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export interface AnimatedItemType {
  index: number;
  name: string;
  element?: React.ReactNode;
  path?: string;
  icon?: React.ReactNode;
}

export const sections: AnimatedItemType[] = [
  {
    index: 0,
    name: "about",
    element: <Home />,
    path: "/",
    icon: <HomeIcon />,
  },
  {
    index: 1,
    name: "skills",
    element: <Skills />,
    path: "/skills",
    icon: <ContactEmergencyIcon />,
  },
  {
    index: 2,
    name: "experience",
    element: <Experience />,
    path: "/experience",
    icon: <BusinessCenterIcon />,
  },
  {
    index: 3,
    name: "projects",
    element: <Projects />,
    path: "/projects",
    icon: <AccountTreeIcon />,
  },
];
