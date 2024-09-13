import { Stack, StackProps } from "@mui/material";
import LogoSVG, { LogoSVGProps } from "components/SVG/LogoSVG";
import React from "react";
import { Link } from "react-router-dom";

export interface LogoProps extends StackProps {
  logoProps?: LogoSVGProps;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Link to="/">
      <Stack
        bgcolor="secondary.main"
        width={70}
        height={70}
        borderRadius="50%"
        border={7}
        borderColor="primary.dark"
        {...props}
      >
        <LogoSVG width={70} height={70} {...props.logoProps} />
      </Stack>
    </Link>
  );
};

export default Logo;
