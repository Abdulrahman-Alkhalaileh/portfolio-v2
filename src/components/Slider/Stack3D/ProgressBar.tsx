import { Box, BoxProps, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export interface ProgressBarProps extends BoxProps {
  index: number;
  count: number;
}

// Function to map state value to percentage width
const calculateWidth = (index: number, count: number) => {
  return `${(index / count) * 100}%`; // Map 0-5 to 0%-100%
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  index,
  count,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Box
      mb={3}
      p={0.3}
      height={15}
      border={2}
      borderColor={theme.palette.divider}
      borderRadius={5}
      overflow="hidden"
      boxShadow='#000000 0px 0px 2px 0px'
    >
      <motion.div
        animate={{ width: calculateWidth(index + 1, count) }}
        transition={{ duration: 0.5 }}
        style={{
          borderRadius: 40,
          height: "100%",
          backgroundColor: theme.palette.primary.main,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
