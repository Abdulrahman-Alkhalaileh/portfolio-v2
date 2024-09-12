"use client";
import React from "react";
import { Stack } from "@mui/material";
import ThemeList from "components/Lists/ThemeList";
import SectionsList from "components/Lists/SectionsList";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {

  return (
    <Stack alignItems='center' spacing={1} py={2}>
      <ThemeList/>
      <SectionsList/>
    </Stack>
  );
};

export default Header;
