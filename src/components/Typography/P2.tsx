import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface P2Props extends TypographyProps {}

const P2: React.FC<P2Props> = ({ children, ...props }) => {
  return (
    <Typography
      variant="body2"
      fontSize={{ xs: 10, sm: 15, md: 18, xl: 19 }}
      color="text.primary"
      fontWeight={500}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default P2;