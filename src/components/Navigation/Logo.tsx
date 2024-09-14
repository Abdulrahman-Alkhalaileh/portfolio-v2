import React from "react";
import { Stack, StackProps, useTheme } from "@mui/material";
import LogoSVG, { LogoSVGProps } from "components/SVG/LogoSVG";
import { Link } from "react-router-dom";

export interface LogoProps extends StackProps {
  logoProps?: LogoSVGProps;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Link to="/">
      <Stack
        bgcolor="secondary.main"
        width={{ xs: 50, sm: 70 }}
        height={{ xs: 50, sm: 70 }}
        borderRadius="50%"
        border={{ xs: 4, sm: 7 }}
        borderColor={`${theme.palette.primary.dark}!important`}
        {...props}
      >
        <LogoSVG
          className="logo"
          {...props.logoProps}
          color={theme.palette.primary.dark}
        />
      </Stack>
    </Link>
  );
};

export default Logo;
