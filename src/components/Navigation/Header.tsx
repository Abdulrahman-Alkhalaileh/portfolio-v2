import React from "react";
import { Stack, StackProps } from "@mui/material";
import SectionsList from "components/Lists/SectionsList";
import ThemeMenu from "./ThemeMenu";
import SectionsMenu from "./SectionsMenu";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useScrollDirection from "customHooks/useScrollDirection";
import { ModalContextProvider } from "context/ModalContext";

export interface HeaderProps extends StackProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const scrollDirection = useScrollDirection("up");

  return (
    <Stack
      component={motion.div}
      direction='row'
      alignItems="center"
      justifyContent="space-between"
      gap={1}
      px={{ xs: 3, md: 5, lg: 7, xl: 9,xxl:30 }}
      position="fixed"
      zIndex={1000}
      boxSizing="border-box"
      width="100%"
      height={{ xs: 80, sm: 100 }}
      bgcolor="background.paper"
      borderBottom={2}
      borderColor="background.default"
      animate={{ top: scrollDirection === "down" ? -100 : 0 }}
      {...props}
    >
      <ModalContextProvider>
        <SectionsMenu
          iconButtonProps={{ sx: { display: { xs: "flex", md: "none" } } }}
        />
      <Logo />
      <SectionsList sx={{ display: { xs: "none", md: "flex" } }} />
        <ThemeMenu />
      </ModalContextProvider>
    </Stack>
  );
};

export default Header;
