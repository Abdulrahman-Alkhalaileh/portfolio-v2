import React from "react";
import { Box, SvgIconProps, SxProps } from "@mui/material";
import { motion } from "framer-motion";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";

export interface DraggableIndicatorProps {
  direction: "vertical" | "horizontal";
  sx?: SxProps;
  iconProps?: SvgIconProps;
}

const iconSize: SxProps = {
  width: { xs: 30, md: 35 },
  height: { xs: 30, md: 35 },
};

const DraggableIndicator: React.FC<DraggableIndicatorProps> = ({
  direction,
  sx,
  iconProps,
}) => {
  const isHorizontal = direction === "horizontal";
  const vertical = { y: [0, 10, -10, 0] };
  const horizontal = { x: [0, 10, -10, 0] };

  return (
    <>
      <Box
        component={motion.div}
        sx={{
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          color:'text.secondary',
          ...sx,
        }}
        animate={isHorizontal ? horizontal : vertical}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <DoubleArrowIcon
          {...iconProps}
          color="inherit"
          sx={{
            transform: isHorizontal ? "rotate(180deg)" : "rotate(270deg)",
            ...iconSize,
            ...iconProps?.sx,
          }}
        />
        <PanToolAltIcon
          {...iconProps}
          color="inherit"
          sx={{ ...iconSize, ...iconProps?.sx }}
        />
        <DoubleArrowIcon
          {...iconProps}
          color="inherit"
          sx={{
            transform: isHorizontal ? "none" : "rotate(90deg)",
            ...iconSize,
            ...iconProps?.sx,
          }}
        />
      </Box>
    </>
  );
};

export default DraggableIndicator;
