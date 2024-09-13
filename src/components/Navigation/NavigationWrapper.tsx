import { Box, BoxProps } from "@mui/material";
import React from "react";
import Header from "./Header";
import H1 from "components/Typography/H1";
import { useLocation } from "react-router-dom";
import TextAnimation from "components/Animations/TextAnimation";

export interface NavigationWrapperProps extends BoxProps {}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
  children,
  ...props
}) => {
  const pathname = useLocation().pathname;
  const pageTitle = pathname.length > 1 ? pathname.substring(1) : "Home";

  return (
    <>
      <Header/>
      <Box
        px={{ xs: 3, md: 5, lg: 7, xl: 9 }}
        pt="100px"
        pb="16px"
        minHeight="calc(100vh - 116px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <TextAnimation transition={{ duration: 1.2 }} >
          <H1 pt={{xs:1}} pb={{xs:2}} >{pageTitle}</H1>
        </TextAnimation>
        {children}
      </Box>
    </>
  );
};

export default NavigationWrapper;
