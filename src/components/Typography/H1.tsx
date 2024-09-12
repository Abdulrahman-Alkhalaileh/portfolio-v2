import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface H1Props extends TypographyProps {}

const H1: React.FC<H1Props> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h1"
      fontSize={{ xs: "2.5rem", sm: "3.5rem",lg:'4rem', xl: "4.5rem" }}
      fontWeight={700}
      color="text.primary"
      {...props}
    >
      {children}
    </Typography>
  );
};

export default H1;
