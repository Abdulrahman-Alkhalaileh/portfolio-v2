import React from "react";
import { motion } from "framer-motion";
import { Box, BoxProps, useTheme } from "@mui/material";
import H4 from "components/Typography/H4";
import { AnimatedItemType } from "configs/sectionItems";
import { Link } from "react-router-dom";

export interface AnimatedTabsProps extends BoxProps {
  selected: number;
  handleChange: (index: number, currentPath: string) => void;
  items: AnimatedItemType[];
  layoutId: string;
}

const AnimatedTabs: React.FC<AnimatedTabsProps> = ({
  selected,
  handleChange,
  items,
  layoutId,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Box
      {...props}
      sx={{
        width: "fit-content",
        display: "flex",
        paddingX: {xs:"5px",md:"10px"},
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
            padding: {xs:"5px 10px",md:"10px 20px"},
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {item.path ? (
            <Link to={item.path}>
              <H4
                sx={{
                  color: selected === index ? "white" : "text.primary",
                  fontWeight: selected === index ? "bold" : "normal",
                  zIndex: 10,
                }}
              >
                {item.name}
              </H4>
            </Link>
          ) : (
            item.element
          )}

          {/* Motion div for the background animation */}
          {selected === index && (
            <motion.div
              layoutId={layoutId}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: theme.palette.primary.main,
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
