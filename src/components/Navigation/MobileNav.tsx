import React from "react";
import { Box, BoxProps } from "@mui/material";
import useScrollDirection from "customHooks/useScrollDirection";
import SectionsList from "components/Lists/SectionsList";
import { motion } from "framer-motion";

export interface MobileNavProps extends BoxProps {}

const MobileNav: React.FC<MobileNavProps> = ({ ...props }) => {
  const scrollDirection = useScrollDirection("down");

  return (
    <Box
      component={motion.div}
      width="100dvw"
      display={{ xs: "flex", md: "none" }}
      justifyContent="center"
      borderTop={2}
      position="fixed"
      borderColor="background.default"
      style={{ bottom: 0 }}
      animate={{ bottom: scrollDirection === "up" ? -80 : 0 }}
      zIndex={100}
    >
      <SectionsList
        layoutId="mobileNav"
        justifyContent="space-evenly"
        sx={{
          borderRadius: 0,
          width: "100%",
          bgcolor: "background.paper",
          pt: 1,
        }}
        isMobile={true}
      />
    </Box>
  );
};

export default MobileNav;
