import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface H5Props extends TypographyProps {}

const H5: React.FC<H5Props> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h5"
      fontWeight={600}
      fontSize={{ xs: "1.3rem", sm: "1.5rem", xl: "1.8rem" }}
      color="text.primary"
      {...props}
    >
      {children}
    </Typography>
  );
};

export default H5;

