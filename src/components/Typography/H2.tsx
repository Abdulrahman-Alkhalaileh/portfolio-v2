import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface H2Props extends TypographyProps {}

const H2: React.FC<H2Props> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h2"
      fontSize={{xs:'2rem',sm:'3rem'}}
      fontWeight={700}
      color="text.primary"
      {...props}
    >
      {children}
    </Typography>
  );
};

export default H2;
