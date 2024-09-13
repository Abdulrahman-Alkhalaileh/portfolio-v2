"use client";
import { Typography, TypographyProps } from "@mui/material";
import React from "react";

export interface P1Props extends TypographyProps {}

const P1: React.FC<P1Props> = ({ children, ...props }) => {
  return (
    <Typography
      variant="body1"
      fontSize={{ xs: 15, sm: 17, md: 18, xl: 19 }}
      color="text.primary"
      fontWeight={500}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default P1;
