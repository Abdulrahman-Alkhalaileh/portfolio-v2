import React from "react";
import { Box, BoxProps, Divider } from "@mui/material";
import Header from "./Header";
import H1 from "components/Typography/H1";
import { useLocation } from "react-router-dom";
import TextAnimation from "components/Animations/TextAnimation";
import MobileNav from "./MobileNav";

export interface NavigationWrapperProps extends BoxProps {}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
  children,
  ...props
}) => {
  const pathname = useLocation().pathname;
  const pageTitle = pathname.length > 1 ? pathname.substring(1) : "About";

  return (
    <>
      <Header />
      <Box
        px={{ xs: 3, md: 5, lg: 7, xl: 9 }}
        pt="100px"
        pb={{ xs: "80px", md: "16px" }}
        minHeight={{xs:'calc(100vh - 190px)',md:"calc(100vh - 116px)"}}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <TextAnimation
          transition={{ duration: 1.2 }}
          style={{ paddingBottom: 16 }}
        >
          <H1 pt={{ xs: 1 }}>{pageTitle}</H1>
          <Divider />
        </TextAnimation>
        {children}
        <MobileNav />
      </Box>
    </>
  );
};

export default NavigationWrapper;
