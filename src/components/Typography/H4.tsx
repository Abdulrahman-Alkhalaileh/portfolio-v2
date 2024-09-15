import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface H4Props extends TypographyProps {}

const H4: React.FC<H4Props> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h4"
      fontWeight={600}
      fontSize={{ xs: "1.4rem", sm: "1.8rem", lg: "2rem" }}
      color="text.primary"
      {...props}
    >
      {children}
    </Typography>
  );
};

export default H4;

