import React from "react";
import CarouselDots from "./CarouselDots";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, BoxProps, IconButton } from "@mui/material";
import { motion } from "framer-motion";

export interface SliderProps extends BoxProps {
  children: React.ReactNode;
  count: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  children,
  count,
  currentIndex,
  setCurrentIndex,
  ...props
}) => {
  const direction = React.useRef(0); // To track direction (left or right)

  const handleNext = () => {
    direction.current = 1; // Right direction
    setCurrentIndex(currentIndex !== count - 1 ? currentIndex + 1 : 0);
  };

  const handlePrev = () => {
    direction.current = -1; // Left direction
    setCurrentIndex(currentIndex !== 0 ? currentIndex - 1 : count - 1);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-around" {...props}>
      <IconButton onClick={handlePrev}>
        <ArrowBackIosIcon fontSize="large" sx={{ width: { xs: 25, md: 35 } }} />
      </IconButton>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2.5}
        position="relative"
        overflow="hidden"
        width="100%" // Ensure the slider takes full width
      >
        <motion.div
          key={currentIndex} // Key ensures re-render for each slide
          initial={{ x: direction.current === 1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          exit={{ x: direction.current === 1 ? -300 : 300, opacity: 0 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 0) handlePrev();
            else handleNext();
          }}
          whileTap={{ cursor: "grabbing" }}
          style={{ display: "flex", gap: "2.5rem" }}
        >
          {children}
        </motion.div>

        <CarouselDots
          count={count}
          activeStep={currentIndex}
          setActiveStep={setCurrentIndex}
        />
      </Box>

      <IconButton onClick={handleNext}>
        <ArrowForwardIosIcon
          fontSize="large"
          sx={{ width: { xs: 25, md: 35 } }}
        />
      </IconButton>
    </Box>
  );
};

export default Slider;
