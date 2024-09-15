import React from "react";
import { motion } from "framer-motion";
import { Box, BoxProps, Stack } from "@mui/material";
import H4 from "components/Typography/H4";
import { AnimatedItemType } from "configs/sectionItems";
import { Link } from "react-router-dom";
import P2 from "components/Typography/P2";

export interface AnimatedTabsProps extends BoxProps {
  selected: number;
  handleChange: (index: number, currentPath: string) => void;
  items: AnimatedItemType[];
  layoutId: string;
  isMobile?: boolean;
}

const AnimatedTabs: React.FC<AnimatedTabsProps> = ({
  selected,
  handleChange,
  items,
  layoutId,
  isMobile,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        width: "fit-content",
        boxSizing: "border-box",
        alignItems: isMobile ? "center" : "stretch",
        display: "flex",
        paddingX: { xs: "5px", md: "10px" },
        paddingY: "10px",
        bgcolor: "secondary.main",
        borderRadius: "37px",
        ...props.sx,
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          onClick={() => handleChange(index, item.path || item.name)}
          sx={{
            position: "relative",
            padding: { xs: "5px 10px", md: "10px 20px" },
            cursor: "pointer",
            zIndex: 1,
            color: selected === index ? "white" : "text.primary",
          }}
        >
          {item.element ? (
            <Link to={item.path || ""}>
              {isMobile ? (
                <Stack alignItems="center" width={{ xs: 52, sm: 90 }}>
                  {item.icon}
                  <P2 textTransform="capitalize" color="inherit">
                    {item.name}
                  </P2>
                </Stack>
              ) : (
                <H4
                  sx={{
                    color: selected === index ? "white" : "text.primary",
                    fontWeight: selected === index ? "bold" : "normal",
                    zIndex: 10,
                  }}
                >
                  {item.name}
                </H4>
              )}
            </Link>
          ) : (
            item.icon
          )}

          {/* Motion div for the background animation */}
          {selected === index && (
            <Box
              component={motion.div}
              layoutId={layoutId}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: "primary.main",
                borderRadius: "30px",
                zIndex: -100,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default AnimatedTabs;
