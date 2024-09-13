import React from "react";
import { Stack, StackProps } from "@mui/material";
import LogoSVG, { LogoSVGProps } from "components/SVG/LogoSVG";
import { Link } from "react-router-dom";

export interface LogoProps extends StackProps {
  logoProps?: LogoSVGProps;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Link to="/">
      <Stack
        bgcolor="secondary.main"
        width={{ xs: 50, sm: 70 }}
        height={{ xs: 50, sm: 70 }}
        borderRadius="50%"
        border={{ xs: 4, sm: 7 }}
        borderColor="primary.dark"
        {...props}
      >
        <LogoSVG className="logo" {...props.logoProps} />
      </Stack>
    </Link>
  );
};

export default Logo;
