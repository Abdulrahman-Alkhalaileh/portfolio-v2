"use client";
import React from "react";
import { Stack } from "@mui/material";
import SectionsList from "components/Lists/SectionsList";
import ThemeMenu from "./ThemeMenu";
import SectionsMenu from "./SectionsMenu";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      px={{xs:2,md:12}}
      position='fixed'
      zIndex={1000}
      boxSizing='border-box'
      width='100%'
      height={120}
    >
      <Stack display={{ xs: "none", md: "block" }} />
      <SectionsMenu
        iconButtonProps={{ sx: { display: { xs: "flex", md: "none" } } }}
      />
      <SectionsList sx={{ display: { xs: "none", md: "flex" } }} />
      <ThemeMenu />
    </Stack>
  );
};

export default Header;
