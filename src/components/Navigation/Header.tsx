"use client";
import React from "react";
import { Stack, StackProps } from "@mui/material";
import SectionsList from "components/Lists/SectionsList";
import ThemeMenu from "./ThemeMenu";
import SectionsMenu from "./SectionsMenu";
import Logo from "./Logo";

export interface HeaderProps extends StackProps{}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      px={{ xs: 2, md: 12 }}
      position="fixed"
      zIndex={1000}
      boxSizing="border-box"
      width="100%"
      height={{xs:80,sm:100}}
      bgcolor="background.paper"
      borderBottom={2}
      borderColor='background.default'
      {...props}
    >
      <SectionsMenu
        iconButtonProps={{ sx: { display: { xs: "flex", md: "none" } } }}
      />
      <Logo />
      <SectionsList sx={{ display: { xs: "none", md: "flex" } }} />
      <ThemeMenu />
    </Stack>
  );
};

export default Header;
