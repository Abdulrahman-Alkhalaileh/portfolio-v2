import React, { useEffect, useState } from "react";
import { Box, BoxProps, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { SkillsType } from "helpers/types";

export interface AutoScrollSliderProps extends BoxProps {
  items: SkillsType[];
}

const AutoScrollSlider: React.FC<AutoScrollSliderProps> = ({
  items,
  ...props
}) => {
  const theme = useTheme();
  const [position, setPosition] = useState<number>(6);
  const [itemWidth, setItemWidth] = useState(65);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const gap = 20; // Gap between items
  const totalWidth = items.length * itemWidth + gap * (items.length - 1); // Total width of all items

  useEffect(() => {
    if (isMobile) {
      setPosition(totalWidth - 300 + itemWidth); //48 is the paddingX on xs screen size
      setItemWidth(30);
    }
    if (isTablet) {
      setPosition(totalWidth - 500 + itemWidth);
      setItemWidth(55);
    }
    if (isDesktop) {
      setPosition(totalWidth - 800 + itemWidth);
      setItemWidth(65);
    }
  }, [isDesktop, isMobile, isTablet, itemWidth, totalWidth]);

  // Overlay color for visual effects
  const overlayColor = `linear-gradient(90deg, 
            ${theme.palette.background.default} 0%,
            ${theme.palette.background.paper} 20%, 
            rgba(4, 117, 192, 0) 40%, rgba(4, 117, 192, 0) 60%, 
            ${theme.palette.background.paper} 80%, 
            ${theme.palette.background.default} 100%)`;

  return (
    <Box
      {...props}
      sx={{
        overflow: "hidden",
        maxWidth: { xs: 300, sm: 500, md: 800 },
        py: 2,
        display: "flex",
        position: "relative",
        borderTop:3,
        borderBottom:3,
        borderColor:'text.primary',
        ...props.sx,
      }}
    >
      {/* Overlay Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: overlayColor,
          zIndex: 1,
          transition: "background ease 1s",
        }}
      />

      <motion.div
        animate={{
          x: [`${itemWidth}px`, `-${position}px`, `${itemWidth}px`], // Move left, then reverse to start
        }}
        transition={{
          duration: 9,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          position: "relative",
          zIndex: 0,
          gap,
          alignItems: "center",
        }}
      >
        {items.map((item, index) => (
          <Box
            component="img"
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.651))",
              width: itemWidth,
              height: itemWidth,
            }}
            alt={item.title}
            src={item.imageUrl}
          />
        ))}
      </motion.div>
    </Box>
  );
};

export default AutoScrollSlider;
